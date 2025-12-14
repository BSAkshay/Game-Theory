export default function BudgetPanel() {
  return (
    <div className="bg-slate-800 p-4 rounded-xl">
      <h2 className="text-xl mb-2">💰 Budget Allocation</h2>
      <div className="grid grid-cols-3 gap-4">
        <button className="bg-blue-600 p-3 rounded">🛡 Defence</button>
        <button className="bg-green-600 p-3 rounded">🏥 Medical</button>
        <button className="bg-yellow-600 p-3 rounded">📈 Economy</button>
      </div>
    </div>
  );
}
