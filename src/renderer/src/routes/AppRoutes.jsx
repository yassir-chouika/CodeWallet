import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import FragmentsPage from '../pages/FragmentsPage'
import FragmentForm from '../pages/FragmentForm'
import TagsPage from '../pages/TagsPage'
import InfoPage from '../pages/InfoPage'

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<FragmentsPage />} />
      <Route path="/new" element={<FragmentForm />} />
      <Route path="/tags" element={<TagsPage />} />
      <Route path="/info" element={<InfoPage />} />
    </Routes>
  </Router>
)

export default AppRoutes
