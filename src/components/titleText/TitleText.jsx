function TitleText({ children }) {
  return (
    <h2
      className="TitleText text-4xl md:text-5xl font-bold text-center 
                 bg-linear-to-r from-blue-900 via-blue-600 to-sky-400 
                 bg-clip-text text-transparent pb-3"
    >
      {children}
    </h2>
  );
}

export default TitleText;
