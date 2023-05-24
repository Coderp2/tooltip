import './App.css';
import { Tooltip } from './tooltip';

function App() {
  return (
    <div className="App">
       <button className='btn'>Hover over me!</button>
       <Tooltip text ={"Thanks for hovering over me!"}>
       <span class="material-symbols-outlined">info</span>
       </Tooltip>
    </div>
  );
}

export default App;
