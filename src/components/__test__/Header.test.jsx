import '@testing-library/jest-dom'
import * as React from 'react'
import Header from "../Header";
import {render, screen} from '@testing-library/react'

describe('Header', () => {
    it('Should render', () => {
        render(<Header value={''} onChange={()=> {}} classes={{}} />);
        expect(screen.queryByText('React with GraphQL Integration')).toBeTruthy()
    });
    
    it('Should render input', () => {
        const { getByTestId } = render(<Header value={''} onChange={()=> {}} classes={{}} />);
        const input = getByTestId("search-input");
        expect(input).toBeTruthy();
    });
});