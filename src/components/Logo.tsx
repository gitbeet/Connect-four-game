import { outlineColor, redColor, yellowColor } from "../App";

const Logo = () => {
  return (
    <svg
      width="49"
      height="48"
      viewBox="0 0 49 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="15.9167"
        y="15.5203"
        width="17.5897"
        height="15.5203"
        fill={outlineColor}
      />
      <circle
        r="9.86084"
        transform="matrix(-2.02912e-08 1 1 2.02912e-08 25.5963 11.6538)"
        fill={outlineColor}
      />
      <circle
        r="9.36084"
        transform="matrix(-2.02912e-08 1 1 2.02912e-08 23.8032 9.86084)"
        fill={redColor}
        stroke={outlineColor}
      />
      <circle
        r="9.86084"
        transform="matrix(-2.02912e-08 1 1 2.02912e-08 12.05 24.9919)"
        fill={outlineColor}
      />
      <circle
        r="9.36084"
        transform="matrix(-2.02912e-08 1 1 2.02912e-08 10.2573 23.1992)"
        fill={yellowColor}
        stroke={outlineColor}
      />
      <circle
        r="9.86084"
        transform="matrix(-2.02912e-08 1 1 2.02912e-08 38.3671 24.97)"
        fill={outlineColor}
      />
      <circle
        r="9.36084"
        transform="matrix(-2.02912e-08 1 1 2.02912e-08 36.574 23.1768)"
        fill={redColor}
        stroke={outlineColor}
      />
      <circle
        r="9.86084"
        transform="matrix(-2.02912e-08 1 1 2.02912e-08 25.1976 38.1392)"
        fill={outlineColor}
      />
      <circle
        r="9.36084"
        transform="matrix(-2.02912e-08 1 1 2.02912e-08 23.4044 36.3462)"
        fill={yellowColor}
        stroke={outlineColor}
      />
    </svg>
  );
};

export default Logo;
