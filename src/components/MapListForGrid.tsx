import { capitalizeFirstLetter } from "src/utils/functions";
import { FavoritePokemonType } from "src/types/docTypes";
import { AttributeNamesEnum } from "src/utils/constants";

export const MapListForGrid = ({
  list,
  attribute,
}: {
  list: FavoritePokemonType;
  attribute: AttributeNamesEnum;
}) => {
  return (
    <>
      {list[attribute].map((item: string, ind: number) => (
        <p key={ind}>{capitalizeFirstLetter(item)}</p>
      ))}
    </>
  );
};
