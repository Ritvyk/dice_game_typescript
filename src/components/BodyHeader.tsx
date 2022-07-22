import React from "react";
import { ScoreState } from "../App";
interface IBodyHeaderProps {
  scores: ScoreState;
}
const BodyHeader: React.FC<IBodyHeaderProps> = ({ scores }) => {
  return (
    <div className="bg-blue-300 border-2 border-dashed border-gray-10 font-bold p-3 text-3xl text-center">
      <div className="flex justify-center items-center text-blue-50">
        <div>Dice Game !</div>
      </div>
      <div className="flex justify-between items-center p-2 text-sm text-blue-9">
        <span>
          Player 1 : <span className="text-gray-800">{scores.player0}</span>{" "}
        </span>
        <span>
          Player 2 : <span className="text-gray-800">{scores.player1}</span>{" "}
        </span>
      </div>
    </div>
  );
};

export default BodyHeader;
