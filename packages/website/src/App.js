import React from 'react';
import './App.css';
import { Button } from '@deipnon/components/lib'
import { GridInitializer } from '@deipnon/components/lib'

function App() {
  return (
    <div className="App">
			<GridInitializer />
      <Button color="primary" type="submit">
      My Header
      </Button>
    </div>
  );
}

export default App;
