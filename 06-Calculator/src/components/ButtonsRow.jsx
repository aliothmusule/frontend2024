import {Button} from "./Button"

export const ButtonsRow = ({buttons, functions}) => {
  return (
    <tr>
       {buttons.map(button=>(
        <Button key={button.label} 
        functions={functions}
        {...button}/>
       ))}
    </tr>
  )
}

ButtonsRow.propTypes={
  buttons:Array,
  functions: Object
}