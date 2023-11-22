const { Arigex, Arri } = require("../index");

describe("Arigex", () => {
  describe("zeroPlusMatch", () => {
    test("when passed a string containing several matches, should return them in an array", () => {
      const string = "This sentence contains several vowels.";
      const vowelRegex = /[aeiou]/gi;
      expect(Arigex.zeroPlusMatch(string, vowelRegex)).toEqual([
        "i",
        "e",
        "e",
        "e",
        "o",
        "a",
        "i",
        "e",
        "e",
        "a",
        "o",
        "e",
      ]);
    });
    test("when passed a string containing one match, should return that match in an array", () => {
      const string = "This sentence contains one capital.";
      const capitalRegex = /[A-Z]/g;
      expect(Arigex.zeroPlusMatch(string, capitalRegex)).toEqual(["T"]);
    });
    test("when passed a string containing no matches, should return an empty array", () => {
      const string =
        "This sentence does not contain the last letter of the alphabet.";
      const zedex = /[z]/gi;
      expect(Arigex.zeroPlusMatch(string, zedex)).toEqual([]);
    });
  });
});

describe('Arri', () => {
    describe('forArich', () => {
        
    });
    describe('milter', () => {
        
    });
});