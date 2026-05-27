import { useState } from 'react'; // <-- Tambahkan baris ini
import Card from '../components/elements/card';
import Input from '../components/elements/input';
import MaterialIcon from '../components/elements/materialicon';
import { faqData } from '../data/faqData';

export default function Faq() {
  const [search, setSearch] = useState('');
  const [activeFaqId, setActiveFaqId] = useState(null);

  const filteredFaq = faqData.filter(f => 
    f.pertanyaan.toLowerCase().includes(search.toLowerCase()) || 
    f.jawaban.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      <Card className="p-5 space-y-3">
        <div>
          <h3 className="font-extrabold text-slate-800 text-base">Pusat Bantuan Akademik</h3>
          <p className="text-xs text-gray-400">Cari panduan regulasi konversi SKS kurikulum Sistem Informasi</p>
        </div>
        <Input placeholder="Ketik kata kunci aturan (misal: 'minimal', 'kkn')..." value={search} onChange={(e) => setSearch(e.target.value)} />
      </Card>

      <div className="space-y-2">
        {filteredFaq.map(faq => {
          const isOpen = activeFaqId === faq.id;
          return (
            <Card key={faq.id} className="p-4 cursor-pointer hover:border-gray-300">
              <div className="flex justify-between items-center gap-4" onClick={() => setActiveFaqId(isOpen ? null : faq.id)}>
                <div className="space-y-0.5">
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded">
                    {faq.kategori}
                  </span>
                  <h4 className="font-bold text-slate-800 text-xs md:text-sm pt-1">{faq.pertanyaan}</h4>
                </div>
                <div className={`text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-600' : ''}`}>
                  <MaterialIcon name="ChevronDown" className="h-4 w-4" />
                </div>
              </div>
              
              {isOpen && (
                <div className="mt-3 pt-3 border-t border-gray-100 text-xs text-gray-500 leading-relaxed animate-fade-in">
                  {faq.jawaban}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}