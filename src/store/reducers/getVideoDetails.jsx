import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import convertRawtoString from "../../utils/convertRawtoString";
import timeSince from "../../utils/timeSince";

const API_KEY = import.meta.env.VITE_YOUTUBE_DATA_API_KEY;

export const getVideoDetails = createAsyncThunk(
  "youtube/App/getVideoDetails",
  async (id) => {
    const {
      data: { items },
    } = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?key=${API_KEY}&part=snippet,statistics&type=video&id=${id}`
    );

    const parsedData = parseWatchVideoData(items[0]);
    return parsedData;
  }
);

const parseWatchVideoData = async (item) => {
  const channelResponse = await axios.get(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet,statistics&id=${item.snippet.channelId}&key=${API_KEY}`
  );
  //   const snippet = ;
  //   const id = ;
  //   const statistics = item.statistics;

  const channelImage =
    channelResponse.data.items[0].snippet.thumbnails.default.url;
  const subscriberCount =
    channelResponse.data.items[0].statistics.subscriberCount;

  return {
    videoId: item.id,
    videoTitle: item.snippet.title,
    videoDescription: item.snippet.description,
    videoViews: convertRawtoString(item.statistics.viewCount),
    videoLikes: convertRawtoString(item.statistics.likeCount),
    videoAge: timeSince(new Date(item.snippet.publishedAt)),
    channelInfo: {
      id: item.snippet.channelId,
      image: channelImage,
      name: item.snippet.channelTitle,
      subscribers: convertRawtoString(subscriberCount, true),
    },
  };
};
