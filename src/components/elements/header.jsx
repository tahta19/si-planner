import Button from './button';
import Submit from './submit';
import MaterialIcon from './materialicon';

export default function Header({ activeTab, setActiveTab, totalSks }) {
  return (
    <header className="bg-white border-b border-gray-100 px-4 md:px-8 py-3.5 flex flex-col sm:flex-row justify-between items-center gap-4 shadow-sm z-30 sticky top-0">
      <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-8 w-full sm:w-auto">
        <div className="text-center sm:text-left">
          <h1 className="text-lg font-black text-indigo-950 tracking-tight leading-none">SI-Convert</h1>
          <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase">IS Planning Tools</span>
        </div>
        <div className="flex bg-gray-50 p-1 rounded-2xl border border-gray-100">
          <Button active={activeTab === 'simulasi'} onClick={() => setActiveTab('simulasi')}>Simulasi</Button>
          <Button active={activeTab === 'kurikulum'} onClick={() => setActiveTab('kurikulum')}>Kurikulum</Button>
          <Button active={activeTab === 'faq'} onClick={() => setActiveTab('faq')}>FAQ</Button>
        </div>
      </div>
      
      <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto border-t sm:border-t-0 pt-3 sm:pt-0 border-gray-100">
        <div className="bg-slate-50 border px-3 py-2 rounded-xl flex items-center gap-2 text-xs text-slate-700 font-bold shadow-xs">
          <MaterialIcon name="BarChart2" className="h-4 w-4 text-indigo-600" /> Progress: {totalSks}/144 SKS
        </div>
        <Submit disabled={totalSks === 0}>
          <MaterialIcon name="Download" className="h-4 w-4" /> Download PDF
        </Submit>
      </div>
    </header>
  );
}