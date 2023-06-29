import logo from './logo.svg';
import './App.css';
import FunctionalGreeting from './components/FunctionalGreeting';
import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreetings';
function App() {
  return (
    <div className="App">
      <FunctionalGreeting/>
      <FunctionalGreetingWithProps greetings="Nice to meet you." name="Mike"/>
      <StatefulGreeting greeting="I am a stateful class component"/>
    </div>
  );
}

export default App;
