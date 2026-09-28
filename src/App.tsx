import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <div id='content'>
          <Hero />
          <AboutMe />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
