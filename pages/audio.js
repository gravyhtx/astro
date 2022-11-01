import { useEffect, useRef } from 'react';
import AudioComponent from '../components/audio/AudioComponent';
import AudioPlayer from '../components/audio/AudioPlayer';
import { BackToTop } from '../modules/scrollSystem';
import track from '../public/audio/beastie_boys-intergalactic.mp3'

const Audio = () => {

  return(<div className='audio'>
    <AudioPlayer src={track} />
    <BackToTop />
  </div>)
}

export default Audio;