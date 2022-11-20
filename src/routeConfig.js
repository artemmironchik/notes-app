import About from './pages/About'
import Notes, {loader as notesLoader} from './pages/Notes';
import Note, {loader as noteLoader} from './components/note/Note';
import CreateNote from './components/note/CreateNote'
import EditNote from './components/note/EditNote'
import NotFound from './pages/NotFound'

export const routes = [
    {
      index: true,
      element: <About />,
    },
    {
      path: 'users/:userId/notes',
      loader: notesLoader,
      element: <Notes />,
    },
    {
      path: 'users/:userId/notes/:id',
      loader: noteLoader,
      element: <Note />,
    },
    {
      path: 'users/:userId/notes/create',
      element: <CreateNote />,
    },
    {
      path: 'users/:userId/notes/:id/edit',
      loader: noteLoader,
      element: <EditNote />,
    },
    {
      path: '*',
      element: <NotFound />,
    },
]