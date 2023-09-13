import classNames from "classnames";
import React, { useState, useEffect, useRef } from "react";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import Icons from "../../../configs/icon.config.tsx";
import logo from "../../../assets/logo.png";
import { Image } from "antd";

interface ButtonProp {
  classname?: string;
  label?: string | React.ReactNode;
  onclick?: () => void;
  ondblClick?: () => void;
}
function TopBar({ classname, onclick, ondblClick }: ButtonProp) {
  const [isSticky, setIsSticky] = useState(false);
  const [active, setActive] = useState("/");
  const sectionsRef: any = {
    landing: useRef(null),
    tour: useRef(null),
    // Add more sections as needed
  };

  const tourSectionRef: any = useRef(null); //

  const classes = classNames("navbar", classname, {
    sticky: isSticky,
  });

  useEffect(() => {
    // Function to handle scroll event
    // Inside the handleScroll function in the TopBar component
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      const sectionInView = Object.keys(sectionsRef).find((section: any) => {
        const element: any = sectionsRef[section].current;
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= 0 && rect.bottom <= window.innerHeight;
        }
        return false;
      });

      if (sectionInView) {
        setActive(sectionInView);
      } else if (
        tourSectionRef.current &&
        tourSectionRef.current.getBoundingClientRect().top <= window.innerHeight
      ) {
        setActive("tour");
      }
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (sectionId: any) => {
    const section = document.getElementById(sectionId);
    setActive(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={classes} onClick={onclick} onDoubleClick={ondblClick}>
      <div>
        <NavLink to={"/#landing"} onClick={() => handleNavLinkClick("landing")}>
          <Image
            preview={false}
            src={logo}
            alt={"logo"}
            style={{ height: 90, width: "100%" }}
            className={"hover:scale-105 transition-all delay-100"}
          />
        </NavLink>
      </div>
      <div className={"items"}>
        <NavLink to={"/#tour"} onClick={() => handleNavLinkClick("tour")}>
          <span
            className={`menu-item ${
              active === "tour" ? "menu-item-active" : null
            }`}
          >
            <span className={"icons"}>{Icons.tourIcon}</span> Take a tour
          </span>
        </NavLink>
        <NavLink to={"/contact"}>
          <span className={"menu-item"}>
            <span className={"icons"}>{Icons.handShake}</span> Say Hello
          </span>
        </NavLink>
        <NavLink to={"/#landing"} onClick={() => handleNavLinkClick("landing")}>
          <span className={"menu-item"}>
            <span className={"icons"}>{Icons.handShake}</span> Show Projects
          </span>
        </NavLink>
      </div>
    </nav>
  );
}

export default TopBar;
