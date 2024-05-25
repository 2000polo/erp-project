import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './tasks/taskSlice'

export default configureStore({
  reducer: {
    tasks: taskSlice,
  },
})