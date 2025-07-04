const Navbar = () => {
  return (
    <nav className="bg-[#b3b8be] shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
    
        <ul className="flex gap-6 text-[#F5F7FA] font-medium">
          <li className="hover:text-[#61A3BA] cursor-pointer">Home</li>
          <li className="hover:text-[#61A3BA] cursor-pointer">About</li>
          <li className="hover:text-[#61A3BA] cursor-pointer">Services</li>
          {/* <li className="hover:text-[#61A3BA] cursor-pointer">Team</li>
          <li className="hover:text-[#61A3BA] cursor-pointer">Testimonials</li>
          <li className="hover:text-[#61A3BA] cursor-pointer">Contact</li> */}
        </ul>

            <h1 className="text-2xl font-bold text-[#F5F7FA]">Online Academy</h1>

            <button className="bg-[#61A3BA] text-white px-4 py-2 rounded hover:bg-[#4a8aa0] transition">
              Explore Courses
            </button>
      </div>
    </nav>
  );
};

export default Navbar;

