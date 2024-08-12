export type SVGprops = {
  className: string;
}

export interface ProjectType {
  imgPath: string;
  name: string;
  tag: string;
  description: string;
  tagColor: 'green' | 'blue' | 'red' | 'yellow'; // Add other possible tag colors as needed
}

interface Ass{
  bump: string;
}

interface Ass {
  l: number;
}

const o: Ass = { bump: '34', l: 23 }