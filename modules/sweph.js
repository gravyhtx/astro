import sweph from 'sweph';


// const jd = julDay(5, 25, 2010, 14.5); // 2455342.1041666665
export const julDay = (mm,dd,yyyy,hr,julCal) => {
  const gregflag = julCal ? constants.SE_JUL_CAL : constants.SE_GREG_CAL;
  return sweph.julday(yyyy,mm,dd,hr,gregflag)
}

export const swephCalc = (tjd_et, ipl) => {
  // tjd_et: number // Julian day in terrestrial/ephemeris time
  // ipl: number // Target object ID
  // iflag: number // Calculation flags
  const flags = constants.SEFLG_SWIEPH | constants.SEFLG_SPEED;

  // const result = calc(2314234, constants.SE_VENUS, flags);
  // if(result.flag === constants.ERR) { throw new Error(result.error); }
  // if(result.flag !== flags) { console.log(result.error); }
  return sweph.calc(tjd_et, ipl, flags)
  // console.log(`Longitude: ${result.data[0]}`);
}
