import { useContext } from "react";
import { Context } from "../Contexts";

export default function Navbar() {
  const { handleTheme } = useContext(Context);

  return (
    <div className="container-fluid bg-dark text-end py-3">
      <button className="btn btn-light" onClick={handleTheme}>
        Change theme
      </button>
    </div>
  );
}
