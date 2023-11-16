import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideo } from "../../store/reducers/getHomePageVideo";

export const youtubeSlice = createSlice({
  name: "youtubeApp",
  initialState: {
    videos: [],
    currentPlaying: null,
    searchTerm: "",
    searchResults: [],
    nextPageToken: null,
    recommendedVideo: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideo.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedData) {
        state.videos = action.payload.parsedData;
        state.nextPageToken = action.payload.nextPageToken;
      }
    });
  },
});
