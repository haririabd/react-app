
interface Props {
    children: string;
    color?: 'primary' | 'secondary' | 'danger'; // The sign ? means this is optional. This declaration menas the color only accepts this 3 options only
    onClick: () => void; // We declare fn onclick with no parameters
}

const Button = ({ children, color = "primary", onClick }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>{children}</button>
  )
}

export default Button