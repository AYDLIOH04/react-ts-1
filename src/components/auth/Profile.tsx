export type ProfileProps = {
  name: string;
}

export const Profile = ({name}: ProfileProps) => {
  return <div>This is ur profile. Say my name - {name}!</div>
}
 