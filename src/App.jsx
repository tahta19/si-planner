import React, { useState } from 'react';
import { 
  User, 
  GraduationCap, 
  BookOpen, 
  Download, 
  RefreshCw, 
  HelpCircle, 
  FileText 
} from 'lucide-react';

export default function App() {
  // State awal untuk profil mahasiswa
  const [profile, setProfile] = useState({
    nama: '',
    npm: '',
    mitra: ''
  });

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-800 overflow-hidden">
      
      {/* 1. SIDEBAR (KIRI) */}
      <aside className="w-64 bg-slate-900 text-white flex flex-col justify-between p-4 shadow-xl">
        <div>
          <div className="flex items-center gap-3 px-2 py-4 border-b border-slate-700 mb-6">
            <GraduationCap className="h-8 w-8 text-blue-400" />
            <span className="font-bold text-lg tracking-wider text-blue-100">SI-CONVERT</span>
          </div>
          
          <nav className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium transition-all">
              <BookOpen className="h-5 w-5" />
              Simulasi Konversi
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-3 text-slate-400 hover:bg-slate-800 hover:text-white rounded-xl transition-all">
              <HelpCircle className="h-5 w-5" />
              FAQ & Panduan
            </a>
          </nav>
        </div>
        
        <div className="text-xs text-slate-500 px-4 border-t border-slate-800 pt-4">
          v1.0.0 — Kurikulum SI 2023
        </div>
      </aside>

      {/* 2. AREA KONTEN UTAMA (KANAN) */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* HEADER: PANEL IDENTITAS */}
        <header className="bg-white border-b border-gray-200 p-4 shadow-sm z-10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            
            {/* Input Nama & NPM */}
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Nama Mahasiswa" 
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-full sm:w-60 text-sm transition-all"
                  value={profile.nama}
                  onChange={(e) => setProfile({...profile, nama: e.target.value})}
                />
              </div>
              <div className="relative">
                <FileText className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="NPM Mahasiswa" 
                  className="pl-9 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none w-full sm:w-48 text-sm transition-all"
                  value={profile.npm}
                  onChange={(e) => setProfile({...profile, npm: e.target.value})}
                />
              </div>
            </div>

            {/* Dropdown Jalur MSIB */}
            <div className="w-full md:w-auto">
              <select 
                className="w-full md:w-72 px-4 py-2 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm cursor-pointer transition-all"
                value={profile.mitra}
                onChange={(e) => setProfile({...profile, mitra: e.target.value})}
              >
                <option value="">-- Pilih Program / Jalur MSIB --</option>
                <option value="bangkit-ml">Bangkit Academy - Machine Learning</option>
                <option value="dicoding-frontend">Dicoding Indonesia - Front-End Web</option>
              </select>
            </div>

          </div>
        </header>

        {/* WORKSPACE AREA (Dua Kolom & Analisis Bawah) */}
        <main className="flex-1 overflow-y-auto p-6 bg-slate-50">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* CONTAINER DUA KOLOM */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* KELOMPOK KOLOM KIRI */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm min-h-[450px]">
                <h3 className="font-bold text-base text-gray-900 border-b pb-3 mb-4">
                  📚 Daftar Mata Kuliah Kampus
                </h3>
                <p className="text-sm text-gray-400 italic">Mata kuliah akan muncul di sini setelah data siap...</p>
              </div>

              {/* KELOMPOK KOLOM KANAN */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm min-h-[450px] flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-gray-900 border-b pb-3 mb-4">
                    🛒 Kalkulator Keranjang SKS
                  </h3>
                  <p className="text-sm text-gray-400 italic">Seret mata kuliah ke area ini...</p>
                </div>

                {/* Tombol Unduh di kanan bawah keranjang */}
                <div className="border-t pt-4 mt-6 flex justify-end">
                  <button className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium text-sm transition-all shadow-sm shadow-blue-200">
                    <Download className="h-4 w-4" />
                    Unduh Rencana Konversi
                  </button>
                </div>
              </div>

            </div>

            {/* PANEL ANALISIS SKS (BAWAH) */}
            <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-sm">
              <h4 className="font-bold text-sm text-gray-900 uppercase tracking-wider mb-3">
                📊 Analisis Kelayakan Akademik
              </h4>
              <div className="text-sm text-gray-500">
                Sistem siap melakukan validasi otomatis.
              </div>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
}