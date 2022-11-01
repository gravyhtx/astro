import { useEffect, useRef } from 'react';
import AudioComponent from '../components/audio/AudioComponent';
import AudioPlayer from '../components/audio/AudioPlayer';
import track from '../public/audio/beastie_boys-intergalactic.mp3'

const Audio = () => {

  return(<div className='audio'>
    <AudioComponent files={track} />
  </div>)
}

export default Audio;