import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* Contact Info */}
        <div className="bg-gray-100 p-8 rounded-lg shadow">
          <h2 className="text-3xl font-extrabold text-gray-800">Get in Touch</h2>
          <p className="mt-2 text-gray-600 text-lg">
            Fill in the form to start a conversation.
          </p>

          <div className="mt-8 space-y-6 text-gray-700">
            <div className="flex items-start gap-4">
              <svg className="w-7 h-7 text-orange-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p>Acme Inc, Street 123, NY 45678</p>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-7 h-7 text-orange-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.3a1 1 0 01.95.69l1.5 4.49a1 1 0 01-.5 1.21l-2.25 1.13a11 11 0 005.52 5.52l1.13-2.25a1 1 0 011.21-.5l4.5 1.5a1 1 0 01.69.95V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z" />
              </svg>
              <p>+91 9876543210</p>
            </div>
            <div className="flex items-start gap-4">
              <svg className="w-7 h-7 text-orange-700" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.9 5.3a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <p>support@acme.org</p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="bg-white p-8 rounded-lg shadow space-y-6">
          <div>
            <label htmlFor="name" className="sr-only">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label htmlFor="phone" className="sr-only">Phone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="sr-only">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 px-6 text-white bg-orange-700 hover:bg-orange-800 font-semibold rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
