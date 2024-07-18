/* eslint-disable react/prop-types */
export const Input = ({ setName }) => {
  return (
    <input 
      type="text" 
      id="nameInput" 
      onChange={(ev) => setName(ev.target.value)}
    />
  )
}