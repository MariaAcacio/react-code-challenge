import { getNamesFromArray, generateId } from "./functions";

describe("testing getNamesFromArray function", () => {
  it("should return an array of 1 string representing the ability name", () => {
    const abilities = [{ ability: { name: "ability1" } }];
    expect(getNamesFromArray(abilities, "ability")).toEqual(["ability1"]);
  });

  it("should return an array of 2 strings representing the ability names", () => {
    const abilities = [
      { ability: { name: "ability1" } },
      { ability: { name: "ability2" } },
    ];
    expect(getNamesFromArray(abilities, "ability")).toEqual([
      "ability1",
      "ability2",
    ]);
  });

  it("should return an array of 3 strings representing the ability names", () => {
    const abilities = [
      { ability: { name: "ability1" } },
      { ability: { name: "ability2" } },
      { ability: { name: "ability3" } },
    ];
    expect(getNamesFromArray(abilities, "ability")).toEqual([
      "ability1",
      "ability2",
      "ability3",
    ]);
  });

  it("should return an array of 2 strings representing the type names", () => {
    const types = [{ type: { name: "type1" } }, { type: { name: "type2" } }];
    expect(getNamesFromArray(types, "type")).toEqual(["type1", "type2"]);
  });
});

describe("testing generateId function", () => {
  it("should generate a random ID within the specified range", () => {
    const id1 = generateId();
    expect(id1).toBeGreaterThanOrEqual(10000);
    expect(id1).toBeLessThanOrEqual(99999);
    const id2 = generateId();
    expect(id2).toBeGreaterThanOrEqual(10000);
    expect(id2).toBeLessThanOrEqual(99999);
    const id3 = generateId();
    expect(id3).toBeGreaterThanOrEqual(10000);
    expect(id3).toBeLessThanOrEqual(99999);
    const id4 = generateId();
    expect(id4).toBeGreaterThanOrEqual(10000);
    expect(id4).toBeLessThanOrEqual(99999);
    const id5 = generateId();
    expect(id5).toBeGreaterThanOrEqual(10000);
    expect(id5).toBeLessThanOrEqual(99999);
  });
});
