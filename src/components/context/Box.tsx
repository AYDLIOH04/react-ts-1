import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = () => {
  const theme = useContext(ThemeContext)

  const boxStyles = {
    backgroundColor: theme.primary.main,
    color: theme.primary.text
  }

  return <div style={boxStyles}>Theme context</div>;
}
 