import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

export function ProjectList({projects, filter}) {

  const filteredProjects = projects.filter(project => filter === 'All' || project.category === filter)

  return (
    <>
      <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 2, 950: 3}}
        gutterBreakPoints={{350: "12px", 750: "12px", 900: "12px"}}
      >
        <Masonry>
          {filteredProjects.map((project, index) => (
              <img
                key={index}
                src={project.img}
                alt={project.img}
                className="project-item"
              />
          ))}
        </Masonry>
        </ResponsiveMasonry>
    </>
  )
}