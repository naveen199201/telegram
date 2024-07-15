import { createSlice } from '@reduxjs/toolkit';

export const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    chatId: null,
    senderId: null,
  },
  reducers: {
    setChat: (state, action) => {
      state.chatId = action.payload.chatId;
      state.senderId =  action.payload.senderId
    },
  },
});

export const { setChat } = chatSlice.actions;

export const selectChatId = (state) => state.chat.chatId;
export const selectSenderId = (state) => state.chat.senderId;

export default chatSlice.reducer;
