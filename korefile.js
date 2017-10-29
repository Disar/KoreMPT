let project = new Project('KoreMPT', __dirname);

project.addFile('Sources/**');
project.addIncludeDir('Sources');
//-------------------------------------------
// LibOpenMPT Defines
project.addDefine('LIBOPENMPT_BUILD');
//-------------------------------------------
// LibOpenMPT Includes
project.addFile('LibOpenMPT/common/stdafx.cpp');
project.addFile('LibOpenMPT/common/ComponentManager.cpp');
project.addFile('LibOpenMPT/common/FileReader.cpp');
project.addFile('LibOpenMPT/common/Logging.cpp');
project.addFile('LibOpenMPT/common/misc_util.cpp'); 
project.addFile('LibOpenMPT/common/mptCPU.cpp');
project.addFile('LibOpenMPT/common/mptFileIO.cpp'); 
project.addFile('LibOpenMPT/common/mptIO.cpp');
project.addFile('LibOpenMPT/common/mptLibrary.cpp'); 
project.addFile('LibOpenMPT/common/mptOS.cpp'); 
project.addFile('LibOpenMPT/common/mptPathString.cpp'); 
project.addFile('LibOpenMPT/common/mptRandom.cpp');
project.addFile('LibOpenMPT/common/mptString.cpp');
project.addFile('LibOpenMPT/common/mptStringFormat.cpp'); 
project.addFile('LibOpenMPT/common/mptStringParse.cpp'); 
project.addFile('LibOpenMPT/common/mptTime.cpp');
project.addFile('LibOpenMPT/common/mptUUID.cpp'); 
project.addFile('LibOpenMPT/common/mptWine.cpp');
project.addFile('LibOpenMPT/common/Profiler.cpp');
project.addFile('LibOpenMPT/common/serialization_utils.cpp');
project.addFile('LibOpenMPT/common/typedefs.cpp');
project.addFile('LibOpenMPT/common/version.cpp');

//project.addFile('LibOpenMPT/libopenmpt/libopenmpt_c.cpp'); 
project.addFile('LibOpenMPT/libopenmpt/libopenmpt_cxx.cpp');
project.addFile('LibOpenMPT/libopenmpt/libopenmpt_impl.cpp');
project.addFile('LibOpenMPT/libopenmpt/libopenmpt_ext_impl.cpp'); 


