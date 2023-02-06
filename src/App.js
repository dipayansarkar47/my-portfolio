
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Experience from './components/Experience';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';


function App() {
  return (
    <div>
      <NavBar/>
      <Home/>
      <SocialLinks/>
      <About/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
