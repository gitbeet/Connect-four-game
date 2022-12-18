import { useGameContext } from "../context/gameContext";
import Backdrop from "./Backdrop";
import Button from "./Button";

const Rules = () => {
  const { setShowRulesWindow } = useGameContext();
  return (
    <>
      {" "}
      <div className="bg-white p-8 absolute z-[40] w-[min(90%,450px)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md shadow-lg ">
        <section>
          <header>Objective</header>
          <p>
            The objective of the game Connect Four is to be the first player to
            get four of one's own discs of the same color lined up horizontally,
            vertically, or diagonally. The player who accomplishes this wins the
            game. If the grid is completely filled with discs and no player has
            won, the game is a draw.
          </p>
        </section>
        <Button text="Close" onClick={() => setShowRulesWindow(false)} />
      </div>
      <Backdrop />
    </>
  );
};

export default Rules;
