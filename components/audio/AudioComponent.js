import { useEffect, useRef, useState } from "react";
import { checkType, fileName } from "../../utils/validation";

const AudioComponent = ({ classes, files, folder, isMusicPlaylist, extensions, children }) => {
  // https://letsbuildui.dev/articles/building-an-audio-player-with-react-hooks
    classes = classes ? ' '+classes : '';
    extensions = extensions && extensions !== true ? extensions : extensions === true ? '.mp3' : '';
    isMusicPlaylist = isMusicPlaylist === true ? true : false;
    const multiExt = extensions && checkType(extensions, 'array') ? true : false;
  
  // AUDIO PLAYER STATE
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackDuration, setTrackDuration] = useState(0);
  const [trackLoaded, setTrackLoaded] = useState(false);
  
  const [isPlaying, setIsPlaying] = useState(false);
  

  folder = folder && checkType(folder, 'string')
      ? `${folder}/`
    : folder && checkType(folder, 'array') && folder.length === files.length
      ? `${folder[trackIndex]}/`
      : ''

  const fileNaming = (i) => checkType(files, 'array') && isMusicPlaylist === false
      ? console.log(files[i])
    : checkType(files, 'string') && !files[i] && isMusicPlaylist === false
      ? console.log(files)
    : checkType(files, 'array') && isMusicPlaylist === true
      ? console.log(files[i].filename)
      : '_test.mp3';
  
  const extNaming = (currentExtension) => currentExtension.trim().charAt(0) !== '.'
    ? '.'+currentExtension.toLowerCase().trim() : currentExtension.toLowerCase().trim();

  const ext = (i) => {
    if(fileNaming(i) === '_test.mp3') {
      return '';
    }
    if(multiExt && extensions.length === files.length && !isMusicPlaylist) {
      return extNaming(extensions[i]);
    }
    if(multiExt && extensions.length !== files.length && !isMusicPlaylist) {
      console.warn(`WARNING: Total extensions length does not match files length!
        Extension hs been set to '${extensions[0]}' for all files.\n
        Files: ${files.length}\n
        Extensions: ${extensions.length}`)
      return extNaming(extensions[0]);
    }
    if(multiExt && checkType(files, 'array') && isMusicPlaylist) {
      return extNaming(files[i].ext);
    }
    if(!multiExt && checkType(extensions, 'string')) {
      return extNaming(extensions);
    }
    console.error(`The 'extensions' parameter is not an array or string! Please check on this...`)
    return '.mp3';
  }

  // REFS
  const audioRef = useRef(null);
  const intervalRef = useRef();
  const audioSrc = useRef(null);

  useEffect(() => {

    audioSrc.current = `/audio/${folder}${fileNaming(trackIndex)}${ext(trackIndex)}`;

    if(!trackLoaded && audioSrc) {
      audioRef.current = new Audio(audioSrc.current);
      audioRef.current.onloadeddata = () => {
        setDuration(audioRef.current.duration);
      };
      setTrackLoaded(true)
    }
  }, [trackLoaded]);

  console.log(audioSrc);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    }
  }, []);

  return (
    <div className={isMusicPlaylist ? "audio-player"+classes : "audio-file"+classes} data-track-number={trackIndex+1}>
      { children && !isMusicPlaylist ? children : isMusicPlaylist ? <AudioPlayer data={data} /> : <></> }
    </div>
  )
}

export default AudioComponent;