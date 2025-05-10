import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import FragmentsPage from '../pages/FragmentsPage'
import FragmentForm from '../pages/FragmentForm'
import TagsPage from '../pages/TagsPage'
import InfoPage from '../pages/InfoPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<FragmentsPage />} />
          <Route path="fragment" element={<FragmentForm />} />
          <Route path="fragment/:id" element={<FragmentForm />} />
          <Route path="tags" element={<TagsPage />} />
          <Route path="info" element={<InfoPage />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
