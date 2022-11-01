import { useEffect, useState } from 'react';

import useSWR from "swr";
import axios from "axios";

import DefaultLayout from '../templates/DefaultTemplate';
import styles from '../styles/astro-app.module.css';

import SideNav from '../components/nav/SideNav';
import Modal from '../components/dynamic/Modal';
import Popup from '../components/dynamic/Popup';
import { ImageMap } from '../components/dynamic/ImageMap';
import PageBreak from '../components/layout/PageBreak';
import { SvgObject } from '../components/containers/SvgContainer';

import Glider from '../components/carousel/Glider';
import GliderPanel from '../components/carousel/GliderPanel';
import AudioComponent from '../components/audio/AudioComponent';

import { handleKeyDownIncDec, handleInput } from '../modules/handleInputs';
import { createNewDeck, shuffleUserDeck, tarotDetails } from '../modules/tarot';
import { deckSettings } from '../modules/settings';

import logo from '../public/gravy_logo.svg';
import { alchemy } from '../modules/alchemy';
import CardSpread from '../components/containers/Cards/CardSpread';
import Card from '../components/containers/Cards/Card';
import { GradientBox } from '../components/colorize/Gradients';
import { checkType, checkTypeof, consecutiveChars, fileName, validatePassword, validPhoneNumber } from '../utils/validation';
import { imageExists, isMobile } from '../utils/siteFunctions';


export default function AstroApp() {
// APP STATE
  // Set app 
  const [appReady, setAppReady] = useState(false);
  const [shuffled, setShuffled] = useState();

// TAROT STATE
  const [cardDataArr, setCardDataArr] = useState([]);
  const [cardSelect, setCardSelect] = useState([]);
  const [openTarot, setOpenTarot] = useState(false);
  const [currentData, setCurrentData] = useState();
  
  // Set user preferences & state of inventory
  const [user, setUser] = useState({
    startFresh: true,
    deckName: 'rider-waite',
    deckState: [],
    timesShuffled: 0,
  });
  
  // Load interface
  useEffect(() => {
    // Call initialization functions and check for errors
    const load = () => {
      try {
        setHoroscope({ ...horoscope, getHoroscope });
        setNewDeck(createNewDeck);
        setUserDeck(!user.startFresh && user.deckState.length ? user.deckState : newDeck);
        setShuffled(false);
        setCardSelect([]);
        setCardDataArr([]);
      }
      catch (err) {
        console.error(err);
      }
    };
    load();
    // Once app is loaded set ready status to true
    setAppReady(true);
  }, [appReady]);

// GET ASTROLOGY APP DATA
  // https://github.com/sameerkumar18/aztro
  const [horoscope, setHoroscope] = useState({});

  // Set API data for user & store new user data
  const astroUser = {
    sunSign: 'scorpio',
    moonSign: '',
    rising: '',
  };
  
  const url = `https://aztro.sameerkumar.website/?sign=${astroUser.sunSign.toLowerCase()}&day=today`;
  const ohm = `https://ohmanda.com/api/horoscope/${astroUser.sunSign.toLowerCase()}`
  const fetcher = async (url) => await axios.post(url, {
    mode: 'no-cors',
    headers: {
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
      'Content-Type': 'application/json',
    },
    origin: 'http://localhost:3000'}).then((res) => res.data);
  const { data, error } = useSWR(url, fetcher);

  const ohmanda = fetch(ohm,{
    mode: 'no-cors',
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
        'Content-Type': 'application/json',
      }
    })
    .then((res) => res.data)
    .catch((error) => error);
  
  const getHoroscope = data ? data : error;

// NEW APP
  // Set Tarot state
  const [newDeck, setNewDeck] = useState([]);
  // Set Tarot Deck & Options
  const [userDeck, setUserDeck] = useState([]);
  const [deckOptions, setDeckOptions] = useState({
  //  Maximum is 100
    shuffleTimes: 5,
    useRobotShuffle: false,
  // Choose a number to spit deck, type "bell" or true to approximate
  // half, or false for even more close to half 
    splitDeckAt: 'bell',
  });

