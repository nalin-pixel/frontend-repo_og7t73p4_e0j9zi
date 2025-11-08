import { useState } from "react";
import { Wand2, RefreshCw } from "lucide-react";

const prompts = [
  "Write a function that greets a coder named Vibi.",
  "Make an array of your fave snacks and log the first one.",
  "Loop from 1 to 5 and print the numbers with star emojis.",
];

export default function Playground() {
  const [code, setCode] = useState("console.log('Hello, vibes! 🌈')");
  const [output, setOutput] = useState("");

  function run() {
    try {
      // sandboxed eval using Function
      // eslint-disable-next-line no-new-func
      const result = Function(`"use strict"; ${code}`)();
      setOutput(String(result ?? "(check the console)"));
      // also capture console.log by running once more with proxy
      const logs = [];
      const original = console.log;
      console.log = (...args) => {
        logs.push(args.join(" "));
        original(...args);
      };
      // eslint-disable-next-line no-new-func
      Function(`"use strict"; ${code}`)();
      console.log = original;
      if (logs.length) setOutput(logs.join("\n"));
    } catch (e) {
      setOutput(`Error: ${e.message}`);
    }
  }

  function randomize() {
    setCode(prompts[Math.floor(Math.random() * prompts.length)]);
    setOutput("");
  }

  return (
    <section id="play" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">Playground</h2>
            <p className="text-gray-600">Type, run, giggle. The browser evaluates your JS and shows the output.</p>
          </div>
          <div className="flex gap-2">
            <button onClick={randomize} className="inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-sm bg-white hover:bg-gray-50">
              <Wand2 className="h-4 w-4" /> Prompt
            </button>
            <button onClick={run} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-3 py-1.5 text-sm hover:bg-indigo-700">
              <RefreshCw className="h-4 w-4" /> Run
            </button>
          </div>
        </div>

        <div className="mt-4 grid lg:grid-cols-2 gap-4">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="h-64 w-full rounded-lg border border-black/10 bg-white/90 p-3 font-mono text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
            spellCheck={false}
          />
          <pre className="h-64 w-full rounded-lg border border-black/10 bg-gray-950 text-gray-100 p-3 text-sm shadow-sm overflow-auto">
            {output || "Output will appear here…"}
          </pre>
        </div>
      </div>
    </section>
  );
}
