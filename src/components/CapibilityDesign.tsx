import { FC } from "react";

interface DesignProps {
  title: string;
  content: string[];
  imageSrc: string;
  imageAlt: string;
}

const CapibilityDesign: FC<DesignProps> = ({
  title,
  content,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="w-full bg-gray-100 rounded-lg my-24 p-6 shadow-lg">
      {/* Optional: Decorative Circles (if needed) */}
      <div className="flex px-7 pt-6">
        {[...Array(3)].map((_, index) => (
          <div
            className="h-4 aspect-square rounded-full bg-red-200 mx-1"
            key={index}
          />
        ))}
      </div>

      {/* Content and Image Section */}
      <div className="flex flex-col lg:flex-row items-start p-6">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-left lg:pr-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          {content.map((paragraph, index) => (
            <p key={index} className="text-gray-600 mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 lg:aspect-square aspect-video flex justify-start rounded-lg overflow-hidden ">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover rounded-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default CapibilityDesign;