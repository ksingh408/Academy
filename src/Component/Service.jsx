// src/components/Services.jsx

import {
  GraduationCap,
  Laptop,
  BadgeCheck,
} from "lucide-react"; // Icon library: npm install lucide-react

const services = [
  {
    id: 1,
    title: "Teacher Professional",
    description:
      "Empower educators with skill-based training for modern classrooms Empower educators with skill-based training for modern classrooms.",
    icon: <GraduationCap className="w-10 h-10 text-blue-600 mb-4" />,
  },
  {
    id: 2,
    title: "Online Courses",
    description:
      "Access flexible and interactive online courses across various domains Empower educators with skill-based training for modern classrooms.",
    icon: <Laptop className="w-10 h-10 text-blue-600 mb-4" />,
  },
  {
    id: 3,
    title: "Certification Programs",
    description:
      "Get certified to boost your career with recognized credentials Empower educators with skill-based training for modern classrooms.",
    icon: <BadgeCheck className="w-10 h-10 text-blue-600 mb-4" />,
  },

  {
    id: 3,
    title: "Better Value",
    description:
      "Get certified to boost your career with recognized credentials Empower educators with skill-based training for modern classrooms.",
    icon: <BadgeCheck className="w-10 h-10 text-blue-600 mb-4" />,
  },
];

const Services = () => {
  return (
   <section
  id="services"
  className="bg-blue-50 px-6 hover:border border-blue-800 transition"
  style={{
    width: "1520px",
    height: "846px",
    opacity: 1,
    margin: "0 auto",
    paddingTop: "80px",
    paddingBottom: "80px",
  }}
>
<div className="text-center mb-16">
  <h2
    className="text-[#5676FF] font-['Inter'] font-bold leading-[50px] text-[50px] mx-auto"
    style={{
      width: "549px",
      height: "122px",
      lineHeight: "100%", // explicitly match line-height
      letterSpacing: "0%",
      opacity: 1,
    }}
  >
    Smart Academy Offers Services Like
  </h2>
</div>
<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-center">
  {services.map((service) => (
   <div
  key={service.id}
  className="shadow-md hover:shadow-lg transition duration-300 text-center"
  style={{
    backgroundColor: "#fff",
    width: "282.14px",
    height: "391.39px",
    borderRadius: "25px",
    padding: "24px",
    opacity: 1,
  }}
>
  {service.icon}

  <h3
    className="text-[20px] font-semibold text-blue-700 mb-2 leading-tight text-center"
    style={{
      width: "120px",
      height: "56px",
      opacity: 1,
      margin: "0 auto",
    }}
  >
    {service.title}
  </h3>

  <p
    className="text-gray-600 text-sm leading-snug text-center"
    style={{
      width: "194px",
      height: "75px",
      opacity: 1,
      margin: "0 auto",
    }}
  >
    {service.description}
  </p>
</div>

  ))}
</div>


  <div className="mt-12 flex justify-center">
    <button className="bg-[#61A3BA] text-white px-6 py-3 rounded-full hover:bg-[#4a8aa0] transition">
      Read more
    </button>
  </div>
</section>


  );
};

export default Services;

