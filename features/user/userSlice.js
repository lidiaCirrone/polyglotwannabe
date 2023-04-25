import { getLanguage } from '@/utils/globalVariables';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   language: getLanguage("english"),
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      setLanguage: (state, action) => {
         state.language = action.payload;
      },
   },
})

export const { setLanguage } = userSlice.actions

export default userSlice.reducer