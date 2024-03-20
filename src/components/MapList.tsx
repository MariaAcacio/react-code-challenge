import { capitalizeFirstLetter } from "src/utils/functions";
import { AbilitiesType, PokemonTypeType } from "src/types/docTypes";

export const MapList = ({
  title,
  attribute,
  list,
}: {
  title: string;
  attribute: string;
  list: AbilitiesType[] | PokemonTypeType[];
}) => {
  return (
    <div style={{ display: "flex", gap: "13px" }}>
      <h5>{`${title}:`}</h5>
      {list?.map((item: AbilitiesType | PokemonTypeType, ind: number) => (
        <p key={ind} style={{ fontSize: "18px" }}>
          {capitalizeFirstLetter(item[attribute].name)}
        </p>
      ))}
    </div>
  );
};
