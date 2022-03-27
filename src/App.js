import logo from './logo.svg';
import './App.css';
import { Items } from './components/Items';
import { Form } from './components/Forms';
import { FlavorForm } from './components/FlavorForm';
import { Reservation } from './components/Reservation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Items name="Calaça"/>
        <img src={logo} className="App-logo" alt="logo" />
        <Form/>
        <FlavorForm/>
        <Reservation/>
      </header>
    </div>
  );
}

export default App;
