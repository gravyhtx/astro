import { useEffect, useState, useRef } from "react"
import Auth from '../utils/auth';
import website from '../config/site-data.json'



//////////////////////
// GET TODAY'S DATE //
//////////////////////

const date =  new Date();

export const getYear = (int) => {
  const year =  date.getFullYear().toString();
  const getLast = int && int !== true && int <= 4 && int >= 1 ? -1*int : int === true ? -2 : false;
  return getLast ? year.slice(getLast) : year;
}

export const getMonth = () => {
  const month = date.getMonth() + 1; 
  return month.toString();
}

export const getDay = () => {
  const today = date.getDate();
  return today.toString();
}

// GET HOURS/MINUTES IN CALCULATION OR MILITARY TIME
// Ex. 14hr 30min = 14.5 or 1430
export const getTimeCalc = (hour, minutes, military) => {
  const total = 60;
  const min = !Number.isNaN(minutes) && minutes <= 60 ? Number(minutes) : 0;
  const hr = !Number.isNaN(hour) && ((hour < 24 && min) || (hour === 24 && min === 0)) ? Number(hour) : 0;

  const timeCalc = hr + (min / total);

  const milMin = min > 10 ? min.toString() : min < 10 && min !== 0 ? '0' + minutes.toString() : '00';
  const milHr = hr < 10 ? '0'+hr.toString() : hr.toString();
  const milTime = milHr + milMin;

  return military === true ? milTime : timeCalc.toFixed(2);
}

// FORMAT DATE BASED ON FORMAT INPUT
export const formatDate = (date, format) => {
  date = date ? date : false
  format = format ? format.toLowerCase() : false;
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  switch (format) {
    case format === false && date === false:
      return today;
    case format === 'string' && date === false:
      return today.toDateString(); // "Sun Jun 14 2020"
    case format === 'iso' && date === false:
      return today.toISOString(); // "2020-06-13T18:30:00.000Z"
    case format === 'utc' && date === false:
      return today.toUTCString(); // "Sat, 13 Jun 2020 18:30:00 GMT"
    case format === 'local' && date === false:
    case format === 'locale' && date === false:
      return today.toLocaleDateString(); // "6/14/2020"
    default:
      return today.toLocaleDateString();
  }
}


////////////////////////
// CLIENT SIDE CHECKS //
////////////////////////

// USE JTW AUTH
export const authCheck = () => {
  const token = Auth.loggedIn();
  const authorized = token ? true : false;
  return authorized;
};

// CHECK IF DEVICE IS MOBILE
export const isMobile = (checkScreenSize) => {
  checkScreenSize = checkScreenSize === true ? true : false;
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  || (checkScreenSize === true && window.matchMedia("only screen and (max-width: 760px)").matches) ) {
    return true;
  } else {
    return false;
  }
}


//////////////////////
// CONVERT ELEMENTS //
//////////////////////

export const canvasToDataUrl = ( canvasEl ) => {
  const dataUrl = canvasEl.toDataURL();
  return dataUrl;
}

export const canvasToImg = ( el, alt, classes, id ) => {
  const dataUrl = el.toDataURL();
  const img = document.write(`<img src="${dataUrl}" className=${classes} alt=${alt} id=${id} />`);
  return img;
}


/////////////
// COUNTER //
/////////////

export const counter = ( callback, delay, startVal ) => {

  startVal = startVal ? startVal : 0;

  function useInterval() {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
      let id = setInterval(() => {
      savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }, [delay]);
  }

  function count() {
    const [count, setCount] = useState(startVal);

    useInterval(() => {
      setCount(count + 1);
    }, 1000);
    
    return count;
  };
  
  count();

}



/////////////////////
// RETURN ELEMENTS //
/////////////////////


