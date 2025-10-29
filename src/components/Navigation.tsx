interface NavProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Navigation({ activeSection, setActiveSection }: NavProps) {
  const menu = [
    { id: "home", label: "HOME" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-lg">
          🧱 Back-End Developer
        </div>
        <div className="flex gap-6">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`text-xs uppercase font-semibold transition-colors ${
                activeSection === item.id
                  ? "text-cyan-400"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}