import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <Header/>
      <Grid/>
      <p>This calculator should operate like a real pocket calculator, but care must be taken to order your equation in accordance with <a href='https://en.wikipedia.org/wiki/Order_of_operations'>BODMAS</a> as under the hood it uses javascript's <b>eval</b> to evaluate a string of equations in sequence.</p>
    </div>
  );
}

export default App;
