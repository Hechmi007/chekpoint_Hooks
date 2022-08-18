import { Rating } from '@mui/material';
import React from 'react'
import { Form, } from 'react-bootstrap'

export const Filtre = ({setSearch,setRate,rate}) => {
    const HandleChange=(e)=>{
        setSearch(e.target.value)
    }
  return (
    <div>
        <Form >
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Control onChange={HandleChange}  style={{width:'300px'}} type="text" placeholder="Enter title" />
            </Form.Group>
            <Rating
  name="simple-controlled"
  value={rate}
  max={10}
  onChange={(event,value)=> setRate(value)}
/>
        </Form>
    </div>
  )
}
