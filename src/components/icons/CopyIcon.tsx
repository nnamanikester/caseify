import * as React from "react";

interface CopyIconProps {}

const CopyIcon: React.FC<CopyIconProps> = () => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 13.4V17.6C16 21.1 14.6 22.5 11.1 22.5H6.9C3.4 22.5 2 21.1 2 17.6V13.4C2 9.9 3.4 8.5 6.9 8.5H11.1C14.6 8.5 16 9.9 16 13.4Z"
        fill="white"
      />
      <path
        d="M17.1 2.5H12.9C9.81691 2.5 8.37097 3.59409 8.06974 6.23901C8.00672 6.79235 8.46499 7.25 9.0219 7.25H11.1C15.3 7.25 17.25 9.2 17.25 13.4V15.4781C17.25 16.035 17.7076 16.4933 18.261 16.4303C20.9059 16.129 22 14.6831 22 11.6V7.4C22 3.9 20.6 2.5 17.1 2.5Z"
        fill="white"
      />
    </svg>
  );
};

export { CopyIcon };
