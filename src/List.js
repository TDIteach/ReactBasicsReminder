import React from 'react'
import Person from './Person'

const List = (props) => {
  const people = props.people
  const setPeople = props.setPeople
  return (
    <>
      {people.map((person) => {
        const { id, name, age, image } = person
        return (
          <article className='person'>
            <Person id={id} elem={person} data={people} setPeople={setPeople} />
          </article>
        )
      })}
    </>
  )
}

export default List
