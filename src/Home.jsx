import { useState, useEffect } from "react";

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Current active slide
  const slides = [
    "/img/Slice/slice1.png",
    "/img/Slice/slice2.png",
    "/img/Slice/slice3.png",
    "/img/Slice/slice4.png",
  ];

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // Automatically switch slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <>
      {/* Carousel Section */}
      <div id="gallery" className="relative w-full" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="relative h-56 overflow-hidden md:h-96">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-700 ease-in-out ${
                index === currentSlide
                  ? "translate-x-0 opacity-100 z-10"
                  : index < currentSlide
                  ? "-translate-x-full opacity-0 z-0"
                  : "translate-x-full opacity-0 z-0"
              }`}
            >
              <img
                src={slide}
                className="block w-full h-full object-top object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* Information Section */}
      <section className="bg-white dark:bg-gray-900" data-aos="fade-down">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6" data-aos="fade-down">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white" data-aos="fade-down-right">
            Foundation Year (Year 1) Certificate Awarding
            </h2>
            <p className="mb-4" data-aos="fade-down-left">
            BELTEI International University organized the “Meeting and Greeting-cum-Foundation Year (Year 1) Certificate Awarding Ceremony for 2,365 Students of Batch 19 who completed in the Academic Year 2023-2024 by Awarding for the 1st Time to 1,125 Students from Campus 2-Chom Chao Flyover”, presided over by His Excellency LY Navuth, Deputy Director General of BELTEI Group and the President of BELTEI International University and Lok Chumteav, as well as the participation of the Management Teams, Staffs, Lecturers and Students, as well as the Volunteer students of UYFC, Scouts​ and Red Cross of BELTEI International University.
            </p>
            <p data-aos="flip-left">
            This ceremony was held on Saturday, December 21, 2024 at the Conference Hall of BELTEI International University, Campus 2-Chom Chao Flyover.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8" data-aos="fade-up-right">
            <img
              className="w-full rounded-lg"
              src="/img/info/info1.png"
              alt="office content 1"
            />
            <img
              className="mt-4 w-full lg:mt-10 rounded-lg"
              src="/img/info/info2.png"
              alt="office content 2"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;