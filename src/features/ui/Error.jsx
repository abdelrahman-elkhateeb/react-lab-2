import { Link } from "react-router-dom";
import style from "./Error.module.css";
function Error() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4">
      <div className="mt-9 flex w-full md:w-2/4 items-center justify-center">
        <div className={style.gif}></div>
      </div>
      <h2 className="mt-4 text-center text-gray-600 md:text-5xl">
        Oops! It seems that the page you're trying to access doesn't exist.
        Please double-check the URL or try a different one.
      </h2>
      <Link
        to="/"
        className="mt-4 rounded p-2 font-bold text-cyan-500 transition hover:text-cyan-900 md:text-3xl"
      >
        return to home page 👈
      </Link>
    </div>
  );
}

export default Error;
