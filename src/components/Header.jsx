import { Link } from "react-router-dom";
import BtnPrimary from "./BtnPrimary";
import BtnSecondary from "./BtnSecondary";

const Header = () => {
  return (
    <header className="header w-full h-[108px] px-16">
      <nav className="nav w-full h-full flex justify-between items-center">
        <div className="logo w-[155px] h-full">
          <img
            className="h-full hover:cursor-pointer"
            src="/logo header.png"
            alt="logo"
            width={155}
            height={108}
          />
        </div>
        <ul className="link flex gap-10 h-full p-3 items-end text-xl text-accent no-underline">
          <li className="">
            <Link className="hover:text-black" to="/">
              Beranda
            </Link>
          </li>
          <li>
            <Link className="hover:text-black" to="/edukasi">
              Edukasi
            </Link>
          </li>
          <li>
            <Link className="hover:text-black" to="/berita">
              Berita
            </Link>
          </li>
          <li>
            <Link className="hover:text-black" to="/peta">
              Peta
            </Link>
          </li>
          <li>
            <Link className="hover:text-black" to="/tentang-kami">
              Tentang Kami
            </Link>
          </li>
        </ul>
        <div className="profile flex gap-5 h-full p-3 items-end text-xl">
          <BtnPrimary>Register</BtnPrimary>
          <BtnSecondary>Login</BtnSecondary>
        </div>
      </nav>
    </header>
  );
};

export default Header;
