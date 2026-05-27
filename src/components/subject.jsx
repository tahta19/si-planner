import MatkulCard from './MatkulCard';

export default function Subject({ list, onRemove }) {
  const totalSks = list.reduce((sum, item) => sum + item.sks, 0);

  return (
    <div className="bg-emerald-200 rounded-[32px] p-8 shadow-[4px_4px_0px_0px_rgba(49,48,48,1.00)] outline outline-2 outline-offset-[-2px] outline-zinc-800 flex flex-col gap-6">
      
      {/* Header Keranjang */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-green-800 rounded-lg">
            <div className="w-5 h-4 bg-white" /> {/* Placeholder Ikon */}
          </div>
          <h2 className="text-2xl font-bold text-green-800 font-['Plus_Jakarta_Sans'] leading-8">
            Keranjang A (Konversi)
          </h2>
        </div>
        <div className="text-base font-bold text-green-800">Subtotal: {totalSks} SKS</div>
      </div>

      {/* List Mata Kuliah */}
      <div className="flex flex-col gap-3">
        {list.length === 0 ? (
          /* Empty State ala Figma */
          <div className="p-6 opacity-30 rounded-xl outline outline-2 outline-offset-[-2px] outline-green-800 border-dashed border-2 border-green-800">
            <p className="text-center text-green-800 text-base font-normal">
              Tarik mata kuliah konversi ke sini
            </p>
          </div>
        ) : (
          list.map(item => (
            <MatkulCard 
              key={item.kode} 
              item={item} 
              onRemove={() => onRemove(item.kode)} 
              type="bucket" 
            />
          ))
        )}
      </div>
    </div>
  );
}