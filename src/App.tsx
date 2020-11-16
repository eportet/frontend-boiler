import { useQuery } from '@apollo/client';
import React from 'react';
import './App.css';
import { blocks } from './graphql/characters';
import { CHARACTER_QUERY } from './graphql/schemas';

const App = () => {
  const { data } = useQuery(CHARACTER_QUERY, {
    variables: {
      id: "6"
    }
  })

  return (
    <div className="app">
      <header className="header">
        <span>Some Kind of Wiki</span>
      </header>
      <section className="section">
        {blocks.map(b => <div className="card" key={b.id}>
          <img src={b.image} alt="icon" className="avatar" />
          {b.name}
        </div>)}
        <div className="card">
          <img src={data?.character.image} alt="icon" className="avatar" />
          {data?.character.name}
        </div>
      </section>
      <footer className="footer" />
    </div>
  );
}

export default App;
