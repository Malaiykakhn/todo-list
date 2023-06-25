import React, { useState } from 'react';

const Todolist = () => {

const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    //email: ''
  });
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle form input changes
  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();


  // Check if name and email fields are filled
  //if (formData.name.trim() === '' || formData.email.trim() === '')


  if (formData.name.trim() === '')
   {
    return; // Do not add empty data
  }
    
    if (isEditing) {
      // Update existing item
      const updatedItems = items.map((item) => {
        if (item.id === formData.id) {
          return { ...item, name: formData.name};
        }
        return item;
      });

      setItems(updatedItems);
      setIsEditing(false);
    } else {
      // Add new item
      const newItem = {
        id: Date.now(),
        name: formData.name,
        //email: formData.email
      };

      setItems([...items, newItem]);
    }

    // Clear form fields
    setFormData({
      id: '',
      name: '',
      //email: ''
    });
  };

  // Function to handle edit button click
  const handleEdit = (item) => {
    setFormData({
      id: item.id,
      name: item.name,
     // email: item.email
    });
    setIsEditing(true);
  };

  // Function to handle delete button click
  const handleDelete = (itemId) => {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);
  };


  return (
    <div className='bg-col'>
    <h1 className='heading'>Things To Do List 2023</h1>

    <form className='dataform' onSubmit={handleSubmit}>
    <div className='addtext'>
      <input
        type="text"
        name="name"
        placeholder="What do you have planned?"
        value={formData.name}
        onChange={handleInputChange}
      />

      </div>
      <div className='addbtn'>
      <button className='btn-success' type="submit">{isEditing ? 'Update' : 'Add'}</button>
      </div>
    </form>

    <h2 className='head'>Task</h2>
    <ul className='ulflx'>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <div className='divflx'>
          <div className='btn'>
          <button className='btn-pri' onClick={() => handleEdit(item)}>Edit</button>
          </div>
          <div className='btn'>
          <button className='btn-dangeer' onClick={() => handleDelete(item.id)}>Delete</button>
          </div>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

  
}

export default Todolist



//     <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange}/>
