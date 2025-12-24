// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// function Product() {
//   return (
//     <>
//       <Header />
//       {/* start product page */}

//       <section className="container-fluied">
//         <div className="container">
//           <h1>our products</h1>
//           <p>
//             Discover our full range of freshly baked goods, from artisan breads
//             to delectable pastries
//           </p>
//         </div>

//         <div className="container">
//           <div className="row">
//             <div className="col-8">
//               <input
//                 type="search"
//                 name=""
//                 id=""
//                 placeholder="search for cake,bread,pastries..."
//               />
//             </div>
//             <div className="col-4">
//               <div className="col-6">
//                 <i></i>
//               </div>
//               <div className="col-6">
//                 <i></i>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="container">
//           <nav>
//             <ul className="flex justify-around">
//               <li>
//                 <a href="">all</a>
//               </li>
//               <li>
//                 <a href="">cakes</a>
//               </li>
//               <li>
//                 <a href="">breads</a>
//               </li>
//               <li>
//                 <a href="">pastries</a>
//               </li>
//               <li>
//                 <a href="">cookies</a>
//               </li>
//             </ul>
//           </nav>
//         </div>

//         <div className="container">
//           <div className="row flex gap-4 m-2">
//             <div className="col-4 rounded-lg shadow-sm shadow-yellow-700 p-3  ">
//               <img src="" alt="" />
//               <div className="">
//                 <h1>Red Velvet Cake</h1>
//                 <p>cake</p>
//               </div>
//               <p>Rich, moist chocolate cake with layers of velvety ganache</p>
//               <div className="">
//                 <h3>$42.99</h3>
//                 <button> + Add </button>
//               </div>
//             </div>
//             <div className="col-4 rounded-lg shadow-sm shadow-yellow-700 p-3 ">
//               <img src="" alt="" />
//               <div className="">
//                 <h1>Red Velvet Cake</h1>
//                 <p>cake</p>
//               </div>
//               <p>Rich, moist chocolate cake with layers of velvety ganache</p>
//               <div className="">
//                 <h3>$42.99</h3>
//                 <button> + Add </button>
//               </div>
//             </div>
//             <div className="col-4 rounded-lg shadow-sm shadow-yellow-700 p-3 ">
//               <img src="" alt="" />
//               <div className="">
//                 <h1>Red Velvet Cake</h1>
//                 <p>cake</p>
//               </div>
//               <p>Rich, moist chocolate cake with layers of velvety ganache</p>
//               <div className="">
//                 <h3>$42.99</h3>
//                 <button> + Add </button>
//               </div>
//             </div>
//           </div>
//           <div className="">
//             <button>more products</button>
//           </div>
//         </div>
//       </section>

//       {/* end product page */}
//       <Footer />
//     </>
//   );
// }

// export default Product;

