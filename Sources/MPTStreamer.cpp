#include "Kore\pch.h"

#include "MPTStreamer.h"

#include "Kore\Audio2\Audio.h"
#include "Kore\Audio1\Audio.h"
#include "libopenmpt/libopenmpt.hpp"
#include <Kore/Math/Core.h>

#ifdef KHA
#include <hxinc\haxe\io\Bytes.h>
#endif


#include <Kore/Threads/Mutex.h>
#include <Kore\Log.h>
#include <Kore\System.h>



using namespace Kore;



namespace KMPT {

	double currentPosition;
	float current = 0.0;
	float volume = 1.0;
	bool paused = false;
	openmpt::module *module;

	float output[5120];

	void readFromMod(int sampleSize) {

		int pos = Audio2::buffer.writeLocation; // save current position
		//Render Audio 1

		if (MPTStreamer::audioOneCallback != nullptr)
			MPTStreamer::audioOneCallback(sampleSize);

		if (module == nullptr || paused) { return; }
		Audio2::buffer.writeLocation = pos;		// rewind to mix with audio1

		//mutex.Lock();
		std::size_t count = module->read_interleaved_stereo(44100, sampleSize / 2, output);
		//mutex.Unlock();

		if (count == 0) return;

		for (size_t x = 0; x < count * 2; x++) {
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
		//Audio2::audioCallback = Audio1::mix;
		delete module;
	}
#ifdef KHA
	void MPTStreamer::loadFile(kha::internal::BytesBlob &file)
	{
		if (module != nullptr) delete module;
		size_t size = file->get_length();
		module = new openmpt::module(file->bytes->b->Pointer(), size);
		setLoop(-1);
	}
#endif

	void MPTStreamer::loadFile(std::ifstream &file)
	{
		if (module != nullptr) delete module;
		module = new openmpt::module(file);
		setLoop(-1);
	}



	void MPTStreamer::loadFile(Kore::FileReader &file) {
		if (module != nullptr) delete module;
		module = new openmpt::module(file.readAll(), file.size());
		setLoop(-1);

	}

	void MPTStreamer::selectSubSong(int32_t songIndex)
	{
		//mutex.Lock();

		if (module == nullptr) return;
		module->select_subsong(songIndex);
		//mutex.Unlock();
	}

	std::vector<std::string> MPTStreamer::getSongNames() const
	{
		return module->get_subsong_names();
	}

	void MPTStreamer::setLoop(int loopCount)
	{
		if(module == nullptr) return;
		module->set_repeat_count(loopCount);
	}

	void MPTStreamer::pause()
	{
		if (module == nullptr) return;
		paused = true;
	}

	void MPTStreamer::resume()
	{
		if (module == nullptr) return;
		paused = false;
	}

	void MPTStreamer::stop()
	{
		if (module == nullptr) return;
		module->set_position_seconds(0);
		paused = true;
	}

	void MPTStreamer::init(){
		audioOneCallback = Kore::Audio2::audioCallback;
		Kore::Audio2::audioCallback = readFromMod;
	}
	
	void(*MPTStreamer::audioOneCallback)(int samples) = nullptr;

}