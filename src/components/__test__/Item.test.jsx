import '@testing-library/jest-dom'
import * as React from 'react'
import {render, screen} from '@testing-library/react'
import Item from '../Item';

describe('List', () => {
    it('Should render', () => {
        const mock = {
            name: 'test',
            stargazers: { // required on the document
                totalCount: 5
            }
        }
        render(<Item repo={mock} />);
        expect(screen.queryByText(mock.name)).toBeTruthy()
        expect(screen.queryByText(mock.stargazers.totalCount)).toBeTruthy()
    });
});