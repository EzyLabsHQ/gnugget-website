import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import Features from './pages/Features.jsx'
import Roadmap from './pages/Roadmap.jsx'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/roadmap" element={<Roadmap />} />
      </Route>
    </Routes>
  )
}

export default App