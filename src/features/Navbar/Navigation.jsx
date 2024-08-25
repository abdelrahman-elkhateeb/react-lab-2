import { Link } from "react-router-dom";

function Navigation({ isOpen }) {
  const className =
    "sm:hover:after:bg-orange relative cursor-pointer sm:py-11 sm:text-gray-500 sm:after:absolute sm:after:bottom-0 sm:after:left-0 sm:after:h-[5px] sm:after:w-full w-full font-bold sm:font-normal text-black";

  return (
    <ul
      className={`${isOpen ? "translate-x-[-100%]" : "translate-x-[-0%]"} fixed left-0 top-0 z-40 flex h-full w-3/4 flex-col items-center gap-5 bg-white px-10 py-16 shadow-2xl transition-all duration-150 ease-in-out sm:relative sm:translate-x-0 sm:flex-row sm:px-0 sm:py-0 sm:shadow-none`}
    >
      <li className={className}>Collections</li>
      <li className={className}>Men</li>
      <li className={className}>Women</li>
      <li className={className}>About</li>
      <li className={className}>Contact</li>
      <Link to="/previousProjects" className={className}>
        previousProjects
      </Link>
    </ul>
  );
}

export default Navigation;
