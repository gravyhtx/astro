import { useEffect, useRef, useState } from "react";
import AudioControls from "./AudioControls";

const AudioPlayer = ({ trackInfo, classes, src, trackDuration,
  setTrackDuration, trackIndex, setTrackIndex }) =>  {
    
  const [isPlaying, setIsPlaying] = useState(true);
  const [masterGain, setMasterGain] = useState({ value: 1 });
  const [track, setTrack] = useState(null);
  
  const audioRef = useRef(null);
  const playButton = useRef(null);

  const audioElement = audioRef.current;
  const playElement = playButton.current;

  let audioCtx;
  let analyser;
    
    
  useEffect(() => {

    const AudioContext = (window.AudioContext || window.webkitAudioContext);
    audioCtx = new AudioContext();
    console.log(audioCtx.state);
    console.log(audioElement);

    if(audioElement && track === null) {
      setTrack(audioCtx.createMediaElementSource(audioElement));
      track.connect(audioCtx.destination);
    }

    console.log(track)
    analyser = audioElement ? audioCtx.createAnalyser() : null;
  });

  // const initializeMasterGain = () => {
  //   // Connect the masterGainNode to the audio context to allow it to output sound.
  //   Audio.masterGainNode.connect(Audio.context.destination)

  //   // Set masterGain Value to 0
  //   Audio.masterGainNode.gain.setValueAtTime(0, Audio.context.currentTime)
  // }

  const playAudio = (e) => {
    console.log(e);
    const target = e.target;
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    if (isPlaying === false && audioElement) {
      audioElement.play();
      console.log(audioElement);
      setIsPlaying(!isPlaying);
    // if track is isPlaying pause it
    } else if (isPlaying === true && audioElement) {
      audioElement.pause();
      setIsPlaying(false);
    }
    
    let checkedState = target.getAttribute('aria-checked') === "true" ? true : false;
    target.setAttribute( 'aria-checked', checkedState ? "false" : "true" );
    console.log(target.getAttribute('aria-checked'))
  }

  const handleVolume = (e) => {
    const target = e.target;
    const { value } = target;
    setMasterGain(value);
    console.log(masterGain)
  }


  useEffect(() => {
    if(audioElement && track === null && isPlaying === true) {
      audioElement.addEventListener('ended', () => {
        playButton.dataset.playing = 'false';
        playButton.setAttribute( "aria-checked", "false" );
      }, false);
    }
  })

  return (
    <div className='audio-player'>
      
      <div className="audio-body">
    
        <section className="master-controls">
  
          <input type="range" id="volume" className="control-volume" onChange={(e) => handleVolume(e)}
            min="0" max="2" value={masterGain} list="gain-vals" step="0.01" data-action="volume" />
  
          <datalist id="gain-vals">
            <option value="0" label="min" />
            <option value="2" label="max" />
          </datalist>
  
          <label htmlFor="volume">VOL</label>
  
        </section>
  
        <section className="play">
  
          <audio ref={audioRef} src={src} crossOrigin="anonymous" />
  
          <button onClick={(e) => playAudio(e)} ref={playButton} className="play-controls" role="switch" aria-checked="false">
            <span>Play/Pause</span>
          </button>
  
        </section>
      </div>
    </div>);
}

export default AudioPlayer;