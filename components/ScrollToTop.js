import { useEffect } from "react";
import { useRouter } from "next/router";

const ScrollToTop = ({ rootId }) => {

  const router = useRouter();
  const { pathname } = router.pathname;

  rootId = rootId ? rootId : 'layout';
  console.log(rootId)

  useEffect(() => {

    const rootEl = document.getElementById(rootId);

    const queryId = window.location.hash ? window.location.hash.substring(1) : null;
    const queryEl = document.getElementById(queryId);

    const scrollToEl = (queryId && queryEl) ? queryEl : rootEl;

    const scrollPosition = () => {
      scrollToEl.scrollIntoView({ behavior: "smooth", block: "start" })
    }

    setTimeout(() => {
      scrollPosition()
    },500);

  }, [pathname]);
  return null;
};

export default ScrollToTop