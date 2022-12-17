import { outlineColor, redColor, yellowColor } from "../App";

const Logo = () => {
  return (
    <svg
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="15" y="15" width="17" height="15" fill={outlineColor} />
      <circle
        r="9.53026"
        transform="matrix(-2.02912e-08 1 1 2.02912e-08 24.355 11.2632)"
        fill={outlineColor}
      />
      <circle
        r="9.03026"
        transform="matrix(-2.02912e-08 1 1 2.02912e-08 22.6221 9.53026)"
        fill={redColor}
        stroke={outlineColor}
      />
      <circle
        r="9.53026"
        transform="matrix(-2.02912e-08 1 1 2.02912e-08 11.2629 24.154)"
        fill={outlineColor}
      />
      <circle
        r="9.03026"
        transform="matrix(-2.02912e-08 1 1 2.02912e-08 9.53026 22.4214)"
        fill={yellowColor}
        stroke={outlineColor}
      />
      <circle
        r="9.53026"
        transform="matrix(-2.02912e-08 1 1 2.02912e-08 36.6976 24.1328)"
        fill={outlineColor}
      />
      <circle
        r="9.03026"
        transform="matrix(-2.02912e-08 1 1 2.02912e-08 34.9647 22.3999)"
        fill={redColor}
        stroke={outlineColor}
      />
      <circle
        r="9.53026"
        transform="matrix(-2.02912e-08 1 1 2.02912e-08 23.9697 36.8606)"
        fill={outlineColor}
      />
      <circle
        r="9.03026"
        transform="matrix(-2.02912e-08 1 1 2.02912e-08 22.2366 35.1277)"
        fill={yellowColor}
        stroke={outlineColor}
      />
      {/* <circle cx="20" cy="5" r="2" fill="white" />
      <circle cx="5" cy="19" r="2" fill="white" />
      <circle cx="32" cy="19" r="2" fill="white" />
      <circle cx="20" cy="31" r="2" fill="white" /> */}
    </svg>
  );
};

export default Logo;
