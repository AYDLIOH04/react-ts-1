type GreetProps = {
  name: string;
  mmrCount?: number;
  isLoggedIn: boolean;
}

// Можем делать удобную деструктуризацию, что кстати и стоит делать почти всегда, для более читаемого кода
export const Greet = ({name, mmrCount = 0, isLoggedIn}: GreetProps) => {
  return (
    <div>
      {
        isLoggedIn 
        ? <h2>Welcome {name}! U have {mmrCount}k mmr in dota 3</h2>
        : <h2>Залогинься!</h2>
      }
    </div>
  );
}
 