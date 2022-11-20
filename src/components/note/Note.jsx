import { useNavigate, Link, useLoaderData } from 'react-router-dom';
import { getNote } from './../../api/notesApi';
import { deleteNote } from './../../api/notesApi';

export const loader = async ({ params: { userId, id } }) => {
  const note = await getNote(userId, id);
  return note[0];
};

export default function Note() {
  const navigate = useNavigate();
  const note = useLoaderData();
  return (
    <div className="min-w-full flex flex-col gap-10">
      <div className="mt-8 flex justify-between items-center">
        <Link to="..">
          <button className="bg-gray-200 py-1 px-4">Back</button>
        </Link>
        <p className="text-5xl">{note.title}</p>
        <div className="flex gap-3">
          <img
            className="cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/32/1828/1828911.png"
            alt="pencil"
            onClick={() =>
              navigate(`/users/${note.userId}/notes/${note.id}/edit`)
            }
          />
          <img
            className="cursor-pointer"
            src="https://cdn-icons-png.flaticon.com/32/542/542724.png"
            alt="trash bin"
            onClick={() => deleteNote(note.id, note.userId, navigate(`..`))}
          />
        </div>
      </div>
      <div className="grow bg-gray-200 break-words">
        <p className="text-2xl p-4">{note.body}</p>
      </div>
    </div>
  );
}
