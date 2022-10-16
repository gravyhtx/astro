import { useState } from 'react';
// import Colorize from "../utils/colorize";
// import Color from "color";

// import Blockie from "../components/Blockie";
// import ColorBoxes from "../components/ColorBoxes";
import ColorChart from "../components/colorize/ColorChart";
import { hexToRgb, rgbToHex } from '../modules/colorize';

import { shuffleStr, shuffleArr, compareObjects, average, randomize, select } from "../utils/generator.js";


const Test = () => {
    // console.log(shuffleStr("ThiSisAt3st"));
    // const [arrays, setArrays] = useState();
    const Casino = () => {

        console.log("BLEEP BLOOP");
        const rNum = (n) => {return randomize(n)+1}

        const s1 = shuffleArr([rNum(3),rNum(3),rNum(3),rNum(3)]);
        const s2 = shuffleArr([rNum(3),rNum(3),rNum(3),rNum(3)]);
        const s3 = shuffleArr([rNum(3),rNum(3),rNum(3),rNum(3)]);
        const s4 = shuffleArr([rNum(3),rNum(3),rNum(3),rNum(3)]);

        
        const itemOne   = { a: s1[0], b: s1[1], c: s1[2], d: s1[3] };
        const itemTwo   = { a: s2[0], b: s2[1], c: s2[2], d: s2[3] };
        const itemThree = { a: s3[0], b: s3[1], c: s3[2], d: s3[3] };
        const itemFour  = { a: s4[0], b: s4[1], c: s4[2], d: s4[3] };
        
        console.log(select(s1))
        const a = compareObjects(itemOne,itemTwo);
        const b = compareObjects(itemOne,itemThree);
        const c = compareObjects(itemOne,itemFour);
        const d = compareObjects(itemTwo,itemThree);
        const e = compareObjects(itemTwo,itemFour);
        const f = compareObjects(itemThree,itemFour);

        // const score = Number(average([a,b,d]).toFixed(2));
        const score = Number(average([a,b,c,d,e,f]).toFixed(2));
        // setArrays([s1,s2,s3,s4]);
        // console.log(arrays);
        console.log(s1);
        console.log(s2);
        console.log(s3);
        console.log(s4);
        console.log("SCORE:", score);
    }

    // const itemOne = {
    //     Make: "Apple",
    //     waterResistant: true,
    //     Model: "iPad",
    //     hasScreen: "yes",
    //     Review: "Great product!",
    // };
    //  const itemTwo = {
    //     Make: "Apple",
    //     waterResistant: false,
    //     Model: "iPad",
    //     hasScreen: "yes",
    // };
    // console.log(compareObjects(itemOne, itemTwo)+"% ACCURACY!");

    // const mainColor = '#7743CE';
    // const mainColor = 'rgb(192, 250, 247)';
    const mainColor = '#f7c0fa';
    const mainColor2 = 'rgb(192, 250, 247)';
    const mainColor3 = 'rgb(195, 250, 192)';
    const mainColor4 = 'rgb(192, 239, 250)';
    // const mainColor3 = 'rgb(192, 250, 247)';
    // const mainColor4 = 'rgb(250, 247, 192)';
    // const colorOne = new Colorize(mainColor);
    // const color = (colorInput) => {
    //     return Color(colorInput);
    // }

    // console.log("Color",color(mainColor));
    // console.log("Colorize",colorOne.hslColor);

    
    console.log(rgbToHex(192, 250, 247))
    return  (
        <>
        <br/><br/>
        <div className="center">
        {/* <b>COLORS</b> */}
        <div className="sm-margin flex center"><ColorChart color={mainColor} /></div>
        <div className="sm-margin flex center"><ColorChart color={mainColor2} /></div>
        <div className="sm-margin flex center"><ColorChart color={mainColor3} /></div>
        <div className="sm-margin flex center"><ColorChart color={mainColor4} /></div>
        </div>
        <br/>
        <button onClick={Casino}>CASINO</button>
        <div>

        </div>
        </>
    )
}

export default Test;