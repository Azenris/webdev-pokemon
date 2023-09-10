import { Move } from "../../data/moves";

export type MovedexTitleProps = {
  move: Move;
};

export function MovedexTitle({ move }: MovedexTitleProps) {
  return (
    <tr>
      <td>
        <div className="movedex-name">{move.name}</div>
        <div className="movedex-subscript">Move</div>
      </td>
    </tr>
  );
}