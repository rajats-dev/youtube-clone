import React, { useEffect } from "react";
import NavBar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Card from "../components/Card";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";
import Spinner from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { youtubeAction } from "../features/youtube/youtubeSlice";

const Search = () => {
  //   const history = useHistory();
  const dispatch = useAppDispatch();
  const video = useAppSelector((state) => state.youtubeApp.videos);
  //   const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

  useEffect(() => {
    console.log("a");
    dispatch(youtubeAction.clearVideos());
    dispatch(getSearchPageVideos(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-auto">
      <div>
        <NavBar />
      </div>
      <div className="flex">
        <SideBar />
        {video.length ? (
          <InfiniteScroll
            dataLength={video.length}
            next={() => dispatch(getSearchPageVideos(true))}
            hasMore={video.length < 500}
            loader={<Spinner />}
            height={650}
          >
            <div className="grid gap-y-14 gap-x-8 grid-cols-4 p-8">
              {video.map((item) => {
                return <Card data={item} key={item.videoId} />;
              })}
            </div>
          </InfiniteScroll>
        ) : (
          //   <Spinner />
          "a"
        )}
      </div>
    </div>
  );
};

export default Search;
