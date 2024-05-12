import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ClassesApi } from '../../../Services/Classes/ClassesAPI'
import { PagedClassResultRequestDto } from '../../../Services/Classes/dto/PagedClassResultRequestDto'
import { PagedResultDto } from '../../../Services/Common/PagedResultDto'
import { GetAllClassOuput } from '../../../Services/Classes/dto/getAllClassOutput'

export const GetAllClassAction = createAsyncThunk(
    'class/GetAll',
    async (data: PagedClassResultRequestDto) => {
        const response = await ClassesApi.GetAllClass(data)
        return response
    },
)
interface AuthState {
    data?: PagedResultDto<GetAllClassOuput>
    loading: 'idle' | 'pending' | 'succeeded' | 'failed'
    error?: boolean
}

const initialState: AuthState = {
    data: undefined,
    loading: 'idle',
    error: false
}

export const ClassesSlice = createSlice({
    name: 'GetAll',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(GetAllClassAction.pending, (state) => {
                state.loading = 'pending'
                state.error = false
            })
            .addCase(GetAllClassAction.fulfilled, (state, action) => {
                state.data = action.payload.result;
                state.error = false
                state.loading = 'succeeded'
            })
            .addCase(GetAllClassAction.rejected, (state) => {
                state.loading = 'failed';
                state.error = true

            })
    }
})
export default ClassesSlice.reducer

