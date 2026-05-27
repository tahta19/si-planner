
export default function Submit({ children, onClick, disabled, className = '' }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-5 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all shadow-sm cursor-pointer ${
        disabled
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none'
          : 'bg-slate-900 text-white hover:bg-slate-800 shadow-slate-200'
      } ${className}`}
    >
      {children}
    </button>
  );
}