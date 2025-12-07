import ServiceCart from "../serviceCart/serviceCart";
import imageCompliance from "../../assets/fotos/alt_compliance.svg";
import imageManaged from "../../assets/fotos/alt_managed.svg";
import imageOffensive from "../../assets/fotos/alt_offensive.svg";
import TitleText from "../titleText/TitleText";

function OurServices() {
  const services = [
    {
      title: "Offensive Security",
      subtitle: "System audits and cyberattack simulations:",
      description: [
        "Red Team Operations",
        "Internal / External Pentestings",
        "Webapp/APIs Pentestings",
        "Phishing Campaigns",
        "Cloud (GCP/AWS/Azure) Audits",
        "IIoT and OT Assessments",
      ],
      image: imageOffensive,
    },
    {
      title: "Compliance",
      subtitle:
        "We help businesses by implementing agile, tailored compliance frameworks for stronger security:",
      description: [
        "CISO as a Service",
        "ISO 27001 / ENS in less than 6 months",
        "IEC/ISA 62443 for ICS",
      ],
      image: imageCompliance,
    },
    {
      title: "Managed Security",
      subtitle:
        "Solutions, tools and best practices to scale your tech safely, affordably, and compliant:",
      description: [
        "DevSecOps as a Service",
        "SIEM/XDR Deployments",
        "Managed SOC for SMEs",
      ],
      image: imageManaged,
    },
  ];

  return (
    <section className="py-16 px-2 sm:px-10 xl:px-30">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <TitleText>Our Services</TitleText>
        <p className="mt-4 text-gray-500">
          Secure, scalable, and tailored solutions for modern businesses.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="transition-transform duration-300 hover:scale-105"
          >
            <ServiceCart
              title={service.title}
              subtitle={service.subtitle}
              description={service.description}
              image={service.image}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurServices;
