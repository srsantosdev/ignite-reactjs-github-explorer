import '../../styles/repositories.scss'
import { useEffect, useState } from 'react';
import axios from 'axios';

import RepositoryItem from '../RepositoryItem';

// https://api.github.com/users/srsantosdev/repos

function RepositoryList() {
  const [loading, setLoading] = useState(true)
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    axios.get('https://api.github.com/users/srsantosdev/repos')
      .then(response => setRepositories(response.data))
  }, [])

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map(repository => (
          <RepositoryItem key={repository.id} repository={repository} />
        ))}
      </ul>
    </section>
  )
}

export default RepositoryList;