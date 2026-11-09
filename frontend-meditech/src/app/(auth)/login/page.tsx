
import Link from "next/link";

export default function LoginPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">
        Welcome Back
      </h1>

      <p className="mt-2 text-sm text-slate-500">
        Login to your Khulna Meditech account.
      </p>

      <form className="mt-8 space-y-5">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-teal-600"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            required
            className="w-full rounded-lg border px-4 py-3 outline-none focus:border-teal-600"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700"
        >
          Login
        </button>

      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Don't have an account?{" "}
        <Link
          href="/register"
          className="font-semibold text-teal-600"
        >
          Register
        </Link>
      </p>
    </div>
  );
}
