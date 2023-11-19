import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import parseRecommendData from "../../utils/parseRecommedData";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getRecommendVideos = createAsyncThunk(
  "youtube/App/getRecommendedVideo",
  async (videoId, { getState }) => {
    const {
      youtubeApp: {
        currenPlaying: {
          channelInfo: { id: channelId },
        },
      },
    } = getState();

    const {
      data: { items },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/activities?&key=${API_KEY}&channelId=${channelId}&part=snippet,contentDetails&maxResults=20&type=videoId=${videoId}`
    );

    console.log(items);
    const parsedData = await parseRecommendData(items, videoId);

    return { parsedData };
  }
);
