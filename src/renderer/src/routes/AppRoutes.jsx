import { Routes, Route } from 'react-router-dom'
import FragmentsPage from '../pages/FragmentsPage'
import FragmentForm from '../pages/FragmentForm'
import TagsPage from '../pages/TagsPage'
import InfoPage from '../pages/InfoPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<FragmentsPage />} />
      <Route path="/form" element={<FragmentForm />} />
      <Route path="/form/:id" element={<FragmentForm />} />
      <Route path="/tags" element={<TagsPage />} />
      <Route path="/info" element={<InfoPage />} />
    </Routes>
  )
}
