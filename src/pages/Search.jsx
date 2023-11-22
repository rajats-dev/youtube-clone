import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import SearchCard from "../components/SearchCard";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import Spinner from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { youtubeAction } from "../features/youtube/youtubeSlice";

const Search = () => {
  const dispatch = useAppDispatch();
  const video = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(youtubeAction.clearVideos());
    dispatch(getSearchPageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div>
        <NavBar />
      </div>
      <div className="flex">
        <SideBar />
        {video.length ? (
          <div>
            <InfiniteScroll
              dataLength={video.length}
              next={() => dispatch(getSearchPageVideos(true))}
              hasMore={video.length < 500}
              loader={<Spinner />}
              height={650}
            >
              {video.map((item) => {
                return (
                  <div className="my-5 pl-3">
                    <SearchCard data={item} key={item.videoId} />
                  </div>
                );
              })}
            </InfiniteScroll>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Search;
