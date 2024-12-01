import Landing from './screens/Landing'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Privacy from './screens/Privacy'
import DeleteYourAccount from './screens/DeleteYourAccount'
import Tips from './screens/Tips'
import AdoptionTips from './screens/AdoptionTips'
import BreedingTips from './screens/BreedingTips'
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
          path='/tips'
          element={<Tips />}
        />
        <Route
          path='/adoption-tips'
          element={<AdoptionTips />}
        />
        <Route
          path='/breeding-tips'
          element={<BreedingTips />}
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