project.addFile('LibOpenMPT/soundlib/AudioCriticalSection.cpp');
project.addFile('LibOpenMPT/soundlib/ContainerMMCMP.cpp');
project.addFile('LibOpenMPT/soundlib/ContainerPP20.cpp');
project.addFile('LibOpenMPT/soundlib/ContainerUMX.cpp');
project.addFile('LibOpenMPT/soundlib/ContainerXPK.cpp');
project.addFile('LibOpenMPT/soundlib/Dither.cpp');
project.addFile('LibOpenMPT/soundlib/Dlsbank.cpp');
project.addFile('LibOpenMPT/soundlib/Fastmix.cpp');
project.addFile('LibOpenMPT/soundlib/InstrumentExtensions.cpp');
project.addFile('LibOpenMPT/soundlib/ITCompression.cpp'); 
project.addFile('LibOpenMPT/soundlib/ITTools.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_669.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_amf.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_ams.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_dbm.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_digi.cpp');
project.addFile('LibOpenMPT/soundlib/Load_dmf.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_dsm.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_dtm.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_far.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_gdm.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_imf.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_it.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_itp.cpp'); 
project.addFile('LibOpenMPT/soundlib/load_j2b.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_mdl.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_med.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_mid.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_mo3.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_mod.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_mt2.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_mtm.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_okt.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_plm.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_psm.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_ptm.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_s3m.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_sfx.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_stm.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_stp.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_ult.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_uax.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_wav.cpp'); 
project.addFile('LibOpenMPT/soundlib/Load_xm.cpp'); 
project.addFile('LibOpenMPT/soundlib/Message.cpp'); 
project.addFile('LibOpenMPT/soundlib/MIDIEvents.cpp'); 
project.addFile('LibOpenMPT/soundlib/MIDIMacros.cpp'); 
project.addFile('LibOpenMPT/soundlib/MixerLoops.cpp'); 
project.addFile('LibOpenMPT/soundlib/MixerSettings.cpp'); 
project.addFile('LibOpenMPT/soundlib/MixFuncTable.cpp'); 
project.addFile('LibOpenMPT/soundlib/ModChannel.cpp');
project.addFile('LibOpenMPT/soundlib/modcommand.cpp'); 
project.addFile('LibOpenMPT/soundlib/ModInstrument.cpp'); 
project.addFile('LibOpenMPT/soundlib/ModSample.cpp'); 
project.addFile('LibOpenMPT/soundlib/ModSequence.cpp'); 
project.addFile('LibOpenMPT/soundlib/modsmp_ctrl.cpp'); 
project.addFile('LibOpenMPT/soundlib/mod_specifications.cpp'); 
project.addFile('LibOpenMPT/soundlib/MPEGFrame.cpp'); 
project.addFile('LibOpenMPT/soundlib/OggStream.cpp'); 
project.addFile('LibOpenMPT/soundlib/Paula.cpp');
project.addFile('LibOpenMPT/soundlib/patternContainer.cpp'); 
project.addFile('LibOpenMPT/soundlib/pattern.cpp'); 
project.addFile('LibOpenMPT/soundlib/RowVisitor.cpp'); 
project.addFile('LibOpenMPT/soundlib/S3MTools.cpp'); 
project.addFile('LibOpenMPT/soundlib/SampleFormats.cpp'); 
project.addFile('LibOpenMPT/soundlib/SampleFormatFLAC.cpp'); 
project.addFile('LibOpenMPT/soundlib/SampleFormatMediaFoundation.cpp'); 
project.addFile('LibOpenMPT/soundlib/SampleFormatMP3.cpp'); 
project.addFile('LibOpenMPT/soundlib/SampleFormatOpus.cpp'); 
project.addFile('LibOpenMPT/soundlib/SampleFormatVorbis.cpp'); 
project.addFile('LibOpenMPT/soundlib/SampleIO.cpp'); 
project.addFile('LibOpenMPT/soundlib/Sndfile.cpp'); 
project.addFile('LibOpenMPT/soundlib/Snd_flt.cpp'); 
project.addFile('LibOpenMPT/soundlib/Snd_fx.cpp'); 
project.addFile('LibOpenMPT/soundlib/Sndmix.cpp'); 
project.addFile('LibOpenMPT/soundlib/SoundFilePlayConfig.cpp'); 
project.addFile('LibOpenMPT/soundlib/UMXTools.cpp'); 
project.addFile('LibOpenMPT/soundlib/UpgradeModule.cpp'); 
project.addFile('LibOpenMPT/soundlib/Tables.cpp'); 
project.addFile('LibOpenMPT/soundlib/Tagging.cpp'); 
project.addFile('LibOpenMPT/soundlib/tuningbase.cpp'); 
project.addFile('LibOpenMPT/soundlib/tuningCollection.cpp'); 
project.addFile('LibOpenMPT/soundlib/tuning.cpp'); 
project.addFile('LibOpenMPT/soundlib/WAVTools.cpp');
project.addFile('LibOpenMPT/soundlib/WindowedFIR.cpp'); 
project.addFile('LibOpenMPT/soundlib/XMTools.cpp'); 
project.addFile('LibOpenMPT/soundlib/plugins/DigiBoosterEcho.cpp'); 
project.addFile('LibOpenMPT/soundlib/plugins/dmo/DMOPlugin.cpp'); 
project.addFile('LibOpenMPT/soundlib/plugins/dmo/Chorus.cpp');
project.addFile('LibOpenMPT/soundlib/plugins/dmo/Compressor.cpp');
project.addFile('LibOpenMPT/soundlib/plugins/dmo/Distortion.cpp');
project.addFile('LibOpenMPT/soundlib/plugins/dmo/Echo.cpp');
project.addFile('LibOpenMPT/soundlib/plugins/dmo/Flanger.cpp');
project.addFile('LibOpenMPT/soundlib/plugins/dmo/Gargle.cpp');
project.addFile('LibOpenMPT/soundlib/plugins/dmo/I3DL2Reverb.cpp');
project.addFile('LibOpenMPT/soundlib/plugins/dmo/ParamEq.cpp');
project.addFile('LibOpenMPT/soundlib/plugins/dmo/WavesReverb.cpp');
project.addFile('LibOpenMPT/soundlib/plugins/LFOPlugin.cpp');
project.addFile('LibOpenMPT/soundlib/plugins/PluginManager.cpp');
project.addFile('LibOpenMPT/soundlib/plugins/PlugInterface.cpp');
project.addFile('LibOpenMPT/sounddsp/AGC.cpp');
project.addFile('LibOpenMPT/sounddsp/DSP.cpp');
project.addFile('LibOpenMPT/sounddsp/EQ.cpp');
project.addFile('LibOpenMPT/sounddsp/Reverb.cpp');

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
