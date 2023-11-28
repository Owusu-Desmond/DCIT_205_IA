import './App.css';
import './css/Nav.css'
import './css/Home.css'
import './css/Footer.css'
import './css/Header.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Lecturers from './pages/Lecturers';
import Courses from './pages/Courses';
import Nav from './components/Nav';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Events from './pages/Events';
import TopStudents from './pages/TopStudents';
import Announcements from './pages/Announcements';

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/lectures" Component={Lecturers} />
        <Route path="/courses" Component={Courses} />
        <Route path="/blog" Component={Blog} />
        <Route path="/contact" Component={Contact} />
        <Route path="/events" Component={Events} />
        <Route path="/topstudents" Component={TopStudents} />
        <Route path="/announcements" Component={Announcements} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
