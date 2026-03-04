import { Link } from "react-router-dom";

const stats = [
  { number: "50+", label: "Courses Available" },
  { number: "10K+", label: "Students Enrolled" },
  { number: "4.9", label: "Average Rating" },
  { number: "100%", label: "Practical Learning" },
];

const skills = [
  "Web Development",
  "Artificial Intelligence",
  "Prompt Engineering",
  "VFX Editing",
  "UI/UX Design",
  "Cyber Security",
];

const timeline = [
  { year: "2021", title: "Started Learning", desc: "Began the journey with web development and fell in love with coding." },
  { year: "2022", title: "Built First Projects", desc: "Shipped real-world projects and started helping others learn tech skills." },
  { year: "2023", title: "Launched StudyNotion", desc: "Created a platform to make quality tech education accessible to everyone." },
  { year: "2024", title: "Growing Community", desc: "10,000+ students enrolled, expanding into AI and emerging technologies." },
];

export default function About() {
  return (
    <div className="min-h-screen bg-slate-90 text-white" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* Hero */}
      <div className="px-6 py-24 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">About Me</p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Hi, I'm <span className="text-yellow-400">Apex</span>
          </h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            I'm a developer, educator, and builder — passionate about making tech education
            practical, accessible, and actually enjoyable. I created{" "}
            <span className="text-yellow-400 font-semibold">StudyNotion</span> to bridge the
            gap between learning and doing.
          </p>
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            Whether you're just starting out or leveling up your skills, I believe the right
            guidance can completely change your trajectory. Every course I build is designed
            to get you working on real things — fast.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link to="/contact" className="px-6 py-3 bg-yellow-400 text-slate-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors text-sm">
              Get In Touch
            </Link>
            <Link to="/" className="px-6 py-3 border border-slate-600 text-slate-300 font-semibold rounded-xl hover:border-slate-400 hover:text-white transition-colors text-sm">
              View Courses
            </Link>
          </div>
        </div>

        {/* Avatar */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 rounded-3xl bg-slate-800 border border-slate-700 flex items-center justify-center relative">
            <span className="text-8xl font-extrabold text-yellow-400">A</span>
            <div className="absolute -bottom-4 -right-4 bg-emerald-500 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-lg">
              Full Stack Dev
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="border-y border-slate-800 bg-slate-800/40">
        <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-4xl font-extrabold text-yellow-400 mb-1">{s.number}</p>
              <p className="text-slate-400 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">What I Teach</p>
        <h2 className="text-3xl font-extrabold text-white mb-10">Areas of Expertise</h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 text-sm font-semibold hover:border-yellow-400 hover:text-yellow-400 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-3">My Journey</p>
          <h2 className="text-3xl font-extrabold text-white mb-12">How It All Started</h2>
          <div className="flex flex-col">
            {timeline.map((item, i) => (
              <div key={item.year} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-yellow-400 mt-1.5 flex-shrink-0" />
                  {i < timeline.length - 1 && <div className="w-px flex-1 bg-slate-700 my-1" />}
                </div>
                <div className="pb-10">
                  <span className="text-yellow-400 text-xs font-bold uppercase tracking-widest">{item.year}</span>
                  <h3 className="text-white font-bold text-lg mt-1 mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="border-t border-slate-800 bg-slate-800/40">
        <div className="max-w-3xl mx-auto px-4 py-4 text-center">
          <p className="text-yellow-400 text-xs font-bold uppercase tracking-widest mb-4">Mission</p>
         
          <p className="text-slate-400 text-base leading-relaxed mb-8">
            StudyNotion exists for one reason — to give every learner the skills they need to
            thrive in a rapidly changing world. No fluff, no filler. Just practical, real-world
            knowledge that gets you results.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 bg-yellow-400 text-slate-900 font-bold rounded-xl hover:bg-yellow-300 transition-colors text-sm">
            Let's Connect
          </Link>
        </div>
      </div>

    </div>
  );
}