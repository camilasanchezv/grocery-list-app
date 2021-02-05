import React from "react";

const Form = ({ inputText, setInputText, other, setOther, setStatus, status, food, setFood, pharmacy, setPharmacy }) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };

    const submit = (e) => {
        e.preventDefault();
        switch (status) {
            case "food":
                setFood([
                    ...food, { text: inputText, type: status, incart: false, id: Math.random() * 1000 }
                ]);
                break;
            case "pharmacy":
                setPharmacy([
                    ...pharmacy, { text: inputText, type: status, incart: false, id: Math.random() * 1000 }
                ]);
                break;
            default:
                setOther([
                    ...other, { text: inputText, type: status, incart: false, id: Math.random() * 1000 }
                ]);
                break;
        }
        setInputText("");
        setStatus("other");
    };

    const statusHandler = (val) => {
        setStatus(val);
    };

    return (
        <div className="new-item-container">
            <div className="selector-container">
                <button className={`selector ${(status === "food") ? "selected" : ""}`} onClick={() => statusHandler("food")}>
                    <i className="fas fa-apple-alt"></i>
                </button>
                <button className={`selector ${(status === "pharmacy") ? "selected" : ""}`} onClick={() => statusHandler("pharmacy")}>
                    <i className="fas fa-medkit"></i>
                </button>
                <button className={`selector ${(status === "other") ? "selected" : ""}`} onClick={() => statusHandler("other")}>
                    <i className="fas fa-tools"></i>
                </button>
            </div>
            <form className="new-item">
                <input
                    type="text"
                    className="input"
                    value={inputText}
                    onChange={inputTextHandler}
                ></input>
                <button onClick={submit}
                    className="add"
                    type="submit">
                    <i className="fas fa-plus"></i>
                </button>
            </form>
        </div >
    );
};

export default Form;