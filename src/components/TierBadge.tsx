export default function TierBadge({ tier }: { tier: string }) {
  const colorMap: Record<string, string> = {
    free: "bg-gray-300 text-gray-800",
    silver: "bg-gray-400 text-white",
    gold: "bg-yellow-400 text-black",
    platinum: "bg-blue-500 text-white",
  };

  return (
    <span className={`text-xs px-2 py-1 rounded-full font-medium ${colorMap[tier] || "bg-gray-200"}`}>
      {tier.toUpperCase()}
    </span>
  );
}


// export default function TierBadge({ tier }: { tier: string }) {
//   const colors: Record<string, string> = {
//     free: "bg-gray-200 text-gray-800",
//     silver: "bg-blue-200 text-blue-800",
//     gold: "bg-yellow-200 text-yellow-800",
//     platinum: "bg-purple-200 text-purple-800",
//   };
//   return (
//     <span className={`px-2 py-1 rounded text-xs font-semibold ${colors[tier]}`}>
//       {tier}
//     </span>
//   );
// }
