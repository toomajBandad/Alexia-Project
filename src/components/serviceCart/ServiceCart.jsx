function ServiceCart({ title, subtitle, description, image }) {
  return (
    <div
      role="article"
      className="
        flex flex-col items-center justify-start
         shadow-md
        overflow-hidden
        h-full hover:cursor-pointer
      "
    >
      {image && (
        <img
          src={image}
          alt={`${title} illustration`}
          className="w-full h-80 object-cover bg-white" // changed to object-cover
        />
      )}
      <div className="p-6 text-center flex flex-col grow">
        <h3 className="text-xl font-bold mb-3 underline">{title}</h3>
        <h4 className="text-md font-semibold mb-3 text-gray-500">{subtitle}</h4>
        {Array.isArray(description) ? (
          <ul className="list-disc list-inside text-left space-y-1 grow">
            {description.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 text-left grow">{description}</p>
        )}
      </div>
    </div>
  );
}

export default ServiceCart;
