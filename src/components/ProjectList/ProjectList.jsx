export function ProjectList({projects, filter}) {

  const filteredProjects = projects.filter(project => filter === 'All' || project.category === filter)

  return (
    <>
      <div className="project-list">
        {filteredProjects.map((project, index) => (
          <img
          key={index}
          src={project.src}
          alt={project.alt}
          />
        ))}
      </div>
    </>
  )
}