// import { createSlice } from "@reduxjs/toolkit";

// type AiState = {
//     _id: string;
    
// }



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import api from '@/lib/api';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000', // Corrected URL
});

export const fetchBudgetSuggestions = createAsyncThunk(
  'ai/fetchBudget',
  async () => {
    const res = await api.get('/ai/budget-suggest');
    return res.data;
  }
);

const aiSlice = createSlice({
  name: 'ai',
  initialState: {
    budget: null,
    categoryPrediction: '',
    anomalies: [],
    chatHistory: [],
  },
  reducers: {
    setPrediction: (state, action) => {
      state.categoryPrediction = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBudgetSuggestions.fulfilled, (state, action) => {
      state.budget = action.payload;
    });
  },
});

export const { setPrediction } = aiSlice.actions;
export default aiSlice.reducer;
