import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    // Clear field-specific error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Handle authentication logic here (e.g., API call)
    console.log('Login credentials:', formData);
  };

  return (
    <div className="min-h-screen bg-[#111827] flex items-center justify-center p-4">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative w-full max-w-md bg-[#1f2937]/90 backdrop-blur-md border border-gray-700/60 rounded-2xl p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 mb-3 border border-emerald-500/20">
            <Lock className="w-6 h-6" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">
            Welcome back
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            Please enter your details to sign in
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Email Address
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Mail className="w-5 h-5" />
              </span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={`w-full pl-10 pr-4 py-2.5 bg-gray-900/60 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all `}
              />
            </div>
            {errors.email && (
              <p className="text-xs text-rose-400 mt-1.5">{errors.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-1.5">
              Password
            </label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                <Lock className="w-5 h-5" />
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={`w-full pl-10 pr-11 py-2.5 bg-gray-900/60 border rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all ${
                  errors.password
                    ? 'border-rose-500 focus:ring-rose-500/40'
                    : 'border-gray-700 focus:border-emerald-500 focus:ring-emerald-500/30'
                }`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-200 focus:outline-none"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>
            {errors.password && (
              <p className="text-xs text-rose-400 mt-1.5">{errors.password}</p>
            )}
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-400 hover:text-gray-300 cursor-pointer select-none">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 rounded bg-gray-900 border-gray-700 text-emerald-500 focus:ring-emerald-500/30 accent-emerald-500"
              />
              <span>Remember me</span>
            </label>
            <a
              href="#forgot-password"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-500 hover:bg-emerald-600 active:bg-emerald-700 text-white font-medium rounded-xl transition duration-150 shadow-lg shadow-emerald-500/20"
          >
            <span>Sign In</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-sm text-gray-400 mt-6">
          Don't have an account?{' '}
          <a
            href="#signup"
            className="text-emerald-400 hover:text-emerald-300 font-medium transition-colors"
          >
            Create an account
          </a>
        </p>
      </div>
    </div>
  );
}