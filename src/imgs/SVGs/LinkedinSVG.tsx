import { ClassNameProps } from "../../_utils/types";

function LinkedinSVG({ className }: ClassNameProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      viewBox="0 0 45 44"
    >
      <g
        stroke="#CBD5E1"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.75"
        clipPath="url(#clip0_192_565)"
      >
        <path
          fill="#0F172A"
          d="M33.167 7.333h-22A3.667 3.667 0 007.5 11v22a3.667 3.667 0 003.667 3.667h22A3.667 3.667 0 0036.833 33V11a3.667 3.667 0 00-3.666-3.667z"
        ></path>
        <path d="M14.834 20.167v9.166M14.834 14.667v.018M22.167 29.333v-9.166M29.5 29.333v-5.5a3.666 3.666 0 10-7.333 0"></path>
      </g>
      <defs>
        <clipPath id="clip0_192_565">
          <path
            fill="#fff"
            d="M0 0H44V44H0z"
            transform="translate(.167)"
          ></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default LinkedinSVG;
