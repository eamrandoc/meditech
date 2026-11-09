
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">
        Create Account
      </h1>

      <p className="mt-2 text-sm text-slate-500">
        Register to use Khulna Meditech services.
      </p>

      <form className="mt-8 space-y-5">

        <div>
          <label className="mb-2 block text-sm font-medium">
            Full Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            required
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            required
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            placeholder="Create password"
            required
            className="w-full rounded-lg border px-4 py-3"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-lg bg-teal-600 py-3 font-semibold text-white hover:bg-teal-700"
        >
          Create Account
        </button>

      </form>

      <p className="mt-6 text-center text-sm text-slate-500">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-teal-600"
        >
          Login
        </Link>
      </p>
    </div>
  );
}
