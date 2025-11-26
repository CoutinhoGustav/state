import Button from "../Button.jsx";
export default function Button({ title }) {
  return (
    <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md w-full">
      {title}
    </button>
  );
}

