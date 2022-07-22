import React, { useState, useEffect } from "react";
import BodyHeader from "./components/BodyHeader";
import MainArena from "./components/MainArena";

export interface ScoreState {
  player0: number;
  player1: number;
}

export const INITIAL_STATE: ScoreState = {
  player0: 0,
  player1: 0,
};

function App() {
  const [turn, setTurn] = useState<number>(0);
  const [playerWin, setPlayerWin] = useState<number | null>(null);
  const [scores, setScores] = useState<ScoreState>(INITIAL_STATE);
  const [diceNum, setDiceNum] = useState<number>(1);

  useEffect(() => {
    if (scores.player0 >= 15) {
      setPlayerWin(0);
    }
    if (scores.player1 >= 15) {
      setPlayerWin(1);
    }
  }, [scores]);

  return (
    <div className="bg-gray-10 flex justify-center items-center flex-col w-screen h-screen">
      <div className="w-1/2 h-1/2 border-dashed border-4 border-gray-10 p-4">
        <BodyHeader scores={scores} />
        <MainArena
          setPlayerWin={setPlayerWin}
          playerWin={playerWin}
          diceNum={diceNum}
          setDiceNum={setDiceNum}
          scores={scores}
          setScores={setScores}
          turn={turn}
          setTurn={setTurn}
        />
      </div>
    </div>
  );
}

export default App;
