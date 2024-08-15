import { ProjectType } from "../../_utils/types";

const Project: React.FC<ProjectType> = ({
  imgPath,
  name,
  tag,
  tagColor,
  description,
}: ProjectType) => {
  return (
    <div className="project">
      <img src={imgPath} alt="lamp" className="project__img" />

      <div className="project__right">
        <div className="project__info">
          <div className="project__title">{name}</div>

          <div
            className={"project__tag--" + tagColor}
            style={{ "--tagLength": tag.length } as React.CSSProperties}
          >
            <div className={"project__tag-text--" + tagColor}>{tag}</div>
          </div>
        </div>

        <div className="project__description">{description}</div>
      </div>
    </div>
  );
};

export default Project;
