import React from 'react';
import { render , wait } from '@testing-library/react';
import PlannerPage from './Components/tarefas'
import App from './App';
import axios from 'axios';

axios.get = jest.fn().mockResolvedValue({
  data:[]
})

axios.post = jest.fn().mockResolvedValue()

 describe('Planner', () => {

   test('renderiza os elementos corretamente', async () => {
    const {getByPlaceholderText, getByText, getAllByTestId} = render (<App/>)

    expect(getByPlaceholderText('Digite uma nova tarefa' )).toBeInTheDocument()
    expect(getByText('Dia da Semana' )).toBeInTheDocument()
    expect(getByText('Criar Tarefa' )).toBeInTheDocument()
    expect(getAllByTestId('plannerday' )).toHaveLength(7)
    await wait()
  });

  test('renderiza as tarefas corretamente', async () => {

    axios.get = jest.fn().mockResolvedValue({
      data:[
      ]
    })
    const {getByPlaceholderText, getByText, getAllByText} = render (<App/>)

    expect(getByPlaceholderText('Digite uma nova tarefa' )).toBeInTheDocument()
    expect(getByText('Dia da Semana' )).toBeInTheDocument()
    expect(getByText('Criar Tarefa' )).toBeInTheDocument()
    await wait()
  });

 })










