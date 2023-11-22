import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import Navbar from "../components/NavBar";
import { getRecommendVideos } from "../store/reducers/getRecommedVideos";
import RecommedVideos from "./RecommedVideos";
import { youtubeAction } from "../features/youtube/youtubeSlice";

export default function Watch() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const history = useHistory();

  const currentPlaying = useAppSelector(
    (state) => state.youtubeApp.currentPlaying
  );

  useEffect(() => {
    if (id) {
      dispatch(getVideoDetails(id));
    } else {
      history.replace("/");
    }
  }, [id, history, dispatch]);

  useEffect(() => {
    if (currentPlaying && id) {
      dispatch(youtubeAction.clearVideos());
      dispatch(getRecommendVideos(false));
    }
  }, [currentPlaying, dispatch, id]);

  return (
    <>
      {currentPlaying && currentPlaying?.videoId === id && (
        <div className="max-h-screen overflow-hidden">
          <div>
            <Navbar />
          </div>
          <div className="flex">
            <div className="px-10 pr-5 py-7 rounded-full">
              <iframe
                src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                width="900"
                height="450"
                allowFullScreen
                title="Youtube Player"
              ></iframe>
              <div className="py-3 font-bold">{currentPlaying.videoTitle}</div>
              <div className="flex items-center text-sm">
                <img
                  src={currentPlaying.channelInfo.image}
                  className="h-8 w-8 rounded-full"
                />
                <div className="flex flex-col px-3">
                  <a href="#" className="hover:text-grey font-semibold">
                    {currentPlaying.channelInfo.name}
                  </a>
                  <h3 className="text-gray-300 text-sm">
                    {currentPlaying.channelInfo.subscribers} subscribers
                  </h3>
                </div>
                <button className="bg-white rounded-2xl px-4 py-2 text-black">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="mt-5">
              <RecommedVideos />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
