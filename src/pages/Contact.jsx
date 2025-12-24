// import React from "react";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// function Contact() {
//   return (
//     <>
//       <Header />
//       {/* start contact us section */}
//       <section>
//         <div className="container">
//           <div className="div">
//             <h1>Contact Us</h1>
//             <p>
//               We'd love to hear from you! Reach out for custom orders,
//               questions, or just to say hello.
//             </p>
//           </div>
//           <div className="row flex">
//             <div className="col-6">
//               <div className="row">
//                 <div className="col-6">
//                   <h1>Visit Us</h1>
//                   <p>123 Bakery Street Sweet City, SC 12345</p>
//                 </div>
//                 <div className="col-6">
//                   <h1>Call Us</h1>
//                   <p>+1 (555) 123-4567 Mon - Sun, 6 AM - 8 PM</p>
//                 </div>
//               </div>
//               <div className="row">
//                 <div className="col-6">
//                   <h1>Email Us</h1>
//                   <p>
//                     hello@takshvibakery.com
//                     <br />
//                     info@takshvibakery.com
//                   </p>
//                 </div>
//                 <div className="col-6">
//                   <h1>Store Hours</h1>
//                   <p>
//                     Mon-Fri: 6 AM - 8 PM <br />
//                     Sat-Sun: 7 AM - 9 PM
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="col-6">
//               <form>
//                 <label htmlFor="name">Name:</label>
//                 <input type="text" name="name" className="col-6" />
//                 <label htmlFor="Email">Email:</label>
//                 <input type="email" name="Email" className="col-6" />
//                 <label htmlFor="number">Number:</label>
//                 <input type="tel" name="number" className="col-6" />
//                 <label htmlFor="subject">Subject:</label>
//                 <input type="text" name="subject" className="col-6" />
//                 <label htmlFor="message">Message:</label>
//                 <textarea type="text" name="message" className="col-12" />
//                 <button> Send Message </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* end contact us section */}
//       <Footer />
//     </>
//   );
// }

// export default Contact;

// ======================================
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Header />
      {/* start contact us section */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-6xl mx-auto px-6">
          {/* Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-amber-800 mb-3">
              Contact Us
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We'd love to hear from you! Reach out for custom orders,
              questions, or just to say hello.
            </p>
          </div>

          {/* Contact Info + Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left side - info */}
            <div className="grid grid-cols-2 gap-5 text-center">
              <div className="bg-white flex flex-col align-content-center justify-center rounded-md">
                <h2 className="text-xl font-semibold text-amber-700 mb-2">
                  Visit Us
                </h2>
                <p className="text-gray-600">
                  123 Bakery Street <br /> Sweet City, SC 12345
                </p>
              </div>
              <div className="bg-white flex flex-col align-content-center justify-center rounded-md">
                <h2 className="text-xl font-semibold text-amber-700 mb-2">
                  Call Us
                </h2>
                <p className="text-gray-600">
                  +1 (555) 123-4567 <br /> Mon - Sun, 6 AM - 8 PM
                </p>
              </div>
              <div className="bg-white flex flex-col align-content-center justify-center rounded-md">
                <h2 className="text-xl font-semibold text-amber-700 mb-2">
                  Email Us
                </h2>
                <p className="text-gray-600">
                  hello@takshvibakery.com <br /> info@takshvibakery.com
                </p>
              </div>
              <div className="bg-white flex flex-col align-content-center justify-center rounded-md">
                <h2 className="text-xl font-semibold text-amber-700 mb-2">
                  Store Hours
                </h2>
                <p className="text-gray-600">
                  Mon-Fri: 6 AM - 8 PM <br /> Sat-Sun: 7 AM - 9 PM
                </p>
              </div>
            </div>

            {/* Right side - form */}
            <div>
              <form className="bg-white shadow-lg rounded-xl p-6 space-y-4">
                {/* Two-column layout for inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-amber-700 mb-1"
                    >
                      Name:
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-amber-700 mb-1"
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="number"
                      className="block text-sm font-medium text-amber-700 mb-1"
                    >
                      Number:
                    </label>
                    <input
                      type="tel"
                      name="number"
                      placeholder="Mobile Number"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-amber-700 mb-1"
                    >
                      Subject:
                    </label>
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Full-width message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-amber-700 mb-1"
                  >
                    Message:
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Message"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-amber-400 focus:outline-none"
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="bg-amber-700 hover:bg-amber-800 text-white font-semibold py-2 px-4 rounded-lg transition w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="mt-12 rounded-xl overflow-hidden shadow-lg">
            <iframe
              title="Bakery Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096187!2d144.95373631531685!3d-37.81627974202186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f0f1dfc1%3A0xfb2f1d7af8c0b79a!2sBakery!5e0!3m2!1sen!2sus!4v1632123456789"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-96 border-0"
            ></iframe>
          </div>
        </div>
      </section>
      {/* end contact us section */}
      <Footer />
    </>
  );
}

export default Contact;
