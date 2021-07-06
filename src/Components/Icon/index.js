import React from "react";

export const MenuIcon = (props) => {
  return (
    <div onClick={props.onClick}>
      <svg width={35} height={35} fill="none" {...props}>
        <rect width={35} height={35} rx={17.5} fill="#DC3545" />
        <path d="M9 23h16M9 11h16H9zm0 6h8-8z" stroke="#fff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

export const CloseIcon = (props) => {
  return (
    <div onClick={props.onClick}>
      <svg width={35} height={35} fill="none" {...props}>
        <rect width={35} height={35} rx={17.5} fill="#DC3545" />
        <path
          d="M19.439 17.5l5.912-5.899A1.38 1.38 0 0023.4 9.65L17.5 15.56 11.601 9.65A1.38 1.38 0 109.65 11.6L15.56 17.5 9.65 23.399a1.375 1.375 0 000 1.952 1.376 1.376 0 001.952 0L17.5 19.44l5.899 5.912a1.376 1.376 0 001.952 0 1.375 1.375 0 000-1.952L19.44 17.5z"
          fill="#fff"
        />
      </svg>
    </div>
  );
};
