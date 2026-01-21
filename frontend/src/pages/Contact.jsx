import { useState, useRef, useEffect } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";
import ContactSkeleton from "../Skeleton/ContactSkeleton";
import "../index.css";

function Contact() {
  const [loading, setLoading] = useState(true); // ✅ New loading state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // "error"
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800); // simulate loading
    return () => clearTimeout(timer);
  }, []);

  const sendEmail = async () => {
    if (isSending) return;

    // Validation
    if (!name.trim()) {
      setStatus("error");
      setStatusMessage("Please input your name.");
      nameRef.current?.focus();
      setTimeout(() => setStatus(null), 3000);
      return;
    }
    if (!email.trim()) {
      setStatus("error");
      setStatusMessage("Please input your email.");
      emailRef.current?.focus();
      setTimeout(() => setStatus(null), 3000);
      return;
    }
    if (!message.trim()) {
      setStatus("error");
      setStatusMessage("Please input your message.");
      messageRef.current?.focus();
      setTimeout(() => setStatus(null), 3000);
      return;
    }

    setIsSending(true);

    try {
      const res = await fetch(
        "https://portfolio-mxza.onrender.com/send-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, message }),
        },
      );

      const data = await res.json();

      if (data.success) {
        setShowSuccessModal(true);
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setStatusMessage("Failed to send message.");
        setTimeout(() => setStatus(null), 3000);
      }
    } catch {
      setStatus("error");
      setStatusMessage("Failed to send message.");
      setTimeout(() => setStatus(null), 3000);
    } finally {
      setIsSending(false);
    }
  };

  if (loading) return <ContactSkeleton />; // ✅ Show skeleton while loading

  return (
    <section className="min-h-screen pt-24 pb-12 bg-linear-to-br from-slate-900 to-slate-800 flex items-center relative">
      {/* Error Toast */}
      {status && (
        <div
          className={`fixed top-18 right-6 z-50 px-4 py-2 rounded-xl text-white font-semibold shadow-lg text-center text-sm md:text-base
      ${status === "error" ? "bg-red-500" : "bg-emerald-500"}
      animate-slide-in-right`}
        >
          {statusMessage}
        </div>
      )}

      {/* Contact Form */}
      <div className="max-w-341.5 mx-auto px-5 md:px-10 lg:px-20 w-full">
        <div className="bg-slate-900 bg-opacity-80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl max-w-2xl mx-auto space-y-6 border border-slate-700">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
            Contact <span className="text-emerald-400">Me</span>
          </h1>

          {/* Name & Email */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 flex flex-col">
              <label className="text-slate-300 mb-1 font-medium">
                First & Last Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full py-3 px-4 rounded-full bg-slate-700 text-white placeholder-slate-400 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                value={name}
                onChange={(e) => setName(e.target.value)}
                ref={nameRef}
                disabled={isSending}
              />
            </div>
            <div className="flex-1 flex flex-col">
              <label className="text-slate-300 mb-1 font-medium">
                E-mail Address
              </label>
              <input
                type="email"
                placeholder="Email"
                className="w-full py-3 px-4 rounded-full bg-slate-700 text-white placeholder-slate-400 border border-slate-600 focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                ref={emailRef}
                disabled={isSending}
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="text-slate-300 mb-1 font-medium">Message</label>
            <textarea
              placeholder="Write your message..."
              rows="6"
              className="w-full rounded-xl bg-slate-700 text-white placeholder-slate-400 border border-slate-600 py-3 px-4 resize-none focus:outline-none focus:ring-2 focus:ring-emerald-400 transition"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              ref={messageRef}
              disabled={isSending}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            onClick={sendEmail}
            disabled={isSending}
            className={`w-full py-3 px-6 rounded-full font-semibold text-white transition-all 
            ${isSending ? "bg-slate-600 cursor-not-allowed" : "bg-emerald-500 hover:bg-emerald-600 cursor-pointer"}`}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-slate-900 rounded-2xl p-4 md:p-8 max-w-md md:max-w-lg w-full relative flex flex-col items-center animate-fade-in-up shadow-2xl border border-slate-700 ">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-slate-400 hover:text-white transition text-lg"
              onClick={() => setShowSuccessModal(false)}
            >
              <FaTimes />
            </button>

            {/* Check Icon */}
            <FaCheckCircle className="text-emerald-500 text-8xl mb-4" />

            {/* Message */}
            <h2 className="text-white md:text-2xl text-xl font-bold mb-2 text-center">
              Thank you for messaging me!
            </h2>
            <p className="text-slate-300 text-center text-sm md:text-base">
              I will respond to your message as soon as possible.
            </p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
