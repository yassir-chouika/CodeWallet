import { useParams } from 'react-router-dom'

const FragmentForm = () => {
  const { id } = useParams()

  return (
    <div>
      <h1>{id ? 'Edit Fragment' : 'New Fragment'}</h1>
    </div>
  )
}

export default FragmentForm
