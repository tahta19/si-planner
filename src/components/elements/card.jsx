
export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-white border border-gray-200/80 rounded-3xl p-5 shadow-sm transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
}