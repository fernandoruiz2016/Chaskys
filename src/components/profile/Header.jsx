import { Link } from "react-router-dom";

export const HeaderProfile = ({ page, backPage }) => {
  return (
    <div className="header-profile">
      <Link to={backPage}><svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_253_895)">
          <path
            d="M28.125 11.25L16.875 22.5L28.125 33.75"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_253_895">
            <rect width="45" height="45" fill="white" />
          </clipPath>
        </defs>
      </svg></Link>

      <p className="header-page">{page}</p>
      <div className="header-logo">
        <span className="header-logo-name color-orange">Chaskys</span>
        <span className="header-logo-subname">Delivery app</span>
      </div>
    </div>
  );
};
