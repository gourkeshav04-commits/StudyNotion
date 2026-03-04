import { useState } from "react";

const coursesData = [
  {
    id: 1,
    name: "Web Development",
    price: "4,999",
    image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=600&q=80",
    info: "Master the art of building modern websites from scratch. Learn HTML, CSS, JavaScript, React, Node.js, and databases. This course takes you from complete beginner to a job-ready full-stack developer with real-world projects and hands-on coding challenges.",
    tag: "Bestseller",
  },
  {
    id: 2,
    name: "Prompt Engineering",
    price: "2,499",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=600&q=80",
    info: "Unlock the full power of AI tools like ChatGPT, Claude, and Gemini. Learn how to craft precise, effective prompts for content creation, coding, research, and automation. A must-have skill for the AI-driven future — no coding experience required.",
    tag: "Trending",
  },
  {
    id: 3,
    name: "Artificial Intelligence",
    price: "7,999",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
    info: "Dive deep into the world of Artificial Intelligence and Machine Learning. Understand neural networks, deep learning, NLP, and computer vision. Build real AI models using Python, TensorFlow, and PyTorch with industry-level projects and case studies.",
    tag: "Advanced",
  },
  {
    id: 4,
    name: "VFX Editing",
    price: "5,499",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=80",
    info: "Learn professional Visual Effects and video editing using Adobe After Effects, Premiere Pro, and DaVinci Resolve. Create stunning cinematic effects, motion graphics, color grading, and compositing. Turn your creative vision into breathtaking visual stories.",
    tag: "Creative",
  },
  {
    id: 5,
    name: "UI/UX Design",
    price: "3,999",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
    info: "Design beautiful and intuitive digital experiences users love. Learn Figma, wireframing, prototyping, design systems, and user research principles. Build a stunning portfolio that gets you hired at top product companies and startups.",
    tag: "Popular",
  },
  {
    id: 6,
    name: "Cyber Security",
    price: "6,999",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80",
    info: "Protect systems, networks, and data from digital attacks. Learn ethical hacking, penetration testing, network security, cryptography, and vulnerability assessment. Prepare for globally recognized certifications like CEH and CompTIA Security+.",
    tag: "In Demand",
  },
];

function Card({ id, image, info, price, name, tag, removeCourse }) {
  const [readmore, setReadmore] = useState(false);
  const description = readmore ? info : `${info.substring(0, 150)}...`;

  function readmoreHandler(){
    setReadmore(!readmore);
  }

  return (
    <div className="group bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col border border-slate-700">
      {/* Image */}
      <div className="relative overflow-hidden h-52">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          ₹ {price}
        </div>
        {tag && (
          <div className="absolute top-3 left-3 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow">
            {tag}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-white mb-2 tracking-tight">{name}</h3>
        <p className="text-slate-300 text-sm leading-relaxed flex-1">
          {description}
          <button
            onClick={readmoreHandler}
            className="ml-1 text-emerald-400 font-semibold hover:underline focus:outline-none"
          >
            {readmore ? `Show less` : `Read more`}
          </button>
        </p>

        <button
          onClick={() => removeCourse(id)}
          className="mt-5 w-full py-2 rounded-xl border-2 border-red-400 text-red-400 text-sm font-semibold hover:bg-red-500 hover:text-white transition-colors duration-200"
        >
          Remove Course
        </button>
      </div>
    </div>
  );
}

function Courses({ courses, removeCourse }) {
  return (
    <section className="py-16 px-6 bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-2">Level Up Your Skills</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Courses by <span className="text-emerald-400">StudyNotion</span>
          </h1>
          <p className="text-slate-400 mt-3 text-base max-w-xl mx-auto">
            Handpicked courses to future-proof your career and unlock new opportunities.
          </p>
          <div className="mt-4 w-16 h-1 bg-emerald-400 rounded-full mx-auto"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((tour) => (
            <Card key={tour.id} {...tour} removeCourse={removeCourse} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [courses, setCourses] = useState(coursesData);

  function removeCourse(id) {
    setCourses(courses.filter((course) => course.id !== id));
  }

  if (courses.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-center px-4">
        <p className="text-5xl mb-4"></p>
        <h2 className="text-2xl font-bold text-white mb-2">No Courses Left</h2>
        <p className="text-slate-400 mb-6">You've removed all courses.</p>
        <button
          onClick={() => setCourses(coursesData)}
          className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors"
        >
          Refresh Courses
        </button>
      </div>
    );
  }

  return <Courses courses={courses} removeCourse={removeCourse} />;
}