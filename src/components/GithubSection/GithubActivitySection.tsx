import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Star, GitFork, Users, FolderGit2, ExternalLink, Loader2 } from "lucide-react";
import { MagicCard } from "../lightswind/magic-card";

const GITHUB_USERNAME = "tousifcodespace";

interface GithubProfile {
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
}

interface GithubRepo {
    id: number;
    name: string;
    description: string | null;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string | null;
    updated_at: string;
}

export const GithubActivitySection = () => {
    const [profile, setProfile] = useState<GithubProfile | null>(null);
    const [repos, setRepos] = useState<GithubRepo[]>([]);
    const [status, setStatus] = useState<"loading" | "ready" | "error">("loading");

    useEffect(() => {
        let cancelled = false;

        const load = async () => {
            try {
                const [profileRes, reposRes] = await Promise.all([
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
                    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`),
                ]);

                if (!profileRes.ok || !reposRes.ok) throw new Error("GitHub API request failed");

                const profileData: GithubProfile = await profileRes.json();
                const reposData: GithubRepo[] = await reposRes.json();

                if (!cancelled) {
                    setProfile(profileData);
                    setRepos(reposData.filter((r) => !r.name.includes(".github.io") || true).slice(0, 6));
                    setStatus("ready");
                }
            } catch {
                if (!cancelled) setStatus("error");
            }
        };

        load();
        return () => {
            cancelled = true;
        };
    }, []);

    const stats = profile
        ? [
            { icon: FolderGit2, label: "Public Repos", value: profile.public_repos },
            { icon: Users, label: "Followers", value: profile.followers },
            { icon: Users, label: "Following", value: profile.following },
        ]
        : [];

    return (
        <section id="github" className="max-w-7xl mx-auto px-6 py-24">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-12"
            >
                <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center text-primary shadow-md">
                        <Github className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                        GitHub <span className="text-gradient-primary">Activity</span>
                    </h2>
                </div>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    Live data pulled directly from my GitHub profile.
                </p>
            </motion.div>

            {status === "loading" && (
                <div className="flex items-center justify-center py-20 text-muted-foreground gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span className="text-sm font-medium">Loading GitHub data...</span>
                </div>
            )}

            {status === "error" && (
                <div className="glass-panel p-10 rounded-[2rem] border border-foreground/10 text-center">
                    <p className="text-muted-foreground mb-4">
                        Couldn't load live GitHub data right now (rate limit or network issue).
                    </p>
                <a
                    href={`https://github.com/${GITHUB_USERNAME}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
          >
                    View my GitHub profile <ExternalLink className="w-4 h-4" />
                </a>
        </div>
    )
}

{
    status === "ready" && (
        <div className="space-y-8">
            {/* Stats Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {stats.map((stat, i) => {
                    const Icon = stat.icon;
                    return (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            <MagicCard
                                className="p-6 rounded-[2rem] border border-border/80 bg-card/80 flex items-center gap-4"
                                gradientSize={260}
                                gradientColor="rgba(139, 92, 246, 0.12)"
                                gradientFrom="#8b5cf6"
                                gradientTo="#38bdf8"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/25 text-primary flex items-center justify-center shrink-0">
                                    <Icon className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-2xl font-extrabold text-foreground">{stat.value}</p>
                                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                </div>
                            </MagicCard>
                        </motion.div>
                    );
                })}
            </div>

            {/* Contribution Graph */}
                      <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="glass-panel p-4 sm:p-6 md:p-8 rounded-[2rem] border border-foreground/15 shadow-xl overflow-x-auto max-w-full"
          >
            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
              Contribution Graph
            </h4>
            <div className="sm:min-w-[600px]">
              <img
                src={`https://ghchart.rshah.org/8b5cf6/${GITHUB_USERNAME}`}
                alt={`${GITHUB_USERNAME}'s GitHub contribution graph`}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          </motion.div>

            {/* Recently Updated Repos */}
            <div>
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-4">
                    Recently Updated Repositories
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {repos.map((repo, i) => (
                        <motion.a
                            key={repo.id}
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.08, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="glass-panel p-6 rounded-[1.75rem] border border-foreground/10 hover:border-primary/40 transition-colors group flex flex-col gap-3"
                        >
                            <div className="flex items-start justify-between gap-2">
                                <h5 className="font-bold text-foreground group-hover:text-primary transition-colors truncate">
                                    {repo.name}
                                </h5>
                                <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
                            </div>
                            <p className="text-sm text-muted-foreground line-clamp-2 flex-1">
                                {repo.description || "No description provided."}
                            </p>
                            <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium pt-2 border-t border-border/50">
                                {repo.language && (
                                    <span className="flex items-center gap-1.5">
                                        <span className="w-2 h-2 rounded-full bg-primary" />
                                        {repo.language}
                                    </span>
                                )}
                                <span className="flex items-center gap-1">
                                    <Star className="w-3.5 h-3.5" /> {repo.stargazers_count}
                                </span>
                                <span className="flex items-center gap-1">
                                    <GitFork className="w-3.5 h-3.5" /> {repo.forks_count}
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </div>
    )
}
    </section >
  );
};