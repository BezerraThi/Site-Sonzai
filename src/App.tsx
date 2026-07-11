import { MotionConfig } from "framer-motion";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { Manifesto } from "./components/Manifesto";
import { System } from "./components/System";
import { Metrics } from "./components/Metrics";
import { CtaBanner } from "./components/CtaBanner";
import { Briefing } from "./components/Briefing";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Nav />
      <main>
        <Hero />
        <Manifesto />
        <System />
        <Metrics />
        <CtaBanner />
        <Briefing />
      </main>
      <Footer />
    </MotionConfig>
  );
}
