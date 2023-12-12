import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <footer className="footer footer-center p-10 bg-teal-900 text-base-content rounded">
        <nav className="grid text-gray-300 grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
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
