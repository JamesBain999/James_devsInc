 const JamesB = require('./script.js');

 test("The number should land within the selected dice range", () => {
     expect(JamesB(6)).toBe(true);
   });

   test("The number should land within the selected dice range", () => {
    expect(JamesB(5)).toBe(true);
  });

  test("The number should land within the selected dice range", () => {
    expect(JamesB(4)).toBe(true);
  });

  test("The number should land within the selected dice range", () => {
    expect(JamesB(3)).toBe(true);
  });

  test("The number should land within the selected dice range", () => {
    expect(JamesB(2)).toBe(true);
  });

  test("The number should land within the selected dice range", () => {
    expect(JamesB(1)).toBe(true);
  });

  test("The number should land within the selected dice range", () => {
    expect(JamesB(0)).toBe(true);
  });

  test("The number should land within the selected dice range", () => {
    expect(JamesB(7)).toBe(true);
  });