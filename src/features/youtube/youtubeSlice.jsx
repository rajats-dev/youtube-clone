import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideo } from "../../store/reducers/getHomePageVideo";
import { getSearchPageVideos } from "../../store/reducers/getSearchPageVideos";

const initialState = {
  videos: [],
  currentPlaying: null,
  searchTerm: "",
  searchResults: [],
  nextPageToken: null,
  recommendedVideo: [],
};

export const youtubeSlice = createSlice({
  name: "youtubeApp",
  initialState,
  reducers: {
    clearVideos(state) {
      state.videos = [];
      state.nextPageToken = null;
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    clearSearch(state) {
      state.searchTerm = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getHomePageVideo.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedData) {
        state.videos = action.payload.parsedData;
        state.nextPageToken = action.payload.nextPageToken;
      }
    });

    builder.addCase(getSearchPageVideos.fulfilled, (state, action) => {
      if (action.payload && action.payload.parsedData) {
        state.videos = action.payload.parsedData;
        state.nextPageToken = action.payload.nextPageToken;
      }
    });
  },
});

export const youtubeAction = youtubeSlice.actions;
