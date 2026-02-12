import { Link } from "react-router-dom";


export default function Courses() {
  const courses = [
    { id: 1, title: "UI/UX 101", author: "Talha Arık", lang: "Türkçe" },
    { id: 2, title: "React Temelleri", author: "Ahmet Kaya", lang: "Türkçe" },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Eğitimler</h2>

      <div className="grid grid-cols-2 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{course.title}</h3>
            <p className="text-sm text-gray-600">Eğitmen: {course.author}</p>
            <p className="text-sm text-gray-600">Dil: {course.lang}</p>

            {/* 👇 Buraya koyacaksın */}
            <Link
              to={`/courses/${course.id}`}
              className="relative z-10 inline-block mt-3 px-4 py-2 bg-red-600 text-white rounded cursor-pointer"
            >
              Detaya Git
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
