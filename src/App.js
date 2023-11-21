import './App.css';
import './css/Nav.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Teachers from './pages/Teachers';
import Courses from './pages/Courses';
import Nav from './components/Nav';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import TopStudents from './pages/TopStudents';
import Announcements from './pages/Announcements';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/teachers" Component={Teachers} />
        <Route path="/courses" Component={Courses} />
        <Route path="/blog" Component={Blog} />
        <Route path="/contact" Component={Contact} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/topstudents" Component={TopStudents} />
        <Route path="/announcements" Component={Announcements} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
