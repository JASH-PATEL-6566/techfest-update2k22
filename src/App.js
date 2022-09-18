import './App.css';
import Carouse from './Components/Carousel/Carousel';
import EventCard from './Components/EventCard/EventCard';
import Navbar from './Components/Navbar/Navbar';
import Profile from './Components/Profile-Card/Profile';

function App() {
  return (
    <div className="container">
      <Navbar />
      <Carouse />
      <EventCard />
      <Profile />
    </div>
  );
}

export default App;
