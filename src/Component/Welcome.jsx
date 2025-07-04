import image from "../assets/image/Welcome.png";

const WelcomeSection = () => {
  return (

  <section className="bg-blue-50 py-20 px-6 hover:border hover:border-blue-500 transition">
  <div className="container mx-auto grid md:grid-cols-3 gap-10 items-center max-w-[1436px]">
        {/* Left: Welcome Text */}
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-blue-800">
            Welcome to Smart Academy
          </h1>
          <p className="text-gray-700">
            Lorem ipsum dolor sit amet consectetur.
            Ut egestas eros sed dolor tincidunt.
            Aliquam erat volutpat placerat nulla.
            Nunc tincidunt justo sed ligula luctus.
            Integer nec sapien quis risus iaculis.
          </p>
        </div>

        {/* Middle: Styled Image */}
        <div className="flex justify-center">
          <div
            style={{
              backgroundColor: "#FF3C8A",
              width: "421px",
              height: "648px",
             
              borderTopLeftRadius: "210px",
              borderTopRightRadius: "210px",
              borderBottomLeftRadius: "50px",
              borderBottomRightRadius: "50px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: "300px",
                height: "460px",
                borderTopLeftRadius: "180px",
                borderTopRightRadius: "180px",
                borderBottomLeftRadius: "40px",
                borderBottomRightRadius: "40px",
                overflow: "hidden",
              }}
            >
              <img
                src={image}
                alt="Welcome"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>

        {/* Right: Mission & Stats */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-blue-800">Our Mission</h2>
          <p className="text-gray-700">
            Our goal is to provide quality education and a platform where learners can grow,
            develop skills, and succeed in their careers. We aim to bridge the gap between learning and implementation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <div>
              <h3 className="text-2xl text-blue-700">1.2K+</h3>
              <p className="text-gray-600 text-sm">Subscribers</p>
            </div>
            <div>
              <h3 className="text-2xl text-blue-700">80+</h3>
              <p className="text-gray-600 text-sm">Total Courses</p>
            </div>
            <div>
              <h3 className="text-2xl text-blue-700">3.5K+</h3>
              <p className="text-gray-600 text-sm">Active Students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
