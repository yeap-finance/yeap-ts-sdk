import BigNumber from "bignumber.js";

describe("BigNumber.js tests", () => {
  // Test basic arithmetic
  test("should perform addition correctly", () => {
    const d1 = new BigNumber(0.1);
    const d2 = new BigNumber(0.2);
    expect(d1.plus(d2).toString()).toBe("0.3");
  });

  test("should perform subtraction correctly", () => {
    const d1 = new BigNumber(0.3);
    const d2 = new BigNumber(0.1);
    expect(d1.minus(d2).toString()).toBe("0.2");
  });

  test("should perform multiplication correctly", () => {
    const d1 = new BigNumber("1.21");
    const d2 = new BigNumber("1.1");
    expect(d1.times(d2).toString()).toBe("1.331");
  });

  test("should perform division correctly", () => {
    const d1 = new BigNumber(10);
    const d2 = new BigNumber(3);
    expect(d1.div(d2).decimalPlaces(5).toString()).toBe("3.33333");
  });

  // Test precision and rounding
  test("should handle precision correctly", () => {
    BigNumber.config({ DECIMAL_PLACES: 5 });
    const d1 = new BigNumber(1);
    const d2 = new BigNumber(3);
    expect(d1.div(d2).toString()).toBe("0.33333");
    BigNumber.config({ DECIMAL_PLACES: 20 }); // Reset to default
    new BigNumber(1).div(3).toString(); // Should not throw

    const d3 = new BigNumber(33);

    const d4 = new BigNumber(new BigNumber(10).pow(8));
    const r = d3.div(new BigNumber(2).pow(64));
    console.log(r.e, r.c, r.s);
    console.log(r.precision(true), r.dp());
    let r2 = r.times(d4);
    console.log(r2.e, r2.c, r2.s);
  });

  test("should round correctly", () => {
    const d = new BigNumber("1.23456789");
    expect(d.decimalPlaces(2, BigNumber.ROUND_UP).toString()).toBe("1.24");
    expect(d.decimalPlaces(2, BigNumber.ROUND_DOWN).toString()).toBe("1.23");
  });

  test("should handle precision with decimalPlaces and precision", () => {
    const num = new BigNumber("9.87654321");

    // Test decimalPlaces
    expect(num.decimalPlaces(4).toString()).toBe("9.8765");
    // Test precision
    expect(num.precision(5).toString()).toBe("9.8765");
  });

  // Test edge cases
  test("should handle NaN", () => {
    const d = new BigNumber(NaN);
    expect(d.isNaN()).toBe(true);
  });

  test("should handle Infinity", () => {
    const d = new BigNumber(Infinity);
    expect(d.isFinite()).toBe(false);
  });

  // Test comparison
  test("should compare decimals correctly", () => {
    const d1 = new BigNumber(1);
    const d2 = new BigNumber(2);
    const d3 = new BigNumber(1);
    expect(d1.comparedTo(d2)).toBe(-1);
    expect(d2.comparedTo(d1)).toBe(1);
    expect(d1.comparedTo(d3)).toBe(0);
    expect(d1.isEqualTo(d3)).toBe(true);
  });

  // Test constructor
  test("should create decimal from string", () => {
    const d = new BigNumber("123.456");
    expect(d.toString()).toBe("123.456");
  });

  test("should create decimal from number", () => {
    const d = new BigNumber(123.456);
    expect(d.toString()).toBe("123.456");
  });
});
