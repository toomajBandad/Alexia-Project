import MainCart from "../mainCart/MainCart";
import TitleText from "../titleText/TitleText";
import image1 from "../../assets/backgrounds/1.jpg";
import image2 from "../../assets/backgrounds/2.jpg";
import image3 from "../../assets/backgrounds/3.jpg";

function CartSection() {
  const works = [
    {
      title: "Unified Cybersecurity Solutions",
      description:
        "A secure platform built for SMEs, protecting against evolving threats with offensive and defensive tools.",
      image: image1,
      link: "/projects/platform",
    },
    {
      title: "Certified Expert Guidance",
      description:
        "An intuitive dashboard that helps startups track compliance, reduce risks, and avoid costly penalties.",
      image: image2,
      link: "/projects/dashboard",
    },
    {
      title: "Scalable Human‑Centered Security",
      description:
        "A fast, reliable solution enabling businesses to detect, respond, and recover confidently from cyberattacks.",
      image: image3,
      link: "/projects/response",
    },
  ];

  return (
    <section className="py-8 md:py-16 bg-gray-100">
      <div className="container mx-auto px-6 ">
        <TitleText>
          Comprehensive 360º cybersecurity: <br />
        </TitleText>
        <h2 className="text-center text-gray-500 text-xl">
          {" "}
          protecting what matters, from every angle!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {works.map((work, index) => (
            <MainCart
              key={index}
              image={work.image}
              title={work.title}
              description={work.description}
              link={work.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CartSection;
