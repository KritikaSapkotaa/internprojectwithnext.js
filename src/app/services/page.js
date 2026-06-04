// app/services/page.jsx

import {
  FaHome,
  FaComments,
  FaCalendarCheck,
  FaBell,
  FaShieldAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHome size={30} />,
    title: "Verified Room Listings",
    description:
      "Browse thousands of trusted and verified room listings in different locations.",
  },
  {
    icon: <FaComments size={30} />,
    title: "Direct Chat",
    description:
      "Communicate directly with room owners using our real-time chat system.",
  },
  {
    icon: <FaCalendarCheck size={30} />,
    title: "Instant Booking",
    description:
      "Book your room quickly with our secure and easy booking platform.",
  },
  {
    icon: <FaBell size={30} />,
    title: "Real-time Notifications",
    description:
      "Get instant updates about messages, bookings, and listing changes.",
  },
  {
    icon: <FaShieldAlt size={30} />,
    title: "Secure Authentication",
    description:
      "Safe login and signup with secure user authentication.",
  },
  {
    icon: <FaMapMarkerAlt size={30} />,
    title: "Location Search",
    description:
      "Easily search rooms by area, city, or nearby locations.",
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* HERO */}
<section className="w-full h-[420px] bg-gradient-to-r from-sky-600 to-sky-400 flex flex-col items-center justify-center text-center text-white">
  <h1 className="mb-6 text-5xl md:text-7xl font-semibold font-serif">
    Our Services
  </h1>

  <p className="text-lg md:text-2xl font-medium opacity-95">
    Everything you need for room rental and booking
  </p>
</section>
      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="mb-16 text-center  text-3xl font-semibold text-sky-800 py-8">
          What We Offer
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="rounded-2xl border border-sky-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 text-sky-600">{service.icon}</div>

              <h3 className="mb-3 text-lg font-semibold text-sky-700">
                {service.title}
              </h3>

              <p className="text-sm leading-7 text-slate-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}