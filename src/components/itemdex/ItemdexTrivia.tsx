import { Item } from "../../data/item";

export type ItemdexTriviaProps = {
  item: Item;
};

export function ItemdexTrivia({ item }: ItemdexTriviaProps) {

  if (item.trivia == undefined || item.trivia.length == 0) {
    return null;
  }

  return (
    <tr>
      <td>
        <table className="itemdex-trivia-table">
          <tbody>
            <tr>
              <td className="itemdex-trivia-title">
                Trivia
              </td>
            </tr>
            <tr>
              <td>
                <ul className="itemdex-trivia-list">
                  {item.trivia.map((trivia, index) => {
                    return (
                      <li key={index}>
                        {trivia}
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}