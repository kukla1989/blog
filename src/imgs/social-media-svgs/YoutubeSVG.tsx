import { ClassNameProps } from "../../_utils/types";

function YoutubeSVG({ className }: ClassNameProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 48 48"
    >
      <circle cx="24" cy="24" r="20" fill="red"></circle>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M35.3 16.378c.4.4.687.896.835 1.44.849 3.418.652 8.814.016 12.363a3.23 3.23 0 01-2.275 2.275C31.882 33 23.854 33 23.854 33s-8.027 0-10.022-.544a3.23 3.23 0 01-2.274-2.275c-.854-3.402-.62-8.802-.017-12.346a3.23 3.23 0 012.275-2.275c1.994-.543 10.022-.56 10.022-.56s8.027 0 10.022.544a3.23 3.23 0 011.44.834zM27.942 24l-6.659 3.857v-7.714L27.943 24z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default YoutubeSVG;
