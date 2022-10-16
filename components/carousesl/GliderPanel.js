//  https://react-glider.vercel.app/
const GliderPanel = ({ children, perspective }) => {

  const Slide = () => {
    return (
      <div className="slide">
        { children }
      </div>
    )
  }

  const SlideOuter = () => {
    return (
      <div className="slide-outer">
        { children }
      </div>
    )
  }

  return perspective ? <SlideOuter /> : <Slide />

}


export default GliderPanel;