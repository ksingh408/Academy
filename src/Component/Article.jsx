const Article = () => {
  const articles = [
    {
      title: "The Benefits of Enrolling Kids in Online Courses",
      image: "https://images.pexels.com/photos/8613312/pexels-photo-8613312.jpeg",
      description:
        "Early education helps in developing a child’s cognitive, emotional, and social skills, setting a strong foundation for life-long learning.",
    },
    {
      title: "Unlock Potential",
      image: "https://images.pexels.com/photos/8500345/pexels-photo-8500345.jpeg",
      description:
        "Personalized learning paths empower children to explore their interests and reach their full potential at their own pace.",
    },
    {
      title: "Power of Online Course",
      image: "https://images.pexels.com/photos/4144221/pexels-photo-4144221.jpeg",
      description:
        "Online courses bring flexibility, variety, and accessibility to education, making learning engaging and convenient from anywhere.",
    },
  ];

  return (
    <section className="py-12 bg-blue-50 hover:border hover:border-blue-500 transition">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-10 text-[#5676FF]">
          Articles And Insight
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-[25px] shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center"
              style={{
                width: "396px",
                height: "622px",
              }}
            >
              {/* Image */}
              <img
                src={article.image}
                alt={article.title}
                className="object-cover rounded-[25px]"
                style={{
                  width: "395.8px",
                  height: "244.78px",
                }}
              />

              {/* Title */}
              <h3
                className="text-blue-900 font-semibold text-center mt-8"
                style={{
                  width: "242px",
                  height: "87px",
                  fontSize: "24px",
                  lineHeight: "29px",
                }}
              >
                {article.title}
              </h3>

              {/* Description */}
              <p
                className="text-gray-700 text-center mt-4"
                style={{
                  width: "261px",
                  height: "72px",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                {article.description}
              </p>

              {/* Button */}
              <div className="mt-8">
                <button className="bg-[#61A3BA] text-white px-6 py-3 rounded-full hover:bg-[#4a8aa0] transition">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Article;

