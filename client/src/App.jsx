import Landing from './screens/Landing'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Landing />}
        />
      </Routes>
    </>
  )
}

export default App
