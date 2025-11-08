import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-[60vh] sm:h-[70vh]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8P2o8n2r5mDk9n3X/scene.splinecode" style={{ width: "100%", height: "100%" }} />
      </div>
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-gray-900">
            Vibe Coding for Newbies
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Learn by vibes, not vibes-only. Mini-lessons, playful challenges, and goofy tips to make your first lines of code feel like a lo-fi jam.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href="#play" className="rounded-md bg-indigo-600 text-white px-4 py-2 shadow hover:bg-indigo-700">Playground</a>
            <a href="#learn" className="rounded-md bg-white border border-gray-200 px-4 py-2 shadow-sm text-gray-800 hover:bg-gray-50">Quick Lessons</a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </section>
  );
}
