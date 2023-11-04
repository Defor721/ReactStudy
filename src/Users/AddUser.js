import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

export default function AddUser(props) {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();

  const nameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorCloseHandler = () => {
    setError(null);
  };

  const addUserHanlder = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please enter a valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "invalid age",
        message: "Please enter a valid name and age",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredAge("");
    setEnteredUsername("");
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          errorClose={errorCloseHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHanlder}>
          <label htmlFor="username">username</label>
          <input
            type="text"
            id="username"
            onChange={nameChangeHandler}
            value={enteredUsername}
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            type="number"
            id="age"
            onChange={ageChangeHandler}
            value={enteredAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}
