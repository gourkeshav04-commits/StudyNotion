import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('overview')

  const student = {
    name: 'Keshav Gour',
    email: 'gourkeshav@gmail.com',
    avatar: 'KG',
    streak: 12,
    xp: 4820,
    level: 8,
    joinDate: 'Jan 2024',
  }

  const courses = [
    { id: 1, title: 'JavaScript Mastery', progress: 78, lessons: 42, completed: 33, color: '#F7DF1E', icon: 'JS' },
    { id: 2, title: 'React & Nodejs',       progress: 46, lessons: 56, completed: 26, color: '#61DAFB', icon: 'RN' },
    { id: 3, title: 'Python for AI',     progress: 20, lessons: 50, completed: 10, color: '#3776AB', icon: 'Py' },
    { id: 4, title: 'Tailwind CSS',        progress: 91, lessons: 24, completed: 22, color: '#adebfd', icon: 'Tw' },
    { id: 5, title: 'Ethical Hacking',        progress: 60, lessons: 25, completed: 15, color: '#03566d', icon: 'Eh' },
    
  ]

  const leaderboard = [
    { rank: 1, name: 'Priya Singh',  xp: 5200, badge: '🥇' },
    { rank: 2, name: 'Keshav Gour', xp: 4820, badge: '🥈', isMe: true },
    { rank: 3, name: 'Rahul Mehta', xp: 3850, badge: '🥉' },
    { rank: 4, name: 'Anjali Rao',  xp: 3990, badge: '4️⃣' },
    { rank: 5, name: 'Dev Sharma',  xp: 3100, badge: '5️⃣' },
  ]

  const weeklyProgress = [
    { day: 'Mon', mins: 45 },
    { day: 'Tue', mins: 30 },
    { day: 'Wed', mins: 90 },
    { day: 'Thu', mins: 20 },
    { day: 'Fri', mins: 60 },
    { day: 'Sat', mins: 75 },
    { day: 'Sun', mins: 50 },
  ]
  const maxMins = Math.max(...weeklyProgress.map(d => d.mins))

  const tabs = ['overview', 'courses', 'progress', 'leaderboard']

  return (
    <div className="min-h-screen bg-slate-950 text-white px-4 py-8 md:px-10">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">
            Welcome back <span className="text-yellow-400">Apex</span>
          </h1>
          <p className="text-gray-400 text-sm mt-1">
            Keep going — you're on a <span className="text-teal-400 font-semibold">{student.streak}-day streak!</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-yellow-400 text-black font-bold flex items-center justify-center text-lg">
            {student.avatar}
          </div>
          <div>
            <p className="font-semibold text-sm">{student.name}</p>
            <p className="text-gray-400 text-xs">{student.email}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-md text-sm font-semibold capitalize transition duration-200
              ${activeTab === tab ? 'bg-yellow-400 text-black' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* OVERVIEW TAB */}
      {activeTab === 'overview' && (
        <div className="flex flex-col gap-6">

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'XP Earned',        value: student.xp,              color: 'text-yellow-400' },
              { label: 'Level',            value: `Lvl ${student.level}`,  color: 'text-teal-400'   },
              { label: 'Day Streak',       value: `${student.streak} 🔥`,  color: 'text-orange-400' },
              { label: 'Courses Enrolled', value: courses.length,          color: 'text-blue-400'   },
            ].map((stat, i) => (
              <div key={i} className="bg-gray-800 rounded-xl p-4 flex flex-col gap-1">
                <p className="text-gray-400 text-xs">{stat.label}</p>
                <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Continue Learning */}
          <div>
            <h2 className="text-lg font-bold mb-3">Continue Learning</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {courses.slice(0, 2).map(course => (
                <div key={course.id} className="bg-gray-800 rounded-xl p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm text-black"
                      style={{ backgroundColor: course.color }}>
                      {course.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{course.title}</p>
                      <p className="text-gray-400 text-xs">{course.completed}/{course.lessons} lessons</p>
                    </div>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="h-2 rounded-full bg-yellow-400 transition-all duration-500"
                      style={{ width: `${course.progress}%` }} />
                  </div>
                  <p className="text-xs text-gray-400">{course.progress}% complete</p>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Activity */}
          <div>
            <h2 className="text-lg font-bold mb-3">This Week's Activity</h2>
            <div className="bg-gray-800 rounded-xl p-4">
              <div className="flex items-end gap-2 h-24">
                {weeklyProgress.map((d, i) => (
                  <div key={i} className="flex flex-col items-center gap-1 flex-1">
                    <div className="w-full rounded-t-md bg-teal-500 transition-all duration-500"
                      style={{ height: `${(d.mins / maxMins) * 80}px` }} />
                    <p className="text-xs text-gray-400">{d.day}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      )}

      {/* COURSES TAB */}
      {activeTab === 'courses' && (
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Enrolled Courses</h2>
          {courses.map(course => (
            <div key={course.id} className="bg-gray-800 rounded-xl p-5 flex flex-col gap-3">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-black"
                  style={{ backgroundColor: course.color }}>
                  {course.icon}
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{course.title}</p>
                  <p className="text-gray-400 text-xs">{course.completed} of {course.lessons} lessons completed</p>
                </div>
                <span className="text-yellow-400 font-bold text-sm">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="h-2 rounded-full transition-all duration-500"
                  style={{ width: `${course.progress}%`, backgroundColor: course.color }} />
              </div>
              <button className="self-start text-xs text-teal-400 hover:underline cursor-pointer">
                Continue →
              </button>
            </div>
          ))}
        </div>
      )}

      {/* PROGRESS TAB */}
      {activeTab === 'progress' && (
        <div className="flex flex-col gap-6">
          <h2 className="text-lg font-bold">Your Progress</h2>

          {/* Level Progress */}
          <div className="bg-gray-800 rounded-xl p-5">
            <div className="flex justify-between mb-2">
              <p className="font-semibold">Level {student.level}</p>
              <p className="text-yellow-400 text-sm">{student.xp} / 5000 XP</p>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-3">
              <div className="h-3 rounded-full bg-yellow-400 transition-all duration-500"
                style={{ width: `${(student.xp / 5000) * 100}%` }} />
            </div>
            <p className="text-gray-400 text-xs mt-2">{5000 - student.xp} XP to Level {student.level + 1}</p>
          </div>

          {/* Weekly Bar Chart */}
          <div className="bg-gray-800 rounded-xl p-5">
            <h3 className="font-semibold mb-4">Weekly Study Time (mins)</h3>
            <div className="flex items-end gap-3 h-32">
              {weeklyProgress.map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-1 flex-1">
                  <p className="text-xs text-gray-400">{d.mins}</p>
                  <div className="w-full rounded-t-md bg-teal-500"
                    style={{ height: `${(d.mins / maxMins) * 90}px` }} />
                  <p className="text-xs text-gray-400">{d.day}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Per-course progress */}
          <div className="bg-gray-800 rounded-xl p-5">
            <h3 className="font-semibold mb-4">Course Completion</h3>
            <div className="flex flex-col gap-4">
              {courses.map(course => (
                <div key={course.id} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs text-black flex-shrink-0"
                    style={{ backgroundColor: course.color }}>
                    {course.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <p className="text-sm">{course.title}</p>
                      <p className="text-xs text-gray-400">{course.progress}%</p>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full transition-all duration-500"
                        style={{ width: `${course.progress}%`, backgroundColor: course.color }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* LEADERBOARD TAB */}
      {activeTab === 'leaderboard' && (
        <div className="flex flex-col gap-4">
          <h2 className="text-lg font-bold">Leaderboard</h2>
          <div className="bg-gray-800 rounded-xl overflow-hidden">
            {leaderboard.map((user, i) => (
              <div key={i}
                className={`flex items-center gap-4 px-5 py-4 border-b border-gray-700 last:border-none transition duration-200
                  ${user.isMe ? 'bg-opacity-10 bg-yellow-400 border-l-4 border-l-yellow-400' : 'hover:bg-gray-700'}`}>
                <span className="text-xl w-8 text-center">{user.badge}</span>
                <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center font-bold text-sm text-yellow-400">
                  {user.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="flex-1">
                  <p className={`font-semibold text-sm ${user.isMe ? 'text-yellow-400' : ''}`}>
                    {user.name} {user.isMe && <span className="text-xs text-gray-400">(You)</span>}
                  </p>
                </div>
                <p className="text-teal-400 font-bold text-sm">{user.xp.toLocaleString()} XP</p>
              </div>
            ))}
          </div>
          <p className="text-gray-400 text-xs text-center">Rankings update daily. Keep learning to climb! 🚀</p>
        </div>
      )}

      {/* Profile — always visible */}
      <div className="mt-10 bg-gray-800 rounded-xl p-5 flex flex-col sm:flex-row items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-yellow-400 text-black font-bold text-2xl flex items-center justify-center">
          {student.avatar}
        </div>
        <div className="flex-1 text-center sm:text-left">
          <p className="font-bold text-lg">{student.name}</p>
          <p className="text-gray-400 text-sm">{student.email}</p>
          <p className="text-teal-400 text-xs mt-1">Member since {student.joinDate} · Level {student.level} · {student.xp} XP</p>
        </div>
        
      </div>

    </div>
  )
}

export default Dashboard
