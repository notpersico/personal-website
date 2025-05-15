import Hero from './components/Hero.tsx';
import Skills from './components/Skills.tsx';
import Bio from './components/Bio.tsx';
import CaseStudies from './components/CaseStudies.tsx';
import CallToAction from './components/CallToAction.tsx';

function App() {
  return (
    <div className="App bg-gray-900">
      <Hero />
      <Skills />
      <Bio />
      <CaseStudies />
      <CallToAction />
    </div>
  );
}

export default App;
