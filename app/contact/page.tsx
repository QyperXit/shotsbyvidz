import React from "react";

const Contact = () => {
  return (
    <div className="max-w-md mx-auto">
      <p className=" text-sm text-center  text-white ">- CONTACT</p>
      <h2 className="text-4xl  text-white mb-4 text-center   font-sans font-normal mt-7">
        Get in touch
      </h2>
      <p className="  text-center  text-amber-400 mt-7">Shaunlm@live.co.uk</p>

      <form className="space-y-8 mt-7">
        <div className="flex space-x-4">
          <div>
            <label htmlFor="firstName" className="block  text-white">
              Name**
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              className="w-full border bg-white mt-auto rounded py-3 px-3 focus:outline-none focus:border-amber-500"
              required
            />
          </div>
          <div className="mt-auto">
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className="w-full border bg-white rounded py-3 px-3 focus:outline-none focus:border-amber-500"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block  text-white">
            Email*
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className="w-full border bg-white rounded py-3 px-3 focus:outline-none focus:border-amber-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block  text-white">
            Message*
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows="4"
            className="w-full border bg-white rounded py-2 px-3 focus:outline-none focus:border-amber-500"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#860C0C] text-white py-5 px-10  hover:bg-[#880c0c8e]  transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
