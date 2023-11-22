import React, { useEffect } from "react";
import NavBar from "../components/Navbar";
import SideBar from "../components/SideBar";
import Card from "../components/Card";
import { useAppDispatch, useAppSelector } from "../hooks/useApp";
import { getHomePageVideo } from "../store/reducers/getHomePageVideo";
import Spinner from "../components/Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(getHomePageVideo(false));
  }, [dispatch]);

  return (
    <div className="max-h-screen overflow-hidden">
      <div style={{ height: "7.5vh" }}>
        <NavBar />
      </div>
      <div className="flex">
        <SideBar />
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideo(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={650}
          >
            <div className="grid gap-y-10 gap-x-2 grid-cols-3 pt-8 pl-6">
              {videos.map((item) => {
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
