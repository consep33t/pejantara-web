import BtnPrimary from "./BtnPrimary";
import BtnSecondary from "./BtnSecondary";
import {useNavigate} from "react-router-dom";

const Header = () => {
  const navigate = useNavigate()

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
            <a href="/" className="hover:text-black">
              Beranda
            </a>
          </li>
          <li>
            <a className="hover:text-black " href="/about">
              Edukasi
            </a>
          </li>
          <li>
            <a className="hover:text-black " href="/contact">
              Berita
            </a>
          </li>
          <li>
            <a className="hover:text-black " href="/contact">
              Maps
            </a>
          </li>
          <li>
            <button className="hover:text-black " onClick={()=>navigate("/contact")}>
              Test
            </button>
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
