import { Move } from "../../data/moves";

export type MovedexDescriptionProps = {
  move: Move;
};

export function MovedexDescription({ move }: MovedexDescriptionProps) {

  if (move.desc == undefined || move.desc == "") {
    return null;
  }

  return (
    <tr>
      <td>
        <table className="movedex-desc-table">
          <tbody>
            <tr>
              <td className="movedex-desc-title">
                Description
              </td>
            </tr>
            <tr>
              <td>
                <div className="movedex-desc">
                  {move.desc}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}