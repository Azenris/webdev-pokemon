import { Move } from "../../data/moves";
import { MovedexDescription } from "./movedexDescription";
import { MovedexPicture } from "./movedexPicture";
import { MovedexTitle } from "./movedexTitle";
import { MovedexTrivia } from "./movedexTrivia";

export type MovedexEntryProps = {
  move: Move;
};

export function MovedexEntry({ move }: MovedexEntryProps) {
  return (
    <div className="movedex-page">
      <table className="movedex-table">
        <tbody>
          <MovedexTitle move={move} />
          <MovedexPicture move={move} />
          <MovedexDescription move={move} />
          <MovedexTrivia move={move} />
        </tbody>
      </table>
    </div>
  );
}