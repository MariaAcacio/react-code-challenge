import "src/css/PokemonsGridStyles.css";

export const ThCell = ({ title }: { title: string }) => {
  return <th className="thStyle">{title}</th>;
};
