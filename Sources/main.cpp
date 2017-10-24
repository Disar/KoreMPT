#include <Kore\pch.h>

#include <Kore/IO/FileReader.h>
#include <Kore/IO/BufferReader.h>
#include <Kore/Graphics4/Graphics.h>
#include <Kore/Graphics4/PipelineState.h>
#include <Kore/Graphics4/Shader.h>
#include <Kore/System.h>
#include <Kore/Audio1/Audio.h>
#include <MPTStreamer.h>
#include <Kore\IO\FileReader.h>

using namespace Kore;

namespace {
	void update() {
		Kore::Audio2::update();
	}
}

int kore(int argc, char** argv) {
	Kore::System::setName("Shader");
	Kore::System::setup();
	Kore::WindowOptions options;
	options.title = "KoreMPT";
	options.width = 1024/3;
	options.height = 768/3;
	options.x = 100;
	options.y = 100;
	options.mode = WindowMode::WindowModeWindow;
	Kore::System::initWindow(options);
	Kore::System::setCallback(update);

	Kore::FileReader file;
	file.open("Sound/theme_for_a_hero.mptm", Kore::FileReader::FileType::Asset);
	
	//std::ifstream file(argv[1], std::ios::binary);
	//std::ifstream file(, std::ios::binary);

	Kore::Audio2::init();
	Kore::Audio1::init();

	
	KMPT::MPTStreamer mod;
	mod.init();
	mod.loadFile(file);
	file.close();
	
	Kore::System::start();

	return 0;
};