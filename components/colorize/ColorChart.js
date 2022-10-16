import { Colorize } from "../../modules/colorize"
import ColorBoxes from "./ColorBoxes"

const ColorChart = (color) => {
    const output = new Colorize(color.color);
    return (
        <>
        <ColorBoxes colorInput={output.complementary()} />
        <ColorBoxes colorInput={output.triad()} />
        <ColorBoxes colorInput={output.analogous()} />
        <ColorBoxes colorInput={output.similar()} />
        {/* <ColorBoxes colorInput={output.analogous()} />
        <ColorBoxes colorInput={output.triad()} />
        <ColorBoxes colorInput={output.complementary()} /> */}
        </>
    )
}

export default ColorChart;