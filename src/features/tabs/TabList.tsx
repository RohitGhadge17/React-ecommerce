import React from 'react'
import { ButtonGroup, Tab } from '../../components/CategoryList.styles'
import { TiDeleteOutline } from "react-icons/ti"
import { AiFillDelete } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import Button from '../../components/Button';
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { store } from '../../store';
import { useDispatch } from 'react-redux';
import { deleteTab } from './tabSlice';

const TabList = () => {
    const tabs = useSelector((store: any) => (store.tabs));
    const dispatch = useDispatch();
    // console.log(tabs);

    // const tabs = [
    //     { id: '1', name: 'Clothing' },
    //     { id: '2', name: 'Toys' },
    // ]

    const handleRemoveTab = (id: any) => {
        dispatch(deleteTab({ id: id }));
    }

    const renderCard = () => <ButtonGroup>
        {tabs.map((tab: any) => (
            <Tab key={tab.id}>
                {tab.name}
                <AiFillDelete style={{ marginLeft: '7px', marginRight:'7px' }} onClick={() => handleRemoveTab(tab.id)} />
                <Link to={`edit-tab/${tab.id}`}>
                    <FiEdit2 style={{ marginLeft: '7px', marginRight:'7px' }} />
                </Link>
            </Tab>
        ))}
    </ButtonGroup>
    return (
        <div>
            <Link to='/add-tab'>
                <Button onClick={undefined}>Add Tab</Button>
            </Link>
            {tabs.length ? renderCard() : <p>No Tabs</p>}
        </div>
    )
}

export default TabList