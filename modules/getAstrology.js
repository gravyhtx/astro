import useSWR from "swr";
import axios from "axios";

// GET ASTROLOGY APP DATA
// https://github.com/sameerkumar18/aztro

// Set API data for user & store new user data
const astroUser = {
  sunSign: 'capricorn',
  moonSign: '',
  rising: '',
};

// const url = `https://aztro.sameerkumar.website/?sign=${astroUser.sunSign.toLowerCase()}&day=today`;
const url = `https://ohmanda.com/api/horoscope/${astroUser.sunSign.toLowerCase()}`
const fetcher = async (url) => await axios.post(url).then((res) => res.data);
const { data, error } = useSWR(url, fetcher);

export const getHorroscope = () => data ? data : error;



// JPL HORIZONS (format = text  or json)
// https://ssd.jpl.nasa.gov/horizons/manual.html
// https://ssd-api.jpl.nasa.gov/doc/horizons.html

//  https://ssd.jpl.nasa.gov/api/horizons.api?format=json&COMMAND=%27499%27
//  &OBJ_DATA=%27YES%27&MAKE_EPHEM=%27YES%27&EPHEM_TYPE=%27OBSERVER%27
//  &CENTER=%27500@399%27&START_TIME=%272006-01-01%27&STOP_TIME=%272006-01-20%27
//  &STEP_SIZE=%271%20d%27&QUANTITIES=%271,9,20,23,24,29%27