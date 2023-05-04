import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Button1 } from '../../components/MainSection.styles'
import TextField from '../../components/TextField'
import { addTab } from './tabSlice'
import {v4 as uuidv4} from 'uuid'

const AddTab = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        name: '',
    })

    const onChangeHandler = (event: any) => {
        setValues({ ...values, name: event.target.value })
    }

    const handleAddTab = () => {
        setValues({ name: '' });
        dispatch(addTab({
            id: uuidv4(),
            name: values.name,
        }));
        navigate('/');
    }

const handleBackBtn = () => {
        // console.log("Back btn clicked");
        navigate('/');
    }
    return (
         <div style={{display:'flex', gap:'5px'}}>
            <TextField label="TabName:" inputProps={{ type: 'text', placeholder: 'TabName' }} onChange={onChangeHandler} value={values.name} />
            <Button1 onClick={handleAddTab}>Submit</Button1>
            <Button1 onClick={handleBackBtn}>Back</Button1>
        </div>
    )
}

export default AddTab