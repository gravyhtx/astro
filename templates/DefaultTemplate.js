import { useEffect } from 'react';
import Head from 'next/head';

// import TopNav from '../components/TopNav';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

import { ScrollToPosition, BackToTop } from '../modules/scrollSystem';

import website from '../config/site-data.json';
import { metaTags } from '../config/theme';

import { authCheck } from '../utils/siteFunctions';

export default function DefaultLayout({ title, children, layoutClasses, containerClasses, description,
  withAuth, authRedirect, backToTop, scalable, swipeNav }) {
  
  swipeNav = swipeNav === false ? ' no-swiping' : '';

  useEffect(() => {
    if(withAuth && (authCheck() === false)) {
      window.location.href = authRedirect ? authRedirect : '/';
    }
  });

  layoutClasses = layoutClasses ? " "+layoutClasses : "";
  containerClasses = containerClasses ? " "+containerClasses : "";

  backToTop = backToTop === true ? true : false;

  return (
    <div className={ "animate__animated animate__fadeIn layout"+layoutClasses+swipeNav } id="layout">
      <Head>
        <title>{ title ? website.name + " | " + title : website.name }</title>
        { metaTags( title, description, scalable ) }
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ScrollToPosition />
      {/* <Header /> */}
      {/* <TopNav links={navlinks} /> */}
        <div className={ "main-content"+containerClasses } id="content">
          { withAuth && authCheck() || !withAuth ? children : <></> }
        </div>
      {/* <Footer /> */}
    </div>
  )
}