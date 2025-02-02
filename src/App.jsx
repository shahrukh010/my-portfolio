import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Project';
import Experience from './components/Experience';
import Blog from './components/Blog';
import Footer from './components/Footer';

export default function App() {
  return (
  <h1>
    <main>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Experience></Experience>
      <Blog></Blog>
      <Footer></Footer>
    </main>
  </h1>
  );
}

