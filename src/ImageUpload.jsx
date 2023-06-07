import React from 'react'
import { useState } from 'react'

const ImageUpload = () => {
    const [image, setImage] = useState('')

    const handleUpload = (e) =>{
        setImage(e.target.file[0])
        console.log(e.target.file);
    }

    const handleApi = () =>{
        const formData = new FormData()
        formData.append('image', image)
        axios.post('/users', formData).then((response) =>{
            console.log(response);
        })
    }

  return (
    <div className='container mx-auto flex flex-col'>
      <input type="file" name="profilePicture" id="profilePicture" onChange={handleUpload} className='w-full'/>
      <button onClick={handleApi} className='bg-blue-600 h-10 rounded-full w-20 text-white hover:bg-blue-400 font-bold my-8'>Upload</button>
    </div>
  )
}

export default ImageUpload
