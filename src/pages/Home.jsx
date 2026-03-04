import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";       // ✅ NEW
import { add, remove } from "../Redux/cartSlice";             // ✅ NEW
import { useNavigate } from "react-router-dom";               // ✅ NEW
import toast from "react-hot-toast";
import { coursesData } from "../data/CourseData";             // ✅ NEW — imported from shared file
 
function Card({ course }) {
  const [readmore, setReadmore] = useState(false);
  const dispatch = useDispatch();                             // ✅ NEW
  const navigate = useNavigate();                             // ✅ NEW
  const cart = useSelector((state) => state.cart);           // ✅ NEW
  const isInCart = cart.some((item) => item.id === course.id); // ✅ NEW
 
  const description = readmore ? course.info : `${course.info.substring(0, 150)}...`;
 
  // ✅ NEW — replaces the old removeCourse(id) click
  function handleCartToggle() {
    if (isInCart) {
      dispatch(remove(course.id));
      toast.error("Course removed from cart");
    } else {
      dispatch(add(course));
      toast.success("Course added to cart!");
    }
  }
 
  return (
    <div className="group bg-slate-800 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col border border-slate-700">
 
      {/* ✅ CHANGED — clicking image now navigates to detail page */}
      <div
        className="relative overflow-hidden h-52 cursor-pointer"
        onClick={() => navigate(`/course/${course.id}`)}
      >
        <img
          src={course.image}
          alt={course.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
          ₹ {course.price.toLocaleString()}
        </div>
        {course.tag && (
          <div className="absolute top-3 left-3 bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow">
            {course.tag}
          </div>
        )}
        {/* Hover overlay hint */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <span className="text-white text-sm font-semibold bg-black/60 px-3 py-1.5 rounded-full">View Details →</span>
        </div>
      </div>
 
      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
 
        {/* ✅ CHANGED — clicking title also navigates to detail page */}
        <h3
          className="text-lg font-bold text-white mb-2 tracking-tight cursor-pointer hover:text-emerald-400 transition-colors"
          onClick={() => navigate(`/course/${course.id}`)}
        >
          {course.name}
        </h3>
 
        <p className="text-slate-300 text-sm leading-relaxed flex-1">
          {description}
          <button
            onClick={() => setReadmore(!readmore)}
            className="ml-1 text-emerald-400 font-semibold hover:underline focus:outline-none"
          >
            {readmore ? "Show less" : "Read more"}
          </button>
        </p>
 
        {/* ✅ CHANGED — was "Remove Course", now toggles Add/Remove Cart */}
        <button
          onClick={handleCartToggle}
          className={`mt-5 w-full py-2 rounded-xl border-2 text-sm font-semibold transition-colors duration-200
            ${isInCart
              ? "border-red-400 text-red-400 hover:bg-red-500 hover:text-white"
              : "border-emerald-400 text-emerald-400 hover:bg-emerald-500 hover:text-white"
            }`}
        >
          {isInCart ? "Remove from Cart" : "Add to Cart"}
        </button>
 
      </div>
    </div>
  );
}
 
// ✅ CHANGED — Courses no longer needs removeCourse prop
function Courses({ courses }) {
  return (
    <section className="py-16 px-6 bg-slate-950 min-h-screen">
      <div className="max-w-6xl mx-auto">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <Card key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
 
// ✅ CHANGED — no more useState for courses, no removeCourse logic
export default function Home() {
  return <Courses courses={coursesData} />;
}