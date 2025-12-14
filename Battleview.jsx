export default function BattleView() {
  return (
    <div className="bg-slate-800 p-4 rounded-xl">
      <h2 className="text-xl mb-2">⚔️ Final Conflict</h2>
      <div className="flex gap-6">
        {["✈️ Aircraft", "🚢 Ship", "🛞 Tank"].map(w => (
          <button key={w} className="bg-slate-700 px-4 py-2 rounded hover:bg-red-600">
            {w}
          </button>
        ))}
      </div>
    </div>
  );
}
