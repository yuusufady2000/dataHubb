const ConfirmPassword = ({label = '[LABEL]', name='[NAME]', value=['VALUE']}) => {
    return ( <div>
          <label htmlFor={name}>{label}</label> <br />
<input
  className="w-full p-2 border  rounded-lg"
type="password" name={name} value={value} />
    </div> );
}
 
export default ConfirmPassword;