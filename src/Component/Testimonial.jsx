const testimonials = [
  {
    id: 1,
    name: "Anaya Sharma",
    message: "I love the music class! The teacher is so friendly and fun!",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600",
  },
  {
    id: 2,
    name: "Karan Mehta",
    message: "Swimming lessons are my favorite. I made many new friends!",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600",
  },
  {
    id: 3,
    name: "Meera Joshi",
    message: "Art class helped me explore my creativity. I enjoy painting now!",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600",
  },
  {
    id: 4,
    name: "Aryan Patel",
    message: "Go Green program taught me about saving nature. I planted a tree!",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600",
  },
  {
    id: 5,
    name: "Diya Nair",
    message: "Language learning was super fun with games and stories.",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600",
  },
  {
    id: 6,
    name: "Ritvik Singh",
    message: "I love coming to class! Teachers are nice and activities are fun!",
    image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600",
  },
];

const TestimonialCard = ({ item }) => (
  <div
    className="bg-white p-6 rounded-[20px] shadow-md hover:shadow-lg flex items-center gap-6 mb-6"
    style={{
      width: "400px",
      height: "258px",
    }}
  >
    <img
      src={item.image}
      alt={item.name}
      className="w-20 h-20 rounded-full object-cover"
    />
    <div
      style={{
        maxWidth: "320px",
      }}
    >
      <h3 className="text-xl font-semibold text-blue-900">{item.name}</h3>
      <p className="text-gray-700 text-base mt-2 leading-tight">{item.message}</p>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-20 px-6 bg-blue-50 hover:border hover:border-blue-500 transition"
      style={{
        width: "1540px",
        height: "1062px",
        opacity: 1,
      }}
    >
      <div className="text-center mb-12">
        <h2
          className="text-[#5676FF] font-bold font-['Inter'] text-center mx-auto"
          style={{
            fontSize: "55px",
            lineHeight: "55px",
            width: "496px",
            height: "134px",
          }}
        >
          Our Testimonial at Smart Academy
        </h2>
      </div>

      <div className="container mx-auto space-y-8">
        {/* First Row */}
        <div className="flex justify-center gap-8 flex-wrap">
          <TestimonialCard item={testimonials[0]} />
          <TestimonialCard item={testimonials[1]} />
            <TestimonialCard item={testimonials[2]} />
        </div>

        {/* Second Row (centered) */}
        <div className="flex justify-center gap-5">
   <TestimonialCard item={testimonials[3]} />
    <TestimonialCard item={testimonials[4]} />
        </div>

        {/* Third Row */}
      
      </div>
    </section>
  );
};

export default Testimonials;
