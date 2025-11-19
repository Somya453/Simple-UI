import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";



function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Column 1 */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">About Us</h2>
          <p className="text-sm">
            We build cool, responsive, and modern web apps using React & Tailwind.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">About</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Follow Us</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Instagram <FaInstagram /></a></li>
            <li><a href="#" className="hover:text-white">Twitter <FaXTwitter /></a>

    </li>
            <li><a href="#" className="hover:text-white">LinkedIn <FaLinkedin /></a></li>
            <li><a href="#" className="hover:text-white">GitHub <FaGithub /></a></li>
          </ul>
              </div>
              

              <div className="w-[95 0px] h-[1px] bg-gray-100">
                  
              </div>

      </div>

      <div className="text-center text-gray-500 mt-8 text-sm">
        © 2025 All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
