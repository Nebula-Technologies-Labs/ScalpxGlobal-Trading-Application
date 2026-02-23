import { InstrumentResponse } from "@/types/InstrumentTypes";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface WatchlistPayload {
  watchlistId: number;
  name: string;
  instruments: InstrumentResponse[];
}

const INITIAL_WATCHLISTS: WatchlistPayload[] = [
  { watchlistId: 1, instruments: [], name: "Watchlist 1" },
  { watchlistId: 2, instruments: [], name: "Watchlist 2" },
  { watchlistId: 3, instruments: [], name: "Watchlist 3" },
  { watchlistId: 4, instruments: [], name: "Watchlist 4" },
  { watchlistId: 5, instruments: [], name: "Watchlist 5" },
  { watchlistId: 6, instruments: [], name: "Watchlist 6" },
  { watchlistId: 7, instruments: [], name: "Watchlist 7" },
];

interface InitialState {
    loading : boolean;
    error : string | null;
    activeWatchlist : number;
    watchlists : WatchlistPayload[]
}

const initialState : InitialState = {
  loading: false,
  error: null,
  activeWatchlist: 1,
  watchlists: INITIAL_WATCHLISTS,
};

// Initialize all 7 watchlists in AsyncStorage
export const createWatchlists = createAsyncThunk(
  "create/watchlists",
  async (_, { rejectWithValue }) => {
    try {
      const pairs = INITIAL_WATCHLISTS.map((w) => [
        `watchlistID:${w.watchlistId}`,
        JSON.stringify(w),
      ]) as [string, string][];

      await AsyncStorage.multiSet(pairs);
      await AsyncStorage.setItem("activeWatchlistID", "1");

      return INITIAL_WATCHLISTS;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

// Load all watchlists from AsyncStorage
export const loadWatchlists = createAsyncThunk(
  "load/watchlists",
  async (_, { rejectWithValue }) => {
    try {
      const keys = await AsyncStorage.getAllKeys();
      const watchlistKeys = keys.filter((k) => k.startsWith("watchlistID:"));

      if (watchlistKeys.length === 0) {
        return INITIAL_WATCHLISTS;
      }

      const items = await AsyncStorage.multiGet(watchlistKeys);
      const watchlists: WatchlistPayload[] = items
        .map(([_, value]) => (value ? JSON.parse(value) : null))
        .filter(Boolean)
        .sort((a, b) => a.watchlistId - b.watchlistId);

      const activeWatchlistID = await AsyncStorage.getItem("activeWatchlistID");

      return {
        watchlists,
        activeWatchlistId: activeWatchlistID ? parseInt(activeWatchlistID) : 1,
      };
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

// Add instrument to watchlist
export const addToWatchlist = createAsyncThunk(
  "watchlist/addInstrument",
  async (
    {
      watchlistId,
      instrument,
    }: { watchlistId: number; instrument: InstrumentResponse },
    { rejectWithValue },
  ) => {
    try {
      const key = `watchlistID:${watchlistId}`;
      const data = await AsyncStorage.getItem(key);

      if (data) {
        const watchlist: WatchlistPayload = JSON.parse(data);
        const exists = watchlist.instruments.some(
          (item) => item.token === instrument.token,
        );

        if (!exists) {
          watchlist.instruments.push(instrument);
          await AsyncStorage.setItem(key, JSON.stringify(watchlist));
        }

        return { watchlistId, instrument };
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

// Remove instrument from watchlist
export const removeFromWatchlist = createAsyncThunk(
  "watchlist/removeInstrument",
  async (
    { watchlistId, token }: { watchlistId: number; token: string },
    { rejectWithValue },
  ) => {
    try {
      const key = `watchlistID:${watchlistId}`;
      const data = await AsyncStorage.getItem(key);

      if (data) {
        const watchlist: WatchlistPayload = JSON.parse(data);
        watchlist.instruments = watchlist.instruments.filter(
          (item) => item.token !== token,
        );
        await AsyncStorage.setItem(key, JSON.stringify(watchlist));

        return { watchlistId, token };
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

// Rename watchlist
export const renameWatchlist = createAsyncThunk(
  "watchlist/rename",
  async (
    { watchlistId, newName }: { watchlistId: number; newName: string },
    { rejectWithValue },
  ) => {
    try {
      const key = `watchlistID:${watchlistId}`;
      const data = await AsyncStorage.getItem(key);

      if (data) {
        const watchlist: WatchlistPayload = JSON.parse(data);
        watchlist.name = newName;
        await AsyncStorage.setItem(key, JSON.stringify(watchlist));

        return { watchlistId, newName };
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

// Set active watchlist
export const setActiveWatchlist = createAsyncThunk(
  "watchlist/setActive",
  async (watchlistId: number, { rejectWithValue }) => {
    try {
      await AsyncStorage.setItem("activeWatchlistID", watchlistId.toString());
      return watchlistId;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

const watchlistSlice = createSlice({
  name: "watchlistSlice",
  initialState,
  reducers: {
    setActiveWatchlistSync: (state, action) => {
      state.activeWatchlist = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(createWatchlists.pending, (state) => {
        state.loading = true;
      })
      .addCase(createWatchlists.fulfilled, (state, action) => {
        state.loading = false;
        state.watchlists = action.payload;
      })
      .addCase(createWatchlists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loadWatchlists.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadWatchlists.fulfilled, (state, action) => {
        state.loading = false;
        const payload = action.payload as any;
        if (payload.watchlists) {
          state.watchlists = payload.watchlists;
          state.activeWatchlist = payload.activeWatchlistId;
        } else {
          state.watchlists = payload;
        }
      })
      .addCase(loadWatchlists.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(addToWatchlist.fulfilled, (state, action) => {
        const { watchlistId, instrument } = action.payload;
        const watchlist = state.watchlists.find(
          (w) => w.watchlistId === watchlistId,
        );
        if (watchlist) {
          const exists = watchlist.instruments.some(
            (item) => item.token === instrument.token,
          );
          if (!exists) {
            watchlist.instruments.push(instrument);
          }
        }
      })
      .addCase(removeFromWatchlist.fulfilled, (state, action) => {
        const { watchlistId, token } = action.payload;
        const watchlist = state.watchlists.find(
          (w) => w.watchlistId === watchlistId,
        );
        if (watchlist) {
          watchlist.instruments = watchlist.instruments.filter(
            (item) => item.token !== token,
          );
        }
      })
      .addCase(renameWatchlist.fulfilled, (state, action) => {
        const { watchlistId, newName } = action.payload;
        const watchlist = state.watchlists.find(
          (w) => w.watchlistId === watchlistId,
        );
        if (watchlist) {
          watchlist.name = newName;
        }
      })
      .addCase(setActiveWatchlist.fulfilled, (state, action) => {
        state.activeWatchlist = action.payload;
      }),
});

export const { setActiveWatchlistSync } = watchlistSlice.actions;
export default watchlistSlice.reducer;
