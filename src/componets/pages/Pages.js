import { Routes, Route } from 'react-router-dom'

import Home from './Home'
import NotFoundPage from './NotFoundPage'

function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  )
}

export default Pages