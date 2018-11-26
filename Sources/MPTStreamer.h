#include "Kore\pch.h"
#include <fstream>
#include <iostream>
#include <vector>
#ifdef KHA
#include <hxinc\kha\internal\BytesBlob.h>
#endif
#include <Kore\IO\FileReader.h>
#include <Kore\Threads\Thread.h>


#pragma once
namespace KMPT {
	class MPTStreamer
	{
	private:
		
	public:
		MPTStreamer();
		~MPTStreamer();
#ifdef KHA
		void loadFile(kha::internal::BytesBlob &file);
#endif // kha

		void loadFile(std::ifstream &file);
		void loadFile(Kore::FileReader &file);
		void selectSubSong(int32_t songIndex);
		std::vector<std::string> getSongNames() const;
		void setVolume(float v);
		void setLoop(int loopCount);
		void pause();
		void resume();
		void stop();
		void init();
		static void(*audioOneCallback)(int samples);

	};
}