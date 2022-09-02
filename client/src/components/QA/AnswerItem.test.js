import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnswerItem from './AnswerItem.jsx';

/**
 *  @jest-environment jsdom
 */

 const answer = {
          id: 68,
          body: 'We are selling it here without any markup from the middleman!',
          date: '2018-08-18T00:00:00.000Z',
          answerer_name: 'Seller',
          helpfulness: 4,
          photos: [],
        }



test('should render from answer data', () => {
  const { getByText } = render(<AnswerItem answer={answer}/>);
  expect(getByText('Helpful?')).toBeInTheDocument();
});