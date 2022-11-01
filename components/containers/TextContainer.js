const TextContainer = ({ containerClasses, containerId, header, headerClasses, headerId, children, textId, textClasses, contain, border, margin, fnClick, fnChange, fnBlur }) => {
  const cClass = containerClasses ? " "+containerClasses : "";
  const cId = containerId || "";
  const hId = headerId || "";
  const tId = textId || "";
  const hClass = headerClasses ? " "+headerClasses  : "";
  const tClass= textClasses ? " "+textClasses: "";
  const borders = border ? " borders" : "";

  const margins = margin === false ? "text-container no-margin" : "text-container"
  const container = contain ? " contain" : "";

  const handleClick = () =>  fnClick();

  const handleChange = () => fnChange();

  const handleBlur = () => fnBlur();

  return (
    <div className={margins + container}>
      <div
        onClick={fnClick?handleClick:null}
        onChange={fnChange?handleChange:null}
        onBlur={fnBlur?handleBlur:null}
        className={"text-container box" + cClass + borders}
        id={cId}>
          {header ? <header className={"text-container_header"+hClass} id={hId}>{header}</header> : <></>}
          {children ? <div className={"text-container_text"+tClass} id={tId}>{children}</div> : <></>}
      </div>
    </div>
  )
}


////////////////////////////////
//-- TEXT-CONTAINER CLASSES --//
////////////////////////////////

// CONTAINER
//    Background: no-bkg, dark, light, dark-gradient
//    Box: padding, margin, no-margin/padding

// BORDERS
//    FX: thick, dark, shadow, glow
//    reverse

// HEADER:
//    dark, light, big, small, thick, thin, glow

// TEXT:
//    dark, light, dark-gradient


export default TextContainer;