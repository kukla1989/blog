import { ClassNameProps } from "../../_utils/types";

function TwitterSVG({ className }: ClassNameProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 48 48"
    >
      <circle cx="24" cy="24" r="20" fill="#1DA1F2"></circle>
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M36 16.309a9.83 9.83 0 01-2.828.775 4.936 4.936 0 002.165-2.724 9.862 9.862 0 01-3.126 1.195 4.924 4.924 0 00-8.39 4.49 13.976 13.976 0 01-10.15-5.144 4.898 4.898 0 00-.665 2.476c0 1.707.867 3.215 2.19 4.098a4.908 4.908 0 01-2.231-.616v.061a4.93 4.93 0 003.95 4.83 4.949 4.949 0 01-2.225.084 4.93 4.93 0 004.6 3.42A9.881 9.881 0 0112 31.291a13.938 13.938 0 007.547 2.212c9.057 0 14.01-7.502 14.01-14.008 0-.214-.005-.427-.015-.637A10.03 10.03 0 0036 16.309z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}

export default TwitterSVG;
