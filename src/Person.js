import React from "react";
const Person=({elem})=>{
  const {id,name,age,phone,image}=elem;
  const href=`https://api.whatsapp.com/send?phone=${phone}&text=happy%2Cbirthday%2Cto%2Cyou!`
return <>
      <img src={image} alt={name}/>
      <div>
        <h4>{name}</h4>
        <p className="neonText">{age}</p>
        <p className="phone">{phone}</p>
       
        </div>   
        <a href={href}>
            <img className="call" src='./whatsapp.svg'/>
          </a>
</>

}
export default Person;