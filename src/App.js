import React from 'react';
import './App.css';
import Game from '../src/components/game/Game'
import SheridanSquirrelsLogo from './assets/images/squirrel.png';
import RussiavilleRaccoonsLogo from './assets/images/raccoon.png';
import BurlingtonBunniesLogo from './assets/images/bunny.png';
import HammondHoundsLogo from './assets/images/hound.png';



function App(props) {
  const raccoons = {
    name: 'Russiaville Raccoons',
    logoSrc: RussiavilleRaccoonsLogo
  }

  const squirrels = {
    name: 'Sheridan Squirrels',
    logoSrc: SheridanSquirrelsLogo
  }

  const bunnies = {
    name: 'Burlington Bunnies',
    logoSrc: BurlingtonBunniesLogo
  }

  const hounds = {
    name: 'Hammond Hounds',
    logoSrc: HammondHoundsLogo
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}




// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
