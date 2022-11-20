import { Suspense } from "react"
import {useLoaderData, Await, Navigate, Link, useNavigate} from 'react-router-dom'
import { getNotes } from "../api/notesApi"
import { useUserContext } from '../components/userContext';

export const loader = ({params: { userId }}) => {
  const notesPromise = getNotes(userId)
  return { notesPromise }
}

const deleteNote = () => {}

export default function Notes() {
  const {user} = useUserContext()
  const { notesPromise } = useLoaderData()
  const navigate = useNavigate()
  return (
    <div className="flex flex-col flex-1 my-10 items-center">
      <p className="text-5xl">Notes</p>
      <button onClick={() => navigate(`/users/${user.id}/notes/create`)} className="bg-gray-200 py-3 px-16 text-2xl mt-8 mb-6">Add new note</button>
      <div className="flex flex-col gap-2 min-w-full">
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={notesPromise} errorElement={<Navigate to="/NotFound"/>}>
              {(notes) => {
                return notes.map((note) => {
                  return (
                    <Link to={`/users/${note.userId}/notes/${note.id}`}>
                      <div className="flex bg-gray-200 p-3 items-center justify-between">
                        <div className="flex gap-3">
                          <p className="text-xl">{note.title} {" "}</p>
                          <span className="text-xl text-gray-500">{note.createdAt.slice(0,10)}</span>
                        </div>
                        <div className="flex gap-3">
                          <Link to={`/users/${note.userId}/notes/${note.id}/edit`}>
                            <img className="cursor-pointer z-2" src="https://cdn-icons-png.flaticon.com/16/1828/1828911.png" alt="pencil" />
                          </Link>
                          <img className="cursor-pointer z-2" src="https://cdn-icons-png.flaticon.com/16/542/542724.png" alt="trash bin" onClick={deleteNote} />
                        </div>
                      </div>
                    </Link>
                  );
                });
              }}
          </Await>
        </Suspense>
      </div>
    </div>
  )
}