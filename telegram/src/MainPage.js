import React, { useEffect, useState } from 'react';
import ChatList from './ChatList';
import ChatDetails from './ChatDetails';
import './MainPage.scss';
import { useSelector } from 'react-redux';
import { selectSenderId } from './chatSlice';
import Modal from '@mui/material/Modal';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Box } from '@mui/material';

const MainPage = () => {
  const senderId = useSelector(selectSenderId);
  const [showModal, setShowModal] = useState(false);
  const isMobile = useMediaQuery('(max-width: 600px)');

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (senderId) {
      if (isMobile) {
        handleOpenModal();
      } else {
        setShowModal(false);
      }
    }
  }, [senderId, isMobile]);

  return (
    <div className="mainPage">
      <ChatList />
      {isMobile ? (
        <Modal
          open={showModal}
          onClose={handleCloseModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '100%',
              height: '100%',
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
            }}
          >
            <ChatDetails modalClose={handleCloseModal} />
          </Box>
        </Modal>
      ) : (
        senderId && <ChatDetails />
      )}
    </div>
  );
};

export default MainPage;
