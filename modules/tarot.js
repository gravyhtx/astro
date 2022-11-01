import Modal from '../components/dynamic/Modal';
import { shuffleCards } from '../utils/generator';
import rw from '../config/tarot/rider-waite.json'

// CREATE NEW TAROT DECK
// Rider-Waite Suits
const suits = ['Wands', 'Cups', 'Swords', 'Pentacles'];
const minorFaces = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
  'Ten', 'Page', 'Knight', 'Queen', 'King'];
// Rider-Waite Major Card Names & Order
const majorFaces =  ['The Fool', 'The Magician', 'The High Priestess', 'The Empress', 'The Emperor', 'The Hierophant',
  'The Lovers', 'The Chariot', 'Strength', 'The Hermit', 'Wheel of Fortune', 'Strength', 'The Hanged Man', 'Death', 'Temperance',
  'The Devil', 'The Tower', 'The Star', 'The Moon', 'The Sun', 'Judgement', 'The World'];
  
export const createNewDeck = () => {
  let arcana = [];
  // Create a deck of cards, minor
  for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < minorFaces.length; x++) {
      let card = { value: minorFaces[x], suit: suits[i], suitNum: i, arcana: 'minor', num: x, reversed: false };
      arcana.push(card);
    }
  }

  let major = [];
  for (let i = 0; i < majorFaces.length; i++) {
    let card = { value: majorFaces[i], suit: false, arcana: 'major', num: i, reversed: false };
    major.push(card);
  }

  arcana = arcana.concat(major);
  // newDeck ? console.log(newDeck) : console.log("Awaiting NEW DECK...");

  return arcana;
}

// export const tarotOptions = () => {
//   const [options, setOptions] = useState({
//   //  Maximum is 100
//     shuffleTimes: 1,
//     useRobotShuffle: false,
//   // Choose a number to spit deck, type "bell" or true to approximate
//   // half, or false for even more close to half 
//     splitDeckAt: 'bell',
//   });

//   return { options, setOptions }
// }

const newDeck = createNewDeck;

// SHUFFLE USER DECK
export const shuffleUserDeck = (userDeck, setUserDeck, user, setUser, deckOptions) => {

  const shuffledDeck = shuffleCards(
    user.deckState ? userDeck : newDeck, // DECK ARRAY
    deckOptions.shuffleTimes, // SHUFFLE TIMES
    deckOptions.useRobotShuffle, // COMPUTER SHUFFLE ON/OFF
    deckOptions.splitDeckAt, // CHOOSE SPLIT
    true // IS TAROT SHUFFLE
  );

  setUserDeck(shuffledDeck); // MOST RECENT DECK STATE

  userDeck ? console.log("user deck",userDeck) : console.log("Awaiting USER DECK...");

  const timesShuffled = Number(user.timesShuffled)
  const thisShuffle = !deckOptions.shuffleTimes ? 5 : Number(deckOptions.shuffleTimes);
  const userData = { ...user, deckState: userDeck, timesShuffled: timesShuffled + thisShuffle }

  setUser(userData); // PREVIOUS DECK STATE.. change to 'shuffledDeck' to keep current
  console.log(user);
}

export const shuffleDeck = (userDeck, user, deckOptions) => {

  const shuffledDeck = shuffleCards(
    user.deckState ? userDeck : newDeck, // DECK ARRAY
    deckOptions.shuffleTimes, // SHUFFLE TIMES
    deckOptions.useRobotShuffle, // COMPUTER SHUFFLE ON/OFF
    deckOptions.splitDeckAt, // CHOOSE SPLIT
    true // IS TAROT SHUFFLE
  );
  
  return { shuffledDeck }
}

// NEW USER DECK
export const newUserDeck = (userDeck, setUserDeck, user, setUser) => {

  setUserDeck(newDeck); // MOST RECENT DECK STATE

  const userData = { ...user, deckState: [], timesShuffled: 0 }

  setUser(userData); // PREVIOUS DECK STATE.. change to 'newDeck' to keep current
  console.log("user deck",userDeck);
}

// GET CARD DETAILS
export const tarotDetails = (card) => {

  const reversed = card.reversed;
  const cardSuit = card.suit;
  const cardSuitNum = card.suitNum;
  const cardNum = card.num;

  let isMinor = true;

  if(cardSuit === false) {
    isMinor = false;
  }

  let suit;
  
  if (isMinor) {
    suit = rw[Number(cardSuitNum)]; // MINOR ARCANA - Wands/Cups/Swords/Pentacles
  } else {
    suit = rw[4]; // MAJOR ARCANA
  }
  
  const details = suit[cardNum];

  return { ...details, reversed: reversed };
}


export const TarotModal = (currentData) => {
  
  const tName = currentData ? (currentData.name + (currentData.suit ? " of "+currentData.suit : "")) : "";
  const reversed = currentData && currentData.reversed ? "This card is REVERSED." : "This card is UPRIGHT.";

  return( currentData ?
    <Modal title={tName} activate={openTarot} setActivate={setOpenTarot} id="tarot-details">
      <div className='center'>
        <h2>CARD DETAILS</h2>
        <div>{reversed}</div>
        <br/>
        <h2>QUICK REFERENCE</h2>
        <div>{currentData.quickRef}</div>
        <br/>
        <h2>MEANING</h2>
        <div>{currentData.up}</div>
        <h2>REVERSED</h2>
        <div>{currentData.up}</div>
        <br/>
      </div>
    </Modal> : <></>
  );
}