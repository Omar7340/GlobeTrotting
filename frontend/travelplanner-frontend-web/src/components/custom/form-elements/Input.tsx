import { capitalizeFirstLetter } from "../utils/functions"

interface InputProps {
  name: string,
  type: string
}

export function Input({ name, type } : InputProps) {

  return (
    <div style={{ margin: '10px 0' }}>
        <label htmlFor={name} style={{ marginRight: '10px' }}>{capitalizeFirstLetter(name)} :</label>
        <input
          type={type}
          id={name}
          name={name}
          style={{ padding: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
          required
        />
      </div>
  )
}