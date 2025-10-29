export const getColorClasses = (color: string) => {
  const colors: Record<
    string,
    { bg: string; text: string; border: string; from: string; to: string }
  > = {
    cyan: { bg: "bg-cyan-500", text: "text-cyan-400", border: "border-cyan-500", from: "from-cyan-500", to: "to-blue-500" },
    purple: { bg: "bg-purple-500", text: "text-purple-400", border: "border-purple-500", from: "from-purple-500", to: "to-pink-500" },
    green: { bg: "bg-green-500", text: "text-green-400", border: "border-green-500", from: "from-green-500", to: "to-emerald-500" },
    orange: { bg: "bg-orange-500", text: "text-orange-400", border: "border-orange-500", from: "from-orange-500", to: "to-red-500" },
    yellow: { bg: "bg-yellow-500", text: "text-yellow-400", border: "border-yellow-500", from: "from-yellow-500", to: "to-orange-500" }
  };

  return colors[color] || colors["cyan"];
};