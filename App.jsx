import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [game, setGame] = useState(null);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    axios.post("https://YOUR_BACKEND_URL/match", { bot: true })
      .then(res => setGame(res.data.game_id));
  }, []);

  useEffect(() => {
    if (timer === 0) autoSelect();
    const t = setInterval(() => setTimer(t => t - 1), 1000);
    return () => clearInterval(t);
  }, [timer]);

  const autoSelect = () => {
    choose(["A", "B", "C"][Math.floor(Math.random()*3)]);
  };

  const choose = (c) => {
    axios.post(`https://YOUR_BACKEND_URL/choose/${game}/0`, null, { params: { choice: c } });
    setTimer(10);
  };

  return (
    <div className="h-screen bg-black text-white flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-4">🌍 Espionage War</h1>

      <div className="flex gap-6 mt-10">
        {["A","B","C"].map(c => (
          <motion.button
            whileHover={{ scale: 1.2 }}
            key={c}
            onClick={() => choose(c)}
            className="p-6 bg-red-600 rounded-xl"
          >
            ⚔️ {c}
          </motion.button>
        ))}
      </div>

      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className="mt-8 text-xl"
      >
        ⏱️ Time Left: {timer}
      </motion.div>
    </div>
  );
}
