import { ProjectType } from "../../types";
import Project from "../Project/Project";
import img1 from "../../imgs/project-lamp.png";
import img2 from "../../imgs/project-download.png";
import img3 from "../../imgs/project-prize.png";

const projectDescription = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos possimus quae dolor tempore hic officiis ipsa. Ut repellat praesentium iure!";
const projects: ProjectType[] = [
  {
    imgPath: img1,
    name: "Project1",
    tag: "web design",
    tagColor: "green",
    description: projectDescription,
  },
  {
    imgPath: img2,
    name: "Project2",
    tag: "Next.js",
    tagColor: "red",
    description: projectDescription,
  },
  {
    imgPath: img3,
    name: "Project3",
    tag: "Awesome feature",
    tagColor: "blue",
    description: projectDescription,
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__title">Recent <span className="aqua-gradient">Projects</span></div>

      {projects.map((project) => (
        <Project key={project.name} {...project} />
      ))}
    </div>
  );
};

export default Projects;
