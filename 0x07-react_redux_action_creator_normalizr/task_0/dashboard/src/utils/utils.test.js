import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

const currentYear = new Date().getFullYear();
test("returns current year", () => {
  expect(getFullYear()).toBeGreaterThanOrEqual(currentYear - 1);
});

test("correct footer copy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

test("returns right notification", () => {
  expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD");
});