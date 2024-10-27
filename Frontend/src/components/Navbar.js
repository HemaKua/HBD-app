import React, { useState } from "react";
import restApiData from "../restApi.json"; 
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  
  const navbarLinks = restApiData && restApiData[0] && restApiData[0].navbarLinks;

  return (
    <>
      <nav>
        <div className="logo">FOODY WEBSITE</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {/* Mapping through navbarLinks */}
            {navbarLinks && navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn">OUR MENU</button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
