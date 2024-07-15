import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import { timeAgo } from './utils';
import './ChatItem.scss';
import { useDispatch, useSelector } from 'react-redux';
import { selectSenderId, setChat } from './chatSlice';

const ChatItem = ({ id, creator }) => {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const senderId = useSelector(selectSenderId)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`);
                function custom_sort(a, b) {
                    return new Date(b.creeated_at).getTime() - new Date(a.creeated_at).getTime();
                }
                const sortedData = response.data.data.sort(custom_sort);
                setData(sortedData);
                setLoading(false);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div
            className={`chatItem ${creator.id === senderId ? 'chatItem_active' : ''}`}
            onClick={() =>
                dispatch(
                    setChat({
                        chatId: id,
                        senderId: creator.id
                    })
                )
            }
        >
            <div className='chatItem_avatar'>
                <Avatar >{creator.name ? creator.name.charAt(0) : 'U'}</Avatar>
            </div>
            <div className="chatItem__info">
                <h3>{creator.name ? creator.name : 'Unknown'}</h3>
                <p>{data[0]?.message}</p>
            </div>
            {data[0]?.creeated_at && (
                <small className="chatItem__timestamp">{timeAgo(data[0]?.creeated_at)}</small>
            )}
        </div>
    )
}

export default ChatItem