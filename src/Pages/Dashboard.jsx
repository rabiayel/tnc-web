export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Toplam Kurs</h3>
          <p className="text-3xl text-red-600 mt-2">12</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Toplam Öğrenci</h3>
          <p className="text-3xl text-red-600 mt-2">163</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="font-semibold">Aktif Eğitimler</h3>
          <p className="text-3xl text-red-600 mt-2">5</p>
        </div>
      </div>
    </div>
  );
}
