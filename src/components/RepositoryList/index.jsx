import React from 'react';
import RepositoryItem from '../RepositoryItem';

function RepositoryList() {
  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        <RepositoryItem
          name="unform"
          description="Forms in React"
          link="https://unform.dev"
        />
        <RepositoryItem
          name="unform 2"
          description="Forms in React 2"
          link="https://unform2.dev"
        />
      </ul>
    </section>
  )
}

export default RepositoryList;