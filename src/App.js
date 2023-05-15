import { useEffect, useState } from 'react';
import './App.css';
import ProgressBar from './components/ProgressBar';

import "./progressbar.css"

function App() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setProgress(100)
    },1000);
    return () => {
      clearInterval(id);
    }
  }, []);

  return (
    <div className="App">
      <ProgressBar value={progress}/>
    </div>
  );
}

export default App;
