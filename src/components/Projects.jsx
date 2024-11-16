import { useState } from "react";
import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Projects = () => {
  const { Projects } = content;
  const [selectedProject, setSelectedProject] = useState(null);

  // Open the modal with the selected project content
  const handleReadMore = (project) => {
    setSelectedProject(project);
  };

  // Close modal by setting selectedProject to null
  const closeModal = () => {
    setSelectedProject(null);
  };

  // Function to handle clicking outside the modal content to close it
  const handleClickOutside = (e) => {
    if (e.target.id === "modal-overlay") {
      closeModal();
    }
  };

  return (
    <section className="bg-bg_light_primary" id="projects">
      <div className="md:container px-5 pt-14 min-h-screen flex flex-col justify-between">
        <div>
          <h2 className="title" data-aos="fade-down">
            {Projects.title}
          </h2>
          <h4 className="subtitle" data-aos="fade-down">
            {Projects.subtitle}
          </h4>
          <br />
        </div>
        <div className="flex items-center lg:flex-row flex-col-reverse gap-5">
          <img
            src={Projects.image}
            alt="..."
            data-aos="fade-right"
            className="max-w-[45vw] min-w-[22rem]"
          />
          <Swiper
            pagination={{ clickable: true }}
            data-aos="fade-left"
            spaceBetween={20}
            modules={[Pagination]}
            className="rounded-3xl pb-16 max-w-xs drop-shadow-primary self-start"
          >
            {Projects.project_content.map((content, i) => (
              <SwiperSlide
                key={i}
                className="bg-white rounded-3xl p-5 border-b-8 border-[#FAF9FD] h-fit"
              >
                <img src={content.image} alt="..." />
                <div className="flex flex-col gap-1 mt-2">
                  <h5 className="font-bold font-Poppins">{content.title}</h5>
                  <button
                    className="font-bold text-gray self-end"
                    onClick={() => handleReadMore(content)} // Open modal on click
                  >
                    READ MORE
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Modal Overlay */}
        {selectedProject && (
          <div
            id="modal-overlay"
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            onClick={handleClickOutside} // Close on outside click
          >
            <div className="bg-white p-5 rounded-lg max-w-lg mx-4 text-center relative">
              <button
                className="absolute top-2 right-2 text-gray-600 font-bold"
                onClick={closeModal}
              >
                ✕
              </button>
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-auto mb-4 transform scale-105"
              />
              <h3 className="text-xl font-bold mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-700">{selectedProject.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
