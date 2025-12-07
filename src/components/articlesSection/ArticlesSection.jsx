import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MainCart from "../mainCart/MainCart";
import img1 from "../../assets/backgrounds/1.jpg";
import img2 from "../../assets/backgrounds/2.jpg";
import img3 from "../../assets/backgrounds/3.jpg";
import img4 from "../../assets/backgrounds/4.jpg";
import img5 from "../../assets/backgrounds/1.jpg";
import img6 from "../../assets/backgrounds/2.jpg";
import img7 from "../../assets/backgrounds/3.jpg";
import {
  Keyboard,
  Scrollbar,
  FreeMode,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import TitleText from "../titleText/TitleText";

function ArticlesSection() {
  const articles = [
    {
      id: 1,
      title: "Top 10 Emerging Technologies",
      description:
        "The World Economic Forum highlights technologies set to transform industries, from AI to nanotech.",
      img: img1,
      link: "https://www.weforum.org/stories/2025/06/top-10-emerging-technologies-of-2025/",
    },
    {
      id: 2,
      title: "Top 25 New Technology Trends",
      description:
        "GeeksforGeeks explores trends like generative AI, 5G, and sustainable tech reshaping our future.",
      img: img2,
      link: "https://www.geeksforgeeks.org/blogs/top-new-technology-trends/",
    },
    {
      id: 3,
      title: "Technology Trends Outlook 2025",
      description:
        "McKinsey’s annual report covers breakthroughs in AI, robotics, quantum computing, and digital trust.",
      img: img3,
      link: "https://www.mckinsey.com/~/media/mckinsey/business%20functions/mckinsey%20digital/our%20insights/the%20top%20trends%20in%20tech%202025/mckinsey-technology-trends-outlook-2025.pdf",
    },
    {
      id: 4,
      title: "Top 10 Technology Trends 2025",
      description:
        "Forbes outlines ten innovations pushing boundaries, from invisible assistants to AI-powered energy.",
      img: img4,
      link: "https://www.forbes.com/councils/forbestechcouncil/2025/02/03/top-10-technology-trends-for-2025/",
    },
    {
      id: 5,
      title: "AI throughs Transfor Business",
      description:
        "MIT Technology Review discusses how generative AI and automation are reshaping industries worldwide.",
      img: img5,
      link: "https://www.technologyreview.com/2025/03/ai-breakthroughs-transforming-business/",
    },
    {
      id: 6,
      title: "Cybersecurity Challenges",
      description:
        "CSO Online examines evolving cyber threats and strategies companies must adopt to stay resilient.",
      img: img6,
      link: "https://www.csoonline.com/article/2025-cybersecurity-challenges.html",
    },
    {
      id: 7,
      title: " Computing: Next Frontier",
      description:
        "IBM Research explores advances in quantum computing and its potential to revolutionize problem solving.",
      img: img7,
      link: "https://research.ibm.com/blog/quantum-computing-2025",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <TitleText>
        <div className="mb-10"> Latest Articles</div>
      </TitleText>

      <Swiper
        modules={[
          FreeMode,
          Pagination,
          Navigation,
          Scrollbar,
          Keyboard,
          Autoplay,
        ]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          400: { slidesPerView: 1, spaceBetween: 0 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
      >
        {articles.map((article) => (
          <SwiperSlide key={article.id}>
            <MainCart
              image={article.img}
              title={article.title}
              description={article.description}
              link={article.link}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ArticlesSection;
