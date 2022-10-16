import Panel from "./Panel";

const Panels = ( content, autosize ) => {

  const columns = content.length === 1 ? "s12" :
    content.length === 2 ? "s6" :
    content.length === 3 ? "s4" :
    content.length === 4 ? "s3" :
    null;
  
  return(
    <div className="panels row">
      {content.map((panel, index) =>
        <Panel
          children={panel.children}
          colSize={panel.colSize && !autosize ? panel.colSize : !panel.colSize && autosize && columns ? columns : "s12"}
          bkgColor={panel.bkgColor?panel.bkgColor:null}
          bkgImg={panel.bkgImgUrl?panel.bkgImgUrl:null}
          fullHeight={panel.fullHeight?panel.fullHeight:false}
          classes={panel.classes?panel.classes:null}
          containerClasses={panel.containerClasses?panel.containerClasses:null}
          styles={panel.styles?panel.styles:null}
          key={index} />
      )}
    </div>
  )
}

export default Panels;