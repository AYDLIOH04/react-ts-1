import { Greet } from "../props/Greet"

type CustomComponentProps = React.ComponentProps<typeof Greet>

export const CustomComponent = (props: CustomComponentProps) => {
  return (
    <div>
      {props.name}
    </div>
  )
}
