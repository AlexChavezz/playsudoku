import { useContext, useState } from "react";
import { GlobalState } from "../context/GlobalState";

export const LevelsScreen = () => {
    const { theme } = useContext(GlobalState);
    const [levelsState, setLevelsState] = useState({
        levelOne: {
            isAvailable: true,
            sudoku:[1, 5, 8 ]
        },
        levelTwo: {
            isAvailable: false, 
        }
    })
    console.log(levelsState["levelTwo"])
    return (
        <section
            className={`levels-page-container ${theme}`}
        >
            <article>
                {/* {
                    levels.map((level: number) => {
                        return <LevelButton level={level} key={level} />
                    })
                } */}
            </article>
        </section>
    );
}
