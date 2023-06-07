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
    <div>
      <input type="file" name="profilePicture" id="profilePicture" onChange={handleUpload}/>
      <button onClick={handleApi}>Upload</button>
    </div>
  )
}

export default ImageUpload
