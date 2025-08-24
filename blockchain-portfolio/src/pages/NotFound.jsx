import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen w-full justify-center items-center bg-gray-100 p-4">
      <h1 className="text-6xl font-extrabold text-red-600 animate-pulse mb-4">
        404
      </h1>
      <p className="text-xl text-gray-700 mb-6 text-center">
        Oops! The page you're looking for doesn't exist.
      </p>
      <button
        onClick={() => navigate("/")}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors"
      >
        Go Home
      </button>
    </div>
  );
}
