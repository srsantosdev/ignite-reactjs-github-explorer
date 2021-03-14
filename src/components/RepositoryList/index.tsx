import '../../styles/repositories.scss'

import { useEffect, useState } from 'react';
import axios from 'axios';

import RepositoryItem from '../RepositoryItem';

type Repository = {
  id: string;
  name: string;
  description: string;
  html_url: string;
}

function RepositoryList() {
  const [loading, setLoading] = useState(true)
  const [repositories, setRepositories] = useState<Repository[]>([])

  useEffect(() => {
    axios.get('https://api.github.com/users/srsantosdev/repos')
      .then(response => setRepositories(response.data))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return <h3>Carregando...</h3>
  }

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