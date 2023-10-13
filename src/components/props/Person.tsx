import { PersonProps } from "./Person.types";

export const Person = (props: PersonProps) => {
  return <h3>{props.firstName} {props.lastName}</h3>;
}
 