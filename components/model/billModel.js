'use client'
import React,{useState} from 'react'
import Form from '../form/Form'
export default function () {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
  };
  return (
    <div>
    <button className='text-white bg-green-500 text-center  py-2 my-2 mx-3' onClick={toggleForm}>Show Form</button>
    {showForm && <Form />}
</div>
  )
}
