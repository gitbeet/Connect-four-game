import { useGameContext } from "../context/gameContext";
import Button from "./Button";
import MenuSetting from "./MenuSetting";
import { motion, AnimatePresence } from "framer-motion";
import { modalVariants } from "../variants";
import Backdrop from "./Backdrop";

const Menu = () => {
  const {
    setShowMenu,
    showMenu,
    timeLimit,
    setTimeLimit,
    sound,
    setSound,
    screen,
    setScreen,
    resetGameState,
    language,
    setLanguage,
  } = useGameContext();

  const exit = () => {
    setScreen("welcome");
    resetGameState();
    setShowMenu(false);
  };
  return (
    <AnimatePresence>
      {showMenu ? (
        <>
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="close"
            transition={{ type: "spring", duration: 0.3 }}
            className="absolute w-[min(90%,450px)] z-[40] top-1/2 left-1/2"
          >
            <div className="relative  space-y-16 bg-white px-8 py-10  border-4 after:absolute  after:bg-outline after:w-full after:h-full after:top-4 after:left-4 after:z-[-1]">
              <header className="font-numbers text-4xl text-center">
                {language === "English" ? "Options" : "Opciones"}
              </header>
              <section className="space-y-12">
                <MenuSetting
                  width="3rem"
                  title={language === "English" ? "Time" : "Tiempo"}
                  arrowLeftFunc={() =>
                    setTimeLimit((prev) =>
                      prev < 30000 ? 15000 : prev - 15000
                    )
                  }
                  arrowRightFunc={() =>
                    setTimeLimit((prev) =>
                      prev > 45000 ? 60000 : prev + 15000
                    )
                  }
                  value={`${timeLimit / 1000}s`}
                  disableArrowLeft={timeLimit < 30000}
                  disableArrowRight={timeLimit > 45000}
                  disabled={screen === "game"}
                />
                <MenuSetting
                  width="3rem"
                  title={language === "English" ? "Sound" : "Sonido"}
                  arrowLeftFunc={() => setSound((prev) => !prev)}
                  arrowRightFunc={() => setSound((prev) => !prev)}
                  value={
                    sound
                      ? language === "English"
                        ? "On"
                        : "Si"
                      : language === "English"
                      ? "Off"
                      : "No"
                  }
                  disableArrowLeft={!sound}
                  disableArrowRight={sound}
                  disabled={false}
                />
                <MenuSetting
                  width="4.7rem"
                  title={language === "English" ? "Language" : "Idioma"}
                  arrowLeftFunc={() => setLanguage("English")}
                  arrowRightFunc={() => setLanguage("Español")}
                  value={language}
                  disableArrowLeft={language === "English"}
                  disableArrowRight={language === "Español"}
                  disabled={false}
                />
              </section>
              <div className="space-y-4">
                <div className="relative z-[10]  flex flex-col space-y-4">
                  <Button
                    text={language === "English" ? "Close" : "Cerrar"}
                    onClick={() => setShowMenu(false)}
                  />
                </div>
                {screen === "game" && (
                  <div className="relative z-[10]  flex flex-col space-y-4">
                    <Button
                      text={language === "English" ? "Exit" : "Salir"}
                      onClick={() => exit()}
                    />
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          <Backdrop />
        </>
      ) : null}
    </AnimatePresence>
  );
};

export default Menu;
