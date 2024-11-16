import React from 'react';
import { content } from "../Content";
import { HiOutlineDocumentText } from "react-icons/hi"; // Using HiOutlineDocumentText from react-icons

const Hireme = () => {
  const { Hireme } = content;

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = Hireme.cvFile;
    link.download = 'CV.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="bg-bg_light_primary">
      <div className="md:container px-5 pt-14">
        <h2 className="title" data-aos="fade-down">
          {Hireme.title}
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          {Hireme.subtitle}
        </h4>
        <br />
        <div className="flex items-center md:flex-row flex-col-reverse md:justify-center">
          <img
            src={Hireme.image1}
            alt="..."
            data-aos="fade-right"
            className="max-w-sm md:block hidden"
          />
          <img
            src={Hireme.image2}
            data-aos="fade-up"
            alt="..."
            className="max-w-sm md:hidden"
          />
          <div
            data-aos="fade-left"
            className="border-2 border-dark_primary max-w-sm
           p-6 shadow-sm rounded-xl rounded-br-[8rem] sm:min-w-[22rem]"
          >
            <p className="leading-7">{Hireme.para}</p>
            <br />
            <button
              className="btn bg-dark_primary text-white flex items-center justify-center gap-2"
              onClick={handleDownloadCV}
            >
              <HiOutlineDocumentText size={20} />
              {Hireme.btnText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hireme;
