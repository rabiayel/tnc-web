import { useState } from "react";

export default function Students() {
  const [students, setStudents] = useState([
    { id: 1, name: "Ali Veli" },
    { id: 2, name: "Ayşe Demir" },
  ]);

  const [name, setName] = useState("");
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!name) return;

    if (editId) {
      setStudents(students.map(s => s.id === editId ? { ...s, name } : s));
      setEditId(null);
    } else {
      setStudents([...students, { id: Date.now(), name }]);
    }
    setName("");
  };

  const handleDelete = (id) => {
    setStudents(students.filter(s => s.id !== id));
  };

  const handleEdit = (student) => {
    setName(student.name);
    setEditId(student.id);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Öğrenciler</h2>

      <div className="bg-white p-4 rounded shadow mb-6">
        <input
          className="border px-3 py-2 rounded mr-2"
          placeholder="Öğrenci adı"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={handleAddOrUpdate}
          className="px-4 py-2 bg-red-600 text-white rounded"
        >
          {editId ? "Güncelle" : "Ekle"}
        </button>
      </div>

      <ul className="space-y-2">
        {students.map((student) => (
          <li key={student.id} className="bg-white p-4 rounded shadow flex justify-between">
            <span>{student.name}</span>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(student)}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Düzenle
              </button>
              <button
                onClick={() => handleDelete(student.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Sil
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
