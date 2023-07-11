/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Context } from "../Contexts";

export default function Card({ content, changeable }) {
  const { theme, handleTheme } = useContext(Context);

  const handleClick = () => {
    if (changeable) handleTheme();
  };

  return (
    <div className="card">
      <img src="https://picsum.photos/300" className="card-img-top" alt="..." />

      <div className="card-body">
        <h5
          className="card-title"
          style={
            changeable
              ? {
                  background: theme.background,
                  color: theme.color,
                }
              : null
          }
        >
          {content}
        </h5>

        <button className="btn btn-dark" onClick={handleClick}>
          Change theme
        </button>
      </div>
    </div>
  );
}
