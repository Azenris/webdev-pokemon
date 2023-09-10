import { Item } from "../../data/items";

export type ItemdexDescriptionProps = {
  item: Item;
};

export function ItemdexDescription({ item }: ItemdexDescriptionProps) {

  if (item.desc == undefined) {
    return null;
  }

  return (
    <tr>
      <td>
        <table className="itemdex-desc-table">
          <tbody>
            <tr>
              <td className="itemdex-desc-title">
                Description
              </td>
            </tr>
            <tr>
              <td>
                <div className="itemdex-desc">
                  {item.desc}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  );
}