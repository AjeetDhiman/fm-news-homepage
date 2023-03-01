import React, { useContext } from "react";
import { Bars4Icon } from "@heroicons/react/24/outline";
import { XCircleIcon } from "@heroicons/react/24/outline";
import MenuItems from "./inc/MenuItems";
import MenuButton from "./inc/MenuButton";
import Overlay from "./inc/Overlay";
import Logo from "./inc/Logo";
import { AppContext } from "../contexts/context";

function Navbar() {
  const { menuState, setMenuState } = useContext(AppContext);

  return (
    <nav>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          <MenuButton
            className="block lg:hidden"
            customFunc={() => setMenuState(!menuState)}
          >
            <Bars4Icon />
          </MenuButton>
          <MenuItems className="lg:flex lg:items-center lg:justify-between gap-12 font-medium text-skin-muted hidden" />
        </div>
        <div
          className={`fixed top-0 w-64 z-20 h-screen bg-skin-white transition-all  duration-300 shadow ${
            menuState ? "right-0" : "-right-full"
          }`}
        >
          <MenuItems className="flex flex-col gap-4 pl-5 mt-32" />
          <MenuButton
            className="absolute right-4 top-5"
            customFunc={() => setMenuState(!menuState)}
          >
            <XCircleIcon />
          </MenuButton>
        </div>
        {menuState && (
          <Overlay className={`${menuState ? "right-0" : "-right-full"}`} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
