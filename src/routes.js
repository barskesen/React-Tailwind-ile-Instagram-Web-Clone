import AuthLayout from 'pages/auth'
import Home from 'pages/home'
import Login from 'pages/login'
import PrivateRoute from 'components/PrivateRoute'

const routes = [
  {
    path: '/',
    element: <Home />,
    auth: true
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      }
    ]
  }
]

const AuthCheck = routes =>
  routes.map(routes => {
    if (routes?.auth) {
      routes.element = <PrivateRoute>{routes.element}</PrivateRoute>
    }
    if (routes?.children) {
      routes.children = AuthCheck(routes.children)
    }
    return routes
  })

export default AuthCheck(routes)
