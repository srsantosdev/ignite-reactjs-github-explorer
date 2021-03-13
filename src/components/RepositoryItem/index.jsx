function RepositoryItem({ name, description, link }) {
  return (
    <li>
      <strong>{name}</strong>
      <p>{description}</p>F

      <a href={link}>
        Acessar repositório
      </a>
    </li>
  )
}

export default RepositoryItem;