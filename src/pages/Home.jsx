import React, { useEffect } from "react";
import NavBar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getHomePageVideo } from "../store/reducers/getHomePageVideo";
import Spinner from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const dispatch = useAppDispatch();
  const video = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideo(false));
    console.log(video);
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
            next={() => dispatch(getHomePageVideo(true))}
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
          <Spinner />
        )}
      </div>
    </div>
  );
};

export default Home;
