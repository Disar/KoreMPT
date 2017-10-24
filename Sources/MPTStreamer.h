#include <fstream>
#include <iostream>
#include <vector>
#include <Kore/IO/FileReader.h>

#pragma once
namespace KMPT {
	class MPTStreamer
	{
	public:
		MPTStreamer();
		~MPTStreamer();
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
	};
}