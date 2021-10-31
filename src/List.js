import React from 'react';
import Person from './Person';

const List = ({people}) => {
  return (
    <>
     
        {
        people.map((person)=>{
          const {id,name,age,image}=person;
         return <article className="person">
          <Person id={id} elem={person}/>
          </article>
        })
        }
      
    </>
  );
};

export default List;
