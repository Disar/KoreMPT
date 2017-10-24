#include "Kore\pch.h"
#include "Kore\Audio2\Audio.h"
#include "Kore\Audio1\Audio.h"
#include "MPTStreamer.h"
#include "libopenmpt/libopenmpt.hpp"
#include <Kore/Threads/Mutex.h>
#include <Kore/Math/Core.h>


using namespace Kore;

namespace KMPT {
	Mutex mutex;

	double currentPosition;
	float current = 0.0;
	float volume = 1.0;
	bool paused = false;

	openmpt::module *mod;

	float output[5120];

	void readFromMod(int sampleSize) {

		//Render Audio 1
		Audio1::mix(sampleSize);

		if (mod == nullptr || paused) return;
		
		int pos = Audio2::buffer.writeLocation - (sampleSize * 4);
		if (pos < 0) pos = Audio2::buffer.dataSize - Kore::abs(pos);
		Audio2::buffer.writeLocation = pos;

		//mutex.Lock();
		std::size_t count = mod->read_interleaved_stereo(44100, sampleSize/2, output);
		//mutex.Unlock();

		if (count == 0) return;

		for (size_t x = 0; x < count*2; x++) {
			*(float*)&Audio2::buffer.data[Audio2::buffer.writeLocation] += max(min(output[x], 1.0f), -1.0f) * volume;
			Audio2::buffer.writeLocation += 4;
			if (Audio2::buffer.writeLocation >= Audio2::buffer.dataSize) Audio2::buffer.writeLocation = 0;
		}

	};

	MPTStreamer::MPTStreamer()
	{

	}

	void MPTStreamer::setVolume(float v) {
		volume = v;
		volume = min<float>(max<float>(v,0),1.0);
	}

	MPTStreamer::~MPTStreamer()
	{
		Audio2::audioCallback = Audio1::mix;
		delete mod;
	}

	void MPTStreamer::loadFile(std::ifstream &file)
	{
		if (mod != nullptr) delete mod;
		mod = new openmpt::module(file);
		setLoop(-1);
	}

	void MPTStreamer::loadFile(Kore::FileReader &file) {
		if (mod != nullptr) delete mod;
		mod = new openmpt::module(file.readAll(), file.size());
		setLoop(-1);
	}

	void MPTStreamer::selectSubSong(int32_t songIndex)
	{
		mutex.Lock();

		if (mod == nullptr) return;
		mod->select_subsong(songIndex);
		mutex.Unlock();
	}

	std::vector<std::string> MPTStreamer::getSongNames() const
	{
		return mod->get_subsong_names();
	}

	void MPTStreamer::setLoop(int loopCount)
	{
		if(mod == nullptr) return;
		mod->set_repeat_count(loopCount);
	}

	void MPTStreamer::pause()
	{
		if (mod == nullptr) return;
		paused = true;
	}

	void MPTStreamer::resume()
	{
		if (mod == nullptr) return;
		paused = false;
	}

	void MPTStreamer::stop()
	{
		if (mod == nullptr) return;
		mod->set_position_seconds(0);
		paused = true;
	}

	void MPTStreamer::init()
	{
		Audio2::audioCallback = readFromMod;
		mutex.Create();
	}

}