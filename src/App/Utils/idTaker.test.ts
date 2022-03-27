import { idTaker } from ".";
import { pokemonList } from "../Assets/Test/Data/Pokemon.data";

describe("idTaker", () => {
  it("Should take pokemon id from url", () => {
    const url = pokemonList[0].url;
    const id = idTaker(url);

    expect(id).toEqual(2);
  });

  it("Shouldn't take pokemon id from a random string", () => {
    const randomString = "something";
    const id = idTaker(randomString);

    expect(id).toEqual(NaN);
  });
});
