import WelcomeSlider from "../components/WelcomeSlider";
import '../css/Home.css';
import Intro from "../components/Intro";
import Subjects from "../components/Subjects";
import TopLectures from "../components/TopLectures";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <WelcomeSlider />
      <Intro />
      <Subjects />
      <TopLectures />
      <Footer />
    </div>
  );
};

export default Home;
