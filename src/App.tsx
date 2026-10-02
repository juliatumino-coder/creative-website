import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import './index.css'

function App() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <Products />
    </div>
  )
}

export default App
