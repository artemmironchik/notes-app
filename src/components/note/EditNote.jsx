import { useState, useCallback } from 'react';
import { useLoaderData, Link, useNavigate } from 'react-router-dom';
import { editNote } from '../../api/notesApi';

export default function EditNote() {
  const note = useLoaderData();
  const navigate = useNavigate();
  const [title, setTitle] = useState(note.title);
  const [body, setBody] = useState(note.body);

  const handleTitleChange = useCallback((e) => {
    setTitle(e.target.value);
  }, []);

  const handleBodyChange = useCallback((e) => {
    setBody(e.target.value);
  }, []);

  const handleSave = () => {
    const editedNote = {
      title,
      body,
    };
    editNote(editedNote, note, navigate(`/users/${note.userId}/notes`));
  };

  return (
    <div className="min-w-full flex flex-col gap-10">
      <div className="mt-8 flex items-center">
        <Link to="..">
          <button className="bg-gray-200 py-1 px-4">Back</button>
        </Link>
        <p className="text-5xl grow text-center mr-16">{note.title}</p>
      </div>
      <div className="flex flex-col gap-4 grow">
        <textarea
          onChange={handleTitleChange}
          type="text"
          value={title}
          className="bg-gray-200 pt-4 px-2"
        />
        <textarea
          onChange={handleBodyChange}
          type="text"
          value={body}
          className="grow bg-gray-200 break-words pt-4 px-2"
        />
      </div>
      <button
        className="bg-gray-200 py-4 px-16 text-2xl cursor-pointer"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
}
