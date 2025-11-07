import React from 'react';
import { Code2, Globe, Sparkles } from 'lucide-react';

const projects = [
  {
    title: 'Neon Ribbon Visualizer',
    description: 'WebGL visual synthesizer that reacts to audio and MIDI, inspired by iridescent ribbons.',
    tags: ['Three.js', 'WebAudio', 'Shaders'],
    link: '#',
    icon: <Sparkles size={18} />,
  },
  {
    title: 'Cyber Portfolio Engine',
    description: 'Modular portfolio system with MDX content and cinematic transitions.',
    tags: ['React', 'Framer Motion', 'MDX'],
    link: '#',
    icon: <Globe size={18} />,
  },
  {
    title: 'Dev Tools Kit',
    description: 'CLI + UI toolkit for scaffolding and profiling modern web apps.',
    tags: ['Node', 'Rust', 'Vite'],
    link: '#',
    icon: <Code2 size={18} />,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative z-10 bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 text-3xl font-semibold">Featured Projects</h2>
        <p className="mb-10 max-w-2xl text-white/70">
          Select experiments and products that explore the edge of web performance and spatial interfaces.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <a
              key={idx}
              href={p.link}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-violet-400/40 hover:bg-white/10"
            >
              <div className="mb-3 inline-flex items-center gap-2 rounded-md bg-violet-500/10 px-2 py-1 text-violet-300">
                {p.icon}
                <span className="text-xs">Project</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{p.title}</h3>
              <p className="mb-4 text-sm text-white/70">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-md bg-white/10 px-2 py-1 text-xs text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/20 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
