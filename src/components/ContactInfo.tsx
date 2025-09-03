import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Validation function
  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email is invalid";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    setSubmitted(false);
    setErrorMessage("");

    if (Object.keys(errs).length === 0) {
      setLoading(true);
      try {
        const response = await fetch("/api/send-email", {
                         method: "POST",
                         headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(form),
                     });


        if (!response.ok) {
          throw new Error(`Server responded with status ${response.status}`);
        }

        const result = await response.json();

        if (result.success) {
          setSubmitted(true);
          setForm({ name: "", email: "", subject: "", message: "" });
          setErrors({});
        } else {
          setErrorMessage(result.error || "Failed to send email");
        }
      } catch (err: any) {
        console.error(err);
        setErrorMessage(
          err.message.includes("Failed to fetch")
            ? "Cannot connect to the server. Please try again later."
            : `An error occurred: ${err.message}`
        );
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#FFF8F0] via-[#F5E6D8] to-[#FFF8F0] text-[#2A1A12] py-20 px-6 lg:px-20 overflow-hidden font-sans">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10 opacity-20 animate-flicker bg-gradient-radial from-[#CC5500]/30 via-transparent to-[#FFF8F0]"></div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#CC5500]/15 via-[#FFF8F0]/75 to-[#FFF8F0]/90 mix-blend-overlay"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(204,85,0,0.3)] border-2 border-[#CC5500] h-full flex items-center"
          style={{ perspective: 900 }}
        >
          <img
            src="/images/image6.jpeg"
            alt="Cinematic Adventure"
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-800 ease-in-out"
            loading="lazy"
            style={{ minHeight: '600px' }}
          />
        </motion.div>

        {/* Right: Text + form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          aria-label="Contact form section"
          className="h-full flex flex-col justify-center"
        >
          <h2 className="text-5xl font-thin tracking-[0.35em] uppercase mb-8 drop-shadow-[0_2px_6px_rgba(204,85,0,0.4)]">
            Embark On The Adventure
          </h2>

          <p className="mb-4 font-light text-[#CC5500] text-lg leading-relaxed tracking-wide">
            To embark on an extraordinary journey with <strong>Moneo Films</strong>, reach out to us today.
          </p>

          <p className="mb-8 font-light text-[#2A1A12]/80 text-md tracking-wider">
            <span className="block">Monday - Friday: <strong>09:00 - 17:00</strong></span>
            <span className="block">Saturday: <strong>09:00 - 13:00</strong></span>
          </p>

          <p className="mb-10 font-light text-[#2A1A12]/70 leading-relaxed tracking-wide">
            Contact us via email, phone, or visit our website and social media handles.
            <br />
            <span className="block mt-3 text-lg font-semibold tracking-tight">+27 67 766 2899</span>
            <a
              href="mailto:info@moneofilms.co.za"
              className="inline-block mt-2 underline text-[#CC5500] hover:text-[#E05C00] transition-colors"
            >
              info@moneofilms.co.za
            </a>
            <br />
            <a
              href="https://www.moneofilms.co.za"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-1 underline text-[#CC5500] hover:text-[#E05C00] transition-colors"
            >
              www.moneofilms.co.za
            </a>
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            {["name", "email", "subject"].map((field) => (
              <FloatingInput
                key={field}
                label={field.charAt(0).toUpperCase() + field.slice(1)}
                name={field}
                type={field === "email" ? "email" : "text"}
                value={form[field as keyof typeof form]}
                onChange={handleChange}
                error={errors[field]}
                required
              />
            ))}

            <FloatingTextarea
              label="Your message"
              name="message"
              value={form.message}
              onChange={handleChange}
              error={errors.message}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className={`relative inline-block bg-[#CC5500] hover:bg-[#E05C00] text-[#FFF8F0] uppercase font-semibold tracking-widest px-12 py-4 rounded shadow-lg transition duration-300 ease-in-out overflow-hidden focus:outline-none focus:ring-4 focus:ring-[#CC5500] focus:ring-opacity-70 ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              aria-label="Submit contact form"
            >
              <span className="relative z-10">{loading ? "Sending..." : "Drop Us A Line"}</span>
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#E05C00] via-[#CC5500] to-[#E05C00] opacity-25 animate-gradient-x rounded"></span>
            </button>

            <AnimatePresence>
              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                  className="text-green-600 font-light text-lg mt-4"
                  role="alert"
                >
                  Thank you for reaching out! We will get back to you soon.
                </motion.p>
              )}
              {errorMessage && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.5 }}
                  className="text-red-500 font-light text-lg mt-4"
                  role="alert"
                >
                  {errorMessage}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </motion.div>
      </div>

      {/* Animations CSS */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }
        .animate-gradient-x {
          background-size: 200% 100%;
          animation: gradient-x 3s ease infinite;
        }
        @keyframes flicker {
          0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% { opacity: 1; }
          20%, 22%, 24%, 55% { opacity: 0.4; }
        }
        .animate-flicker {
          animation: flicker 3s linear infinite;
        }
      `}</style>
    </section>
  );
}

// Floating input and textarea components remain unchanged from your original code

function FloatingInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div className="relative z-0 w-full group">
      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        required={required}
        className={`block py-3 px-0 w-full text-[#2A1A12] bg-transparent border-0 border-b-2 border-[#2A1A12]/30 appearance-none focus:outline-none focus:ring-0 focus:border-[#CC5500] peer rounded-md transition-shadow duration-300 ${
          error ? "border-red-500 shadow-[0_0_10px_rgba(204,85,0,0.3)]" : ""
        }`}
        placeholder=" "
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
        spellCheck={false}
      />
      <label
        htmlFor={name}
        className="absolute text-[#2A1A12]/60 duration-300 transform -translate-y-6 scale-75 top-4 left-0 -z-10 origin-[0] peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#CC5500] cursor-text select-none"
      >
        {label} {required && "*"}
      </label>
      {error && (
        <motion.p
          id={`${name}-error`}
          className="mt-1 text-xs text-red-500"
          role="alert"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.25 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}

function FloatingTextarea({
  label,
  name,
  value,
  onChange,
  error,
  required = false,
}: {
  label: string;
  name: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  required?: boolean;
}) {
  return (
    <div className="relative z-0 w-full group">
      <textarea
        name={name}
        id={name}
        rows={5}
        value={value}
        onChange={onChange}
        required={required}
        placeholder=" "
        aria-invalid={error ? "true" : "false"}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`block py-3 px-0 w-full text-[#2A1A12] bg-transparent border-0 border-b-2 border-[#2A1A12]/30 appearance-none focus:outline-none focus:ring-0 focus:border-[#CC5500] resize-none peer rounded-md transition-shadow duration-300 ${
          error ? "border-red-500 shadow-[0_0_10px_rgba(204,85,0,0.3)]" : ""
        }`}
        spellCheck={false}
      />
      <label
        htmlFor={name}
        className="absolute text-[#2A1A12]/60 duration-300 transform -translate-y-6 scale-75 top-4 left-0 -z-10 origin-[0] peer-placeholder-shown:translate-y-1 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-[#CC5500] cursor-text select-none"
      >
        {label} {required && "*"}
      </label>
      {error && (
        <motion.p
          id={`${name}-error`}
          className="mt-1 text-xs text-red-500"
          role="alert"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 5 }}
          transition={{ duration: 0.25 }}
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
