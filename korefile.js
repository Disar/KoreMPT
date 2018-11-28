let project = new Project('KoreMPT', __dirname);

project.addFile('Sources/**');
project.addIncludeDir('Sources');
//-------------------------------------------
// LibOpenMPT Defines
project.addDefine('LIBOPENMPT_BUILD');
//-------------------------------------------
// LibOpenMPT Includes
project.addFile('LibOpenMPT/common/*.cpp');

project.addFile('LibOpenMPT/libopenmpt/libopenmpt_c.cpp'); 
project.addFile('LibOpenMPT/libopenmpt/libopenmpt_cxx.cpp');
project.addFile('LibOpenMPT/libopenmpt/libopenmpt_impl.cpp');
project.addFile('LibOpenMPT/libopenmpt/libopenmpt_ext_impl.cpp'); 

project.addFile('LibOpenMPT/soundlib/*.cpp');
project.addFile('LibOpenMPT/soundlib/plugins/*.cpp');
project.addFile('LibOpenMPT/soundlib/plugins/dmo/*.cpp');

project.addFile('LibOpenMPT/sounddsp/*.cpp');

project.addIncludeDir('LibOpenMPT');
project.addIncludeDir('LibOpenMPT/common');
project.addIncludeDir('LibOpenMPT/build/svn_version');

if(platform === Platform.Windows){
	project.addDefine('ENABLE_ASM');	
	project.addLib('Rpcrt4');
}


if(platform === Platform.Android){
	project.addDefine('NO_LIBOPENMPT_C');
	console.log('Android native: setting cpp11 to true for KoreMPT');
	project.addDefine('ENABLE_ASM');	
	project.cpp11 = true;
}


//--------------------------------------------
resolve(project);