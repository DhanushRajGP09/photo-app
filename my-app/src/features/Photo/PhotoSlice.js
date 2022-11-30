import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import PhotoApi from "../../common/Apis/PhotoApi";

export const fetchAsyncPhoto = createAsyncThunk(
  "recent/fetchAsyncPhoto",
  async (id) => {
    const response = await PhotoApi.get(`photos/${id}`);
    return response.data;
  }
);

export const fetchAsyncSearch = createAsyncThunk(
  "recent/fetchAsyncSearch",
  async (payload) => {
    const response = await PhotoApi.get(`search?query=${payload}&per_page=12`);
    return response.data;
  }
);

const PhotoSlice = createSlice({
  name: "Photos",
  initialState: {
    recents: [],
    searchdata: {},
    large: {},
    liked: ["123"],
    favourites: ["123"],
  },
  reducers: {
    addRecent: (state, { payload }) => {
      let isPresent = false;
      for (let item of state.recents) {
        if (item.id === payload.id) {
          isPresent = true;
        }
      }
      if (!isPresent) {
        state.recents.unshift(payload);
      }
    },
    addLarge: (state, { payload }) => {
      state.large = { payload };
    },
    addSearch: (state, { payload }) => {
      state.searchdata = { payload };
    },
    addToheart: (state, action) => {
      state.liked.push(action.payload);
    },
    removeOneFromLiked: (state, action) => {
      state.liked = state.liked.filter((data) => data !== action.payload);
    },
    addToFav: (state, action) => {
      state.favourites.push(action.payload);
    },
    removeFromFav: (state) => {
      state.favourites = [];
    },
    removeFromliked: (state) => {
      state.liked = [];
    },
    removeFromrecent: (state) => {
      state.recents = [];
    },
    removeOneFromFav: (state, action) => {
      state.favourites = state.favourites.filter(
        (place) => place.id !== action.payload.id
      );
    },
  },
  extraReducers: {
    [fetchAsyncPhoto.pending]: () => {
      console.log("Pending....");
    },
    [fetchAsyncPhoto.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succefully!!!");
      return { ...state, recents: payload };
    },
    [fetchAsyncPhoto.rejected]: () => {
      console.log("Rejected....");
    },
    [fetchAsyncSearch.fulfilled]: (state, { payload }) => {
      console.log("Fetched Succefully!!!");
      return { state, searchdata: payload };
    },
  },
});

export const {
  addRecent,
  addToheart,
  removeOneFromLiked,
  addLarge,
  addToFav,
  removeFromFav,
  removeOneFromFav,
  addSearch,
} = PhotoSlice.actions;

export const getRecents = (state) => state.Photos.recents;
export const getSearch = (state) => state.Photos.searchdata;
export const getLarge = (state) => state.Photos.large;
export const getLiked = (state) => state.Photos.liked;
export const getFav = (state) => state.Photos.favourites;
export default PhotoSlice.reducer;
