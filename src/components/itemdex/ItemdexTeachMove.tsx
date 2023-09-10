import { Item, ItemTag } from "../../data/items";
import { get_item_id_name_span } from "../../data/moves";

export type ItemdexDescriptionProps = {
  item: Item;
};

export function ItemdexTeachMove({ item }: ItemdexDescriptionProps) {

  if (item.move == undefined) {
    return null;
  }

  return (
    <>
      {item.tags.includes(ItemTag.HM) && (
        <tr>
          <td>
            <table className="itemdex-desc-table">
              <tbody>
                <tr>
                  <td className="itemdex-desc-title">
                    Hidden Machine
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="itemdex-desc">
                      This item can be used as many times as you like without being consumed.
                      <br />
                      You CANNOT ever remove this move from a POKéMON!
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      )}
      {item.tags.includes(ItemTag.TM) && (
        <tr>
          <td>
            <table className="itemdex-desc-table">
              <tbody>
                <tr>
                  <td className="itemdex-desc-title">
                    Technical Machine
                  </td>
                </tr>
                <tr>
                  <td>
                    <div className="itemdex-desc">
                      This item will be consumed once used.
                      <br />
                      Choose carefully which POKéMON you want it on.
                      <br />
                      You can overwrite the learnt move with other moves.
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      )}
      <tr>
        <td>
          <table className="itemdex-desc-table">
            <tbody>
              <tr>
                <td className="itemdex-desc-title">
                  Teach
                </td>
              </tr>
              <tr>
                <td>
                  <div className="itemdex-desc">
                    When used this item will teach the move {get_item_id_name_span(item.move)} to a POKéMON.
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </>
  );
}