import { useState, useEffect } from "react";
import { getColorClasses } from "@/components/utils/getColorClasses";
import { skills } from "@/data/skills.ts";

export default function Home({ showCursor }: { showCursor: boolean }) {

  const [text, setText] = useState("");
  const fullText = "현 리드데이터시스템즈(리드코프) 재직중";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // 타이핑 속도 조절
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen px-6 pt-24 pb-16">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-800 rounded-lg shadow-2xl border border-gray-700 overflow-hidden mb-8 hover:shadow-cyan-500/10 transition-shadow">
          <div className="bg-gray-700 px-4 py-3 flex items-center gap-2 border-b border-gray-600">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-sm text-gray-400 ml-4 font-mono">~/portfolio</span>
          </div>
          <div className="p-8 font-mono text-sm">
            <div className="mb-4">
              <span className="text-purple-400">visitor</span>
              <span className="text-gray-500">@</span>
              <span className="text-blue-400">portfolio</span>
              <span className="text-gray-500">:~$ </span>
              <span className="text-gray-300">cat introduction.txt</span>
            </div>
            <div className="text-3xl md:text-5xl mb-6 text-gray-100 font-sans">
              {text}
              <span className={`${showCursor ? "opacity-100" : "opacity-0"}`}>|</span>
            </div>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center gap-2">
                <span className="text-green-400">→</span>
                <span>IT 개발팀 6년차 💘</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">→</span>
                <span>윤영은 (Youn YoungEun)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">→</span>
                <span>이제보다 오늘이 더 기대가 되는 개발자로 현재도 꾸준히 성장하려 노력하고 있습니다.</span>
              </div>
            </div>
            <div className="mt-6 flex items-center">
              <span className="text-purple-400">visitor</span>
              <span className="text-gray-500">@</span>
              <span className="text-blue-400">portfolio</span>
              <span className="text-gray-500">:~$ </span>
              <span className="blink">█</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 mt-10">
          <h2 className="text-lg font-bold mb-6 text-cyan-400">🛠️ Tech Stack</h2>
          <div className="space-y-6">
            {skills.map((group, i) => (
              <div key={i}>
                <h3 className={`text-sm font-bold mb-2 ${getColorClasses(group.color).text}`}>
                  {group.icon} {group.category}
                </h3>
                {group.items.map((s, idx) => (
                  <div key={idx} className="mb-3">
                    <div className="flex justify-between text-xs text-gray-300 mb-1">
                      <span>{s.name}</span>
                      <span className={getColorClasses(group.color).text}>
                        {s.years} • {s.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(group.color).from} ${getColorClasses(group.color).to} transition-all duration-1000 ease-out`}
                        style={{
                          width: `${s.percent}%`,
                          transform: "translateX(-100%)",
                          animation: "slideIn 1s ease-out forwards",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}