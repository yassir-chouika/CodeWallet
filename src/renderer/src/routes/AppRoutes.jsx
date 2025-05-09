import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FragmentsPage from '../pages/FragmentsPage'
import FragmentForm from '../pages/FragmentForm'
import TagsPage from '../pages/TagsPage'
import InfoPage from '../pages/InfoPage'

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FragmentsPage />} />
        <Route path="/new" element={<FragmentForm />} />
        <Route path="/edit/:id" element={<FragmentForm />} />
        <Route path="/tags" element={<TagsPage />} />
        <Route path="/info" element={<InfoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
