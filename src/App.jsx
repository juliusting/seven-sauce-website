import { createBrowserRouter, RouterProvider, Outlet, ScrollRestoration, useLocation } from 'react-router-dom'
import Navbar from './components/layout/Navbar.jsx'
import Footer from './components/layout/Footer.jsx'
import FloatingActions from './components/layout/FloatingActions.jsx'
import Home from './pages/Home.jsx'
import Menu from './pages/Menu.jsx'
import Story from './pages/Story.jsx'
import Visit from './pages/Visit.jsx'

function Layout() {
  const location = useLocation()
  return (
    <>
      <a href="#main" className="skip-link sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[200] focus:bg-seal focus:text-white focus:px-4 focus:py-2 focus:rounded-full">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <div key={location.pathname} className="route-fade-in">
          <Outlet />
        </div>
      </main>
      <FloatingActions />
      <ScrollRestoration />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  { path: '/', element: <Layout />, children: [
    { index: true, element: <Home /> },
    { path: 'menu', element: <Menu /> },
    { path: 'story', element: <Story /> },
    { path: 'visit', element: <Visit /> },
  ] },
])

export default function App() {
  return <RouterProvider router={router} />
}
