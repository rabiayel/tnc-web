import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4">
        <h1 className="text-2xl font-bold text-red-600 mb-8">TNC GROUP</h1>
        <nav className="space-y-3">
          <NavLink to="/" className="block p-2 rounded hover:bg-red-50">Dashboard</NavLink>
          <NavLink to="/courses" className="block p-2 rounded hover:bg-red-50">Eğitimler</NavLink>
          <NavLink to="/students" className="block p-2 rounded hover:bg-red-50">Öğrenciler</NavLink>
        </nav>
      </aside>

      {/* Main */}
      <div className="flex-1">
        {/* Topbar */}
        <header className="bg-white p-4 border-b flex justify-between items-center">
          <input
            className="border rounded px-3 py-2 w-1/3"
            placeholder="Ne öğrenmek istersiniz?"
          />
          <div className="flex items-center gap-3">
            <span className="font-medium">Rabia Yel</span>
            <span className="text-sm text-gray-500">Super Admin</span>
          </div>
        </header>

        {/* Content */}
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
