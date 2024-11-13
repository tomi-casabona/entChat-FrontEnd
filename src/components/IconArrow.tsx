const IconArrow: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="24"
    height="24"
    strokeWidth="2"
    {...props}
  >
    <path d="M12 5l0 14"></path>
    <path d="M18 11l-6 -6"></path>
    <path d="M6 11l6 -6"></path>
  </svg>
);

export default IconArrow;
