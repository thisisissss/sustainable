import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa"; // Make sure you have react-icons installed
import Link from "next/link";
import Image from "next/image";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone:"",
    message: "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your form submission logic
    console.log(formData);
  };

  return (
    
    <>
      <section className="bg-white dark:bg-gray-900">
      <header className="flex items-center justify-between px-4 md:px-6 h-14">
      
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/"
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/#our-products"
          >
            Products
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            TroutTech
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="/#about-us"
          >
            About Us
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
          href="/contact">
            Contact
          </Link>
        </nav>
      </header>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            We would love to hear from you. Please fill out the form below and
            we&apos;ll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Enter your Name
              </label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Your Name"
                required
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Enter your phone number
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Phone number"
                required
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* Social Media Links */}
      <footer className="bg-white dark:bg-gray-900 px-2 py-2">
        <div className="flex justify-center space-x-4">
          <a
            href="https://line.me/ti/p/eZ2GG61uIe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-600 hover:text-green-700"
          >
            <FaLine size={34} />
          </a>
          <a
            href="https://www.facebook.com/sofi.godmode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700"
          >
            <FaFacebook size={34} />
          </a>
          <a
            href="https://www.instagram.com/sustainable_green_gold/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-700"
          >
            <FaInstagram size={34} />
          </a>
        </div>
      </footer>
    </>
  );
}
