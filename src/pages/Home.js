import WelcomeSlider from "../components/WelcomeSlider";
import '../css/Home.css';
import Intro from "../components/Intro";
import Subjects from "../components/Subjects";
import Teachers from "../components/Teachers";

const Home = () => {
  return (
    <div>
      <WelcomeSlider />
      <Intro />
      <Subjects />
      <Teachers />
    </div>
  );
};

export default Home;
