import { useState } from 'react';
import Header from './components/elements/header';
import Footer from './components/elements/footer';
import ProfileCard from './components/elements/ProfileCard';
import Simulation from './pages/simulation';
import Curriculum from './pages/curriculum';
import Faq from './pages/faq';
import { daftarMitra, kurikulumSI2023 } from './data/kurikulumData';

export default function App() {
  const [activeTab, setActiveTab] = useState('simulasi');
  const [profile, setProfile] = useState({ nama: '', npm: '', mitra: '' });
  const [keranjangA, setKeranjangA] = useState([]);
  const [keranjangB, setKeranjangB] = useState([]);

  // Pemicu perubahan mitra langsung dikelola di event handler ini
  const handleMitraChange = (mitraId) => {
    setProfile(prev => ({ ...prev, mitra: mitraId }));
    
    if (!mitraId) {
      setKeranjangA([]);
      return;
    }

    const mitraTerpilih = daftarMitra.find(m => m.id === mitraId);
    if (mitraTerpilih) {
      const rekomendasi = kurikulumSI2023.filter(
        m => m.tema === mitraTerpilih.temaFokus && !m.isWajibInstitusi
      );
      setKeranjangA(rekomendasi);
      // Bersihkan matkul rekomendasi dari keranjang reguler agar tidak duplikat
      setKeranjangB(prev => prev.filter(m => m.tema !== mitraTerpilih.temaFokus));
    }
  };

  const handleAddSubject = (item, destination) => {
    if (destination === 'konversi') {
      setKeranjangA(prev => [...prev, item]);
    } else {
      setKeranjangB(prev => [...prev, item]);
    }
  };

  const handleRemoveSubject = (kode, target) => {
    if (target === 'A') {
      setKeranjangA(prev => prev.filter(m => m.kode !== kode));
    } else {
      setKeranjangB(prev => prev.filter(m => m.kode !== kode));
    }
  };

  const totalSks = keranjangA.reduce((s, m) => s + m.sks, 0) + keranjangB.reduce((s, m) => s + m.sks, 0);

  return (
    <div className="min-h-screen bg-[#FDFBFD] flex flex-col font-sans antialiased text-gray-700">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} totalSks={totalSks} />

      <main className="max-w-7xl mx-auto w-full px-4 md:px-8 py-6 space-y-6 flex-1 flex flex-col">
        <div>
          <h2 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight">
            {activeTab === 'simulasi' && 'Perencana Konversi SKS'}
            {activeTab === 'kurikulum' && 'Daftar Master Kurikulum SI'}
            {activeTab === 'faq' && 'Pusat Bantuan & Regulasi'}
          </h2>
          <p className="text-xs text-gray-400 mt-0.5">
            {activeTab === 'simulasi' && 'Simulasikan distribusi beban mata kuliah MSIB dengan kurikulum aktif.'}
            {activeTab === 'kurikulum' && 'Peta distribusi seluruh kompetensi prodi Sistem Informasi Kurikulum 2023.'}
            {activeTab === 'faq' && 'Pertanyaan populer mahasiswa seputar sistem konversi mata kuliah.'}
          </p>
        </div>

        {/* Mengirimkan profile, handleMitraChange, dan fungsi setProfile ke ProfileCard */}
        <ProfileCard 
          profile={profile} 
          onMitraChange={handleMitraChange} 
          setProfile={setProfile} 
        />

        <div className="flex-1">
          {activeTab === 'simulasi' && (
            <Simulation 
              keranjangA={keranjangA} 
              keranjangB={keranjangB} 
              onAdd={handleAddSubject} 
              onRemove={handleRemoveSubject} 
            />
          )}
          {activeTab === 'kurikulum' && <Curriculum />}
          {activeTab === 'faq' && <Faq />}
        </div>
      </main>

      <Footer />
    </div>
  );
}