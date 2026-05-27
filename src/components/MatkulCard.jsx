import MaterialIcon from './elements/materialicon';

export default function MatkulCard({ item, isSelected, onSelect, onRemove, type }) {
  return (
    <div className={`p-3 rounded-xl border text-xs flex justify-between items-center transition-all ${
      isSelected 
        ? 'bg-gray-100 border-gray-200 opacity-50' 
        : item.isWajibInstitusi 
        ? 'bg-red-50/70 border-red-200 text-red-950 shadow-xs shadow-red-50' 
        : 'bg-white border-gray-200 hover:border-gray-300 shadow-xs'
    }`}>
      <div className="space-y-1 pr-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-mono text-[10px] bg-gray-50 border border-gray-100 px-1.5 py-0.5 rounded text-gray-400 font-semibold shadow-2xs">
            {item.kode}
          </span>
          <span className={`font-bold ${item.isWajibInstitusi ? 'text-red-900' : 'text-slate-800'}`}>
            {item.nama}
          </span>
        </div>
        <p className="text-[11px] text-gray-400 font-medium">{item.semester} • {item.sks} SKS</p>
      </div>

      <div className="flex items-center gap-1 shrink-0">
        {type === 'explorer' ? (
          <>
            <button 
              onClick={() => onSelect('konversi')} 
              disabled={isSelected || item.isWajibInstitusi}
              className="px-2 py-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-semibold rounded-md border border-emerald-200 disabled:opacity-0 transition-all cursor-pointer"
            >
              + Konversi
            </button>
            <button 
              onClick={() => onSelect('reguler')} 
              disabled={isSelected}
              className="px-2 py-1 bg-amber-50 hover:bg-amber-100 text-amber-700 font-semibold rounded-md border border-amber-200 disabled:opacity-0 transition-all cursor-pointer"
            >
              + Reguler
            </button>
          </>
        ) : (
          <button 
            onClick={onRemove}
            className="p-1.5 bg-gray-50 hover:bg-red-50 text-gray-400 hover:text-red-500 border rounded-lg transition-colors cursor-pointer"
          >
            <MaterialIcon name="Trash2" className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}