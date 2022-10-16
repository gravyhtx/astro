const SvgContainer = ( { margins, src, color, description, container, classes, id, styles, drag, maxWidth } ) => {
  let svgContainer="";
  if(container){svgContainer=" "+container;}
  let svgClass="";
  if(classes){svgClass=" "+classes;}
  let svgId="";
  if(id){svgId=" "+id;}

  if(color === "white") {
    color = "invert(100%)"
  }

  margins=margins?margins:"0 auto"
  let svgStyles = {
    margin:margins,
    maxWidth:maxWidth,
    styles
  }

  let path;

  if(src.src){ path = src.src }
  else { path = src }

  return (
    <div className={"svg-container"+svgContainer}>
      <img
        style={svgStyles ? svgStyles : {}}
        src={src ? path : ""}
        className={"svg-img"+svgClass}
        id={svgId ? "svg-img_"+svgId : ""}
        draggable={drag ? drag : false}
        alt={description} />
    </div>
  )
}

export default SvgContainer