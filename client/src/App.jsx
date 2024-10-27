import Landing from './screens/Landing'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Privacy from './screens/Privacy'
import DeleteYourAccount from './screens/DeleteYourAccount'
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path='/'
          element={<Landing />}
        />
        <Route
          path='/privacy-policy'
          element={<Privacy />}
        />
        <Route
          path='/delete-your-account'
          element={<DeleteYourAccount />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
