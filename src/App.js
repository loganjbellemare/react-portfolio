import './App.scss'
import About from './components/About'
import Home from './components/Home'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact={true} Component={Layout}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/about" exact={true} Component={About}></Route>
      </Routes>
    </div>
  )
}

export default App
