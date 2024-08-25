import Avatar from "./Avatar";
import Cart from "./Cart";
import Logo from "./Logo";
import Navigation from "./Navigation";
import menu from "../../imgs/icon-menu.svg";
import close from "../../imgs/icon-close.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="flex items-center justify-between py-6 sm:border-b-[1px] sm:py-0">
      <div className="relative flex items-center gap-5 sm:gap-16">
        <img
          src={isOpen ? menu : close}
          alt=""
          className="z-50 cursor-pointer sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
        />

        <Link to="/">
          <Logo />
        </Link>

        <Navigation isOpen={isOpen} />
      </div>

      <div className="relative flex items-center gap-5 sm:gap-10">
        <Cart />
        <Avatar />
      </div>
    </div>
  );
}

export default NavBar;
