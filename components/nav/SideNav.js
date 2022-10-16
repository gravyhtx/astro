import Link from "next/link";
import website from '../../config/site-data.json';

import { useScreenWidth } from "../../utils/useWindow";
import NavLinks from "./NavLinks";

const SideNav = ({ position, header, activate, setActivate, blur }) => {

  // Add active class when open
  let active = activate ? ' active' : '';
  // Setting 'blur' to true will blur the background behind the modal.
  blur = blur ? ' blur-background' : '';

  // Automatically position to left side
  if (position === 'left' || position === true) {
    position = 'left';
  } else {
    position = 'right';
  }

  // Determine screen width and position...
  // If right -- add width / if left -- subtract width
  // Slide in nav from outside of screen with screen width
  let screenWidth = useScreenWidth();

  // Set styles for dynamic navigation container
  let navStyles = {
    width: screenWidth > 500 ? '380px' : screenWidth,
  }

  const close = () => {
    setActivate(!activate);
  }

  return (<>
    { activate ? <>
    <div className={'sidenav-outer darken-content'} onClick={() => close()}>
    </div>
    <nav className={"sidenav-wrapper"+active} style={navStyles}>
      {header ? <div className="sidenav-header">{header}</div> : <></>}
      <ul className="sidenav-menu">
        <NavLinks />
      </ul>
    </nav></> : <></> }
  </>)
}

export default SideNav;