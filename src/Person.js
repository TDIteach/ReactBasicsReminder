import React from 'react'
import { FaHeart, FaWhatsapp } from 'react-icons/fa'
import { MdDeleteOutline } from 'react-icons/md'
const Person = (props) => {
  const { id, name, age, phone, image } = props.elem
  const data = props.data
  const setPeople = props.setPeople
  const href = `https://api.whatsapp.com/send?phone=${phone}&text=happy%2Cbirthday%2Cto%2Cyou!`
  // const fontStyles = { color: 'red', fontSize: '2.5rem', cursor: 'pointer' }
  const deleteItem = (id) => {
    const newList = data.filter((e) => e.id !== id)
    setPeople(newList)
  }
  return (
    <>
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p className='neonText'>{age}</p>
        <p className='phone'>{phone}</p>
      </div>
      <div>
        <a href={href}>
          <FaWhatsapp className='call' />
        </a>
        <MdDeleteOutline className='del' onClick={() => deleteItem(id)} />
      </div>
    </>
  )
}
export default Person
