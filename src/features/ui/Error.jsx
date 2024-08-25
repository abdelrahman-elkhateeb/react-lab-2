import { Link } from "react-router-dom";
import error from "../../imgs/error404.svg";

function Error() {
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4">
      <div className="mt-9 flex w-full items-center justify-center">
        <img src={error} alt="error" />
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
