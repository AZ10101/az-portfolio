import type { Project } from '../data/projects'
import './ProjectCard.css'

type Props = {
  project: Project
}

export function ProjectCard({ project }: Props) {
  const content = (
    <>
      <div className="project-card__image-wrap">
        <img
          src={project.image}
          alt=""
          className="project-card__image"
          loading="lazy"
        />
      </div>
      <div className="project-card__body">
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__description">
          {project.description.split('\n').map((line, index, lines) => (
            <span key={index}>
              {line}
              {index < lines.length - 1 && <br />}
            </span>
          ))}
        </p>
        {project.tags && project.tags.length > 0 && (
          <ul className="project-card__tags" aria-label="カテゴリ">
            {project.tags.map((tag) => (
              <li key={tag} className="project-card__tag">
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )

  if (project.url) {
    return (
      <a
        href={project.url}
        className="project-card project-card--link"
        target="_blank"
        rel="noopener noreferrer"
      >
        {content}
      </a>
    )
  }

  return <article className="project-card">{content}</article>
}
