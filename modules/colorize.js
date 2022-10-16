import Color from 'color';

export class Colorize {
  constructor(colorInput) {
    this.color = Color(colorInput);
    this.hslColor = Color(this.color.hsl().string());
    this.hslExact = Color(this.color.hsl());
  }
  primary() { return this.hslColor.rgb(); }
  complementary () {
    // console.log("THIS HSL",this.hslColor.color)
    return [
      this.hslColor.rgb(),
      this.hslColor.rotate(90).rgb(),
      this.hslColor.rotate(180).rgb()
    ]
  }
  triad() {
    return [
      this.hslColor.rgb(),
      this.hslColor.rotate(300).rgb(),
      this.hslColor.rotate(240).rgb()
    ]
  }
  analogous() {
    return [
      this.hslColor.rgb(),
      this.hslColor.rotate(45).rgb(),
      this.hslColor.rotate(90*(-1)).rgb()
    ]
  }
  similar() {
    return [
      this.hslColor.rgb(),
      this.hslColor.rotate(-15).rgb(),
      this.hslColor.rotate(15).rgb()
    ]
  }
};


export const valToHex = (c) => {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

export const rgbToHex = (r, g, b) => {
  // return "#" + valToHex(r) + valToHex(g) + valToHex(b);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

export const hexToRgb = (hex) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function(m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// const color = Color('#7743CE').alpha(0.5).lighten(0.5);
// console.log(color.hsl().string()); // 'hsla(262, 59%, 81%, 0.5)'

// console.log(color.cmyk().round().array()); // [ 16, 25, 0, 8, 0.5 ]

// console.log(color.ansi256().object()); // { ansi256: 183, alpha: 0.5 }

// COMPLEMENTARY COLORS
// export var complementaryColors = (colorInput) => {
//   this.color = Color(colorInput);
//   this.hslColor = Color(this.color.hslString());
// };
// complementaryColors.prototype.primary = function () {
//   return [
//     this.hslColor.rgb()
//   ]
// };
// complementaryColors.prototype.complementary = function () {
//   return [
//     this.hslColor.rgb(),
//     this.hslColor.rotate(180).rgb()
//   ]
// };
// complementaryColors.prototype.triad = function () {
//   return [
//     this.hslColor.rgb(),
//     this.hslColor.rotate(120).rgb(),
//     this.hslColor.rotate(120).rgb()
//   ]
// };
// complementaryColors.prototype.analogous = function () {
//   return [
//     this.hslColor.rotate(-30).rgb(),
//     this.hslColor.rgb(),
//     this.hslColor.rotate(30).rgb()
//   ]
// };
// complementaryColors.prototype.splitComplementary = function () {
//   return [
//     this.hslColor.rgb(),
//     this.hslColor.rotate(-30).rgb(),
//     this.hslColor.rotate(30).rgb()
//   ]
// };
// complementaryColors.prototype.tetradic = function () {
//   return [
//     this.hslColor.rgb(),
//     this.hslColor.rotate(90).rgb(),
//     this.hslColor.rotate(180).rgb(),
//     this.hslColor.rotate(240).rgb()
//   ]
// };
// complementaryColors.prototype.square = function () {
//   return [
//     this.hslColor.rgb(),
//     this.hslColor.rotate(90).rgb(),
//     this.hslColor.rotate(180).rgb(),
//     this.hslColor.rotate(270).rgb()
//   ]
// };



// // Complement
//   temprgb={ r: 0, g: 0xff, b: 0xff }; // Cyan
//   temphsv=RGB2HSV(temprgb);
//   temphsv.hue=HueShift(temphsv.hue,180.0);
//   temprgb=HSV2RGB(temphsv);
//   console.log(temprgb); // Complement is red (0xff, 0, 0)
  
//   function RGB2HSV(rgb) {
//   	hsv = new Object();
//   	max=max3(rgb.r,rgb.g,rgb.b);
//   	dif=max-min3(rgb.r,rgb.g,rgb.b);
//   	hsv.saturation=(max==0.0)?0:(100*dif/max);
//   	if (hsv.saturation==0) hsv.hue=0;
//   	else if (rgb.r==max) hsv.hue=60.0*(rgb.g-rgb.b)/dif;
//   	else if (rgb.g==max) hsv.hue=120.0+60.0*(rgb.b-rgb.r)/dif;
//   	else if (rgb.b==max) hsv.hue=240.0+60.0*(rgb.r-rgb.g)/dif;
//   	if (hsv.hue<0.0) hsv.hue+=360.0;
//   	hsv.value=Math.round(max*100/255);
//   	hsv.hue=Math.round(hsv.hue);
//   	hsv.saturation=Math.round(hsv.saturation);
//   	return hsv;
//   }
  
//   // RGB2HSV and HSV2RGB are based on Color Match Remix [http://color.twysted.net/]
//   // which is based on or copied from ColorMatch 5K [http://colormatch.dk/]
//   function HSV2RGB(hsv) {
//   	var rgb=new Object();
//   	if (hsv.saturation==0) {
//   		rgb.r=rgb.g=rgb.b=Math.round(hsv.value*2.55);
//   	} else {
//   		hsv.hue/=60;
//   		hsv.saturation/=100;
//   		hsv.value/=100;
//   		i=Math.floor(hsv.hue);
//   		f=hsv.hue-i;
//   		p=hsv.value*(1-hsv.saturation);
//   		q=hsv.value*(1-hsv.saturation*f);
//   		t=hsv.value*(1-hsv.saturation*(1-f));
//   		switch(i) {
//   		case 0: rgb.r=hsv.value; rgb.g=t; rgb.b=p; break;
//   		case 1: rgb.r=q; rgb.g=hsv.value; rgb.b=p; break;
  // 		case 2: rgb.r=p; rgb.g=hsv.value; rgb.b=t; break;
  // 		case 3: rgb.r=p; rgb.g=q; rgb.b=hsv.value; break;
  // 		case 4: rgb.r=t; rgb.g=p; rgb.b=hsv.value; break;
  // 		default: rgb.r=hsv.value; rgb.g=p; rgb.b=q;
  // 		}
  // 		rgb.r=Math.round(rgb.r*255);
  // 		rgb.g=Math.round(rgb.g*255);
  // 		rgb.b=Math.round(rgb.b*255);
  // 	}
  // 	return rgb;
  // }