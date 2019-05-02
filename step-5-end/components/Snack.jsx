import React from "react";

export const Snack = ({ name }) => {
    const [score, setScore] = React.useState(0);

    const handleIncrement = () => setScore(currentScore => currentScore + 1);
    const handleDecrement = () => setScore(currentScore => currentScore - 1);

    return (
        <li>
            {name}
            <button onClick={handleDecrement}>-</button>
            {score}
            <button onClick={handleIncrement}>+</button>
        </li>
    );
};
