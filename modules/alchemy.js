import { fileName } from "../utils/validation";

export const alchemy = (name, usefont) => {
  // https://en.wikipedia.org/wiki/Astronomical_symbols
  // TEMPLATE
  // {char:'\u{26B4}'};
  //  or
  // {char: '\u{2BD9}', set: 'u2800'};

  // unicode fonts available at:
  // https://s-unicode.akamaized.net/static/fonts/u/{font-name.woff}
  
  usefont = usefont === false ? false : true;

  const unicode = (name) => {
    name = fileName(name);
    switch(name) {

    // ZODIAC
      case "1":
      case "aries":
      case "ari":
      case "ram":
      case "0deg":
        return {char: '\u{2648}', set: 'u2400'};
      case "2":
      case "taurus":
      case "tau":
      case "bull":
      case "30deg":
        return {char: '\u{2649}', set: 'u2400'};
      case "3":
      case "gemini":
      case "gem":
      case "twin":
      case "twinned":
      case "60deg":
        return {char: '\u{264A}', set: 'u2400'};
      case "4":
      case "cancer":
      case "cnc":
      case "crab":
      case "90deg":
        return {char: '\u{264B}', set: 'u2400'};
      case "5":
      case "leo":
      case "lion":
      case "120deg":
        return {char: '\u{264C}', set: 'u2400'};
      case "6":
      case "virgo":
      case "vir":
      case "maiden":
      case "150deg":
        return {char: '\u{264D}', set: 'u2400'};
      case "7":
      case "libra":
      case "lib":
      case "scales":
      case "180deg":
        return {char: '\u{264E}', set: 'u2400'};
      case "8":
      case "scorpio":
      case "sco":
      case "scorpion":
      case "210deg":
        return {char: '\u{264f}', set: 'u2400'};
      case "9":
      case "sagittarius":
      case "sgr":
      case "archer":
      case "240deg":
        return {char: '\u{26450}', set: 'u2400'};
      case "10":
      case "capricorn":
      case "cap":
      case "horns":
      case "goat_horns":
      case "goathorns":
      case "270deg":
        return {char: '\u{2651}', set: 'u2400'};
      case "11":
      case "aquarius":
      case "aqr":
      case "water_carrier":
      case "watercarrier":
      case "300deg":
        return {char: '\u{2652}', set: 'u2400'};
      case "12":
      case "pisces":
      case "psc":
      case "fish":
      case "fishes":
      case "330deg":
        return {char: '\u{2653}', set: 'u2400'};


    // SuN
      case "sun":
        return {char: '\u{2609}', set: 'u2400'};
      case "sun_ray":
      case "sunray":
      case "ray":
      case "gold":
        return {char: '\u{1f71A}', set: 'u2400'};
      case "sun_in_splendor":
      case "suninsplendor":
      case "sun_splendor":
      case "sunsplendor":
      case "splendor":
        return {char:"\u{1f31E}", set: 'u1f400'};
    
    // MOON
      case "moon":
      case "moon1":
      case "increscent":
      case "silver1":
        return {char: '\u{263D}', set: 'u2400'};
      case "moon2":
      case "decrescent":
      case "silver2":
        return {char: '\u{263E}', set: 'u2400'};
      case "new_moon":
      case "dark_moon":
      case "fully_dark":
      case "fully_dark_moon":
      case "solar_eclipse":
        return {char: '\u{1f311}', set: 'u1f000'};
      case "new_moon-face":
      case "dark_moon-face":
      case "fully_dark-face":
      case "fully_dark_moon-face":
      case "solar_eclipse-face":
      case "new_moon_face":
      case "dark_moon_face":
      case "fully_dark_face":
      case "fully_dark_moon_face":
      case "solar_eclipse_face":
        return {char: '\u{1f31A}', set: 'u1f000'};
      case "waxing_crescent_moon":
      case "waxing_crescent":
      case "crescentmoon":
      case "crescent_moon":
      case "growing_moon":
      case "encrescent":
      case "encrescent_moon":
        return {char: '\u{1f312}', set: 'u1f000'};
      case "first_quarter":
      case "firstquarter":
      case "first_quarter_moon":
      case "half_moon":
      case "halfmoon":
        return {char: '\u{1f313}', set: 'u1f000'};
      case "first_quarter-face":
      case "first_quarter_moon-face":
      case "first_quarter_face":
      case "first_quarter_moon_face":
        return {char: '\u{1f31B}', set: 'u1f000'};
      case "waxing_gibbous":
      case "waxinggibbous":
      case "waxing_gibbous_moon":
      case "waxing_moon":
      case "waxingmoon":
        return {char: '\u{1f314}', set: 'u1f000'};
      case "full":
      case "full_moon":
      case "fullmoon":
        return {char: '\u{1f315}', set: 'u1f000'};
      case "full_moon":
      case "moon-face":
      case "moonface":
      case "smiling_moon":
      case "smilingmoon":
      case "fullmoon-face":
      case "fullmoon_face":
      case "full_moon_face":
      case "full_moon-face":
        return {char: '\u{1f31D}', set: 'u1f000'};
      case "waning_gibbous":
      case "waninggibbous":
      case "waning_gibbous_moon":
        return {char: '\u{1f316}', set: 'u1f000'};
      case "last_quarter_moon":
      case "last_quarter":
      case "lastquarter":
      case "waning_moon":
      case "waningmoon":
        return {char: '\u{1f317}', set: 'u1f000'};
      case "last_quarter_moon-face":
      case "last_quarter-face":
      case "lastquarter-face":
      case "waning_moon-face":
      case "waningmoon-face":
      case "last_quarter_moon_face":
      case "last_quarter_face":
      case "lastquarter_face":
      case "waning_moon_face":
      case "waningmoon_face":
        return {char: '\u{1f31C}', set: 'u1f000'};
      case "waning_crescent_moon":
      case "waning_crescent":
      case "waningcrescent":
        return {char: '\u{1f318}', set: 'u1f000'};

    // PLANETS
      case "mercury":
      case "h":
      case "me":
      case "quicksilver":
        return {char: '\u{263f}', set: 'u2400'};
      case "venus":
      case "v":
      case "female":
      case "female_sign":
      case "copper":
        return {char: '\u{2640}', set: 'u2400'};
      case "earth":
      case "earth1":
      case "proserpina":
      case "antimony":
        return {char: '\u{2641}', set: 'u2400'};
      case "earth2":
      case "verdigris":
      case "aes_viride":
      case "copper_subacetate":
      case "four_rivers":
        return {char: '\u{1f728}', set: 'u1f400'};
      case "mars":
      case "male":
      case "male_sign":
      case "iron":
      case "m":
      case "ma":
        return {char: '\u{2642}', set: 'u2400'};
      case "jupiter":
      case "j":
      case "zeus":
        return {char: '\u{2643}', set: 'u2400'};
        case "jupiter":
      case "saturn":
      case "s":
      case "lead":
        return {char: '\u{2644}', set: 'u2400'};
      case "uranus":
      case "uranus1":
      case "u":
      case "platinum":
        return {char: '\u{26E2}', set: 'u2400'};
      case "uranus2":
      case "herschel":
        return {char: '\u{2645}', set: 'u2400'};
      case "neptune":
      case "neptune1":
      case "n":
      case "trident":
      case "bismuth":
      case "tinglass":
        return {char: '\u{2646}', set: 'u2400'};
      case "neptune2":
      case "le_verrier":
      case "leverrier":
        return {char: '\u{2646}', set: 'u2400'};
      
    // ASTEROID
      case "vertex":
      case "crucible":
      case "vinegar":
        return {char: '\u{1f70A}', set: 'u1f400'};
      case "ceres":
      case "scythe":
        return {char: '\u{26B3}', set: 'u2400'};
      case "pallas":
      case "2pallas":
      case "spear":
      case "pallas_athena":
      case "pallasathena":
        return {char:'\u{26B4}', set: 'u2400'};
      case "juno":
      case "3juno":
      case "scepter":
        return {char: '\u{26B5}', set: 'u2400'};
      case "vesta":
      case "4vesta":
      case "firealtar":
        return {char: '\u{26B6}', set: 'u2400'};
      case "astrea":
      case "5astrea": 
        return {char: '\u{2BD9}', set: 'u2800'};
      case "hygiea":
      case "10hygiea":
        return {char: '\u{2BDA}', set: 'u2800'};
    
    // CENTAuR
      case "chiron":
        return {char: '\u{26B7}', set: 'u2400'};
      case "nessus":
        return {char: '\u{2BDC}', set: 'u2800'};
      case "pholus": 
        return {char: '\u{2BDB}', set: 'u2800'};

    // LARGE TRANS-NEPTuNIAN PLANETOIDS
      case "eris": 
      case "eris1": 
        return {char: '\u{2Bf0}', set: 'u2800'};
      case "eris2":
        return {char: '\u{2Bf1}', set: 'u2800'};

    // GLOBE
      case "globe":
      case "globe-meridians":
      case "globe_meridians":
      case "globe_with_meridians":
      case "globe_w_meridians":
      case "globe_w/_meridians":
        return {char: '\u{1f30D}', set: 'u1f000'};
      case "globe-europe_africa":
      case "globe_europe_africa":
      case "globe-europe":
      case "globe_europe":
      case "globe-africa":
      case "globe_africa":
      case "europe_africa":
        return {char: '\u{1f30D}', set: 'u1f000'};
      case "globe-americas":
      case "globe_americas":
      case "globe-america":
      case "globe_america":
        return {char: '\u{1f30E}', set: 'u1f000'};
      case "globe-asia_australia":
      case "globe_asia_australia":
      case "globe-asia":
      case "globe_asia":
      case "globe-australia":
      case "globe_australia":
        return {char: '\u{1f30f}', set: 'u1f000'};

      // EARTH
      case "cuneiform_earth":
      case "cuneiform_ki":
        return {char: '\u{121A0}', set: 'u12000'};
      case "egyptian_earth":
      case "egyptian_n016":
        return {char: '\u{131fE}', set: 'u13000'};
      case "chinese_earth":
      case "chinese_soil":
      case "cjk_earth":
      case "cjk_soil":
        return {char: '\u{571F}', set: 'u5400'};
      case "earth_ground":
      case "electrical_earth":
      case "electrical_earth_ground":
        return {char: '\u{23DA}', set: 'u2000'};

    // MISC.
      case "ascending":
      case "ascending_node":
      case "ascendingnode":
      case "node_ascending":
      case "nodeascending":
        return {char: '\u{260A}', set: 'u2400'};
      case "descending":
      case "descending_node":
      case "descendingnode":
      case "node_descending":
      case "nodedescending":
        return {char: '\u{260B}', set: 'u2400'};
      case "conjunction":
        return {char: '\u{260C}', set: 'u2400'};
      case "opposition":
        return {char: '\u{260D}', set: 'u2400'};
      case "quadrature":
      case "square":
        return {char: '\u{25FB}', set: 'u2400'};
      case "comet":
        return {char: '\u{2604}', set: 'u2400'};

    // DEfAuLT OuTPuT (GLOBE w/ LINES)
      default:
        return {char: '??', set: 'u1f400'};
    }
  }

  const output = ( unicode(name).set && usefont ) ?
    <span style={{fontfamily: unicode(name).set.toLowerCase()}}>{unicode(name).char}</span> :
    <span>{unicode(name).char}</span>;
  
  return output;
}