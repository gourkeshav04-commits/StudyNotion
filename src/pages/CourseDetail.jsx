import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../Redux/cartSlice";
import toast from "react-hot-toast";
import { coursesData } from "../data/CourseData";
 
const StarIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);
const CheckIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const ClockIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const UsersIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const BookIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
  </svg>
);
const CartIcon = () => (
  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);
 
function PriceCard({ course, isInCart, discount, finalPrice, handleCartToggle, handleBuyNow }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl">
      <img src={course.image} alt={course.name} className="w-full h-44 object-cover" />
      
      <div className="p-5 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-extrabold text-white">₹ {finalPrice.toLocaleString()}</span>
          <div className="flex flex-col">
            <span className="text-slate-400 text-sm line-through">₹ {course.price.toLocaleString()}</span>
            <span className="text-emerald-400 text-xs font-bold">10% OFF</span>
          </div>
        </div>
        <button onClick={handleBuyNow}
          className="w-full py-3 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold text-sm transition-colors">
          Buy Now
        </button>
        <button onClick={handleCartToggle}
          className={`w-full py-3 rounded-xl border-2 font-bold text-sm transition-colors
            ${isInCart
              ? "border-red-400 text-red-400 hover:bg-red-500 hover:text-white"
              : "border-emerald-400 text-emerald-400 hover:bg-emerald-500 hover:text-white"}`}>
          <span className="flex items-center justify-center gap-2">
            <CartIcon />{isInCart ? "Remove from Cart" : "Add to Cart"}
          </span>
        </button>
        <div className="border-t border-slate-700 pt-4 flex flex-col gap-2 text-sm text-slate-300">
          <div className="flex justify-between"><span className="text-slate-400">Duration</span><span className="font-semibold text-white">{course.duration}</span></div>
          <div className="flex justify-between"><span className="text-slate-400">Level</span><span className="font-semibold text-white">{course.level}</span></div>
          <div className="flex justify-between"><span className="text-slate-400">Students</span><span className="font-semibold text-white">{course.students}</span></div>
          <div className="flex justify-between"><span className="text-slate-400">Rating</span><span className="font-semibold text-yellow-400">⭐ {course.rating}</span></div>
          <Link to="/">
            <button className="w-full mt-3 border border-slate-600 text-slate-300 hover:border-slate-400 hover:text-white font-semibold py-2.5 rounded-xl text-xs transition-colors duration-200">
           ← Back to Courses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
 
export default function CourseDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
 
  const course = coursesData.find((c) => c.id === parseInt(id));
  const isInCart = cart.some((item) => item.id === course?.id);
 
  if (!course) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center text-white">
        <h2 className="text-2xl font-bold mb-4">Course not found</h2>
        <Link to="/" className="text-emerald-400 hover:underline">← Back to Courses</Link>
      </div>
    );
  }
 
  function handleCartToggle() {
    if (isInCart) { dispatch(remove(course.id)); toast.error("Course removed from cart"); }
    else { dispatch(add(course)); toast.success("Course added to cart!"); }
  }
 
  function handleBuyNow() {
    if (!isInCart) dispatch(add(course));
    navigate("/cart");
  }
 
  const discount = Math.round(course.price * 0.1);
  const finalPrice = course.price - discount;
 
  return (
    <div className="min-h-screen bg-slate-950 text-white">
 
      {/* HERO BANNER */}
      <div className="relative bg-slate-900 border-b border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10 items-start">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
              <Link to="/" className="hover:text-emerald-400 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">{course.name}</span>
            </div>
            <span className="inline-block bg-yellow-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full mb-4">{course.tag}</span>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-4">{course.name}</h1>
            <p className="text-slate-300 text-base leading-relaxed mb-6 max-w-2xl">{course.info}</p>
            <div className="flex flex-wrap gap-5 text-sm text-slate-300">
              <div className="flex items-center gap-1.5 text-yellow-400"><StarIcon /><span className="font-bold">{course.rating}</span><span className="text-slate-400">rating</span></div>
              <div className="flex items-center gap-1.5"><UsersIcon /><span>{course.students} students</span></div>
              <div className="flex items-center gap-1.5"><ClockIcon /><span>{course.duration}</span></div>
              <div className="flex items-center gap-1.5"><BookIcon /><span>{course.level}</span></div>
            </div>
            <p className="mt-4 text-sm text-slate-400">Created by <span className="text-emerald-400 font-semibold">{course.instructor}</span></p>
          </div>
          <div className="hidden lg:block w-80 flex-shrink-0">
            <PriceCard course={course} isInCart={isInCart} discount={discount} finalPrice={finalPrice} handleCartToggle={handleCartToggle} handleBuyNow={handleBuyNow} />
          </div>
        </div>
      </div>
 
      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10">
        <div className="flex-1 flex flex-col gap-12">
 
          {/* What You'll Learn */}
          <section>
            <h2 className="text-2xl font-extrabold text-white mb-6 flex items-center gap-2">
              <span className="text-emerald-400">✦</span> What You'll Learn
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {course.highlights.map((point, i) => (
                <div key={i} className="flex items-start gap-3 bg-slate-800/50 border border-slate-700 rounded-xl p-3">
                  <span className="text-emerald-400 mt-0.5 flex-shrink-0"><CheckIcon /></span>
                  <span className="text-slate-200 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </section>
 
          {/* Curriculum */}
          <section>
            <h2 className="text-2xl font-extrabold text-white mb-6 flex items-center gap-2">
              <span className="text-emerald-400">✦</span> Course Curriculum
            </h2>
            <div className="flex flex-col gap-4">
              {course.curriculum.map((month, i) => (
                <div key={i} className="border border-slate-700 rounded-2xl overflow-hidden">
                  <div className="flex items-center gap-4 bg-slate-800 px-5 py-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                      <span className="text-emerald-400 font-bold text-xs">{i + 1}</span>
                    </div>
                    <div>
                      <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest">{month.month}</p>
                      <p className="text-white font-bold">{month.title}</p>
                    </div>
                    <span className="ml-auto text-slate-400 text-xs">{month.topics.length} topics</span>
                  </div>
                  <div className="bg-slate-900 px-5 py-3 flex flex-col gap-2">
                    {month.topics.map((topic, j) => (
                      <div key={j} className="flex items-center gap-3 py-1.5 border-b border-slate-800 last:border-none">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0"></span>
                        <span className="text-slate-300 text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
 
          {/* Projects */}
          <section className="pb-24 lg:pb-0">
            <h2 className="text-2xl font-extrabold text-white mb-6 flex items-center gap-2">
              <span className="text-emerald-400">✦</span> Projects You'll Build
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {course.projects.map((project, i) => (
                <div key={i} className="bg-slate-800 border border-slate-700 hover:border-emerald-500/40 rounded-2xl p-5 transition-colors">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-7 h-7 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold flex-shrink-0">{i + 1}</span>
                    <h3 className="text-white font-bold text-sm">{project.title}</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{project.desc}</p>
                </div>
              ))}
            </div>
          </section>
 
        </div>
 
        {/* Sticky Price Card desktop */}
        <div className="hidden lg:block w-80 flex-shrink-0">
          <div className="sticky top-24">
            <PriceCard course={course} isInCart={isInCart} discount={discount} finalPrice={finalPrice} handleCartToggle={handleCartToggle} handleBuyNow={handleBuyNow} />
          </div>
        </div>
      </div>
 
      {/* MOBILE BOTTOM BAR */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-900 border-t border-slate-700 px-4 py-3 flex items-center gap-3 z-50">
        <div>
          <p className="text-xs text-slate-400 line-through">₹ {course.price.toLocaleString()}</p>
          <p className="text-white font-extrabold text-lg">₹ {finalPrice.toLocaleString()}</p>
        </div>
        <button onClick={handleCartToggle}
          className={`flex-1 py-2.5 rounded-xl font-bold text-sm border-2 transition-colors
            ${isInCart ? "border-red-400 text-red-400 hover:bg-red-500 hover:text-white" : "border-emerald-400 text-emerald-400 hover:bg-emerald-500 hover:text-white"}`}>
          {isInCart ? "Remove" : "Add to Cart"}
        </button>
        <button onClick={handleBuyNow}
          className="flex-1 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-slate-900 font-bold text-sm transition-colors">
          Buy Now
        </button>
      </div>
 
    </div>
  );
}