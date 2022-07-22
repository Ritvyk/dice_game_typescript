import React, { Dispatch, SetStateAction } from "react";
import { ScoreState, INITIAL_STATE } from "../App";
interface IMainArenaProps {
  turn: number;
  diceNum: number;
  playerWin: number | null;
  scores: ScoreState;
  setPlayerWin: Dispatch<SetStateAction<number | null>>;
  setScores: Dispatch<SetStateAction<ScoreState>>;
  setDiceNum: Dispatch<SetStateAction<number>>;
  setTurn: Dispatch<SetStateAction<number>>;
}
const MainArena: React.FC<IMainArenaProps> = (props) => {
  const handleRollDice = () => {
    const diceNumber = Math.floor(1 + Math.random() * 6);
    if (props.turn === 0) {
      props.setScores({
        ...props.scores,
        player0: props.scores.player0 + diceNumber,
      });
      props.setTurn(1);
    } else {
      props.setScores({
        ...props.scores,
        player1: props.scores.player1 + diceNumber,
      });
      props.setTurn(0);
    }
    props.setDiceNum(diceNumber);
  };
  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-5" id="player-1">
          <div className="flex justify-center flex-col items-center text-xl">
            <span>Player 1</span>
            <button
              onClick={handleRollDice}
              className={` text-sm p-2  rounded-md ${
                props.turn !== 0 || props.playerWin !== null
                  ? "cursor-not-allowed bg-gray-400 text-gray-600"
                  : "bg-green-400 text-green-600"
              }`}
              disabled={props.turn !== 0 || props.playerWin !== null}
            >
              Roll Dice
            </button>
          </div>
        </div>
        <div className="col-span-2 border-2 border-dashed border-blue-300 flex flex-col justify-center items-center text-lg">
          <div className="text-gray-500">Dice</div>
          <span className="text-gray-800">{props.diceNum}</span>
        </div>
        <div className="col-span-5" id="player-1">
          <div className="flex justify-center flex-col items-center text-xl">
            <span>Player 2</span>
            <button
              onClick={handleRollDice}
              className={` text-sm p-2  rounded-md ${
                props.turn !== 1 || props.playerWin !== null
                  ? "cursor-not-allowed bg-gray-400 text-gray-600"
                  : "bg-green-400 text-green-600"
              }`}
              disabled={props.turn !== 1 || props.playerWin !== null}
            >
              Roll Dice
            </button>
          </div>
        </div>
      </div>
      {props.playerWin !== null && (
        <div className="text-lg text-blue-500 flex justify-center items-center flex-col mt-8">
          <span>Player {props.playerWin + 1} Wins !!</span>
          <div>
            <button
              className="bg-green-400 border-2 border-dashed mt-2 p-2 rounded-md text-gray-800 text-green-700 text-sm"
              onClick={() => {
                props.setPlayerWin(null);
                props.setScores(INITIAL_STATE);
                props.setTurn(0);
                props.setDiceNum(0);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MainArena;
