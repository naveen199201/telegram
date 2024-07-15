import React, { useEffect, useState } from 'react'
import Header from './Header'
import ChatItem from './ChatItem.js'
import axios from 'axios';
import './ChatList.scss';
import {SearchOutlined} from '@mui/icons-material';

import Sidebar from './Sidebar.js';

const ChatList = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1');
                setData(response.data.data.data);
                setLoading(false);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='chatList'>
            <div className="chatList__header">
                <div className='chatList__sidebar'>
                    <Sidebar />
                </div>
                <div className="chatList__search">
                    <SearchOutlined />
                    <input type="text" placeholder="search" />
                </div>
               
            </div>
            <div className='chatList-items'>
                {data.map((item) => {
                    return (<ChatItem key={item.id} id={item.id} name={item.creator.name}></ChatItem>)
                })}
            </div>
        </div>
    )
}

export default ChatList