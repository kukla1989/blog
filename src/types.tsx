export interface ProjectType {
  imgPath: string;
  name: string;
  tag: string;
  description: string;
  tagColor: 'green' | 'blue' | 'red';
}

export interface PostType {
  img: string;
  date: string;
}

export interface ClassNameProps {
  className: string;
}