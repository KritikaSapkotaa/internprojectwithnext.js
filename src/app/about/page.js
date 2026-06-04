// app/about/page.jsx

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-sky-50 text-slate-700">
      
      {/* HERO */}
      <section className="bg-gradient-to-br from-sky-600 to-sky-400 px-4 py-16 text-center text-white md:py-20">
        <h1 className="mb-3 text-3xl font-semibold md:text-5xl">
          About BasoBas
        </h1>

        <p className="text-sm opacity-90 md:text-base">
          Your trusted room rental and booking platform
        </p>
      </section>

      {/* ABOUT SECTION */}
      <section className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="mb-5 text-3xl font-semibold text-sky-800">
          Who We Are
        </h2>

        <p className="mb-4 text-[15px] leading-8 text-slate-500">
          BASOBAS is a modern room rental platform designed to help students,
          travelers, and professionals find the perfect room effortlessly.
        </p>

        <p className="mb-4 text-[15px] leading-8 text-slate-500">
          We focus on verified listings, secure communication, and instant
          booking to make the process simple and trustworthy.
        </p>

        <p className="text-[15px] leading-8 text-slate-500">
          Our mission is to make room hunting easy, fast, and safe for everyone.
        </p>

        {/* CARDS */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          
          <div className="rounded-2xl border border-sky-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-sky-700">
              12k+ Listings
            </h3>

            <p className="text-sm leading-6 text-slate-500">
              Thousands of verified rooms available across cities.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-sky-700">
              98% Verified Owners
            </h3>

            <p className="text-sm leading-6 text-slate-500">
              Trusted room owners with identity verification.
            </p>
          </div>

          <div className="rounded-2xl border border-sky-200 bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold text-sky-700">
              24/7 Support
            </h3>

            <p className="text-sm leading-6 text-slate-500">
              Always available to help users and owners.
            </p>
          </div>
        </div>
      </section>

      
    </div>
  );
}