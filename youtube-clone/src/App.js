import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Videos from './pages/Videos';
import Watch from './pages/Watch';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <NotFound/>,
    children: [
      {index: true, element:<Videos/>},
      {path: '/videos/:keyword', element: <Videos/>},
      {path: '/videos/watch/:videoId', element: <Watch/>},
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
