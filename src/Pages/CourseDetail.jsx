import { useParams } from "react-router-dom";
import { useState } from "react";

export default function CourseDetail() {
  const { id } = useParams();

  const [lessons, setLessons] = useState([
    { id: 1, title: "UI Nedir?", duration: "24:11", video: "https://youtube.com", desc: "UI temel kavramlar" },
    { id: 2, title: "Renk Teorisi", duration: "34:09", video: "https://youtube.com", desc: "Renk uyumu" },
  ]);

  const [form, setForm] = useState({
    title: "",
    duration: "",
    video: "",
    desc: "",
  });

  const [editId, setEditId] = useState(null);

  const handleSubmit = () => {
    if (!form.title) return;

    if (editId) {
      setLessons(
        lessons.map((l) => (l.id === editId ? { ...l, ...form } : l))
      );
      setEditId(null);
    } else {
      setLessons([...lessons, { id: Date.now(), ...form }]);
    }

    setForm({ title: "", duration: "", video: "", desc: "" });
  };

  const handleDelete = (id) => {
    setLessons(lessons.filter((l) => l.id !== id));
  };

  const handleEdit = (lesson) => {
    setForm({
      title: lesson.title,
      duration: lesson.duration,
      video: lesson.video,
      desc: lesson.desc,
    });
    setEditId(lesson.id);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Kurs Detayı (ID: {id})
      </h2>

      {/* Form */}
      <div className="bg-white p-4 rounded shadow mb-6 grid grid-cols-2 gap-3">
        <input
          className="border p-2 rounded"
          placeholder="Ders Başlığı"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          className="border p-2 rounded"
          placeholder="Süre (örn: 12:45)"
          value={form.duration}
          onChange={(e) => setForm({ ...form, duration: e.target.value })}
        />
        <input
          className="border p-2 rounded col-span-2"
          placeholder="Video URL"
          value={form.video}
          onChange={(e) => setForm({ ...form, video: e.target.value })}
        />
        <textarea
          className="border p-2 rounded col-span-2"
          placeholder="Açıklama"
          value={form.desc}
          onChange={(e) => setForm({ ...form, desc: e.target.value })}
        />

        <button
          onClick={handleSubmit}
          className="col-span-2 bg-red-600 text-white py-2 rounded"
        >
          {editId ? "Dersi Güncelle" : "Ders Ekle"}
        </button>
      </div>

      {/* Liste */}
      <div className="space-y-3">
        {lessons.map((lesson) => (
          <div
            key={lesson.id}
            className="bg-white p-4 rounded shadow flex justify-between items-center"
          >
            <div>
              <h4 className="font-semibold">{lesson.title}</h4>
              <p className="text-sm text-gray-600">Süre: {lesson.duration}</p>
              <p className="text-sm">{lesson.desc}</p>
              <a
                href={lesson.video}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 text-sm"
              >
                Videoyu Aç
              </a>
            </div>

            <div className="space-x-2">
              <button
                onClick={() => handleEdit(lesson)}
                className="px-3 py-1 bg-blue-500 text-white rounded"
              >
                Güncelle
              </button>
              <button
                onClick={() => handleDelete(lesson.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
