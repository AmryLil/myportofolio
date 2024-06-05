import React from "react";

const ContactUs = () => {
  return (
    <div className="container  text-slate-50 flex md:px-28 px-6 items-center justify-center">
      <div className="container md:mx-auto ">
        <div className="text-center mb-12"></div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full lg:w-1/2">
            <h1 className="md:text-5xl font-bold text-3xl">
              Contact Us<span className="text-green-500">.</span>
            </h1>
            <div className="flex flex-row items-center pl-2">
              <div className="md:w-1 md:h-64 bg-green-500 md:block hidden"></div>
              <div className="p-8 rounded-lg shadow-lg">
                <h2 className="md:text-xl text-lg font-semibold mb-4">
                  My Address
                </h2>
                <p className="mb-2 text-sm">
                  Jl. Perintis Kemerdekaan 7, Tamalanrea Indah,
                </p>
                <p className="mb-2 text-sm">
                  {" "}
                  Tamalanrea District, Makassar City, South Sulawesi, Indonesia
                </p>
                <h2 className="md:text-xl text-lg font-semibold mb-4 mt-4">
                  Contact
                </h2>
                <p className="mb-4 text-sm">ulilamry432@gmail.com</p>
                <p className="mb-4 text-sm">+62 823 7839 8419</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[50%] md:px-10 px-2 py-2">
            <div className="relative md:p-10 p-6">
              <h2 className="text-2xl font-semibold mb-4 -translate-y-4 absolute start-1/2 -translate-x-1/2 ">
                Contact Form
              </h2>
              <div className="p-10 bg-gray-800  shadow-lg ">
                <form>
                  <label className="block text-sm mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-800 text-white p-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Your name"
                  />
                  <label className="block text-sm mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-800 text-white p-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Email"
                  />
                  <label className="block text-sm mb-2">Message</label>
                  <textarea
                    className="w-full bg-gray-800 text-white p-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Message"
                  />
                  <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              </div>
              <div className="h-20 w-20 border-t-4 border-l-4 absolute top-0 start-0 border-green-600"></div>
              <div className="h-20 w-20 border-t-4 border-r-4 absolute top-0 end-0 border-green-600"></div>
              <div className="h-20 w-20 border-b-4 border-l-4 absolute bottom-0 start-0 border-green-600"></div>
              <div className="h-20 w-20 border-b-4 border-r-4 absolute bottom-0 end-0 border-green-600"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