// ==========================================

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Product() {
  return (
    <>
      <Header />
      {/* start product page */}

      <section className="w-full mb-10">
        {/* hero text */}
        <div className="max-w-6xl mx-auto text-center py-10">
          <h1 className="text-4xl font-bold text-amber-800">Our Products</h1>
          <p className="text-gray-600 mt-3">
            Discover our full range of freshly baked goods, from artisan breads
            to delectable pastries
          </p>
        </div>

        {/* search + filter */}
        <div className="max-w-6xl mx-auto px-4 mb-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <input
              type="search"
              placeholder="Search for cake, bread, pastries..."
              className="w-full md:w-2/3 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <div className="flex gap-4 w-full md:w-1/3 justify-center">
              <button className="p-3 rounded-full bg-gray-100 hover:bg-amber-100">
                <i className="fas fa-sliders-h"></i>
              </button>
              <button className="p-3 rounded-full bg-gray-100 hover:bg-amber-100">
                <i className="fas fa-sort"></i>
              </button>
            </div>
          </div>
        </div>

        {/* nav categories */}
        <div className="max-w-6xl mx-auto mb-8">
          <nav>
            <ul className="flex justify-center gap-6 my-10 text-gray-700 font-medium">
              <li>
                <a href="#" className=" bg-orange-200 px-5 py-2 rounded-md hover:text-amber-700">
                  All
                </a>
              </li>
              <li>
                <a href="#" className="bg-orange-200 px-5 py-2 rounded-md hover:text-amber-700">
                  Cakes
                </a>
              </li>
              <li>
                <a href="#" className="bg-orange-200 px-5 py-2 rounded-md hover:text-amber-700">
                  Breads
                </a>
              </li>
              <li>
                <a href="#" className="bg-orange-200 px-5 py-2 rounded-md hover:text-amber-700">
                  Pastries
                </a>
              </li>
              <li>
                <a href="#" className="bg-orange-200 px-5 py-2 rounded-md hover:text-amber-700">
                  Cookies
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* product grid */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* single product card */}
            <div className="rounded-lg shadow-md shadow-gray-400 p-4 flex flex-col">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Red Velvet Cake"
                className="rounded-md mb-4"
              />
              <div>
                <h1 className="text-xl font-semibold text-amber-800">
                  Red Velvet Cake
                </h1>
                <p className="text-sm text-gray-500">Cake</p>
              </div>
              <p className="mt-2 text-gray-600">
                Rich, moist chocolate cake with layers of velvety ganache
              </p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <h3 className="text-lg font-bold text-amber-800">$42.99</h3>
                <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
                  + Add
                </button>
              </div>
            </div>
            {/* duplicate for demo */}
            <div className="rounded-lg shadow-md shadow-gray-400 p-4 flex flex-col">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Red Velvet Cake"
                className="rounded-md mb-4"
              />
              <div>
                <h1 className="text-xl font-semibold text-amber-800">
                  Red Velvet Cake
                </h1>
                <p className="text-sm text-gray-500">Cake</p>
              </div>
              <p className="mt-2 text-gray-600">
                Rich, moist chocolate cake with layers of velvety ganache
              </p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <h3 className="text-lg font-bold text-amber-800">$42.99</h3>
                <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
                  + Add
                </button>
              </div>
            </div>
            <div className="rounded-lg shadow-md shadow-gray-400 p-4 flex flex-col">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Red Velvet Cake"
                className="rounded-md mb-4"
              />
              <div>
                <h1 className="text-xl font-semibold text-amber-800">
                  Red Velvet Cake
                </h1>
                <p className="text-sm text-gray-500">Cake</p>
              </div>
              <p className="mt-2 text-gray-600">
                Rich, moist chocolate cake with layers of velvety ganache
              </p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <h3 className="text-lg font-bold text-amber-800">$42.99</h3>
                <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
                  + Add
                </button>
              </div>
            </div>
            <div className="rounded-lg shadow-md shadow-gray-400 p-4 flex flex-col">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Red Velvet Cake"
                className="rounded-md mb-4"
              />
              <div>
                <h1 className="text-xl font-semibold text-amber-800">
                  Red Velvet Cake
                </h1>
                <p className="text-sm text-gray-500">Cake</p>
              </div>
              <p className="mt-2 text-gray-600">
                Rich, moist chocolate cake with layers of velvety ganache
              </p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <h3 className="text-lg font-bold text-amber-800">$42.99</h3>
                <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
                  + Add
                </button>
              </div>
            </div>
            <div className="rounded-lg shadow-md shadow-gray-400 p-4 flex flex-col">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Red Velvet Cake"
                className="rounded-md mb-4"
              />
              <div>
                <h1 className="text-xl font-semibold text-amber-800">
                  Red Velvet Cake
                </h1>
                <p className="text-sm text-gray-500">Cake</p>
              </div>
              <p className="mt-2 text-gray-600">
                Rich, moist chocolate cake with layers of velvety ganache
              </p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <h3 className="text-lg font-bold text-amber-800">$42.99</h3>
                <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
                  + Add
                </button>
              </div>
            </div>
            <div className="rounded-lg shadow-md shadow-gray-400 p-4 flex flex-col">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Red Velvet Cake"
                className="rounded-md mb-4"
              />
              <div>
                <h1 className="text-xl font-semibold text-amber-800">
                  Red Velvet Cake
                </h1>
                <p className="text-sm text-gray-500">Cake</p>
              </div>
              <p className="mt-2 text-gray-600">
                Rich, moist chocolate cake with layers of velvety ganache
              </p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <h3 className="text-lg font-bold text-amber-800">$42.99</h3>
                <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
                  + Add
                </button>
              </div>
            </div>
            <div className="rounded-lg shadow-md shadow-gray-400 p-4 flex flex-col">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Red Velvet Cake"
                className="rounded-md mb-4"
              />
              <div>
                <h1 className="text-xl font-semibold text-amber-800">
                  Red Velvet Cake
                </h1>
                <p className="text-sm text-gray-500">Cake</p>
              </div>
              <p className="mt-2 text-gray-600">
                Rich, moist chocolate cake with layers of velvety ganache
              </p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <h3 className="text-lg font-bold text-amber-800">$42.99</h3>
                <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
                  + Add
                </button>
              </div>
            </div>
            <div className="rounded-lg shadow-md shadow-gray-400 p-4 flex flex-col">
              <img
                src="https://via.placeholder.com/300x200"
                alt="Red Velvet Cake"
                className="rounded-md mb-4"
              />
              <div>
                <h1 className="text-xl font-semibold text-amber-800">
                  Red Velvet Cake
                </h1>
                <p className="text-sm text-gray-500">Cake</p>
              </div>
              <p className="mt-2 text-gray-600">
                Rich, moist chocolate cake with layers of velvety ganache
              </p>
              <div className="mt-auto flex items-center justify-between pt-4">
                <h3 className="text-lg font-bold text-amber-800">$42.99</h3>
                <button className="bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition">
                  + Add
                </button>
              </div>
            </div>
          </div>

          {/* load more button */}
          <div className="flex justify-center mt-10">
            <button className="px-6 py-3 bg-amber-500 text-white rounded-lg shadow hover:bg-amber-600 transition">
              More Products
            </button>
          </div>
        </div>
      </section>

      {/* end product page */}
      <Footer />
    </>
  );
}

export default Product;
