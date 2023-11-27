import WelcomeSlider from "../components/WelcomeSlider";
import '../css/Home.css';
import Intro from "../components/Intro";
import Subjects from "../components/Subjects";
import Teachers from "../components/Teachers";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <WelcomeSlider />
      <Intro />
      <Subjects />
      <Teachers />
      <Footer />
    </div>
  );
};

export default Home;
