import React from "react";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <>
      {/* footer start  */}
      <footer className="bg-amber-800 text-white">
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            <div>
              <Link
                to="/"
                className="text-2xl font-bold text-white flex items-center"
              >
                <span className="bg-white text-amber-800 px-2 border border-none rounded-full">
                  T
                </span>
                <span className="ml-2">Takshvi Bakery</span>
              </Link>
              <p className="text-white my-3 text-sm">
                Crafting delicious baked goods with love and tradition since
                2020. From fresh bread to custom cakes, we bring sweetness to
                your life.
              </p>
              <ul className="text-white flex gap-3">
                <li>
                  <a href="">facebook </a>
                </li>
                <li>
                  <a href="">instagram </a>
                </li>
                <li>
                  <a href=""> twitter</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Quick links</h2>
              <ul className="text-sm">
                <li>Home</li>
                <li>About</li>
                <li>Our Product</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Quick links</h2>
              <ul className="text-sm">
                <li>Home</li>
                <li>About</li>
                <li>Our Product</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Quick links</h2>
              <ul className="text-sm">
                <li>Home</li>
                <li>About</li>
                <li>Our Product</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* footer end */}
    </>
  );
}

export default Footer;