export const emptyData = ( outputArray, outputImage ) => {
// outputArray = { height: 1000, width: 1000 } - or - boolean
// outputImage = {classes: 'image-classes', styles: { style1: value1, style2: value2 }}

  // Returns an empty 1x1 px Data PNG
  const url = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  
  const img = {
    classes: outputImage ? outputImage.classes : '',
    styles: outputImage ? outputImage.styles : {}
  }

  const height = outputArray.height ? outputArray.height : 2000;
  const width = outputArray.width ? outputArray.width : 2000;

  return (  outputImage && !outputArray ? <img className={img.classes} style={img.styles} src={url} />
          : outputArray && !outputImage ? { src: url, blurDataUrl: url, height: height, width: width }
          : url )
}


export const cdnLink = ( fileName, fileId, fileExt, imgWidth ) => {
  
  fileExt = fileExt ? fileExt : ".png";

  const location = "/_next/static/media/";
  const emptyUrl = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  const file = fileName && fileId && fileExt ? fileName+"."+fileId+fileExt : emptyUrl;

  return location+file + (imgWidth ? "?imwidth="+imgWidth : "?imgwidth=3840");
}

// export function imageExists(image_url){
//   var http = new XMLHttpRequest();
//   http.open('HEAD', image_url, false);
//   http.send();
//   return http.status != 404;
// }

export const ImageCDN = ({ fileName, fileId, fileExt, description, aria, containerClasses, imgClasses, containerId, allowDrag, contain, sizes, defaultWidth, customStyles, responsive, useFallbackStyles, useContainerStyles }) => {

  const imgLink = cdnLink(fileName, fileId, fileExt);

  const fallbackStyles = {
    position: 'absolute',
    inset: '0px',
    boxSizing: 'border-box',
    padding: '0px',
    border: 'none',
    margin: 'auto',
    display: responsive ? 'flex': 'block',
    width: '0px',
    height: '0px',
    minWidth: '100%',
    maxWidth: '100%',
    minHeight: '100%',
    maxHeight: '100%',
  }
  
  const widths = ["640","750","828","1080","1200","1920","2048","3840"];
  
  defaultWidth = defaultWidth ? defaultWidth : widths[7];
  useContainerStyles = useContainerStyles ? useContainerStyles : true;
  customStyles = customStyles ? customStyles : {};
  responsive = responsive ? responsive : true;  
  
  const img = {
    src: imgLink,
    alt: description ? description : website.name+' - Site Image',
    imgClasses: imgClasses ? 'image-class '+imgClasses : 'image-class',
    imgStyles: useFallbackStyles ? fallbackStyles + customStyles : customStyles,
    containerClasses: containerClasses ? 'image-container '+containerClasses : 'image-container',
    containerStyles: {
      display: responsive ? 'block' : 'inline-block'
    },
    contain: contain ? ' contain' : '',
    imgId: fileName && fileId ? fileName+'-'+fileId : '',
    containerId: containerId ? containerId : 'container-'+fileId,
    draggable: allowDrag ? allowDrag.toString() : 'false',
    sizes: sizes ? sizes : '100vw',
  }
  
  const link = (n) => { return imgLink[n] };
  const srcSet = `${link(0)}, ${link(1)}, ${link(2)}, ${link(3)}, ${link(4)}, ${link(5)}, ${link(6)}, ${link(7)}`;

  return (<>
    {img.src ?
      <div role="img" aria-label={aria} className={ img.containerClasses+img.contain } style={ img.containerStyles } id={ img.containerId }>
        <img
          alt={ img.alt }
          className={ img.imgClasses }
          id={ img.imgId }
          draggable={ img.draggable }
          sizes={ img.sizes }
          srcSet={ srcSet }
          src={ img.src }
          style={ img.imgStyles }
          decoding="async" />
      </div>:<></>}
    </>)
}

  // var canvas = userData.walletAddress?blockie:<></>
  // var blockieCanvas = document.getElementById('blockie-canvas');
  // const blockieUrl = blockieCanvas.toDataURL()
  // const dataURL = () => {
  //   let url = blockieCanvas.toDataURL()
  //   return(url)
  // }
  // const blockiePng = document.write('<img src="'+dataURL+'"/>');
  // var dataURL = canvas.toDataURL();
  // const blockie = document.write('<img src="'+img+'"/>');