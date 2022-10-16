// import { rgbToHex } from "../../../modules/colorize";

const ColorBoxes = (colorInput) => {
  const ColorBox = (rgb) => {
      rgb=rgb.rgb.color;
      const r = rgb[0].toFixed(3);
      const g = rgb[1].toFixed(3);
      const b = rgb[2].toFixed(3);
      const color = `rgb(${r},${g},${b})`;
      const style = {
          backgroundColor: color,
          width: '40px',
          height: '40px',
      }
      const doThis = (e) => {
        console.log(e.target.style.backgroundColor)
      }
      const box = <div onClick={(e)=>doThis(e)} style={style} />;
      return box;
  }
  return (
      <div>
          {colorInput.colorInput.map((color, index) =>
              <ColorBox rgb={color} key={index} />
          )}
      </div>
  )
}

export default ColorBoxes;