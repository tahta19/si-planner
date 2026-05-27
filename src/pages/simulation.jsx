
import Explorer from '../components/explorer';
import Subject from '../components/subject';
import SubjectPlanning from '../components/subjectplanning';
import AlertPannel from '../components/elements/alertpanel';

export default function Simulation({ keranjangA, keranjangB, onAdd, onRemove }) {
  const selectedIds = [...keranjangA.map(m => m.kode), ...keranjangB.map(m => m.kode)];
  const totalA = keranjangA.reduce((sum, m) => sum + m.sks, 0);
  const totalB = keranjangB.reduce((sum, m) => sum + m.sks, 0);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5 w-full">
          <Explorer selectedIds={selectedIds} onAddSubject={onAdd} />
        </div>
        <div className="lg:col-span-7 space-y-4 w-full">
          <Subject list={keranjangA} onRemove={(id) => onRemove(id, 'A')} />
          <SubjectPlanning list={keranjangB} onRemove={(id) => onRemove(id, 'B')} />
        </div>
      </div>
      <AlertPannel totalKonversi={totalA} totalReguler={totalB} />
    </div>
  );
}