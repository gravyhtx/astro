// import play from "./icons/play.svg";
// import pause from "./icons/pause.svg";
// import next from "./icons/next.svg";
// import prev from "./icons/prev.svg";

import { SvgContainer } from "../containers/SvgContainer";

export const playPauseAudio = (event, isPlaying, setIsPlaying) => {
  const target = event.target;
  const { trackNumber } = target.dataset;
  // const currentAudio = audioRef.current;
  
  // const audioElement = new Audio(src);
  
  // audioRef.src = `/audio/${file}${extension}`;
  // console.log(audioElement.current.src);
  if(isPlaying === false){ setIsPlaying(true) };
  if(isPlaying === true){ setIsPlaying(false) };

  return(
    <button onClick={(e) => playAudio(e)} useRef={playButton} class="play-controls" role="switch" aria-checked="false">
      <span>{ isPlaying === true ? Pause : Play }</span>
    </button>
  )
}

export const pauseAudio = (event) => {
  const target = event.target;
  const { trackNumber } = target.dataset;
  // const currentAudio = audioRef.current;
  
  // const audioElement = new Audio(src);
  
  // audioRef.src = `/audio/${file}${extension}`;
  // console.log(audioElement.current.src);
  setIsPlaying(false);
}

export const AudioControls = ({ isPlaying, setIsPlaying, trackDuration, setTrackDuration, trackIndex, setTrackIndex }) => {


    const nextFile = () => {
      const count = trackIndex;
      if(count === (files.length - 1)) {
        setTrackDuration(0);
        setTrackIndex(0);
      } else{
        count++;
        setTrackDuration(0);
        setTrackIndex(count);
      }
    }

    const prevFile = () => {
      const count = trackDuration;
      if(trackDuration < 3) {
        setTrackDuration(0);
        setTrackIndex(trackIndex);
      } else{
        count--;
        setTrackDuration(0);
        setTrackIndex(count);
      }
    }
    // <div className="audio-controls">
    //   <button
    //     type="button"
    //     className="prev"
    //     aria-label="Previous"
    //     onClick={onPrevClick}
    //   >
    //     <SvgContainer svg={prev} sizeObj={false} />
    //   </button>
    //   {isPlaying ? (
    //     <button
    //       type="button"
    //       className="pause"
    //       onClick={() => onPlayPauseClick(false)}
    //       aria-label="Pause"
    //     >
    //       <SvgContainer svg={pause} sizeObj={false} />
    //     </button>
    //   ) : (
    //     <button
    //       type="button"
    //       className="play"
    //       onClick={() => onPlayPauseClick(true)}
    //       aria-label="Play"
    //     >
    //       <SvgContainer svg={play} sizeObj={false} />
    //     </button>
    //   )}
    //   <button
    //     type="button"
    //     className="next"
    //     aria-label="Next"
    //     onClick={onNextClick}
    //   >
    //     <SvgContainer svg={next} sizeObj={false} />
    //   </button>
    // </div> 
};



export default AudioControls;