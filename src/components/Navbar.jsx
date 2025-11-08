import { Rocket, Sparkles } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-fuchsia-500 to-indigo-600 grid place-items-center text-white">
            <Rocket className="h-5 w-5" />
          </div>
          <span className="font-semibold tracking-tight">Vibe Coding</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-gray-600">
          <a href="#learn" className="hover:text-gray-900 transition-colors">Learn</a>
          <a href="#play" className="hover:text-gray-900 transition-colors">Play</a>
          <a href="#tips" className="hover:text-gray-900 transition-colors">Tips</a>
        </nav>
        <button className="inline-flex items-center gap-1 rounded-md bg-indigo-600 text-white px-3 py-1.5 text-sm shadow hover:bg-indigo-700">
          <Sparkles className="h-4 w-4" />
          Start Vibing
        </button>
      </div>
    </header>
  );
}
