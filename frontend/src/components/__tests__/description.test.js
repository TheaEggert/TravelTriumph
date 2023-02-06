/* eslint-disable testing-library/no-unnecessary-act */
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Description from "../Description";

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders with or without a provided description", () => {
  act(() => {
    render(<Description />, container);
  });
  expect(container.textContent).toBe("Description");
  act(() => {
    render(<Description appDescription="test description" />, container);
  });
  expect(container.textContent).toBe("Descriptiontest description"); // Description is prepended because that's what's in the Description.js file

  act(() => {
    render(<Description appDescription="a different test description" />, container);
  });
  expect(container.textContent).toBe("Descriptiona different test description"); // Description is prepended because that's what's in the Description.js file
});