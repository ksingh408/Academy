const Hero = () => {
  return (
    <section
      id="hero"
      className="relative bg-cover bg-center bg-no-repeat min-h-[100vh] flex flex-col justify-center px-6"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/7972948/pexels-photo-7972948.jpeg')",
      }}
    >
      {/* Black shadow gradient from left */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent z-0" />

      {/* Navbar at top of image */}
      <div className="absolute top-0 left-0 w-full z-10">
        <div className="container mx-auto flex justify-between items-center text-white py-4 px-6">
          <ul className="flex gap-6 text-[#fdfeff] font-medium">
            <li className="hover:text-[#61A3BA] cursor-pointer">Home</li>
            <li className="hover:text-[#61A3BA] cursor-pointer">About</li>
            <li className="hover:text-[#61A3BA] cursor-pointer">Services</li>
          </ul>

          <h1 className="text-2xl font-bold text-[#F5F7FA]">Online Academy</h1>

          <button className="bg-[#61A3BA] text-white px-4 py-2 rounded-4xl hover:bg-[#4a8aa0] transition">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Hero Content aligned to the left */}
      <div className="relative z-10 text-white max-w-2xl mt-32 md:mt-40 px-4 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Achieve Your Future with Smart Academy
        </h1>
        <p className="text-lg md:text-xl mb-6">
          We help businesses streamline their operations and embrace digital transformation.
        </p>
        <button className="bg-[#61A3BA] text-white px-6 py-3 rounded-4xl hover:bg-[#4a8aa0] transition">
          Explore Courses
        </button>
      </div>
    </section>
  );
};

export default Hero;
