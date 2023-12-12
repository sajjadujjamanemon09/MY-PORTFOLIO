import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-teal-900 text-base-content rounded">
        <nav className="grid text-gray-300 grid-flow-col gap-4">
          <Link to='/aboutMe' className="link link-hover">About Me</Link>
          <Link to='/contact' className="link link-hover">Contact</Link>
          <Link to='/' className="link link-hover">Press kit</Link>
        </nav>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a href="https://twitter.com/sajjadujjaman09" className="text-3xl text-white">
              <FaTwitter/>
            </a>
            <a href="https://www.facebook.com/sajjaduj.jaman09" className="text-3xl text-white">
              <FaFacebookF/>
            </a>
            <a href="https://www.linkedin.com/in/sajjaduj-jaman09" className="text-3xl text-white">
              <FaLinkedin />
            </a>
          </div>
        </nav>
        <aside>
          <p className="text-gray-200">Copyright © 2023 - All right reserved by Md Sajjaduj Jaman</p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
