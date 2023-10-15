import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar({ id }) {
  const [nav, setNav] = useState(false);

  function handleNav() {
    setNav((nav) => !nav);
  }

  function handleClick() {}

  return (
    <div
      className=" mx-auto flex h-24 max-w-[1240px] items-center justify-between px-4 text-white"
      id={id || ""}
    >
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] duration-500 ease-in"
            : "fixed left-[-100%] duration-500"
        }
      >
        <h1 className="m-4 w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className="p-4 uppercase ">
          <li className="border-b border-gray-600 p-4">Home</li>
          <li className="border-b border-gray-600 p-4">Company</li>
          <li className="border-b border-gray-600 p-4">Resources</li>
          <li className="border-b border-gray-600 p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
