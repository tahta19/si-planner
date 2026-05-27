export default function Button({ children, active, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
        active 
          ? 'bg-indigo-100 text-indigo-700 shadow-sm' 
          : 'text-gray-500 hover:bg-gray-50 hover:text-gray-800'
      } ${className}`}
    >
      {children}
    </button>
  );
}