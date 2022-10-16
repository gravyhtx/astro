import Link from "next/link";
import { navlinks } from "../../config/theme";

const NavLinks = () => {
  return (
  navlinks.map((item, index) => {
    return (
      <li className="menu-item" alt={item.alt} key={index}>
        <Link href={item.link}>
          <a>{item.name}</a>
        </Link>
      </li>
    )})
  )
}

export default NavLinks;