import ContactForm from "../contactForm/ContactForm";
import TitleText from "../titleText/TitleText";

function ContactUsSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Left side: Title & description */}
      <div className="space-y-6 mt-10">
        <TitleText>
          <div className="text-start"> Get in Touch With Us</div>
        </TitleText>
        <p className="text-lg text-gray-500">
          We’d love to hear from you! Whether you’re a student or a freelancer,
          junior or senior, share your details and message with us. Our team
          will get back to you as soon as possible.
        </p>
      </div>

      {/* Right side: Form */}
      <div className=" shadow-lg rounded-lg p-8">
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactUsSection;
