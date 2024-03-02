import { getLanguage } from '@/utils/globalVariables';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   language: getLanguage("english"),
   showModal: false
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setLanguage: (state, action) => {
         state.language = action.payload;
      },
      setShowModal: (state, action) => {
         state.showModal = action.payload;
      },
   },
})

export const { setLanguage, setShowModal } = userSlice.actions

export default userSlice.reducer