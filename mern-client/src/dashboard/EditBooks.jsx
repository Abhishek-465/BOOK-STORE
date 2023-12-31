import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditBooks = () => {

  const {id}= useParams();
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL} = useLoaderData();
  const bookCategories =[
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Science Fiction",
    "Education",
    "Horror",
    "Romance",
    "Autobiography",
    "Business",
    "Anime",
    "Travel",
    "Religious",
    "Art",
    "Music"
  ]
  const[selectedBookCategory,setSelectedBookCategory]=useState(bookCategories[0]);
  const handleChangeSelectedValue =(event)=>{
    setSelectedBookCategory(event.target.value)
  }

  const handleBookUpdate =(event)=>{
    event.preventDefault();
    const form= event.target;
    const bookTitle = form.bookTitle.value;
    const authorName =form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription =form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const bookObj ={
      bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
    }
    console.log(bookObj)
    //send data to db 

    fetch(`http://localhost:5000/book/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(bookObj)
    }).then(res => res.json()).then(data =>{
      console.log(data)
      alert("Book updated Successfully")
     
    })
  }
  return (
    <div className='px-4 my-12 overflow-x-hidden'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Book data</h2>

      <form className="flex lg:w-[1180px] flex-col flex-wrap gap-4" onSubmit={handleBookUpdate}>
    <div className='flex gap-8'>
    <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="BookTitle" />
        </div>
        <TextInput id="bookTitle" type="text" placeholder="Book Name" required defaultValue={bookTitle} />
      </div>

      <div className='lg:w-1/3'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="AuthorName" />
        </div>
        <TextInput id="authorName" name="authorName" type="text" placeholder="Author Name" required  defaultValue={authorName}/>
      </div>
    </div>

    {/*second row */}

    <div className='flex gap-8'>
    <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book imageURL" />
        </div>
        <TextInput id="imageURL" name="imageURL" type="text" placeholder="Book Image URL" required defaultValue={imageURL}/>
      </div>

      <div className='lg:w-1/3'>
        <div className='mb-2 block'>
          <Label htmlFor="inputState" value="Book Category"/>

        </div>
        <select id="inputState" name="categoryName" className='w-full rounded' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((option)=><option key={option} value={option}>{option}</option>)
          }

        </select>
      </div>
    </div>


    {/* third row */}
    <div className='lg:w-3/4 '>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" type="text" placeholder="Book Description" className='w-full' name="bookDescription" required rows={4} defaultValue={bookDescription} />
      </div>

      <div className='w-3/4'>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" type="text" placeholder="Book PDF URL" required name="bookPDFURL" defaultValue={bookPDFURL} />
      </div>
   

      <Button type="submit" className='mt-5 w-3/4'>Update</Button>
     


      </form>
        

    </div>
  )
}

export default EditBooks