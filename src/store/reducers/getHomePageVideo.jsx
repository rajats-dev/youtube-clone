import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import parseData from "../../utils/parseData";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getHomePageVideo = createAsyncThunk(
  "youtube/App/homePageVideo",
  async (isNext, { getState }) => {
    const {
      youtubeApp: { nextPageToken: nextPageTokenFromState, videos },
    } = getState();

    const {
      data: { items },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?maxResults=20&q="Think Media"&key=${API_KEY}&part=snippet&type=video&${
        isNext ? `pageToken=${nextPageTokenFromState}` : ""
      } `
    );

    const parsedData = await parseData(items);

    return {
      parsedData: [...videos, ...parsedData],
      nextPageToken: nextPageTokenFromState,
    };
  }
);
