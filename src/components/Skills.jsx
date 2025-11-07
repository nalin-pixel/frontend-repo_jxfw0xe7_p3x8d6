import React from 'react';
import { Cpu, Zap, Layers } from 'lucide-react';

const skills = [
  { name: 'Frontend Engineering', desc: 'React, Vite, Tailwind, performance-first UI.', icon: <Layers size={18} /> },
  { name: 'Graphics & 3D', desc: 'Three.js, GLSL, post-processing, Spline integration.', icon: <Cpu size={18} /> },
  { name: 'Systems & Tooling', desc: 'Node, Rust basics, build pipelines, profiling.', icon: <Zap size={18} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gradient-to-b from-black to-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 text-3xl font-semibold">Core Skills</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {skills.map((s) => (
            <div key={s.name} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 inline-flex items-center gap-2 text-violet-300">
                {s.icon}
                <span className="text-xs">Capability</span>
              </div>
              <h3 className="mb-2 text-lg font-semibold">{s.name}</h3>
              <p className="text-sm text-white/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
