const Header = () => {
  return (
    <header className="header w-full h-[108px] px-16">
      <nav className="nav w-full h-full">
        <ul className="flex justify-between h-full items-center">
          <div className="logo w-[155px] h-full">
            <img
              className="h-full hover:cursor-pointer"
              src="/logo header.png"
              alt="logo"
              width={155}
              height={108}
            />
          </div>
          <div className="link flex gap-10 h-full p-3 items-end text-xl text-accent">
            <li>
              <a href="/" className="hover:text-black">
                Beranda
              </a>
            </li>
            <li>
              <a className="hover:text-black" href="/about">
                Edukasi
              </a>
            </li>
            <li>
              <a className="hover:text-black" href="/contact">
                Berita
              </a>
            </li>
            <li>
              <a className="hover:text-black" href="/contact">
                Maps
              </a>
            </li>
          </div>
          <div className="profile flex gap-10 h-full p-3 items-end text-xl">
            <a className="hover:text-black" href="/login">
              Login
            </a>
            <a className="hover:text-black" href="/register">
              Register
            </a>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
