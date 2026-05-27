import Card from '../components/elements/card';
import { kurikulumSI2023 } from '../data/kurikulumData';

export default function Curriculum() {
  const clusters = ["Pemrograman", "Machine Learning", "Data", "UIUX", "Umum"];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {clusters.slice(0,4).map((cls) => {
          const matched = kurikulumSI2023.filter(m => m.tema === cls);
          const totalSks = matched.reduce((s, m) => s + m.sks, 0);
          return (
            <Card key={cls} className="p-4 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider">{cls}</p>
                <p className="text-lg font-black text-indigo-950 mt-0.5">{matched.length} Mata Kuliah</p>
              </div>
              <span className="text-xs font-bold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-xl">{totalSks} SKS</span>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {clusters.map(cls => (
          <Card key={cls} className="p-5 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center border-b pb-2 mb-3">
                <h4 className="font-bold text-sm text-slate-800 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-indigo-600 rounded-full"></span> Rumpun {cls}
                </h4>
              </div>
              <div className="space-y-2">
                {kurikulumSI2023.filter(m => m.tema === cls).map(m => (
                  <div key={m.kode} className={`p-2.5 border rounded-xl flex justify-between items-center text-xs ${
                    m.isWajibInstitusi ? 'bg-red-50 border-red-100' : 'bg-gray-50/50 border-gray-100'
                  }`}>
                    <div>
                      <p className="font-bold text-gray-800">{m.nama}</p>
                      <p className="text-[10px] text-gray-400 font-mono mt-0.5">{m.kode} • {m.semester}</p>
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md ${
                      m.isWajibInstitusi ? 'bg-red-100 text-red-700' : 'bg-emerald-100 text-emerald-700'
                    }`}>{m.sks} SKS</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}