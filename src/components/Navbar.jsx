import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 text-white">
        <a href="#home" className="font-semibold tracking-wide">
          <span className="text-violet-400">/</span> dev.futurist
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="#projects" className="text-sm text-white/80 hover:text-white">Projects</a>
          <a href="#skills" className="text-sm text-white/80 hover:text-white">Skills</a>
          <a href="#contact" className="text-sm text-white/80 hover:text-white">Contact</a>
          <a href="#resume" className="rounded-md bg-white/10 px-4 py-2 text-sm hover:bg-white/20">Resume</a>
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-md border border-white/10 p-2 text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="mx-auto max-w-6xl px-6 pb-4 md:hidden">
          <div className="flex flex-col gap-2 text-white">
            <a href="#projects" className="rounded-md px-3 py-2 hover:bg-white/10">Projects</a>
            <a href="#skills" className="rounded-md px-3 py-2 hover:bg-white/10">Skills</a>
            <a href="#contact" className="rounded-md px-3 py-2 hover:bg-white/10">Contact</a>
            <a href="#resume" className="rounded-md bg-white/10 px-3 py-2 hover:bg-white/20">Resume</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
