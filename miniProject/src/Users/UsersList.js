import Card from "../UI/Card";
import classes from "./UsersList.module.css";

export default function UsersList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        <li>
          {props.users.map((user) => (
            <li key={user.id}>
              {user.username} ({user.age} years old)
            </li>
          ))}
        </li>
      </ul>
    </Card>
  );
}
