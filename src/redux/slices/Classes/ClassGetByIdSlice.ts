import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ClassesApi } from '../../../Services/Classes/ClassesAPI'
import { GetAllClassOuput } from '../../../Services/Classes/dto/getAllClassOutput'

export const ClassByIdAction = createAsyncThunk(
    'class/Get',
    async (data: number) => {
        const response = await ClassesApi.GetClassById(data)
        return response
    },
)
interface AuthState {
    data?: GetAllClassOuput
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    error?: boolean
}

const initialState: AuthState = {
    data: undefined,
    loading: 'idle',
    error: false
}

export const ClassGetByIdSlice = createSlice({
    name: 'Get',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(ClassByIdAction.pending, (state) => {
                state.loading = 'pending'
                state.error = false
            })
            .addCase(ClassByIdAction.fulfilled, (state, action) => {
                state.data = action.payload.result;
                state.error = false
                state.loading = 'succeeded'
            })
            .addCase(ClassByIdAction.rejected, (state) => {
                state.loading = 'failed';
                state.error = true

            })
    }
})
export default ClassGetByIdSlice.reducer

