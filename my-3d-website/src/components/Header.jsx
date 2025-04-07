const Header = () => {
  return (
    <header className="bg-transparent p-6 shadow-md">
      <nav className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Whiskey World</h1>
        <ul className="flex space-x-6 text-white">
          <li><a href="#home" className="hover:text-indigo-300">Home</a></li>
          <li><a href="#about" className="hover:text-indigo-300">About</a></li>
          <li><a href="#contact" className="hover:text-indigo-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
