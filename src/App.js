import './App.css';

import MainContainer from './components/MainContainer';
import Navigation from './components/NavigationBars';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <MainContainer/>
    </div>
  );
}

export default App;
