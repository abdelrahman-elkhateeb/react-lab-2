function Button({ children, handleDecrement, handleIncrement, handleReset }) {
  const classNameIncDec = ` bg-green-400 hover:bg-green-900`;

  const className = `text-white rounded-xl px-5 py-2`;

  if (handleDecrement)
    return (
      <button
        className="rounded-xl bg-green-400 px-5 py-2 duration-300 hover:bg-green-900"
        onClick={handleDecrement}
      >
        {children}
      </button>
    );
  else if (handleIncrement)
    return (
      <button
        className={`${classNameIncDec} ${className}`}
        onClick={handleIncrement}
      >
        {children}
      </button>
    );
  else if (handleReset) {
    return (
      <button
        className={`${className} w-full bg-red-500 hover:bg-red-900`}
        onClick={handleReset}
      >
        {children}
      </button>
    );
  }
}

export default Button;
