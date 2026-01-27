import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const API = process.env.REACT_APP_API_URL;

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${API}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.message || "Login failed");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));

      window.location.href =
        process.env.REACT_APP_DASHBOARD_URL ||
        "https://zerodha-dashboard-jkmq.onrender.com";
    } catch (err) {
      alert("Login error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md p-6 bg-white border rounded-xl sm:p-8">
        <h1 className="text-2xl font-semibold text-gray-900">Login</h1>
        <p className="mt-2 text-sm text-gray-600">
          Login to access your dashboard.
        </p>

        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              placeholder="Enter email"
              className="mt-2 w-full rounded-md border px-4 py-3 outline-none focus:border-[#387ED1]"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              name="password"
              value={form.password}
              onChange={handleChange}
              type="password"
              placeholder="Enter password"
              className="mt-2 w-full rounded-md border px-4 py-3 outline-none focus:border-[#387ED1]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-[#387ED1] py-3 font-medium text-white hover:bg-[#2f6bb5] transition disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="mt-5 text-sm text-gray-600">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-600 hover:text-blue-700">
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
