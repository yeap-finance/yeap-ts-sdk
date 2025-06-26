import Decimal from "decimal.js";

describe("Decimal.js tests", () => {
  // Test basic arithmetic
  test("should perform addition correctly", () => {
    const d1 = new Decimal(0.1);
    const d2 = new Decimal(0.2);
    expect(d1.plus(d2).toString()).toBe("0.3");
  });

  test("should perform subtraction correctly", () => {
    const d1 = new Decimal(0.3);
    const d2 = new Decimal(0.1);
    expect(d1.minus(d2).toString()).toBe("0.2");
  });

  test("should perform multiplication correctly", () => {
    const d1 = new Decimal("1.21");
    const d2 = new Decimal("1.1");
    expect(d1.mul(d2).toString()).toBe("1.331");
  });

  test("should perform division correctly", () => {
    const d1 = new Decimal(10);
    const d2 = new Decimal(3);
    expect(d1.div(d2).toDecimalPlaces(5).toString()).toBe("3.33333");
  });

  // Test precision and rounding
  test("should handle precision correctly", () => {
    Decimal.set({ precision: 5 });
    const d1 = new Decimal(1);
    const d2 = new Decimal(3);
    expect(d1.div(d2).toString()).toBe("0.33333");
    Decimal.set({ precision: 20 }); // Reset to default
    Decimal(1).div(3).toString(); // Should not throw

    const d3 = Decimal(33);

    const d4 = Decimal(Decimal(10).pow(8));
    const r = d3.div(Decimal(2).pow(64));
    console.log(r.e, r.d, r.s);
    console.log(r.precision(true), r.dp());
    let r2 = r.mul(d4);
    console.log(r2.e, r2.d, r2.s);
  });

  test("should round correctly", () => {
    const d = new Decimal("1.23456789");
    expect(d.toDecimalPlaces(2, Decimal.ROUND_UP).toString()).toBe("1.24");
    expect(d.toDecimalPlaces(2, Decimal.ROUND_DOWN).toString()).toBe("1.23");
  });

  test("should handle precision with toDecimalPlaces and toPrecision", () => {
    const num = new Decimal("9.87654321");

    // Test toDecimalPlaces
    expect(num.toDecimalPlaces(4).toString()).toBe("9.8765");
    // Test toPrecision
    expect(num.toPrecision(5).toString()).toBe("9.8765");
  });

  // Test edge cases
  test("should handle NaN", () => {
    const d = new Decimal(NaN);
    expect(d.isNaN()).toBe(true);
  });

  test("should handle Infinity", () => {
    const d = new Decimal(Infinity);
    expect(d.isFinite()).toBe(false);
  });

  // Test comparison
  test("should compare decimals correctly", () => {
    const d1 = new Decimal(1);
    const d2 = new Decimal(2);
    const d3 = new Decimal(1);
    expect(d1.comparedTo(d2)).toBe(-1);
    expect(d2.comparedTo(d1)).toBe(1);
    expect(d1.comparedTo(d3)).toBe(0);
    expect(d1.equals(d3)).toBe(true);
  });

  // Test constructor
  test("should create decimal from string", () => {
    const d = new Decimal("123.456");
    expect(d.toString()).toBe("123.456");
  });

  test("should create decimal from number", () => {
    const d = new Decimal(123.456);
    expect(d.toString()).toBe("123.456");
  });
});
