import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div>
    <img src='https://res-console.cloudinary.com/dktwlx0dz/thumbnails/transform/v1image/upload/Y19hdxRv0nByz' alt='not found' />
    <h1>Page Not Found</h1>
    <Link to='/'>
      <button>Go Home</button>
    </Link>
  </div>
)

export default NotFound
