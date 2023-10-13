type InputProps = React.ComponentProps<'input'>

export const CustomInput = (props: InputProps) => {
  return <input {...props} className="something styles"/>
}
 