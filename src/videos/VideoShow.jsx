import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getVideo } from "../store/videos";
import { SmallContainer } from "../theme";
import Video from "./Video";

let VideoShow = (props) => {
  let { id } = useParams();
  let dispatch = useDispatch();
  let video = useSelector((state) => state.videos.currentVideo);

  useEffect(() => {
    dispatch(getVideo(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <SmallContainer>{video && <Video video={video}></Video>}</SmallContainer>
  );
};

export default VideoShow;
