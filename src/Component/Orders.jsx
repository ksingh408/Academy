const MakeSuccessSection = () => {
  return (
    <section className=" py-12 h-100 bg-pink-600 hover:border hover:border-blue-500 transition">
      <div className="container mx-auto px-4 mt-20 text-center">
      
        <p className="text-white text-4xl max-w-xl mx-auto mb-10">
            Iginite Your Child's potential 
            Take the Leap an with online
        </p>

        {/* Search + Button */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your email address..."
            className="w-full  bg-white rounded-xl px-4 py-2 "
          />
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Suscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default MakeSuccessSection;
