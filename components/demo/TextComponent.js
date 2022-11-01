import { useRef } from 'react';

import text from './test.txt';
// import { readTxt } from '../../utils/siteFunctions';

const TextComponent = () => {
  const contentRef = useRef(null);
  const contentElement = contentRef.current
  // return readTxt(contentRef, text);
}

export default TextComponent;