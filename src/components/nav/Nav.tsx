import { Drawer, IconButton, List, ListItem } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { Fragment, useEffect, useState } from "react";
import "./nav.css";

export default function Nav() {
  const navItems = [
    { name: "Home", classRef: "mainContainer" },
    { name: "About", classRef: "aboutContainer" },
    { name: "Skills", classRef: "skillsContainer" },
    { name: "Projects", classRef: "projectsContainer" },
    { name: "Contact", classRef: "contactContainer" },
  ];

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState(navItems[0].name)

  const scrollToDiv = (item: {name: string, classRef: string}) => {
    setMobileNavOpen(false);
    setTimeout(() => {
      const element = document.getElementsByClassName(item.classRef)[0];
      element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    }, 50);
    setActiveMenuItem(item.name);
  };

  const onScroll = () => {
    setActiveMenuItem(navItems[0].name)
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", onScroll);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <Fragment>
      <div className="navbar">
        <div className="navContainer">
          {navItems.map(item => {
            return (
              <div className={`navItem ${activeMenuItem === item.name ? 'selected' : 'inactive'}`} onClick={() => scrollToDiv(item)}>
                {item.name}
              </div>
            );
          })}
        </div>
        <div className="navSeperator" />
      </div>
      <div className="navbar-mobile">
        <IconButton onClick={() => setMobileNavOpen(true)}>
          <MenuIcon />
        </IconButton>
        <Drawer anchor="left" open={mobileNavOpen} onClose={() => setMobileNavOpen(false)}>
          <List>
            {navItems.map(item => {
              return (
                <ListItem className="navItem" onClick={() => scrollToDiv(item)}>
                  {" "}
                  {item.name}{" "}
                </ListItem>
              );
            })}
          </List>
        </Drawer>
      </div>
    </Fragment>
  );
}
