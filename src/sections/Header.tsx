export const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-20">
      <nav className="flex gap-1 p-2 justify-center items-center border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="/" className="nav-item">
        Нүүр
        </a>
        <a href="#projects" className="nav-item">
        Төслүүд
        </a>
        <a href="#about" className="nav-item">
        Танилцуулга
        </a>
        <a href="#contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">
          Холбогдох
        </a>
      </nav>
    </div>
  );
};
