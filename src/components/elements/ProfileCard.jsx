import Card from './card';
import { daftarMitra } from '../../data/kurikulumData';

export default function ProfileCard({ profile, onMitraChange, setProfile }) {
  // Handler untuk mengupdate nama dan npm langsung ke state utama di App.jsx
  const handleInputChange = (field, value) => {
    if (setProfile) {
      setProfile(prev => ({ ...prev, [field]: value }));
    }
  };

  return (
    <Card className="bg-purple-50/50 border-purple-100 relative overflow-hidden p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 relative z-10">
        
        {/* Input Nama Mahasiswa */}
        <div>
          <label className="text-[11px] font-bold text-purple-800 uppercase tracking-wider block mb-1.5">Nama Mahasiswa</label>
          <input 
            type="text"
            placeholder="Andi Wijaya" 
            value={profile.nama} 
            onChange={(e) => handleInputChange('nama', e.target.value)} // <-- Sekarang sudah bisa diketik
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all"
          />
        </div>

        {/* Input NPM Mahasiswa */}
        <div>
          <label className="text-[11px] font-bold text-purple-800 uppercase tracking-wider block mb-1.5">NPM Mahasiswa</label>
          <input 
            type="text"
            placeholder="23081010XXX" 
            value={profile.npm} 
            onChange={(e) => handleInputChange('npm', e.target.value)} // <-- Di sini pemicu warning tadi, sekarang aman!
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all"
          />
        </div>

        {/* Dropdown Pilihan Mitra MSIB */}
        <div>
          <label className="text-[11px] font-bold text-purple-800 uppercase tracking-wider block mb-1.5">Rencana Jalur MSIB</label>
          <select 
            value={profile.mitra} 
            onChange={(e) => onMitraChange(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 cursor-pointer transition-all"
          >
            <option value="">-- Pilih Program Mitra --</option>
            {daftarMitra.map(m => <option key={m.id} value={m.id}>{m.nama}</option>)}
          </select>
        </div>

      </div>
      <div className="absolute right-0 bottom-0 w-32 h-32 bg-purple-100/40 rounded-full translate-x-12 translate-y-12 pointer-events-none"></div>
    </Card>
  );
}