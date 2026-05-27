export default function AlertPanel({ type, title, message }) {
  const styles = {
    gagal: "bg-rose-200 border-red-700 text-red-800",
    peringatan: "bg-lime-200 border-stone-600 text-stone-800"
  };

  return (
    <div className={`p-6 rounded-3xl outline outline-2 outline-offset-[-2px] flex items-center gap-6 ${styles[type]}`}>
      {/* Tambahkan ikon dan konten sesuai desain Figma */}
      <div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-sm font-semibold">{message}</p>
      </div>
    </div>
  );
}