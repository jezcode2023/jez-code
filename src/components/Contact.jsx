import React, { useState } from "react";

const Contact = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:jezreelortiz2020@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
  };

  return (
    <div name="contact" className="w-full h-screen bg-black text-white flex justify-center items-center px-4">
      <div className="max-w-screen-md w-full">
        <div className="text-center mb-8">
          <p className="text-3xl font-bold border-b-2 border-gray-500 inline-block pb-2">
            Contact
          </p>
          <p className="mt-5 text-xl">Feel free to reach out to me!</p>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6">
          <input
            type="text"
            placeholder="Enter subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full p-3 bg-gray-800 text-black rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3 h-40 bg-gray-800 text-black rounded-lg border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-white text-black font-bold py-3 rounded-md border border-gray-400 hover:bg-gray-200 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
