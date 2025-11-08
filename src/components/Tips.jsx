import { Lightbulb, PartyPopper } from "lucide-react";

const tips = [
  "Name your variables like pets you actually like.",
  "Break bugs into mini-bugs. Mini-bugs are 80% cuter and 60% less scary.",
  "Reading code counts as coding. So does staring at the ceiling.",
  "Commit early, commit often, commit messages with pizzazz.",
];

export default function Tips() {
  return (
    <section id="tips" className="py-16 bg-gradient-to-t from-white to-blue-50">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center gap-2">
          <Lightbulb className="h-6 w-6 text-amber-500" />
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Pro-ish Tips</h2>
        </div>
        <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tips.map((t) => (
            <li key={t} className="rounded-lg border border-black/5 bg-white p-4 shadow-sm">
              {t}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex items-center gap-2 text-sm text-gray-600">
          <PartyPopper className="h-4 w-4 text-pink-500" />
          Learning is a party. Bring snacks.
        </div>
      </div>
    </section>
  );
}
