import { FC } from "react";

interface IChecklistIcon {
  className: string;
}

const ChecklistIcon: FC<IChecklistIcon> = ({ className }) => {
  return (
    <svg
      className={className}
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={12} cy={12} r={12} fill="#CFD4ED" />
      <path
        d="M17.3333 8L9.99996 15.3333L6.66663 12"
        stroke="#0D28A6"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChecklistIcon;
