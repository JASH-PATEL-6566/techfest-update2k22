import './App.css';
import AutoCard from './Components/Auto-profileCard/AutoCard';
import Carouse from './Components/Carousel/Carousel';
import EventCard from './Components/EventCard/EventCard';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile-Card/Profile';
import Autoplay from './Components/Autoplay/Autoplay';
import Azz from './Components/Autoplay/Autoplay_mobile';
import Rules from './Components/RulesPage/Rules';

function App() {
  return (
    <div className="container">
      <div className="rules">
        <Rules />
      </div>
      <Navbar />
      <Carouse />
      <EventCard />
      <Profile />
      <AutoCard />
      <Profile />
      <Autoplay />
      <Azz />
    </div>

  );
}

export default App;
