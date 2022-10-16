import Image from "next/image";
import website from '../../config/site-data.json'

const ImageContainer = ({ img, width, height, size, useNext, containerClasses, imgClasses, layout,
  description, id, containerId, priority, blur, drag, contain }) => {
  // Check imported as Next image -- Next uses 'image.src' to get the location
  const data = img.src ? img : { src: img };
  const dataSrc = data.src;;

  useNext = useNext === true ? true : false;
  size = size ? size : false;

  const imageData = {
      containerClasses: containerClasses ? ' '+containerClasses : '',
      imgClasses: imgClasses ? ' '+imgClasses : '',
      width: width ? { width:width, maxWidth:width } : {},
      height: height ? height : '',
      layout: layout ? layout : 'responsive',
      description: description ? description : website.name+" Image",
      id: id ? id : '',
      priority: priority ? priority : '',
      blur: blur ? "blur" : "",
      drag: drag ? drag : false,
      contain: contain ? " contain" : ""
  }

  const containerStyles = size ? { width: size[0], height: size[1] ? height : width } : {};
  
  return (
    <div style={containerStyles} className={"image-container"+imageData.containerClasses+imageData.contain} id={containerId}>
      {size !== false && useNext === true ?
        <Image
          width={size[0] ? size[0] : "100%"}
          height={size[1] ? size[1] : "100%"}
          layout={imageData.layout}
          className={"image-class"+imageData.imgClasses}
          alt={imageData.description}
          src={dataSrc}
          id={imageData.id}
          placeholder={imageData.blur}
          draggable={imageData.drag}
          priority={imageData.priority} />
      : size === false && useNext ?
        <Image
          layout={imageData.layout}
          className={"image-class"+imageData.imgClasses}
          alt={imageData.description}
          src={dataSrc}
          id={imageData.id}
          placeholder={imageData.blur}
          draggable={imageData.drag}
          priority={imageData.priority} />
      : <img
          className={"image-class"+imageData.imgClasses}
          alt={imageData.description}
          src={dataSrc}
          id={imageData.id}
          draggable={imageData.drag} />}
    </div>
  )
      
}

export default ImageContainer;