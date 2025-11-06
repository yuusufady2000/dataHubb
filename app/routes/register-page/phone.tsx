const PhoneNumber = ({label = '[LABEL]', name='[NAME]', value=['VALUE']}) => {
    return ( <div>
        <label htmlFor={name}>{label}</label> <br />
<input type="tel"
  className="w-full p-2 border  rounded-lg"
name={name} value={value}  />
    </div> );
}
 
export default PhoneNumber;