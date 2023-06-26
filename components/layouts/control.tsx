"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscChromeClose } from "react-icons/vsc";

export default function ControlMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    const menu = document.getElementById("menu");
    if (isOpen) {
      menu?.classList.remove("left-0");
      setIsOpen(false);
    }
    if (!isOpen) {
      menu?.classList.add("left-0");
      setIsOpen(true);
    }
  };

  return (
    <button
      className="border-0 bg-transparent p-4 flex justify-center items-center fixed lg:hidden z-10"
      onClick={handleClick}
    >
      {!isOpen && <RxHamburgerMenu size={32} />}
      {isOpen && <VscChromeClose size={32} />}
    </button>
  );
}
