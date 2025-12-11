export const CheckCircle = ({ size = 211 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 211 211"
    >
      {/* CÍRCULO GRANDE LILA CLARO */}
      <circle
        cx="105.5"
        cy="105.5"
        r="105.5"
        fill="#D9D0F0"
      />

      {/* CÍRCULO INTERNO MORADO */}
      <circle
        cx="105.5"
        cy="105.5"
        r="55"
        fill="#564787"
      />

      {/* CHECK LILA CLARO */}
      <path
        fill="#E6DDF7"
        d="M96.5 110.5l-10 -10c-2.5 -2.5 -6 -2.5 -8.5 0c-2.5 2.5 -2.5 6 0 8.5l14.5 14.5c2.5 2.5 6 2.5 8.5 0l28 -28c2.5 -2.5 2.5 -6 0 -8.5c-2.5 -2.5 -6 -2.5 -8.5 0l-23 23z"
      />
    </svg>
  );
};
