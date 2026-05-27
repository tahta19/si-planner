import MaterialIcon from '../elements/materialicon';

export default function EmptyState({ message, icon = 'Inbox' }) {
  return (
    <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-2xl py-8 px-4 bg-gray-50/50 text-center">
      <div className="bg-white p-2.5 rounded-xl shadow-sm text-gray-400 mb-2">
        <MaterialIcon name={icon} className="h-5 w-5" />
      </div>
      <p className="text-xs text-gray-400 max-w-[200px] leading-relaxed">{message}</p>
    </div>
  );
}