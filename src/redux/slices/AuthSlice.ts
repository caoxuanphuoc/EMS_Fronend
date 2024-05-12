import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { AuthApi } from '../../Services/Auth/AuthApi'
import { loginDto } from '../../Services/Auth/Dtos/loginDto'
import { errorData } from '../../Services/Common/ResponseBase'

export const loginAction = createAsyncThunk(
    'auth/loginAction',
    async (data: any) => {
        const response = await AuthApi.login(data)
        return response
    },
)
interface AuthState {
    data?: loginDto
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    error?: boolean
}

const initialState: AuthState = {
    data: undefined,
    loading: 'idle',
    error: false
}

export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loginAction.pending, (state) => {
                state.loading = 'pending'
                state.error = false
            })
            .addCase(loginAction.fulfilled, (state, action) => {
                state.data = action.payload.result;
                state.error = false
                state.loading = 'succeeded'
            })
            .addCase(loginAction.rejected, (state) => {
                state.loading = 'failed';
                state.error = true

            })
    }
})
export default AuthSlice.reducer

