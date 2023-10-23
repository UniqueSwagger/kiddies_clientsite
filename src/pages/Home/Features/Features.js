import React from "react";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: (
        <img
          loading="lazy"
          src="https://i.ibb.co/znYL5Jx/h1-icon-2.png"
          alt="icon"
          className="w-16 h-16 text-indigo-500 hover:translate-y-3 hover:transition-transform"
        />
      ),
      title: "Play Time",
      description:
        "Unleash your child's imagination during our exciting playtime sessions, where learning meets fun and laughter!",
    },
    {
      id: 2,
      icon: (
        <img
          loading="lazy"
          src="https://i.ibb.co/S7kVb0c/h1-icon-3.png"
          alt="icon"
          className="w-16 h-16 text-cyan-500 hover:translate-y-3 hover:transition-transform"
        />
      ),
      title: "Day Care",
      description:
        "Trust us with your child's care throughout the day, providing a safe and nurturing environment while you work or take care of your daily responsibilities.",
    },
    {
      id: 3,
      icon: (
        <img
          loading="lazy"
          src="https://i.ibb.co/VVNK025/h1-icon-5.png"
          alt="icon"
          className="w-16 h-16 text-rose-500 hover:translate-y-3 hover:transition-transform"
        />
      ),
      title: "Healthy Meal",
      description:
        "We prioritize your child's well-being with nutritious and delicious meals, ensuring they stay energized and healthy.",
    },
    {
      id: 4,
      icon: (
        <img
          loading="lazy"
          src="https://i.ibb.co/cN74Yxm/h1-icon-6.png"
          alt="icon"
          className="w-16 h-16 text-teal-500 hover:translate-y-3 hover:transition-transform"
        />
      ),
      title: "Events",
      description:
        "Join us for memorable events that celebrate the joy of childhood, creating lasting memories for your little ones.",
    },
    {
      id: 5,
      icon: (
        <img
          loading="lazy"
          src="https://i.ibb.co/YhWFXF7/h1-icon-4.png"
          alt="icon"
          className="w-16 h-16 text-purple-500 hover:translate-y-3 hover:transition-transform"
        />
      ),
      title: "Outdoor",
      description:
        "Exploration and adventure await in our outdoor activities, fostering a love for nature and physical development.",
    },
    {
      id: 6,
      icon: (
        <img
          loading="lazy"
          src="https://i.ibb.co/VYBT4SK/h1-icon-1.png"
          alt="icon"
          className="w-16 h-16 text-pink-500 hover:translate-y-3 hover:transition-transform"
        />
      ),
      title: "Learning",
      description:
        "Unlock your child's potential through our innovative learning programs, starting their educational journey from an early age.",
    },
  ];
  return (
    <section className="py-32  mx-auto px-4 sm:px-8 lg:px-16 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 sm:gap-4 lg:gap-8 text-sm">
      {features.map((feature) => {
        const { icon, title, id, description } = feature;
        return (
          <div key={id} className="px-4">
            <div className="flex items-end space-x-2">
              {icon}
              <h2 className="fs-3">{title}</h2>
            </div>
            <div className="text-muted mt-4 fs-6">{description}</div>
          </div>
        );
      })}
    </section>
  );
};

export default Features;
