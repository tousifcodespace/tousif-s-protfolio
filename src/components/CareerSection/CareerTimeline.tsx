import { ScrollTimeline } from "../lightswind/scroll-timeline";
import { Briefcase, Award, Layers, Users, Globe } from "lucide-react";

export const CareerTimeline = () => {
  const careerEvents = [
    {
      year: "Present",
      title: "Building Independent Digital Products",
      subtitle: "Self-Employed",
      description:
        "Developing and experimenting with independent web products, including e-commerce platforms and online utility tools — most notably OneCarta, a full-stack e-commerce platform, and UtilBox, an online utility tools platform.",
      icon: <Globe className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2025 – Present",
      title: "Designer",
      subtitle: "Othoba.com",
      description:
        "Working on digital marketing creatives, e-commerce visuals, promotional campaigns, product advertisements, and brand-focused visual communication.",
      icon: <Layers className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2024 – Present",
      title: "Transitioned into Full-Stack Development",
      subtitle: "Self-Directed Learning & Projects",
      description:
        "Expanded my skill set from design into web development, focusing on modern frontend technologies, backend systems, databases, APIs, and complete digital products.",
      icon: <Briefcase className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2021 – 2024",
      title: "Designer",
      subtitle: "KWork",
      description:
        "Worked as a designer, creating digital graphics, marketing materials, social media creatives, product visuals, and client-focused design solutions.",
      icon: <Award className="h-4 w-4 mr-2 text-primary" />,
    },
    {
      year: "2021",
      title: "Started Professional Design Career",
      subtitle: "Creative & Digital Design",
      description:
        "Started my professional journey in the creative and digital design field, developing skills in visual communication, digital graphics, and creative problem-solving.",
      icon: <Users className="h-4 w-4 mr-2 text-primary" />,
    },
  ];

  return (
    <div id="career">
      <ScrollTimeline
        events={careerEvents}
        title="Career Journey"
        subtitle="From creative design to full-stack development"
        animationOrder="staggered"
        cardAlignment="alternating"
        cardVariant="elevated"
        parallaxIntensity={0.15}
        revealAnimation="fade"
        progressIndicator={true}
        lineColor="bg-primary/20"
        activeColor="bg-primary"
        progressLineWidth={3}
        progressLineCap="round"
      />
    </div>
  );
};
