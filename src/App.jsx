import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LearnCards from "./components/LearnCards";
import Playground from "./components/Playground";
import Tips from "./components/Tips";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <LearnCards />
        <Playground />
        <Tips />
      </main>
      <footer className="border-t border-black/5 py-8 text-center text-sm text-gray-600">
        Made with vibes and snacks. © {new Date().getFullYear()} Vibe Coding
      </footer>
    </div>
  );
}

export default App;
