import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
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

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          username: form.username,
          email: form.email,
          password: form.password,
          createdAt: new Date(),
        }),
      });

      const data = await res.json();

      if (!data.success) {
        alert(data.message || "Signup failed");
        return;
      }

      localStorage.setItem("user", JSON.stringify(data.user));

      window.location.href = "http://localhost:3001/dashboard";
    } catch (err) {
      alert("Signup error");
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md rounded-xl border bg-white p-6 sm:p-8">
        <h1 className="text-2xl font-semibold text-gray-900">Create account</h1>
        <p className="mt-2 text-gray-600 text-sm">
          Sign up to access your dashboard.
        </p>

        <form onSubmit={handleSignup} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              name="username"
              value={form.username}
              onChange={handleChange}
              type="text"
              placeholder="Enter username"
              className="mt-2 w-full rounded-md border px-4 py-3 outline-none focus:border-[#387ED1]"
            />
          </div>

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
              placeholder="Create password"
              className="mt-2 w-full rounded-md border px-4 py-3 outline-none focus:border-[#387ED1]"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-md bg-[#387ED1] py-3 font-medium text-white hover:bg-[#2f6bb5] transition disabled:opacity-60"
          >
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </form>

        <p className="mt-5 text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:text-blue-700">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
