import { useState } from 'react'; // <-- Tambahkan baris ini
import Card from './elements/card';
import Input from './elements/input';
import MatkulCard from './MatkulCard';
import { kurikulumSI2023 } from '../data/kurikulumData';

export default function Explorer({ selectedIds, onAddSubject }) {
  const [search, setSearch] = useState('');
  const [semester, setSemester] = useState('');
  const [tema, setTema] = useState('');

  const filteredData = kurikulumSI2023.filter(item => {
    const matchSearch = item.nama.toLowerCase().includes(search.toLowerCase()) || item.kode.toLowerCase().includes(search.toLowerCase());
    const matchSem = semester ? item.semester === semester : true;
    const matchTema = tema ? item.tema === tema : true;
    return matchSearch && matchSem && matchTema;
  });

  return (
    <Card className="flex flex-col gap-4 min-h-[500px]">
      <div>
        <h3 className="font-extrabold text-slate-800 text-base">Explorer Mata Kuliah</h3>
        <p className="text-xs text-gray-400">Pilih kurikulum kampus untuk disimulasikan</p>
      </div>

      <Input placeholder="Cari kode atau nama matkul..." value={search} onChange={(e) => setSearch(e.target.value)} />

      <div className="grid grid-cols-2 gap-2">
        <select value={semester} onChange={(e) => setSemester(e.target.value)} className="bg-gray-50 border rounded-xl px-3 py-2 text-xs font-medium cursor-pointer">
          <option value="">Semua Semester</option>
          <option value="Semester I">Semester I</option>
          <option value="Semester III">Semester III</option>
          <option value="Semester V">Semester V</option>
          <option value="Semester VII">Semester VII</option>
        </select>
        <select value={tema} onChange={(e) => setTema(e.target.value)} className="bg-gray-50 border rounded-xl px-3 py-2 text-xs font-medium cursor-pointer">
          <option value="">Semua Rumpun</option>
          <option value="Pemrograman">Pemrograman</option>
          <option value="Machine Learning">Machine Learning</option>
          <option value="Data">Data</option>
          <option value="UIUX">UIUX</option>
          <option value="Umum">Umum</option>
        </select>
      </div>

      <div className="space-y-2 overflow-y-auto max-h-[320px] pr-1">
        {filteredData.length === 0 ? (
          <p className="text-xs text-gray-400 italic text-center py-6">Mata kuliah tidak ditemukan.</p>
        ) : (
          filteredData.map(item => (
            <MatkulCard 
              key={item.kode} 
              item={item} 
              isSelected={selectedIds.includes(item.kode)} 
              onSelect={(dest) => onAddSubject(item, dest)}
              type="explorer"
            />
          ))
        )}
      </div>
    </Card>
  );
}