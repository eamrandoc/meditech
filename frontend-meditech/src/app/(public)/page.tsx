
import Link from "next/link";

export default function HomePage() {
  return (
    // <section className="bg-teal-50">
    //   <div className="mx-auto max-w-7xl px-4 py-24">

    //     <h1 className="max-w-3xl text-4xl font-bold text-slate-900 md:text-6xl">
    //       Your Health, Our Priority
    //     </h1>

    //     <p className="mt-6 max-w-xl leading-8 text-slate-600">
    //       Quality healthcare and diagnostic services
    //       for you and your family.
    //     </p>

    //     <div className="mt-8 flex flex-wrap gap-4">

    //       <Link
    //         href="/appointments"
    //         className="rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white"
    //       >
    //         Book an Appointment
    //       </Link>

    //       <Link
    //         href="/tests"
    //         className="rounded-lg border border-teal-600 px-6 py-3 font-semibold text-teal-700"
    //       >
    //         Explore Tests
    //       </Link>

    //     </div>
    //   </div>
    // </section>

    
<section
  className="relative isolate flex min-h-[600px] items-center bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage:
      "url('https://hayatlifecare.com/images/gallery/reception.jpg')",
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 -z-10 bg-slate-950/55" />

  {/* Hero Content */}
  <div className="mx-auto w-full max-w-7xl px-4 py-24">
    <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
      Your Health, Our Priority
    </h1>

    <p className="mt-6 max-w-xl text-base leading-8 text-white/90 md:text-lg">
      Quality healthcare and diagnostic services
      for you and your family.
    </p>

    <div className="mt-8 flex flex-wrap gap-4">
      <Link
        href="/appointments"
        className="rounded-lg bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
      >
        Book an Appointment
      </Link>

      <Link
        href="/tests"
        className="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-teal-700"
      >
        Explore Tests
      </Link>
    </div>
  </div>
</section>

  );
}
