import { ClassNameProps } from "../../_utils/types";

function GithubSVG({ className }: ClassNameProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 35 36"
      className={className}
    >
      <path
        fill="#0F172A"
        d="M13 30.762c-7.883 2.567-7.883-4.583-11-5.5l11 5.5zm11 3.667v-6.417c0-1.833.183-2.567-.917-3.667 5.134-.55 10.084-2.566 10.084-11a8.433 8.433 0 00-2.384-5.866 7.7 7.7 0 00-.183-5.867s-2.017-.55-6.417 2.383a22.55 22.55 0 00-11.366 0C8.417 1.062 6.4 1.612 6.4 1.612a7.7 7.7 0 00-.183 5.867 8.433 8.433 0 00-2.384 5.866c0 8.434 4.95 10.45 10.084 11-1.1 1.1-1.1 2.2-.917 3.667v6.417"
      ></path>
      <path
        stroke="#CBD5E1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.75"
        d="M24 34.429v-6.417c0-1.833.183-2.567-.917-3.667 5.134-.55 10.084-2.566 10.084-11a8.433 8.433 0 00-2.384-5.866 7.7 7.7 0 00-.183-5.867s-2.017-.55-6.417 2.383a22.55 22.55 0 00-11.366 0C8.417 1.062 6.4 1.612 6.4 1.612a7.7 7.7 0 00-.183 5.867 8.433 8.433 0 00-2.384 5.866c0 8.434 4.95 10.45 10.084 11-1.1 1.1-1.1 2.2-.917 3.667v6.417m0-3.667c-7.883 2.567-7.883-4.583-11-5.5l11 5.5z"
      ></path>
    </svg>
  );
}

export default GithubSVG;
