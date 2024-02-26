export const MapList = ({
  title,
  attribute,
  list,
}: {
  title: string;
  attribute: string;
  list: any[];
}) => {
  return (
    <div style={{ display: "flex", gap: "13px" }}>
      <h5>{`${title}:`}</h5>
      {list?.map((item, ind) => (
        <p key={ind} style={{ fontSize: "18px" }}>
          {item[attribute].name}
        </p>
      ))}
    </div>
  );
};
