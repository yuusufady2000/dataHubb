const Email = ({label = '[LABEL]', name='[NAME]', value=['VALUE']}) => {
    return ( <div>
         <label htmlFor={name}>{label}</label> <br />
   <input type="email" name={name} 
   value={value}
     className="w-full p-2 border  rounded-lg"
   /> 
    </div> );
}
 
export default Email;