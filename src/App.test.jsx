import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';
import App from './App';

afterEach(cleanup);

const testColumn = [
  {
    Header: 'Run ID',
    accessor: 'info.run_id',
  },
];

const testData = [
  {
    info: {
      run_id: 'test1',
    },
  },
  {
    info: {
      run_id: 'test2',
    },
  },
];

test('Render Test', () => {
  const utils = render(<App columns={testColumn} data={testData} />);
  expect(utils.container).toMatchSnapshot();
});

test('Inner Text Test', () => {
  render(<App columns={testColumn} data={testData} />);

  const columnID = screen.getByText('Run ID');
  const runID1 = screen.getByText('test1');
  const runID2 = screen.getByText('test2');

  expect(columnID).toBeInTheDocument();
  expect(runID1).toBeInTheDocument();
  expect(runID2).toBeInTheDocument();
});
