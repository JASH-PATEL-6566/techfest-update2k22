import './App.css';
import AutoCard from './Components/Auto-profileCard/AutoCard';
import Carouse from './Components/Carousel/Carousel';
import EventCard from './Components/EventCard/EventCard';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile-Card/Profile';
import Autoplay from './Components/Autoplay/Autoplay';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Carouse />
      <EventCard />
      <Profile />
      <AutoCard />
      <Profile />
      <Autoplay />
    </div>
  );
}

export default App;
