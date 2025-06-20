import { motion } from "framer-motion";
import { IoIosMail } from "react-icons/io";
import { useState } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "8940b0a5-b821-48ed-8cc3-5c067ad113fa");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitSuccess(true);
        event.target.reset(); // Reset form on success
      } else {
        setSubmitError(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="border-t border-stone-900 pt-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl"
      >
        Get in Touch
      </motion.h2>

      <div className="container mx-auto px-4 sm:px-6 lg:px-28 flex flex-col lg:flex-row gap-16">
        {/* Contact Info */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2"
        >
          <h2 className="text-2xl sm:text-3xl font-medium mb-6 tracking-tighter">
            Let's Talk
          </h2>
          <p className="text-stone-400 mb-8 leading-relaxed tracking-tighter">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact anytime.
          </p>
          <div className="flex items-center gap-4 text-stone-300">
            <IoIosMail className="text-2xl" />
            <p className="hover:text-stone-400 transition-colors tracking-tighter">
              devkoyani521@gmail.com
            </p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          onSubmit={onSubmit}
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="lg:w-1/2"
        >
          <input type="hidden" name="redirect" value="https://web3forms.com/success" />

          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-stone-300 mb-2 tracking-tighter"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 bg-stone-900 border border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-stone-300"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-stone-300 mb-2 tracking-tighter"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 bg-stone-900 border border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-stone-300"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-stone-300 mb-2 tracking-tighter"
            >
              Write your message here
            </label>
            <textarea
              id="message"
              name="message"
              rows={8}
              placeholder="Enter your message"
              required
              className="w-full px-4 py-3 bg-stone-900 border border-stone-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500 text-stone-300"
            ></textarea>
          </div>

          {submitSuccess && (
            <div className="mb-6 p-4 bg-green-900/50 text-green-300 rounded-lg">
              Message sent successfully!
            </div>
          )}

          {submitError && (
            <div className="mb-6 p-4 bg-red-900/50 text-red-300 rounded-lg">
              {submitError}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-white rounded-full px-8 py-3 text-stone-800 font-medium hover:bg-stone-200 transition-colors tracking-tighter ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Sending..." : "Submit now"}
          </button>
        </motion.form>
      </div>

      <div className="border-t border-stone-900 py-8 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-28 flex flex-col md:flex-row justify-between items-center">
          <p className="text-stone-400 text-sm mb-4 md:mb-0 tracking-tighter">
            © 2025 Dev Koyani. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 text-stone-400 text-sm tracking-tighter">
            <p className="text-stone-400">Terms of Service</p>
            <p className="text-stone-400">Privacy Policy</p>
            <p className="text-stone-400">Connect with me</p>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
