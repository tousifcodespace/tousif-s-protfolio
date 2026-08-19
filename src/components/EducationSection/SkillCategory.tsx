import { motion } from "framer-motion";
import {
  Atom,
  Server,
  Code2,
  Database,
  Palette,
  Wrench,
  Rocket,
} from "lucide-react";

export default function ProfessionalProfile() {
  const skillGroups = [
    {
      title: "Frontend",
      icon: Atom,
      color: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: Server,
      color: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10",
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Database & Full-Stack",
      icon: Database,
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      skills: ["MongoDB", "Authentication", "Admin Dashboard", "E-commerce Systems"],
    },
    {
      title: "Creative & Animation",
      icon: Palette,
      color: "text-purple-400 border-purple-500/30 bg-purple-500/10",
      skills: ["UI/UX Design", "Photoshop", "Illustrator", "Framer Motion", "GSAP", "Three.js"],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "text-sky-400 border-sky-500/30 bg-sky-500/10",
      skills: ["Git", "GitHub", "VS Code"],
    },
  ];

  return (
    <motion.section
      id="skills"
      className="space-y-8"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
        transition: { staggerChildren: 0.2, delayChildren: 0.3 },
      }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
          <Code2 className="w-5 h-5" />
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Expertise & Skills</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillGroups.map((group, i) => {
          const GroupIcon = group.icon;
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-panel p-8 rounded-[2rem] border border-foreground/15 shadow-xl relative overflow-hidden"
            >
              <div className="flex items-center gap-2.5 mb-6 pb-4 border-b border-border/60">
                <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                  <GroupIcon className="w-4.5 h-4.5" />
                </div>
                <h4 className="text-lg font-bold text-foreground">{group.title}</h4>
              </div>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-2xl border text-sm font-semibold shadow-sm hover:scale-105 transition-transform cursor-default ${group.color}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}

        {/* Constant Learner Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: skillGroups.length * 0.1, duration: 0.5 }}
          viewport={{ once: true }}
          className="glass-panel p-8 rounded-[2rem] border border-foreground/15 shadow-xl flex items-center"
        >
          <div className="p-4 rounded-2xl bg-gradient-to-r from-primary/10 via-purple-500/5 to-transparent border border-primary/20 flex items-start gap-3.5 shadow-sm w-full">
            <div className="p-2 rounded-xl bg-primary/20 text-primary shrink-0 mt-0.5">
              <Rocket className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-foreground font-bold text-sm block mb-0.5">
                Constant Learner
              </strong>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Always learning, experimenting, and looking for better ways to build — from
                design tools to modern full-stack frameworks.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
