/* eslint-disable testing-library/no-unnecessary-act */
import Selection from '../Selection';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

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

it("renders city data", async () => {
    const fakeCityList = {
        cities: [
            {
                label: "New York",
                description: "New York is a city in the U.S. state of New York and the seat of New York County. With an estimated 2019 population of 8,336,817 distributed over a land area of about 302.6 square miles (784 km2), New York is also the most densely populated major city in the United States.",
                latitude: 40.7127753,
                longitude: -74.0059728
            },
            {
                label: "Los Angeles",
                description: "Los Angeles, officially the City of Los Angeles and often known by its initials L.A., is the largest city in California. With an estimated population of nearly four million people, it is the second most populous city in the United States (after New York City) and the third most populous city in North America (after Mexico City and New York City).",
                latitude: 34.0522342,
                longitude: -118.2436849
            },
        ]
    };
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeCityList)
        })
    );

    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
        render(<Selection />, container);
    });

    expect(container.querySelector("Select").textContent).toBe(fakeCityList.cities[0].label);

    // remove the mock to ensure tests are completely isolated
    global.fetch.mockRestore();
});    