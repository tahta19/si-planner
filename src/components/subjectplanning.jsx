
import MatkulCard from './MatkulCard';
import EmptyState from './elements/emptystate';

export default function SubjectPlanning({ list, onRemove }) {
  const totalSks = list.reduce((sum, item) => sum + item.sks, 0);

  return (
    <div className="bg-amber-50/20 border-2 border-amber-500/80 rounded-3xl p-5 shadow-sm min-h-[220px] flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-center border-b border-amber-100 pb-2.5 mb-3">
          <span className="font-bold text-amber-950 text-sm flex items-center gap-2">🗂️ Keranjang B (Kelas Reguler)</span>
          <span className="text-xs font-bold text-amber-700 bg-amber-100 px-3 py-1 rounded-full">Subtotal: {totalSks} SKS</span>
        </div>

        <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
          {list.length === 0 ? (
            <EmptyState message="Klik '+ Reguler' untuk matkul wajib atau kelas tatap muka" icon="Layers" />
          ) : (
            list.map(item => (
              <MatkulCard key={item.kode} item={item} onRemove={() => onRemove(item.kode)} type="bucket" />
            ))
          )}
        </div>
      </div>
    </div>
  );
}