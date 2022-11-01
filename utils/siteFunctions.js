import { useEffect, useState, useRef } from "react"
import Auth from '../utils/auth';
import website from '../config/site-data.json'
import axios from "axios";
import useSWR from "swr";



//////////////////////
// GET TODAY'S DATE //
//////////////////////

const date =  new Date();

// GET CURRENT YEAR
// Input a number 1 to 4 (or -4 to -1) to specify the number of digits to output
export const getYears = (int) => {
  const year =  date.getFullYear().toString();
  const getLast = int && int !== true && int <= 4 && int >= 1
      ? -1*int
    : int && int !== true && int <= -1 && int >= -4
      ? int
    : int === true ? -2 : false;
  return getLast ? year.slice(getLast) : year;
}

// GET CURRENT MONTH
export const getMonths = (addZeros, toString) => {
  toString = toString === true ? true : false;
  const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const month = addZeros && (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1; 
  return toString === false ? month : months[date.getMonth()];
}

// GET CURRENT DATE
export const getDays = (addZeros) => {
  const today = date.getDate();
  return addZeros && today < 10 ? '0' + today.toString() : today.toString();
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

// FORMAT DATE BASED ON 'FORMAT' INPUT
export const formatDate = (inputDate, format) => {
  inputDate = inputDate ? inputDate : false
  format = format === true ? true : format && format !== true ? format.toLowerCase() : false;

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const toDate = new Date(inputDate);
  const toYear = inputDate ? toDate.getFullYear() : today.getFullYear();
  const toMonth = inputDate ? toDate.getMonth()+1 : today.getMonth()+1;
  const toDay = inputDate ? toDate.getDate() : today.getDate();

  if(inputDate === true && format === false) {
    return today.toLocaleDateString();
  }
  if(inputDate === false && format === true) {
    return today.toISOString();
  }
  if(inputDate === true && format === true) {
    return today.toDateString();
  }

  switch (format) {
    case false:
    case 'number':
      const numberFormat =
        (toMonth < 10 ? '0'+toMonth : toMonth).toString() +
        (toDay < 10 ? '0'+toDay : toDay).toString() +
        toYear.toString().slice(-2);
      return inputDate === false
        ? getMonths(true)+getDays(true)+getYears(2)
        : Number(numberFormat);
        // 061322
    case true:
    case 'local':
    case 'locale':
      return inputDate === false
        ? today.toLocaleDateString()
        : toDate.toLocaleDateString();
        // "6/13/2020"
    case 'str':
    case 'string':
      return inputDate === false
        ? today.toDateString()
        : toDate.toDateString();
        // "Sun Jun 13 2020"
    case 'iso':
      return inputDate === false
        ? today.toISOString()
        : toDate.toISOString();
        // "2020-06-13T18:30:00.000Z"
    case 'utc':
      return inputDate === false
        ? today.toUTCString()
        : toDate.toUTCString();
        // "Sat, 13 Jun 2020 18:30:00 GMT"
    case 'obj':
    case 'object':
    default:
      return { month: toMonth, day: toDay, year: toYear }
      // {month: 6, day: 13, year: 2020}
  }
}

export const valiDate = (inputDate) => {
  const formatted = formatDate(inputDate,'obj');
  const regex = /^\d{2}\/\d{2}\/\d{4}$/;

  if (regex.test(formatted)) {
    return false;
  }
  
  const date = new Date(inputDate);
  const timestamp = date.getTime();

  if (!checkType(timestamp, 'number')) {
    return false;
  }

  return true;
}

// CHECK IF DATE MATCHES TODAY'S DATE
export const isToday = (inputDate) => {
  const today = formatDate(true);
  const formatToday = (inputDate) => formatDate(inputDate,true);

  if(!checkType(inputDate, 'array')) {
    return formatToday(inputDate) === today;
  }

  if(checkType(inputDate, 'array')) {
    for(let i=0; i < inputDate.length; i++) {
      if(formatToday(inputDate[i]) === today) {
        return true;
      }
    }
  }
  return false;
}


////////////////////////
// SERVER SIDE CHECKS //
////////////////////////

// USE JTW AUTH
export const authCheck = () => {
  const token = Auth.loggedIn();
  const authorized = token ? true : false;
  return authorized;



////////////////////////
// CLIENT SIDE CHECKS //
////////////////////////
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
// import { readFileSync } from 'fs';
// import { join } from 'path';


// export const readTxt = (ref, file) => {
//   const reader = new FileReader();

//   reader.addEventListener("load", () => {
//     // this will then display a text file
//     ref.innerText = reader.result;
//   }, false);

//   if (file) {
//     reader.readAsText(file);
//   }
//   const text = readFileSync(join(__dirname, 'hello.txt'), 'utf8');
//   return <p ref={ref}></p>
// }


////////////
// IMAGES //
////////////


export const emptyImg = ( outputObject, outputImage ) => {
// outputObject = { height: 1000, width: 1000 } - or - boolean
// outputImage = {classes: 'image-classes', styles: { style1: value1, style2: value2 }}

  // Returns an empty 1x1 px Data PNG
  const url = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  
  const img = {
    classes: outputImage ? outputImage.classes : '',
    styles: outputImage ? outputImage.styles : {}
  }

  const height = outputObject.height ? outputObject.height : 2000;
  const width = outputObject.width ? outputObject.width : 2000;

  return (  outputImage && !outputObject ? <img className={img.classes} style={img.styles} src={url} />
          : outputObject && !outputImage ? { src: url, blurDataUrl: url, height: height, width: width }
          : url )
}


export const cdnLink = ( fileName, fileId, fileExt, imgWidth ) => {
  
  fileExt = fileExt ? fileExt : ".png";

  const location = "/_next/static/media/";
  const emptyUrl = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
  const file = fileName && fileId && fileExt ? fileName+"."+fileId+fileExt : emptyUrl;

  return location+file + (imgWidth ? "?imwidth="+imgWidth : "?imgwidth=3840");
}

// CHECK IF IMAGE EXISTS
export const imageExists = (url) => {
  url = url.src ? url.src : url;
  const fetch = async () => axios.get(url).then(res => res.data);
  const { data, error } = useSWR(url, fetch);
  return data || !error ? true : error || !data ? false : undefined;
}

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