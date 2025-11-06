const Name = ({label = '[LABEL]', name='[NAME]', value=['VALUE'], onChange=[]}) => {
    return ( <div >
  
   <label htmlFor={name}>{label}</label> <br />
   <input 
    className="w-full p-2 border  rounded-lg"
    name={name}
   type="text" 
   value={value}
   
    />
    </div> );
}
 
export default Name;