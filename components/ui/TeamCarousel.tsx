import Image from "next/image";
import { FaTelegramPlane, FaGlobe } from "react-icons/fa";

type TeamMember = {
  name: string;
  image: string;
  telegram?: string;
  website?: string;
};

type TeamCarouselProps = {
  teamMembers: TeamMember[];
};

const TeamCarousel = ({ teamMembers }: TeamCarouselProps) => {
  return (
    <>
      {/* Mobile — горизонтальный свайп */}
      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-2 pb-4 md:hidden">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="min-w-[260px] snap-start bg-white rounded-xl shadow-lg overflow-hidden text-black transform transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={300}
              height={300}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center space-y-2">
              <h3 className="font-bold text-lg">{member.name}</h3>
              <div className="flex justify-between items-center px-6">
                {member.telegram && (
                  <a
                    href={member.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegramPlane className="text-xl text-blue-500 hover:text-blue-600" />
                  </a>
                )}
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe className="text-xl text-gray-700 hover:text-black" />
                  </a>
                )}
              </div>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop — сетка */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden text-black transform transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={member.image}
              alt={member.name}
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center space-y-2">
              <h3 className="font-bold text-lg">{member.name}</h3>
              <div className="flex justify-between items-center px-10">
                {member.telegram && (
                  <a
                    href={member.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTelegramPlane className="text-xl text-blue-500 hover:text-blue-600" />
                  </a>
                )}
                {member.website && (
                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGlobe className="text-xl text-gray-700 hover:text-black" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamCarousel;
