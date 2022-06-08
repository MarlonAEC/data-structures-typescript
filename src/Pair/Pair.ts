/**
 * Pair is a generic class that has two properties,
 * first and second, that could be from any type.
 * @class Pair
 * */
export default class Pair<T1, T2> {
  public first: T1;
  public second: T2;

  /**
   * @param {T1} first - The first property of the pair.
   * @param {T2} second - The second property of the pair.
   * @constructor
   */
  constructor(first: T1, second: T2) {
    this.first = first;
    this.second = second;
  }
  /**
   * This method compares two pairs and returns true if they are equal
   * false in other case
   * @param {Pair<T1, T2>} pair - The pair to compare to.
   * @return {boolean} True if the pairs are equal, false otherwise.
   */
  isEqual(pair: Pair<T1, T2>): boolean {
    return this.first === pair.first && this.second === pair.second;
  }
}
