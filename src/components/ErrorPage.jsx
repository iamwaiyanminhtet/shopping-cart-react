import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <div className="bg-neutral-800 text-slate-100 h-dvh flex justify-center flex-col items-center gap-4 p-5">
        <p className="text-teal-500 text-3xl lg:text-5xl font-extrabold">404 Not Found...</p>
        <p>Oh dear! It seems you have lost in the wide wood.</p>
        <p>But do not worry, you are not totally lost in here unlike your life.</p>
        <Link to='/' className="bg-teal-500 text-black w-max self-center p-2 rounded-md hover:opacity-80 active:opacity-100">Home</Link>
    </div>
  )
}

export default ErrorPage