import React from "react";
import ReactDOM from "react-dom";

const App = () => {
    const [snackList, setSnackList] = React.useState([]);
    const [newSnackName, setNewSnackName] = React.useState("");

    const handleNewSnackNameChange = event => setNewSnackName(event.target.value);
    const handleNewSnackButtonClick = () =>
        setSnackList(currentSnackList => [...currentSnackList, { name: newSnackName, score: 0 }]);
    const handleIncrementScore = idToIncrement => event =>
        setSnackList(currentSnackList =>
            currentSnackList.map((snack, id) => {
                if (id === idToIncrement) {
                    return { name: snack.name, score: snack.score + 1 };
                }
                return snack;
            })
        );
    const handleDecrementScore = idToDecrement => event =>
        setSnackList(currentSnackList =>
            currentSnackList.map((snack, id) => {
                if (id === idToDecrement) {
                    return { name: snack.name, score: snack.score - 1 };
                }
                return snack;
            })
        );

    return (
        <div>
            <h1>Snack Review</h1>
            <ul>
                {snackList.map((snack, id) => (
                    <li key={`${snack.name}-${id}`}>
                        {snack.name}
                        <button onClick={handleDecrementScore(id)}>-</button>
                        {snack.score}
                        <button onClick={handleIncrementScore(id)}>+</button>
                    </li>
                ))}
            </ul>
            <input type="text" onChange={handleNewSnackNameChange} />
            <button onClick={handleNewSnackButtonClick}>New Snack</button>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
