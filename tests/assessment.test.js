const assessmentImport = require("../assessment.js");

const { convertStrToInt } = assessmentImport;

// Succeed:

test('convertStrToInt("93") === "6155"', () => {
  expect(convertStrToInt("93")).toBe(6155);
});

test('convertStrToInt("baseball") === "21195211212"', () => {
  expect(convertStrToInt("baseball")).toBe(21195211212);
});

test('convertStrToInt("forty-two") === "61518202563202310"', () => {
  expect(convertStrToInt("forty-two")).toBe(61518202563202310);
});

test('convertStrToInt("repeat after me") === "185165120016205200000"', () => {
  expect(convertStrToInt("repeat after me")).toBe(185165120016205200000);
});

test('convertStrToInt("hey\ndude\nwhat\'s\nup?") === "8.525954214595238e+30"', () => {
  expect(convertStrToInt("hey\ndude\nwhat's\nup?")).toBe(8.525954214595238e+30);
});

test('convertStrToInt("EWOXN-9300161-QUX") === "3.1494150406361556e+33"', () => {
  expect(convertStrToInt("EWOXN-9300161-QUX")).toBe(3.1494150406361556e+33);
});

test('convertStrToInt("--]{]\'\'?><<>,.//f;s/fa/sfy") === "6.363838283797977e+47"', () => {
  expect(convertStrToInt("--]{]\'\'?><<>,.//f;s/fa/sfy")).toBe(6.363838283797977e+47);
});

test('convertStrToInt(""#($_!+#$)@$%*%"") === "8.793886485668788e+29"', () => {
  expect(convertStrToInt("#($_!+#$)@$%*%")).toBe(8.793886485668788e+29);
});

test('convertStrToInt("What in the heck!??") === "4.981200914020851e+24"', () => {
  expect(convertStrToInt("What in the heck!?")).toBe(4.981200914020851e+24);
});


// Fail:

test('convertStrToInt(["error array!"]) to throw error"', () => {
  expect(() => {
    convertStrToInt(["error array!"])
  }).toThrow();
});

test('convertStrToInt({error: "an object!"}) to throw error"', () => {
  expect(() => {
    convertStrToInt({error: "an object!"})
  }).toThrow();
});
test('convertStrToInt(42) to throw error"', () => {
  expect(() => {
    convertStrToInt(42)
  }).toThrow();
});
