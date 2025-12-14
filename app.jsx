import CountrySelect from "./components/CountrySelect";
import BudgetPanel from "./components/BudgetPanel";
import BattleView from "./components/BattleView";

export default function App() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-4xl font-bold text-center">🕵️ Espionage War</h1>
      <CountrySelect />
      <BudgetPanel />
      <BattleView />
    </div>
  );
}
