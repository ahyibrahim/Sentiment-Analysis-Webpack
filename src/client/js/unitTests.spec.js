/**
 * @jest-environment jsdom
 */

import { checkUrlRegex, checkUrl } from "./urlChecker";
import { handleSubmit } from "./formHandler";
import fetchMock from "jest-fetch-mock";

const validUrl =
  "https://nypost.com/2021/09/04/last-holdouts-in-afghanistan-battle-taliban-in-panjshir-valley/";
const validUrlNoProtocol =
  "nypost.com/2021/09/04/last-holdouts-in-afghanistan-battle-taliban-in-panjshir-valley/";
const invalidUrl = "kirk";

describe("Testing Url Checking Functions", () => {
  test("Checks Url Validity using Url Objects", () => {
    expect(checkUrl(validUrl)).toBe(true);
    expect(checkUrl(validUrlNoProtocol)).toBe(false);
    expect(checkUrl(invalidUrl)).toBe(false);
  });
  test("Checks Url Validity using Regex", () => {
    expect(checkUrlRegex(validUrl)).toBe(true);
    expect(checkUrlRegex(validUrlNoProtocol)).toBe(true);
    expect(checkUrlRegex(invalidUrl)).toBe(false);
  });
});

describe("Testing Form Handler", () => {
  fetchMock.enableMocks();

  beforeEach(() => {
    fetch.resetMocks();
  });
  // fetch.mockResponseOnce(JSON.stringify({ rates: { CAD: 1.42 } }));
  const mockEvent = {
    preventDefault: jest.fn(),
  };
  document.body.innerHTML = `
  <input id="name" value="${validUrl}"/>
  <div id="results"></div>
  `;
  test("Testing Submit Function", async () => {
    fetch.mockResponseOnce(JSON.stringify({ str: "test" }));
    await handleSubmit(mockEvent);
    const result = document.getElementById("results");
    const input = document.getElementById("name");
    expect(result.innerHTML).toBe('"test"');
    expect(input.value).toBe(validUrl);
  });
});
