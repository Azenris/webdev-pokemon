import { ItemTag, get_item_name_span, itemDB } from "../../data/items";
import { Move } from "../../data/moves";

export type MovedexTriviaProps = {
  move: Move;
};

export function MovedexTrivia({ move }: MovedexTriviaProps) {

  const item = itemDB.find((item) => item.move === move.id);
  const isHM = (item != undefined ? item.tags.includes(ItemTag.HM) : false);
  const isTM = (item != undefined ? item.tags.includes(ItemTag.TM) : false);

  if ((move.trivia == undefined || move.trivia.length == 0) && !(isHM || isTM)) {
    return null;
  }

  return (
    <tr>
      <td>
        <table className="movedex-trivia-table">
          <tbody>
            <tr>
              <td className="movedex-trivia-title">
                Trivia
              </td>
            </tr>
            <tr>
              <td>
                <ul className="movedex-trivia-list">
                  {move.trivia.map((trivia, index) => {
                    return (
                      <li key={index}>
                        {trivia}
                      </li>
                    );
                  })}
                  {(isHM && item) && (
                    <>
                      <li>
                        This move can be taught with the Hidden Machine {get_item_name_span(item)}.
                      </li>
                      <li>
                        This move cannot be removed once learnt.
                      </li>
                    </>
                  )}
                  {(isTM && item) && (
                    <>
                      <li>
                        This move can be taught with the Technical Machine {get_item_name_span(item)}.
                      </li>
                    </>
                  )}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}