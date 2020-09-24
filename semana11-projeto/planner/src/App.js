import React from 'react';
import { Tarefas } from './Components/tarefas';
import PlannerPage from './PlannerPage/Index';

const App = () => {
  return (
    <div>
      <PlannerPage/>
      <Tarefas/>
    </div>
  );
}

export default App;
