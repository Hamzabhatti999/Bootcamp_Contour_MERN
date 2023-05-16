import React from 'react';
import { ResultProvider } from './ResultContext';
import ParentComponent from './ParentComponent';

const App = () => {
  return (
    <ResultProvider>
      <ParentComponent />
    </ResultProvider>
  );
};

export default App;