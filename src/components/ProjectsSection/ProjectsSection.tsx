import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingCart, Wrench } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "OneCarta",
      subtitle: "Full-Stack E-commerce Platform",
      description:
        "A complete e-commerce platform built from the ground up as the sole developer — storefront, admin panel, product & category management, order management, and authentication.",
      tags: ["React", "Node.js", "MongoDB", "Admin Dashboard"],
      link: "https://onecarta.shop",
      icon: ShoppingCart,
      gradient: "from-purple-700 via-primary to-indigo-950",
      gridClass: "md:col-span-7 h-[420px]",
    },
    {
      id: 2,
      title: "UtilBox",
      subtitle: "Online Utility Tools Platform",
      description:
        "A platform offering useful digital tools through a simple, accessible web experience.",
      tags: ["React", "Utilities", "Web Tools"],
      link: "https://utilbox.live",
      icon: Wrench,
      gradient: "from-sky-600 via-cyan-600 to-blue-950",
      gridClass: "md:col-span-5 h-[420px]",
    },
  ];

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
          Featured <span className="text-gradient-primary">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center md:text-left max-w-2xl text-lg">
          A showcase of the products I've built and shipped, end to end.
        </p>
      </motion.div>

      {/* 12-Column Full-Width Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {projects.map((project, i) => {
          const Icon = project.icon;
          return (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-[2.25rem] block shadow-xl border border-foreground/10 ${project.gridClass}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}>
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:18px_18px]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
              </div>

              {/* Icon Watermark */}
              <Icon className="absolute top-8 right-8 w-16 h-16 text-white/15 group-hover:text-white/25 transition-colors" />

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
                <div className="flex flex-wrap gap-2 mb-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 transform-gpu">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-bold uppercase tracking-wider text-white/90 bg-white/15 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-end justify-between gap-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 transform-gpu">
                  <div className="z-10 max-w-lg">
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-1 tracking-tight drop-shadow-md">
                      {project.title}
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-white/85 mb-2">
                      {project.subtitle}
                    </p>
                    <p className="text-xs md:text-sm text-white/70 leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-24 transition-all duration-300 overflow-hidden">
                      {project.description}
                    </p>
                  </div>

                  {/* Arrow Action Icon */}
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 opacity-80 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all duration-300 rotate-45 group-hover:rotate-0 z-10 shadow-lg">
                    <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                  </div>
                </div>
              </div>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
};
