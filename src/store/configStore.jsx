import { configureStore } from "@reduxjs/toolkit";
import { youtubeSlice } from "../features/youtube/youtubeSlice";

export const store = configureStore({
  reducer: { youtubeApp: youtubeSlice.reducer },
});
