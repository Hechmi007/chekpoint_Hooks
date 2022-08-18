import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Rating } from '@mui/material'

function AddMovie({Add}) {
  
    const [show, setShow] = useState(false);
    const [newMovie,setMovie]=useState({
      id:10,
    title: "",
    description: "",
    rating:"" ,
    posterUrl:"" ,
    rating:0
});
    const handleClose = () => {  setShow(false);
    
     setMovie( {
        title: "",
        description: "",
        rating:"" ,
        posterUrl:"",
        rating:0
    })
  }
    const handleShow = () => setShow(true);
    const handleChange=(e)=>{
        
        //const {name , value}=e.target
        //setMovie({...newMovie,[name]:value})
        setMovie({...newMovie,[e.target.name]:e.target.value,})
    }

    const handleSave=()=>{
      
      Add(newMovie)
      handleClose()

    }

  return (
    <div>
        <Button variant="primary" onClick={handleShow}>
        Launch demo modal
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Title</Form.Label>
              <Form.Control
              name="title"
                type="text"
                placeholder="Title..."
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Movie genre</Form.Label>
              <Form.Control
              name="genre"
                type="text"
                placeholder="Title..."
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Description</Form.Label>
              <Form.Control name="description" onChange={handleChange} as="textarea" rows={2} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label></Form.Label>
              
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Poster URL</Form.Label>
              <Form.Control
              name="posterUrl"
                type="text"
                placeholder="Title..."
                autoFocus
                onChange={handleChange}
              />
            </Form.Group>
            <Rating
  name="simple-controlled"
  defaultValue={0}
  onChange={(event, newValue) => {
    setMovie({...newMovie,rating:newValue});
  }}
  
  max={10}
/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddMovie