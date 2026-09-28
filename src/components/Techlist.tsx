// To add or remove a technology, just edit this list.
const technologies: string[] = [
  'Python',
  'Java',
  'C++',
  'SQL',
  'Node.js',
  'Figma',
  'Typescript',
  'React',
  'Tailwind CSS',
]

function TechList() {
  return (
    // columns-2 / sm:columns-3 flows the list down each column, then into the next.
    // list-[square] gives the small square bullets from your design.
    <ul className="columns-2 gap-x-10 list-[square] list-inside sm:columns-3">
      {technologies.map((tech) => (
        // break-inside-avoid stops one item from splitting across two columns
        <li key={tech} className="mb-2 break-inside-avoid">
          {tech}
        </li>
      ))}
    </ul>
  )
}

export default TechList
