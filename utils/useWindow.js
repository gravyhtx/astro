import { useEffect, useState, useRef, useLayoutEffect } from "react";

// WINDOW INFORMATION //
const isBrowser = typeof window !== `undefined`

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  //  Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  if (!isBrowser) return windowSize;

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  
  return windowSize;
}


export const useScreenWidth = () => {
  return useWindowSize().width;
}

export const useScreenHeight = () => {
  return useWindowSize().height;
}


export function windowSize(window) {

  if (!isBrowser) return { width: undefined, height: undefined };

  let windowSize = {
    width: window ? window.innerWidth : undefined,
    height: window ? window.innerHeight : undefined
  }

  return windowSize;
}

export const screenWidth = (window) => {
  return windowSize(window).width;
}

export const screenHeight = (window) => {
  return windowSize(window).height;
}


// HANDLE SCROLL EVENTS //

// export const getScrollPosition = () => {

//   const [scrollY, setScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.scrollY);
//     };
    
//     handleScroll();

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };

//   }, []);

//   return scrollY;
// }


export const handleScrollClasses = ( el, classes, position ) => {

  const scrollLimit = position ? position : 0.80;

  useEffect(() => {
    console.log(document.getElementById(el))
    const scrollTotal = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if ((document.documentElement.scrollTop / scrollTotal ) > scrollLimit) {
    // Add classes
      document.getElementById(el).classList.add(classes);
    } else {
      // Remove classes
      document.getElementById(el).classList.remove(classes);
    }
  });

}

// SCROLL TO POSITION //

export const scrollToEl = (el,t) => {
  let getEl;
  t = t ? t : 500;
  useEffect(() => {
    getEl = el ? document.getElementById(el) : document.documentElement;
    if(getEl) {
      setTimeout(() => { getEl.scrollIntoView({ behavior: "smooth", block: "start", inline: "center" }) }, t)
    }
  });
}

export const scrollToContainer = (active, id) => {
  if(active) {
    scrollToEl(id ? id : "content", 100)
  } else {
    scrollToEl(null)
  }
}

export const scrollToTop = (top) => {
  useEffect(() => {
    document.documentElement.scrollTo({
      top: top ? top : 0,
      behavior: "smooth"
    })
  });
}