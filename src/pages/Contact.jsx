import { useState } from "react";

// Icons as SVG components
const PhoneIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.22 1.18 2 2 0 012.22 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
  </svg>
);

const MailIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const SendIcon = () => (
  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <line x1="22" y1="2" x2="11" y2="13"/>
    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  }

  const contactItems = [
    {
      icon: <PhoneIcon />,
      label: "Phone",
      value: "+91 9926966080",
      href: "tel:+919926966000",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
    {
      icon: <MailIcon />,
      label: "Gmail",
      value: "gourkeshav@gmail.com",
      href: "mailto:gourkeshav@gmail.com",
      color: "text-yellow-400",
      bg: "bg-yellow-400/10",
    },
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      value: "keshavgour-apex",
      href: "https://www.linkedin.com/in/keshavgour-apex4555933a/",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      icon: <InstagramIcon />,
      label: "Instagram",
      value: "@keshav__1409",
      href: "https://www.instagram.com/keshav__1409/?utm_source=ig_web_button_share_sheet",
      color: "text-pink-400",
      bg: "bg-pink-400/10",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900 py-20 px-6 text-center">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 50%, #facc15 0%, transparent 50%), radial-gradient(circle at 80% 20%, #34d399 0%, transparent 40%)" }}
        />
        <div className="relative z-10">
          <span className="inline-block bg-yellow-400/10 text-yellow-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-yellow-400/20 mb-5">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            Contact <span className="text-yellow-400">Apex</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Have a question or want to collaborate? I'd love to hear from you. Drop a message or reach out directly.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left — Contact Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2 text-white">Let's Connect</h2>
          <p className="text-gray-400 mb-8 text-sm leading-relaxed">
            I'm always open to new opportunities, collaborations, or just a friendly chat about tech and learning.
          </p>

          <div className="flex flex-col gap-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-gray-900 border border-gray-800 hover:border-gray-600 transition-all duration-200 group"
              >
                <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${item.bg} ${item.color} flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">{item.label}</p>
                  <p className={`text-sm font-semibold ${item.color}`}>{item.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* StudyNotion branding */}
          <div className="mt-10 p-5 rounded-2xl bg-gradient-to-r from-yellow-400/10 to-emerald-400/10 border border-yellow-400/20">
            <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-1">StudyNotion</p>
            <p className="text-white font-semibold text-lg">Build skills for today, tomorrow & beyond.</p>
            <p className="text-gray-400 text-sm mt-1">Education to future-proof your career.</p>
          </div>
        </div>

        {/* Right — Contact Form */}
        <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-1">Send a Message</h2>
          <p className="text-gray-400 text-sm mb-7">I'll get back to you as soon as possible.</p>

          {sent && (
            <div className="mb-5 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-medium">
              ✅ Message sent! I'll reply soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Your Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Apex Mantra"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Write your message here..."
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-yellow-400 text-gray-900 font-bold text-sm hover:bg-yellow-300 transition-colors duration-200"
            >
              <SendIcon /> Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}