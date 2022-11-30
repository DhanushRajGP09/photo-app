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
  getRecents,
  getSearch,
  removeOneFromFav,
  removeOneFromLiked,
} from "../../features/Photo/PhotoSlice";

export default function Photos() {
  const [unfilled, setUnfilled] = useState(true);
  const [homedata, setHomedata] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = "nature";
  const data = useSelector(getSearch);
  const getlikeddata = useSelector(getLiked);
  console.log(getlikeddata);
  const getfavdata = useSelector(getFav);
  console.log(getfavdata);

  const heartfilled = () => {
    if (getlikeddata.includes(data.id)) {
      setUnfilled(false);
    } else {
      setUnfilled(true);
    }
  };

  useEffect(() => {
    dispatch(fetchAsyncSearch(name));
    setHomedata(data);
  }, [dispatch]);

  return (
    <>
      {data.photos && (
        <div className="photos-div">
          <div className="photos-container-div">
            {data.photos.map((data) => {
              return (
                <div className="photos-container" key={data.id}>
                  <div>
                    <img
                      src={data.src.large}
                      className="photo-size"
                      onClick={() => {
                        setTimeout(() => {
                          navigate("/imagelarge");
                        }, 3000);
                        dispatch(fetchAsyncPhoto(data.id));
                        dispatch(addRecent(data));
                      }}
                    ></img>
                  </div>

                  <img src={oval} className="profile-pic"></img>
                  <span className="username">{data.photographer}</span>
                  <img
                    className="heart"
                    src={unfilled ? heart : filledheart}
                    onClick={() => {
                      if (unfilled === true) {
                        setUnfilled(!unfilled);
                        dispatch(addToFav(data));
                        dispatch(addToheart(data.id));
                      } else {
                        setUnfilled(!unfilled);
                        dispatch(removeOneFromFav({ id: data.id }));
                        dispatch(removeOneFromLiked(data.id));
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
