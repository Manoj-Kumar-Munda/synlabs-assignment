interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label ,type, name, value, onChange}: InputProps) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  )
}

export default Input