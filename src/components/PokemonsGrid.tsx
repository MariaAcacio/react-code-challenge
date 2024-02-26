import React from "react";

export const PokemonsGrid = ({ pokeList }) => {
  const getBorderBotton = (index) => {
    return index !== pokeList.length - 1 ? "1px solid black" : "none";
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "auto auto auto auto",
        gap: "10px",
        textAlign: "center",
        border: "1px solid black",
        borderRadius: "5px",
        overflow: "hidden",
      }}
    >
      <div style={{ fontWeight: "bold", borderBottom: "1px solid black" }}>
        Picture
      </div>
      <div style={{ fontWeight: "bold", borderBottom: "1px solid black" }}>
        Name
      </div>
      <div style={{ fontWeight: "bold", borderBottom: "1px solid black" }}>
        Ability
      </div>
      <div style={{ fontWeight: "bold", borderBottom: "1px solid black" }}>
        Type
      </div>

      {pokeList.map((item, index) => (
        <React.Fragment key={item.id}>
          <div
            style={{
              borderBottom: getBorderBotton(index),
            }}
          >
            <img src={item.sprite} alt={item.name} style={{ width: "100px" }} />
          </div>
          <div
            style={{
              borderBottom: getBorderBotton(index),
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {item.name}
          </div>
          <div
            style={{
              borderBottom: getBorderBotton(index),
            }}
          >
            {item.abilities.map((ability, ind) => (
              <p key={ind}>{`${ability}`}</p>
            ))}
          </div>
          <div
            style={{
              borderBottom: getBorderBotton(index),
            }}
          >
            {item.types.map((type, ind) => (
              <p key={ind}>{type}</p>
            ))}
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};
