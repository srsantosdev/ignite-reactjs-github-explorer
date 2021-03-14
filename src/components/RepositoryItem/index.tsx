import React from "react";

type Repository = {
  name: string;
  description: string;
  html_url: string;
}

type RepositoryItemProps = {
  repository: Repository;
}

const RepositoryItem: React.FC<RepositoryItemProps> = ({ repository }) => {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url}>
        Acessar repositório
      </a>
    </li>
  )
}

export default RepositoryItem;