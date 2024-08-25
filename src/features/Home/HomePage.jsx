function HomePage() {
  const className = `shadow-md`;
  return (
    <div className="mt-5 grid w-full grid-cols-3 gap-4">
      <div className={`${className} `}>
        <h1>Welcome to React Lab 2</h1>
        <p>This is the home page.</p>
      </div>
      <div className={className}>
        <h1>Welcome to React Lab 2</h1>
        <p>This is the home page.</p>
      </div>
      <div className={className}>
        <h1>Welcome to React Lab 2</h1>
        <p>This is the home page.</p>
      </div>
    </div>
  );
}

export default HomePage;
