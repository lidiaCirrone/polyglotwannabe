import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   language: {
      code: "en",
      name: "English",
      label: "English",
      locale: "en-GB",
      slug: "english",
   },
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