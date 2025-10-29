import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full bg-gray-900 bg-opacity-95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* 왼쪽 로고 영역 */}
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-lg">
          <span className="text-xl">🧱</span>
          <span>Back-End Developer</span>
        </div>

        {/* 오른쪽 메뉴 */}
        <div className="flex gap-6">
          {[
            { to: "/", label: "HOME" },
            { to: "/career", label: "EXPERIENCE" },
            { to: "/projects", label: "PROJECTS" },
            { to: "/contact", label: "CONTACT" },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`font-semibold text-xs uppercase transition-colors ${
                location.pathname === item.to
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