// APP FUNCTIONS
  const startApp = () => {
    setCardDataArr([]);
  // GET ASTROLOGY DATA
    setHoroscope({ ...horoscope, getHoroscope });
    console.log(horoscope)
  // TAROT
    shuffleUserDeck(userDeck, setUserDeck, user, setUser, deckOptions);
  // GO!
    setShuffled(true);
    setCardSelect([]);
    setCardDataArr([]);
  }
  
  const handleDeckOptions = (event) => {
    setDeckOptions(handleInput(event, deckOptions))
  }

  const handleDeckKeys =(event) => {
    setDeckOptions(handleKeyDownIncDec(event, deckOptions, deckOptions.shuffleTimes))
  }

  const areaObj = [
    {shape: 'rect', coords: '34,44,270,350', alt: 'Computer', href: 'https://www.w3schools.com/html/computer.htm'},
    {shape: 'rect', coords: '290,172,333,250', alt: 'Phone', href: 'https://www.w3schools.com/html/phone.htm'},
    {shape: 'circle', coords: '337,300,44', alt: 'Coffee', href: 'https://www.w3schools.com/html/coffee.htm'}
  ]

  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal)
  }

  const [popup, setPopup] = useState(false);
  const openPopup = () => {
    setPopup(!popup)
  }

  const [sideNav, setSideNav] = useState(false);
  const openSideNav = () => {
    setSideNav(!sideNav)
  }

  const settings = deckSettings(user, deckOptions, handleDeckOptions, handleDeckKeys);

  const TarotModal = () => {
    const tName = currentData ? (currentData.name + (currentData.suit ? " "+currentData.suit : "")) : "";
    const reversed = currentData && currentData.reversed ? "This card is REVERSED." : "This card is UPRIGHT.";
    return( currentData ?
      <Modal title={tName} activate={openTarot} setActivate={setOpenTarot} id="tarot-details">
        <div className='center'>
          <h2>CARD DETAILS</h2>
          <div className='center-text'>{reversed}</div>
          <br/>
          <h2>QUICK REFERENCE</h2>
          <div className='center-text'>{currentData.quickRef}</div>
          <br/>
          <h2>MEANING</h2>
          <div className='justify-text'>{currentData.up}</div>
          <h2>REVERSED</h2>
          <div className='justify-text'>{currentData.down}</div>
          <br/>
        </div>
      </Modal> : <></>
    )
  }

  const DisplayCards = () => {
    return ( 
      userDeck.map((item, index) => {

        const [reveal, setReveal] = useState(false);

        const rev = () => {
          if(!cardSelect.includes("#"+(index+1))) {
            setReveal(!reveal);
            setCardDataArr([...cardDataArr, item]);
            setCardSelect([...cardSelect, "#"+(index+1)])
          }
        };

        return (
          <GliderPanel key={index}>
          <span onClick={() => rev()} style={{width: "200px"}}>
          {reveal ? <>
              <p>{item.value}
              {item.suit ? " of "+item.suit : ""}</p>
              {item.reversed ? <><div>"REVERSED"</div></> : ""}
            </> : index+1}</span>
          </GliderPanel>
        )
      })
    )
  }

  const open = (data) => {
    setCurrentData(tarotDetails(data));
    setOpenTarot(true);
  }

  const cards = () => {
    let items = [];

    if(cardDataArr.length >= 5) {
      for(let i = 0; i < cardDataArr.length; i++) {
        const data = cardDataArr[i]
        const card =  <Card onClick={()=>open(data)}>
                        <div>
                        {tarotDetails(data).name}{tarotDetails(data).suit ? " of "+tarotDetails(data).suit : ""}
                        {tarotDetails(data).reversed ? <p>REVERSED</p> : ""}
                        </div>
                      </Card>
        items.push(card);
      }
    }

    return items;
  }

  const DemoImageMap = <ImageMap
    img='https://www.w3schools.com/html/workplace.jpg'
    name='workplace'
    areaObj={areaObj}
    classes='workplace-map'
    alt='Workplace'
    onClick={true} />

  const colors01 = ['rgb(77 177 255 / 80%)','rgba(192.156,224.557,250.014,0) 80%'];
  const colors02 = ['rgb(244 182 128 / 80%)','rgba(250.014,192.156,195.145,0) 80%'];
  const colors03 = ['rgb(159 126 240 / 80%)','rgba(195.145,250.014,192.156,0) 80%'];

  const consec = 'asDs21a!'
  // console.log(validatePassword(consec,false))
  // const consec = '1akss2h777s0llll'
  // console.log(consecutiveChars(consec))
  const str = 'aabb0cAcBB22cdde';

  // const consecutive = (string, limit) => {
  //   limit = limit && limit > 0 ? limit : 2;

  return (<>
    <DefaultLayout swipeNav={false} backToTop={true}>
      <div className="gravy-home focus-in-contract">
        <SvgObject svg={logo} sizeObj={false} />
      </div>
      <br/>
      <SideNav header={<SvgObject svg={logo} sizeObj={false} />} activate={sideNav} setActivate={setSideNav} />
      <div className={styles.container}>
        <button onClick={() => openModal()}>OPEN SETTINGS</button>
        {/* <button onClick={() => openPopup()}>OPEN POPUP</button> */}
        <button onClick={() => openSideNav()}>OPEN SIDENAV</button>
        <h2>START APP</h2>
        <button onClick={() => startApp()}>CLICK ME</button>
      </div>
      {/* <PageBreak border={true}>
        This is my childrens
        {ohmanda.data}
      </PageBreak> */}

      {/* TAROT */}
      <div className="tarot astro-container center">
        <h1>TAROT</h1>
        {cardDataArr.length < 5 && shuffled ? <>
        <p>Your Selection: {cardSelect.length ? cardSelect.join(', ') : ""}</p>
        <Glider containerClasses="glider-shadow" hasArrows={true} itemWidth={200} exactWidth={true} contain={true}>
          <DisplayCards/>
        </Glider>
        <p><i>{shuffled ? '"Scroll Left/Right and Choose Your Cards..."' : ""}</i></p></> : <></>}
        {cardDataArr.length >= 5 ?
        <CardSpread cards={cards()} /> : <></>}
        <br/>
        <br/>
        
        <br/>
        <br/>
        {/* <AudioComponent files="ass" extensions={'.mp3'} children={"ASSSSSS"} /> */}

      {/* ZODIAC */}
      <div className="zodiac astro-container">
        {/* This is NOT the symbol for Hygiea: {alchemy()} */}
        {/* DISPLAY BIRTH CHART */}
        {/* DISPLAY HORROSCOPE */}
      </div>

        {/* DISPLAY CARDS */}
      </div>
      <GradientBox stripe={true} border={false} gradientBorder={{size: '4px'}} colorsArray={
          [[colors01],
           [colors02],
           [colors03]]
        } contain={true} position={['217deg', '127deg', '336deg']} />

      <Modal title={"SETTINGS"} addSpace={true} size={'md'} blur={false} activate={modal} setActivate={setModal} id="tarot-settings">{settings}</Modal>
      <Popup header="SUBSCRIBE" blur={false} activate={popup} setActivate={setPopup} id="popup">{settings}</Popup>
      <TarotModal />
    </DefaultLayout>
  </>)
}