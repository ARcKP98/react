// import logo from './logo.svg';
import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreetings';
// import StatefulGreetingWithCallBack from './components/StatefulGreetingsWithCallBack';
// import StatefulGreetingWithPrevState from './components/StatefulGreetingsWithPrevState';
import EventsClass from './components/EventsClass';
import EventsFunctional from './components/EventsFunctional';
function App() {
  return (
    <div className="App">
      {/* <FunctionalGreeting/>
      <FunctionalGreetingWithProps greetings="Nice to meet you." name="Mike"/>
      <StatefulGreeting greeting="I am a stateful class component"/>
      <StatefulGreetingWithCallBack/>
      <StatefulGreetingWithPrevState/> */}
      <EventsClass/>
      <EventsFunctional/>
    </div>
  );
}

export default App;
