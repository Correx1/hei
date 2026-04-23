import Image from "next/image";

export default function Team() {
  const teamMembers = [
    {
      name: "PASCHAL ACHUNINE",
      role: "EXECUTIVE DIRECTOR",
      image: "/director.jpg"
    },
    {
      name: "CHIKA NNADI",
      role: "PROJECT OFFICER",
      image: "/project-officer.jpeg" // Placeholder professional headshot
    },
    {
      name: "MAYOWA OGUNFEIBO",
      role: "PROJECT COORDINATOR",
      image: "/cordinator.jpeg" // Placeholder professional headshot
    }
  ];

  return (
    <section className="w-full py-10 lg:py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="w-full max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark uppercase tracking-tight">
            Team Members
          </h2>
          <div className="w-12 h-1 bg-brand-red mx-auto rounded-full"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 justify-center max-w-5xl mx-auto">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="flex flex-col items-center text-center group">
              {/* Image Container */}
              <div className="relative w-36 h-36 md:w-52 md:h-52 mb-6 rounded-full overflow-hidden shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] border-4 border-white group-hover:shadow-[0_12px_40px_-4px_rgba(209,10,10,0.2)] transition-all duration-300">
                <Image 
                  src={member.image} 
                  alt={member.name} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Details */}
              <h3 className="text-lg font-heading font-bold text-brand-dark uppercase tracking-wider mb-1">
                {member.name}
              </h3>
              <p className="text-[13px] md:text-[14px] font-sans font-semibold text-brand-red uppercase tracking-widest">
                {member.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
