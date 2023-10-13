import { Person } from "./Person";
import { PersonProps } from "./Person.types";

type PersonListProps = {
  persons: PersonProps[]
}

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {
        props.persons.map(person => 
          <Person key={person.id} {...person}/>
        )
      }
    </div>
  );
}
 