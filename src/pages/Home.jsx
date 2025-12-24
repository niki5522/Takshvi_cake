import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faUsers,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
import { FaStar } from "react-icons/fa";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Header />
      {/* hero section start */}
      <div className="bg-[#fff7ed] ">
        <div className="max-w-7xl  mx-auto  px-4 lg:py-10  md:py-4">
          <div className="flex flex-col lg:flex-row  items-center gap-12 py-12">
            {/* Text Column */}
            <div className="w-full lg:w-1/2 md:px-8">
              <h6 className="text-amber-800 bg-slate-300 max-w-fit px-3  rounded-xl text-sm">
                Fresh Daily
              </h6>
              <h1 className="text-6xl font-extrabold text-gray-900 leading-tight mb-4">
                Freshly Baked Happiness
              </h1>
              <p className="text-lg text-gray-600 mb-6 ">
                Experience the warmth of our traditional recipes and artisanal
                craftsmanship. Every bite tells a story of passion and
                dedication to quality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button className="bg-amber-800 text-white px-6 py-2 text-lg  rounded hover:bg-amber-700 transition duration-300">
                  shop now
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2 text-white"
                  />
                </button>
                <button className="border border-amber-800  text-amber-800 px-6 py-2 text-lg rounded hover:bg-amber-100 transition duration-300">
                  learn more
                </button>
              </div>
            </div>

            {/* Image Column */}
            <div className="w-full sm:w-4/5 lg:w-1/2">
              <img
                src="src/assets/images/hero-section.png"
                alt="Hero"
                className="mx-auto w-full h-auto max-w-[700px] rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
      {/* hero section end */}

      {/* why choose section start */}
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto my-12 px-4">
          <h1 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
            Why Choose Takshvi Bakery?
          </h1>
          <p className="text-lg md:text-lg text-gray-600">
            We're committed to delivering the finest baked goods with
            exceptional service.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 text-center my-12">
          {/* Card 1 */}
          <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
            <div className="mx-auto rounded-full bg-gray-100 w-[120px] h-[120px] flex items-center justify-center text-4xl text-amber-700">
              <FontAwesomeIcon icon={faClock} />
            </div>
            <h2 className="text-xl font-semibold mt-6">Fresh Daily</h2>
            <p className="mt-2 text-gray-600">
              All our products are baked fresh daily using the finest
              ingredients.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
            <div className="mx-auto rounded-full bg-gray-100 w-[120px] h-[120px] flex items-center justify-center text-4xl text-amber-700">
              <FontAwesomeIcon icon={faUsers} />
            </div>
            <h2 className="text-xl font-semibold mt-6">Family Recipes</h2>
            <p className="mt-2 text-gray-600">
              Traditional recipes passed down through generations of master
              bakers.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex-1 bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition">
            <div className="mx-auto rounded-full bg-gray-100 w-[120px] h-[120px] flex items-center justify-center text-4xl text-amber-700">
              <FontAwesomeIcon icon={faAward} />
            </div>
            <h2 className="text-xl font-semibold mt-6">Quality Guaranteed</h2>
            <p className="mt-2 text-gray-600">
              Premium ingredients and rigorous quality standards in every
              product.
            </p>
          </div>
        </div>
      </div>
      {/* why choose section end */}

      {/* featured section start */}
      <div className="bg-[#fff7ed] ">
        <div className="container mx-auto px-4 py-10 ">
          <div className="text-center max-w-3xl mx-auto sm:my-10">
            <h1 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Takshvi Bakery?
            </h1>
            <p className="text-lg md:text-lg text-gray-600">
              We're committed to delivering the finest baked goods with
              exceptional service.
            </p>
          </div>

          <div className="min-h-fit my-12  flex items-center justify-center px-4 ">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
              {/* Card 1 */}
              <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">
                <img
                  src="./src/assets/images/feature-card-1.png"
                  alt="Card 1"
                  className="w-full h-60  object-cover object-center transform transition-transform duration-500 hover:scale-105"
                />
                <div className="p-4">
                  <h5 className="text-xl font-semibold mb-2">Card One</h5>
                  <p className="text-gray-700 mb-4">
                    This is the first card's content. It includes a short
                    paragraph.
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="w-1/2 bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 transition"
                    >
                      Primary
                    </button>
                    <button
                      type="button"
                      className="w-1/2 border  border-amber-700 text-amber-800 px-4 py-2 rounded hover:bg-amber-50 transition"
                    >
                      Outline
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">
                <img
                  src="./src/assets/images/feature-card-1.png"
                  alt="Card 1"
                  className="w-full h-60  object-cover object-center transform transition-transform duration-500 hover:scale-105"
                />
                <div className="p-4">
                  <h5 className="text-xl font-semibold mb-2">Card One</h5>
                  <p className="text-gray-700 mb-4">
                    This is the first card's content. It includes a short
                    paragraph.
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="w-1/2 bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 transition"
                    >
                      Primary
                    </button>
                    <button
                      type="button"
                      className="w-1/2 border  border-amber-700 text-amber-800 px-4 py-2 rounded hover:bg-amber-50 transition"
                    >
                      Outline
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="max-w-sm bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg">
                <img
                  src="./src/assets/images/feature-card-1.png"
                  alt="Card 1"
                  className="w-full h-60  object-cover object-center transform transition-transform duration-500 hover:scale-105"
                />
                <div className="p-4">
                  <h5 className="text-xl font-semibold mb-2">Card One</h5>
                  <p className="text-gray-700 mb-4">
                    This is the first card's content. It includes a short
                    paragraph.
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      className="w-1/2 bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-700 transition"
                    >
                      Primary
                    </button>
                    <button
                      type="button"
                      className="w-1/2 border  border-amber-700 text-amber-800 px-4 py-2 rounded hover:bg-amber-50 transition"
                    >
                      Outline
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              type="button"
              className="mx-auto border  border-amber-700 text-amber-800 px-4 py-2 rounded hover:bg-amber-50 transition"
            >
              Outline
            </button>
          </div>
        </div>
      </div>
      {/* featured section end */}

      {/* what our customer say section start */}
      <div className="container mx-auto px-4 py-10 ">
        <div className="text-center max-w-3xl mx-auto sm:my-10">
          <h1 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h1>
        </div>

        {/* card */}

        <div className="flex flex-col lg:flex-row gap-6 py-10">
          {/* Card 1 */}
          <div className="flex flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            {/* <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-600 text-white text-2xl mb-3">
              <svg className="w-6 h-6" aria-hidden="true">
                <use xlinkHref="#collection"></use>
              </svg>
            </div> */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex">
              <FaStar className="text-yellow-500 text-lg" />
              <FaStar className="text-yellow-500 text-lg" />
              <FaStar className="text-yellow-500 text-lg" />
              <FaStar className="text-yellow-500 text-lg" />
              <FaStar className="text-yellow-500 text-lg" />
            </h3>
            <p className="text-gray-500 text-base/7 mb-4">
              " Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words. "
            </p>
            <div className="flex">
              <div className="mr-4 ">
                <img
                  src="src/assets/images/client-home.png"
                  alt="client"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div className="grid content-center gap-1 ">
                <h3 className="text-base text-amber-800 font-semibold">
                  Sarah Johnson
                </h3>
                <p className="text-sm text-gray-500">Regular Customer</p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            {/* <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-600 text-white text-2xl mb-3">
              <svg className="w-6 h-6" aria-hidden="true">
                <use xlinkHref="#collection"></use>
              </svg>
            </div> */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex">
              <FaStar className="text-yellow-500 text-lg" />
              <FaStar className="text-yellow-500 text-lg" />
              <FaStar className="text-yellow-500 text-lg" />
              <FaStar className="text-yellow-500 text-lg" />
              <FaStar className="text-yellow-500 text-lg" />
            </h3>
            <p className="text-gray-500 text-base/7 mb-4">
              " Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words. "
            </p>
            <div className="flex">
              <div className="mr-4 ">
                <img
                  src="src/assets/images/client-home.png"
                  alt="client"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div className="grid content-center gap-1 ">
                <h3 className="text-base text-amber-800 font-semibold">
                  Sarah Johnson
                </h3>
                <p className="text-sm text-gray-500">Regular Customer</p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            {/* <div className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-600 text-white text-2xl mb-3">
              <svg className="w-6 h-6" aria-hidden="true">
                <use xlinkHref="#collection"></use>
              </svg>
            </div> */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex">
              <FaStar className="text-yellow-500 text-lg" />
              <FaStar className="text-yellow-500 text-lg" />
              <FaStar className="text-yellow-500 text-lg" />
              <FaStar className="text-yellow-500 text-lg" />
              <FaStar className="text-yellow-500 text-lg" />
            </h3>
            <p className="text-gray-500 text-base/7 mb-4">
              " Paragraph of text beneath the heading to explain the heading.
              We'll add onto it with another sentence and probably just keep
              going until we run out of words. "
            </p>
            <div className="flex">
              <div className="mr-4 ">
                <img
                  src="src/assets/images/client-home.png"
                  alt="client"
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
              <div className="grid content-center gap-1 ">
                <h3 className="text-base text-amber-800 font-semibold">
                  Sarah Johnson
                </h3>
                <p className="text-sm text-gray-500">Regular Customer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* what our customer say section end */}

      <Footer />
    </>
  );
}

export default Home;
