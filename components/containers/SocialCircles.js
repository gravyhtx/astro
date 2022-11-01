import SvgContainer from './SvgContainer';

import iconGithub from '../../public/images/icons/github_social-circles.svg';
import iconInsta from '../../public/images/icons/instagram_social-circles.svg';
import iconTwttr from '../../public/images/icons/twitter_social-circles.svg';
import iconDiscord from '../../public/images/icons/discord_social-circles.svg';
import iconTikTok from '../../public/images/icons/tiktok_social-circles.svg';

import website from '../../config/site-data.json';
import { checkType } from '../../utils/validation';


const SocialIcon = ({ name, classes, rowClasses, totalRowAmt, totalIconsPerRow, width, alt, link, src }) => {

  const rowSize = rowSize === checkType(row, 'number') ? row : row === false ? false : 1;
  const colSize = checkType(colSize, 'number') ? 's'+( 12 / totalIconsInRow ) : 's12';

  return (
    <div className={"row"?rowClasses:" "+rowClasses} id={rowId?rowId:null}>
    <div className={'col '+colSize} aria-label={"Follow us on "+name} key={i}>
      <SvgContainer
        layout="responsive"
        classes={"social-icon link"+classes}
        width={width}
        description={alt}
        link={link}
        color={"white"}
        src={src} />
    </div>
    </div>
  )
}


export const IconInsta = () =>
  <SocialIcon
    name={icons[0].name}
    classes={iClass}
    width={width}
    alt={icons[0].alt}
    link={icons[0].link}
    src={icons[0].src} />

export const IconTwttr = () =>
  <SocialIcon
    name={icons[1].name}
    classes={iClass}
    width={width}
    alt={icons[1].alt}
    link={icons[1].link}
    src={icons[1].src} />

export const IconTikTok = () =>
  <SocialIcon
    name={icons[2].name}
    classes={iClass}
    width={width}
    alt={icons[2].alt}
    link={icons[2].link}
    src={icons[2].src} />

export const IconGithub = () =>
  <SocialIcon
    name={icons[3].name}
    classes={iClass}
    width={width}
    alt={icons[3].alt}
    link={icons[3].link}
    src={icons[3].src} />

const addIcon = (iconName, iconLink) => {
  const icons = [
    {
      src: Instagram,
      link: website.instagramUrl,
      alt: icon1alt,
      name: "IconInsta"
    },{
      src: icon2,
      link: icon2link,
      alt: icon2alt,
      name: "IconTwttr"
    },{
      src: icon3,
      link: icon3link,
      alt: icon3alt,
      name: "IconTikTok"
    },{
      src: icon4,
      link: icon4link,
      alt: icon4alt,
      name: "IconGithub"
    }
  ]
  let iconObj = null;
  iconName = checkType(iconName, 'string') ? iconName.toLowerCase().trim() : null;
  if(iconLink === ( 'site' || 'website' )) {
    switch(iconName) {
      case 'instagram':
        iconObj = {

        }
    }
  }
}

const SocialCircles = ({ iconsObj, width, socialContainer, iClass, }) => {
  // presetIcons = [{
  //  name:'instagram',
  //  link: 
  //  
  //  }]
  // wwwIcon = {}

  iClass=iClass?" "+iClass:" svg-color-light";
  socialContainer=socialContainer?" "+socialContainer:"";

  let presetIconsArr = [...presetIconsArr];

  if(presetIcons) {
    for(let i=0; i < presetIcons.length; i++) {

    }
  }

  return (
    <div className={"social-circles icon-container row"}>
      {icons.map((icon, i) => (
        <SocialIcon
          name={icon.name}
          classes={iClass}
          width={width}
          alt={icon.alt}
          link={icon.link}
          src={icon.src} />
      ))}
    </div>
  )
}


export const SocialStructure = ({ children }) => <div className={"social-circles icon-container row"}>{ children }</div>


export default SocialCircles;