import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";


const GoogleIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);


export default function GoogleSignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = state?.email || "gourkeshav@gmail.com"; 
  return (
    <div style={{ minHeight: "100vh",display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", fontFamily: "'Google Sans', Roboto, sans-serif" }}>

      {/* Card */}
      <div style={{ background: "#1e1e1e", borderRadius: "16px", width: "90%", maxWidth: "860px", padding: "48px 56px", display: "flex", gap: "80px", alignItems: "center", boxShadow: "0 4px 32px rgba(0,0,0,0.5)" }}>

        {/* Left */}
        <div style={{ flex: "0 0 auto", minWidth: "200px" }}>
          <GoogleIcon />
          <h1 style={{ color: "#fff", fontSize: "32px", fontWeight: "400", margin: "24px 0 16px" }}>Hi {email.split("@")[0]}</h1>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", border: "1px solid #444", borderRadius: "999px", padding: "6px 14px 6px 8px", cursor: "pointer" }}>
            <div style={{ width: "26px", height: "26px", borderRadius: "50%", background: "#c0392b", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: "13px", fontWeight: "600" }}>m</div>
            <span style={{ color: "#fff", fontSize: "14px" }}>{email}</span>
            <span style={{ color: "#aaa", fontSize: "12px" }}>▾</span>
          </div>
        </div>

        {/* Right */}
        <div style={{ flex: 1 }}>
          <p style={{ color: "#e0e0e0", fontSize: "18px", marginBottom: "28px" }}>To continue, first verify it's you</p>

          {/* Password Input */}
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", background: "transparent", border: "1px solid #555", borderRadius: "6px", padding: "16px 14px", color: "#fff", fontSize: "16px", outline: "none", boxSizing: "border-box" }}
            onFocus={e => e.target.style.borderColor = "#8ab4f8"}
            onBlur={e => e.target.style.borderColor = "#555"}
          />

          {/* Show password checkbox */}
          <label style={{ display: "flex", alignItems: "center", gap: "10px", marginTop: "14px", cursor: "pointer", color: "#e0e0e0", fontSize: "14px" }}>
            <input
              type="checkbox"
              checked={showPassword}
              onChange={() => setShowPassword(prev => !prev)}
              style={{ width: "16px", height: "16px", cursor: "pointer", accentColor: "#8ab4f8" }}
            />
            Show password
          </label>

          {/* Actions */}
          <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: "40px", gap: "24px" }}>
            <a href="#" style={{ color: "#8ab4f8", fontSize: "14px", textDecoration: "none", fontWeight: "500" }}>
              Forgot password?
            </a>
            <button
              style={{ background: "#8ab4f8", color: "#1a1a1a", border: "none", borderRadius: "999px", padding: "12px 28px", fontSize: "15px", fontWeight: "600", cursor: "pointer" }}
              onMouseEnter={e => e.target.style.background = "#aecbfa"}
               onClick={() => navigate("/Dashboard")}
              onMouseLeave={e => e.target.style.background = "#8ab4f8"}
            >
              Next
            </button>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", width: "90%", maxWidth: "860px", marginTop: "20px", padding: "0 4px" }}>
        <select style={{ background: "transparent", border: "none", color: "#aaa", fontSize: "13px", cursor: "pointer" }}>
          <option>English (United States)</option>
        </select>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Help", "Privacy", "Terms"].map(item => (
            <a key={item} href="#" style={{ color: "#aaa", fontSize: "13px", textDecoration: "none" }}>{item}</a>
          ))}
        </div>
      </div>

    </div>
  );
}