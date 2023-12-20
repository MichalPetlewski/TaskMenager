import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import SingleTask from './SingleTask/SingleTask'
import TaskList from './TaskList/TaskList'

const router = createBrowserRouter([
  {
    path: "/",
    element: <TaskList />,
  },
  {
    path: "/task/:id",
    element: <SingleTask />
  }
])

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
