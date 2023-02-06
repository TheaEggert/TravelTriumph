import { render, screen, waitFor } from '@testing-library/react';
import Selection from '../Selection';
import axios from 'axios';

jest.mock('axios');

const dummyCities = [
    {
        "name": "toronto",
        "label": "Toronto",
        "description": "Toronto is the most populous city in Canada and the provincial capital of Ontario. With a population of 2,731,571, it is the fourth most populous city in North America. The city is the anchor of the Golden Horseshoe, an urban agglomeration of 9,245,438 people surrounding the western end of Lake Ontario. Toronto is a leading global city, ranking fourth in the world in the 2016 Global Financial Centres Index. It is a centre of business, finance, arts, and culture, and is recognized as one of the most multicultural and cosmopolitan cities in the world.",
        "latitude": 43.65,
        "longitude": -79.38
    },
    {
        "name": "vancouver",
        "label": "Vancouver",
        "description": "Vancouver is a coastal seaport city on the mainland of British Columbia, Canada. The city is the most populous in the province, with over 631,486 people in 2016, and is the third most populous in Canada. Vancouver is one of the most ethnically and linguistically diverse cities in Canada; 52% of its residents have a first language other than English. It is the most densely populated Canadian municipality, with over 5,400 people per square kilometre.",
        "latitude": 49.28,
        "longitude": -123.12
    },
    {
        "name": "montreal",
        "label": "Montreal",
        "description": "Montreal is the most populous municipality in the Canadian province of Quebec and the second-most populous municipality in Canada as a whole. The city is centred on the Island of Montreal, which took its name from Mount Royal, the triple-peaked hill in the heart of the city. It has a continental climate with warm to hot summers and cold winters. In 2019, Montreal was ranked the 4th best city in the world to live in by the UBI Index, a ranking of global cities based on quality of life.",
        "latitude": 45.52,
        "longitude": -73.57
    },
];

test("cities list", async () => {
    axios.get.mockResolvedValue({data: dummyCities});
    render(<Selection />);

    const cityList = await waitFor(() => screen.findAllByTestId("city-list"));

    expect(cityList).toHaveLength(3);
});