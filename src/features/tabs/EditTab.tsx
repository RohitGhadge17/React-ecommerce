import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Button1 } from '../../components/MainSection.styles';
import TextField from '../../components/TextField';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { editTab } from './tabSlice';

const EditTab = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const tabs = useSelector((store: any) => (store.tabs));
    const navigate = useNavigate();
    const existingTab = tabs.filter((tab: any) => tab.id === params.id);
    const { name } = existingTab[0];
    const [values, setValues] = useState({
        name: name,
    })

    const onChangeHandler = (event: any) => {
        setValues({ ...values, name: event.target.value })
    }

    const handleEditTab = () => {
        console.log("Update Clicked");
    }
    return (
        <div>
            <TextField label="TabName:" inputProps={{ type: 'text', placeholder: 'Category' }} onChange={onChangeHandler} value={values.name} />
            <Button1 onClick={handleEditTab}>Edit</Button1>
        </div>
    )
}

export default EditTab