import React, { useEffect, useRef, useState } from 'react';
import { IconButton } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import axios from 'axios';
import './ChatDetails.scss';
import { useSelector } from 'react-redux';
import { MicNoneOutlined, MoreHorizOutlined, SendRounded, TimerOutlined } from '@mui/icons-material';
import { selectChatId, selectSenderId } from './chatSlice';
import Message from './Message';
import { timeAgo } from './utils';
import FlipMove from 'react-flip-move';
import useMutationObserver from '@rooks/use-mutation-observer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const ChatDetails = ({modalClose}) => {

    const chatId = useSelector(selectChatId);
    const senderId = useSelector(selectSenderId);
    console.log('chatDetails', senderId, chatId);
    const [chatUser, setChatUser] = useState('');
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [selftDistructTime, setSelftDistructTime] = useState(0);
    const messagesRef = useRef();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useMutationObserver(messagesRef, () => {
        messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    });

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`);
                function custom_sort(a, b) {
                    return new Date(a.creeated_at).getTime() - new Date(b.creeated_at).getTime();
                }
                const result = response.data.data.filter(filterMessages);

                function filterMessages(message) {
                    return message.sender_id === senderId;
                }
                setChatUser(response?.data?.data[0].sender.name)
                setMessages(response.data.data.sort(custom_sort));
                setLoading(false);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        if (chatId) {
            fetchData();
        }
    }, [chatId]);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const sendMessage = (e) => {
        e.preventDefault();
        if (chatId && input) {
            
        }
        setInput('');
    };

    return (
        chatId && (
            <div className="chatDetails">
                <div className="chatDetails__header">
                <IconButton>
                        <ArrowBackIcon onClick={modalClose} />
                    </IconButton>
                    <Avatar className='chatDetails__avatar'>{chatUser?chatUser.charAt(0):'U'}</Avatar>

                    {/* <Avatar src={messages[messages.length - 1]?.data?.photo} className="chat__avatar" /> */}
                    <div className="chatDetails__headerContent">
                        <h3>{chatUser?chatUser:'Unknown'}</h3>
                        <p>
                            Last Seen:{' '}
                            {messages[messages.length - 1]?.created_at &&
                                timeAgo(messages[messages.length - 1]?.created_at)}
                        </p>
                    </div>
                    <IconButton>
                        <MoreHorizOutlined />
                    </IconButton>
                </div>
                <div ref={messagesRef} className="chatDetails__messages">
                    <FlipMove typeName={null}>
                        {messages.map((message) => (
                            <Message key={message.id} id={message.id} content={message} />
                        ))}
                    </FlipMove>
                </div>
                
                <div className="chatDetails__footer">
                    <form onSubmit={sendMessage}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message.."
                        />
                        <IconButton className="chatDetails__buttonIcon" type="submit">
                            <SendRounded />
                        </IconButton>
                    </form>
                    {/* <IconButton
                        onClick={() =>
                            setSelftDistructTime(
                                prompt(
                                    'Enter the delay in seconds to self destruct the message. Enter 0 if you do not want to self destruct.'
                                )
                            )
                        }
                        className="chatDetails__buttonIcon"
                    >
                        <TimerOutlined />
                    </IconButton> */}
                    <IconButton className="chatDetails__buttonIcon">
                        <MicNoneOutlined />
                    </IconButton>
                </div>
            </div>
        )
    );
};

export default ChatDetails;
