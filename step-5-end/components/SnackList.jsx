import React from "react";

import { Snack } from "./Snack";

export const SnackList = () => {
    const [snackList, setSnackList] = React.useState([]);
    const [newSnackName, setNewSnackName] = React.useState("");

    const handleNameChange = event => setNewSnackName(event.target.value);
    const handleButtonClick = () =>
        setSnackList(currentSnackList => [...currentSnackList, newSnackName]);

    return (
        <>
            <ul>
                {snackList.map(snack => (
                    <Snack name={snack} />
                ))}
            </ul>
            <input type="text" onChange={handleNameChange} />
            <button onClick={handleButtonClick}>New Snack</button>
        </>
    );
};
