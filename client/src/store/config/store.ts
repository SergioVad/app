import { configureStore } from '@reduxjs/toolkit'
import { StateSchema } from '../types/stateSchema';
import { TaskSliceReducer } from '@/pages/main/model/slice/taskSlice';

const store = configureStore<StateSchema>({
  reducer: {
    tasks: TaskSliceReducer
  },
})
export type AppDispatch = typeof store.dispatch
export default store