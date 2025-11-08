import { BookOpen, TerminalSquare, Brain, Smile } from "lucide-react";

const items = [
  {
    icon: BookOpen,
    title: "Tiny Lessons",
    text: "60-second intros to variables, loops, and functions. Snack-sized, zero yawns.",
  },
  {
    icon: TerminalSquare,
    title: "Live Snippets",
    text: "Editable examples you can poke at without breaking the planet.",
  },
  { icon: Brain, title: "Concept Vibes", text: "Analogy-powered explanations your brain can actually vibe with." },
  { icon: Smile, title: "Silly Quizzes", text: "Answer with emojis. Celebrate with confetti. Learn anyway." },
];

export default function LearnCards() {
  return (
    <section id="learn" className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-center">
          Learn the vibes, then the syntax
        </h2>
        <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
          We keep the hard stuff cute. Short reads, friendly visuals, and examples that make sense.
        </p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
              <Icon className="h-6 w-6 text-indigo-600" />
              <h3 className="mt-3 font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
