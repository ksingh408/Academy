import Arobic from "../assets/Feature/Arobic.png";
import Chef from "../assets/Feature/Chef.png";
import Craft from "../assets/Feature/Craft.png";
import GoGreen from "../assets/Feature/Gogreen.png";  
import KidScience from "../assets/Feature/Science.png";
import Language from "../assets/Feature/Language.png";
import Music from "../assets/Feature/Music.png";
import Swimming from "../assets/Feature/Swimming.png";


const industries = [
  {
    title: "Kid Science Course",
    image:KidScience

  },
  {
    title: "Chef Course",
    image: Chef
  },
  {
    title: "Music Course",
    image:
    Music
  },
  {
    title: "Swimming Course",
    image:Swimming
  },
  {
    title: "Aerobic Course",
    image: Arobic
  },
  {
    title: "Language Course",
    image: Language
  },
  {
    title: "Craft & Art Course",
    image:
    Craft
  },
  {
    title: "Go Green Course",
    image: GoGreen
  },
];

const Industries = () => {
  return (
 <section
  id="industries"
  className="w-full bg-blue-50 py-20  hover:border hover:border-blue-500 transition"
  style={{
    height: "1040px",
    width: "1520px",
    opacity: 1,
  }}
>

      {/* Heading */}
     <div className="text-center mb-16">
  <p
    className="text-[#5676FF] font-bold text-[55px] leading-[55px] font-['Inter'] mx-auto w-[573px]"
    style={{
      opacity: 1,
    }}
  >
    Our Feature Course at Smart Academy
  </p>
</div>


      {/* Grid of Courses */}
      <div className="container mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {industries.map((item, index) => (
       <div
  key={index}
  className="flex flex-col items-center text-center p-4 w-[283px] h-[341px] rounded-[25px]"
>
  <img
    src={item.image}
    alt={item.title}
    className="rounded-[25px] w-[282px] h-[272px] object-cover mb-3 shadow-md"
    style={{
      opacity: 1,
    }}
  />

  <h3
    className="text-[24px] font-medium leading-[24px] font-['Inter'] max-w-[277px] text-blue-700"
    style={{
      opacity: 1,
    }}
  >
    {item.title}
  </h3>
</div>

        ))}
      </div>
    </section>
  );
};

export default Industries;
