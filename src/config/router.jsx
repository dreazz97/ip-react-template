import { createBrowserRouter } from 'react-router-dom'
import App from '../components/App'
import Home from '../components/pages/Home'
import About from '../components/pages/About'
import ErrorPage from '../components/pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
])

export default router