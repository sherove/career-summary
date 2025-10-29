import React from "react";
import { experiences } from "@/data/experiences.ts";
import { getColorClasses } from "@/components/utils/getColorClasses";

export default function Experience() {
  return (
    <section className="min-h-screen px-6 pt-24 pb-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3 text-cyan-400">
          💼 EXPERIENCE
        </h2>

        <div className="relative border-l-2 border-cyan-500/30 ml-4 space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="ml-6">
              <div className={`absolute -left-3 w-6 h-6 ${getColorClasses(exp.color).bg} rounded-full border-4 border-gray-950`}></div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-xl font-bold ${getColorClasses(exp.color).text}`}>{exp.company}</h3>
                  <span className="text-sm text-gray-500">{exp.period}</span>
                </div>
                <div className="mb-3 flex flex-wrap gap-2">
                  {exp.tags.map((tag, tidx) => (
                    <span
                      key={tidx}
                      className={`px-2 py-1 ${getColorClasses(exp.color).bg}/20 ${getColorClasses(exp.color).text} rounded text-xs`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 text-sm text-gray-300">
                  {exp.tasks.map((task, tidx) => (
                    <li key={tidx} className="flex items-start gap-2">
                      <span className={`${getColorClasses(exp.color).text} mt-1`}>▸</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}