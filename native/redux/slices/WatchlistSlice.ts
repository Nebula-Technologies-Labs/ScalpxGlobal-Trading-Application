import socket from "@/config/socket.config";
import { InstrumentResponse } from "@/types/InstrumentTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface watchlistInitialState {
  loading: boolean;
  error: string | null;
  watchlists: InstrumentResponse[];
}

const initialState: watchlistInitialState = {
  loading: false,
  error: null,
  watchlists: [],
};

export const addToWatchlist = createAsyncThunk(
  "watchlist/add",
  async (item: InstrumentResponse, { rejectWithValue }) => {
    try {
      socket.emit("watchlist", {
        token: item.token,
        exchangeType: item.exchangeSegment,
      });
      await AsyncStorage.setItem(
        `watchlist:${item.token}`,
        JSON.stringify(item)
      );
      return item;
    } catch (error) {
      console.log(error);
      rejectWithValue(error);
    }
  }
);

export const removeFromWatchlist = createAsyncThunk(
  "watchlist/remove",
  async (item: InstrumentResponse, { rejectWithValue }) => {
    try {
      await AsyncStorage.removeItem(`watchlist:${item.token}`);
      return item;
    } catch (error) {
      console.log(error);
      rejectWithValue(error);
    }
  }
);

export const loadwatchlisted = createAsyncThunk(
  "load/watchlisted",
  async (_, { rejectWithValue }) => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const watchlistKeys = keys.filter((k) => k.startsWith("watchlist:"));
      const items = await AsyncStorage.multiGet(watchlistKeys);

      const instruments = items.map(([_, value]) =>
        value ? JSON.parse(value) : null
      );
      return instruments;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const watchlistSlice = createSlice({
  name: "watchlistSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadwatchlisted.fulfilled, (state, action) => {
        state.watchlists = action.payload as InstrumentResponse[];
      })
      .addCase(addToWatchlist.fulfilled, (state, action) => {
        state.watchlists.push(action.payload as InstrumentResponse);
      })
      .addCase(removeFromWatchlist.fulfilled, (state, action) => {
        state.watchlists = state.watchlists.filter(
          (item) => item.token !== action.payload?.token
        );
      });
  },
});

export default watchlistSlice.reducer;
