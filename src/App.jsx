import { useState } from 'react'

import './App.css'
import Header from './Components/Header/Header'
import Vlog from './Components/Vlog/Vlog'
import QnA from './Components/QnA/QnA'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header></Header>
      <Vlog ></Vlog>
      <QnA></QnA>
    </div>
  );
}

export default App
