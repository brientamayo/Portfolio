import { useState, useRef } from "react";
import '../index.css';
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null); // success | error
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const sendEmail = async () => {
    if (isSending) return;

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
      const res = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setStatusMessage("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus("error");
        setStatusMessage("Failed to send message.");
      }
    } catch {
      setStatus("error");
      setStatusMessage("Failed to send message.");
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <section className="min-h-screen pt-24 pb-12 bg-linear-to-br from-slate-900 to-slate-800 flex items-center">
      {/* Status Toast */}
      {status && (
        <div
          className={`fixed top-18 right-6 z-50 px-4 py-2 rounded-xl text-white font-semibold shadow-lg text-center text-sm md:text-base
      ${status === "success" ? "bg-emerald-500" : "bg-red-500"}
      animate-slide-in-right`}
        >
          {statusMessage}
        </div>
      )}

      <div className="max-w-341.5 mx-auto px-5 md:px-10 lg:px-20 w-full">
        <div className="bg-slate-900 bg-opacity-80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl max-w-2xl mx-auto space-y-6 border border-slate-700">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
            Contact <span className="text-emerald-400">Me</span>
          </h1>

          {/* Name */}
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

          {/* Submit */}
          <button
            onClick={sendEmail}
            disabled={isSending}
            className={`w-full py-3 px-6 rounded-full font-semibold text-white transition-all cursor-pointer 
            ${isSending ? "bg-slate-600 cursor-not-allowed" : "bg-emerald-500 hover:bg-emerald-600"}
          `}
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>

      <style>
        {`
    @keyframes slide-in-right {
      0% { opacity: 0; transform: translateX(100%); }
      100% { opacity: 1; transform: translateX(0); }
    }
    .animate-slide-in-right {
      animation: slide-in-right 0.4s ease forwards;
    }
  `}
      </style>
    </section>
  );
}

export default Contact;
