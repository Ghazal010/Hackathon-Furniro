import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="bg-white text-gray-800 py-10 w-screen">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          <div>
            <h2 className="text-3xl font-bold mb-4">Funiro.</h2>
            <p className="text-gray-400">
              400 University Drive Suite 200 Coral Gables, <br />
              FL 33134 USA
            </p>
          </div>

          
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">Links</h3>
            <ul className="space-y-4 text-black font-bold">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/Shop" className="hover:text-gray-900 transition">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">Help</h3>
            <ul className="space-y-4 text-black font-bold">
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Payment Options
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Privacy Policies
                </a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-gray-400 font-semibold mb-4">Newsletter</h3>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full sm:flex-grow px-3 py-2 border-b-2 border-black focus:outline-none"
              />
              <button className="w-full sm:w-auto px-4 py-2 bg-black text-white font-bold border-b-[2px] border-black text-xs transition hover:bg-gray-800">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

       
        <div className="border-t mt-10 pt-4 text-center text-gray-600 text-sm">
          2023 Furniro. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
