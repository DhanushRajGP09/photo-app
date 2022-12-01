import React, { useEffect, useState } from "react";
import "./Photos.css";
import img from "../../images/Rectangle.png";
import oval from "../../images/Oval.png";
import heart from "../../images/Path-2.png";
import filledheart from "../../images/Path.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addRecent,
  addToFav,
  addToheart,
  fetchAsyncPhoto,
  fetchAsyncSearch,
  getFav,
  getLiked,
  getSearch,
  removeOneFromFav,
  removeOneFromLiked,
} from "../../features/Photo/PhotoSlice";

export default function Photos() {
  const [heartpressed, setHeartpressed] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = "cars";
  const data = useSelector(getSearch);
  const getlikeddata = useSelector(getLiked);
  console.log(getlikeddata);
  const getfav = useSelector(getFav);
  console.log("ccccccccccc", getfav);
  var liked = [];

  useEffect(() => {
    dispatch(fetchAsyncSearch(name));
  }, []);

  return (
    <>
      {data && data?.photos && (
        <div className="photos-div">
          <div className="photos-container-div">
            {data?.photos?.map((data) => {
              return (
                <div className="photos-container" key={data?.id}>
                  <div>
                    <img
                      src={data.src.large}
                      className="photo-size"
                      onClick={() => {
                        navigate("/imagelarge");
                        dispatch(fetchAsyncPhoto(data.id));
                      }}
                    ></img>
                  </div>
                  <img src={oval} className="profile-pic"></img>
                  <span className="username">{data?.photographer}</span>
                  <img
                    className="heart"
                    id={data?.id}
                    src={getlikeddata?.includes(data?.id) ? filledheart : heart}
                    onClick={() => {
                      if (!getlikeddata?.includes(data.id)) {
                        dispatch(addToheart(data?.id));
                        setHeartpressed(data?.id);
                        dispatch(addToFav(data));
                      } else {
                        dispatch(removeOneFromFav({ id: data?.id }));
                        dispatch(removeOneFromLiked(data?.id));
                      }
                    }}
                  ></img>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
