import AudioControls from "./AudioControls";

const AudioPlayer = ({ trackInfo, classes, isPlaying, setIsPlaying, trackDuration,
    setTrackDuration, trackIndex, setTrackIndex }) =>  {

  const image = <></>;
  const controls = <AudioControls
    isPlaying={isPlaying}
    setIsPlaying={setIsPlaying}
    trackDuration={trackDuration}
    setTrackDuration={setTrackDuration}
    trackIndex={trackIndex}
    setTrackIndex={setTrackIndex} />

  return (<></>);
}