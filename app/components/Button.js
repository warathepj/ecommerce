// app/components/Button.js
export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="
        bg-green-700 hover:bg-green-400 
        text-white rounded m-2 p-4 text-xl font-bold
      "
    >
      {children}
    </button>
  );
}
