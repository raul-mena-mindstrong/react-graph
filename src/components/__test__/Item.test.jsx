import '@testing-library/jest-dom'
import * as React from 'react'
import {render, screen} from '@testing-library/react'
import Item from '../Item';

describe('List', () => {
    it('Should render', () => {
        const mock = {
            node: {
                name: 'test',
                descriptionHTML: 'abc',
                owner: {
                    login: 'Me'
                },
                stargazers: { // required on the document
                    totalCount: 5
                }
            }
        }
        render(<Item repo={mock} />);
        expect(screen.queryByText(mock.node.name)).toBeTruthy()
        expect(screen.queryByText(mock.node.descriptionHTML)).toBeTruthy()
    });
});