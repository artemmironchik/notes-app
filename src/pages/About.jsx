import { useUserContext } from '../components/userContext';

export default function Main() {
  // const navigate = useNavigate()
  const { user: { email, createdAt } } = useUserContext()
  return (
    <div className="flex justify-between flex-col flex-1 my-10 items-center">
      <h2 className="text-5xl">About me</h2>
      <div className='text-3xl flex flex-col gap-1'>
        <p>
          Email:{" "}<span className='text-gray-500'>{email}</span>
        </p>
        <p>
          Date sign up:{" "}<span className='text-gray-500'>{createdAt.slice(0,10)} {createdAt.slice(11,19)}</span>
        </p>
      </div>
      <button className="bg-gray-200 py-4 px-16 text-2xl cursor-pointer">Go to notes</button>
    </div>
  );
}