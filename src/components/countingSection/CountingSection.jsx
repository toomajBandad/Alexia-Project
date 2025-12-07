import { FiShield, FiDollarSign, FiTrendingDown } from "react-icons/fi";
import TitleText from "../titleText/TitleText";
import { motion } from "framer-motion";
import StatesCard from "../statesCard/StatesCard";

const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

function CountingSection() {
  const stats = [
    {
      icon: FiShield,
      value: 90,
      suffix: "%",
      caption: "of attacks are addressed to SMEs",
      ariaLabel: "90 percent of attacks are addressed to SMEs",
    },
    {
      icon: FiDollarSign,
      value: 105,
      prefix: "$",
      suffix: "k",
      caption: "is the average cost of a cyberattack",
      ariaLabel: "Average cost of a cyberattack is 105 thousand dollars",
    },
    {
      icon: FiTrendingDown,
      value: 4,
      suffix: "%",
      caption: "of your revenue could be lost to non‑compliance fees",
      ariaLabel: "4 percent of revenue could be lost to non-compliance fees",
    },
  ];

  return (
    <section className="py-25">
      <div className="container mx-auto px-6">
        <TitleText>Is your business truly protected?</TitleText>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center mt-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {stats.map((stat, i) => (
            <StatesCard key={i} {...stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default CountingSection;
