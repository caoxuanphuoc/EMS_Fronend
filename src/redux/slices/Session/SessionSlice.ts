import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { SessionApi } from '../../../Services/Session/sessionApi'
import { SessionData } from '../../../Services/Session/Dtos/SessionData'

export const SesionDataAction = createAsyncThunk(
    'session/getInfo',
    async () => {
        console.log("get sesion");

        const response = await SessionApi.GetDataSession()
        return response
    },
)
interface AuthState {
    data?: SessionData
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    error?: boolean
}

const initialState: AuthState = {
    data: undefined,
    loading: 'idle',
    error: false
}

export const SessionSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(SesionDataAction.pending, (state) => {
                state.loading = 'pending'
                state.error = false
            })
            .addCase(SesionDataAction.fulfilled, (state, action) => {
                state.data = action.payload.result;
                state.error = false
                state.loading = 'succeeded'
            })
            .addCase(SesionDataAction.rejected, (state) => {
                state.loading = 'failed';
                state.error = true

            })
    }
})
export default SessionSlice.reducer

