export default function CountrySelect() {
  return (
    <div className="bg-slate-800 p-4 rounded-xl">
      <h2 className="text-xl mb-2">🌍 Choose Your Country</h2>
      <div className="flex gap-4">
        {["USA", "China", "India", "Russia"].map(c => (
          <button key={c} className="px-4 py-2 bg-slate-700 rounded hover:bg-red-500">
            {c}
          </button>
        ))}
      </div>
    </div>
  );
}
