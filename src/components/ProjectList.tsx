import { projects } from '../data/projects'
import { ProjectCard } from './ProjectCard'
import './ProjectList.css'

export function ProjectList() {
  return (
    <section className="project-list" aria-labelledby="projects-heading">
      <div className="project-list__inner">
        <h2 id="projects-heading" className="project-list__heading">
          作品一覧
        </h2>
        <ul className="project-list__grid">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
