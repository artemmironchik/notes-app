import { Navigate } from 'react-router-dom'
import About from './pages/About'
import Notes, {loader as notesLoader} from './pages/Notes';
import Note, {loader as noteLoader} from './components/note/Note';
import CreateNote from './components/note/CreateNote'
import EditNote from './components/note/EditNote'
import NotFound from './pages/NotFound'

export const routes = [
    {
      path: '/',
      element: <Navigate to="/login" />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/notes',
      loader: notesLoader,
      element: <Notes />,
    },
    {
      path: '/notes/:id',
      loader: noteLoader,
      element: <Note />,
    },
    {
      path: '/notes/create',
      element: <CreateNote />,
    },
    {
      path: '/notes/edit',
      element: <EditNote />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
]