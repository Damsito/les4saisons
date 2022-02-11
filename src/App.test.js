import "@testing-library/jest-dom";

describe("App", () => {
  beforeAll(() => {
    jest.useFakeTimers("modern");
    jest.setSystemTime(new Date(2022, 1, 9));
  });
  afterAll(() => {
    jest.useRealTimers();
  });
});
