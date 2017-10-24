# libopenmpt player for Kore



##
current libopenmpt version : 3.1

### How to:
- Add the libopenmpt project to your project root under the folder LibOpenMPT.


----------
    namespace {
        void update() {
            Kore::Audio2::update(); //Update audio!
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

        Kore::Audio2::init(); // Initialize Audio2 first
        Kore::Audio1::init(); // Make sure you initialize Audio1 as well

        Kore::FileReader file;
        file.open("Sound/theme_for_a_hero.mptm", Kore::FileReader::FileType::Asset);

        KMPT::MPTStreamer mod;
        // Make sure you call init, it will hijack Audio1 and makes sure it's updated too.
        mod.init();			
        mod.loadFile(file);
        file.close();

        Kore::System::start();

        return 0;
    };

Currently only one MPTStreamer is supported. Meaning you can only load one module at a time. However sub songs are supported.

#### File support

Any module file that works with openmpt should work here too. 

###### known limitations:

Compressed data is not supported. If your module contains compressed data best course of action is to load the module into OpenMPT and convert it to a OpenMPT file. Due to differences in how some modules are handled there might be slight loss in quality.

#### Tested on

- windows
- android

#### Korefile.js

Korefile.js contains all the defines and includes to run libopenmpt with Kore. Things here deviate from the projects make file. For any other untested platform you might have to add a clause specifically for that target and add includes/defines.