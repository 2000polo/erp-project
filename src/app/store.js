import { configureStore } from '@reduxjs/toolkit'
import taskSlice from './tasks/taskSlice'
import projectSlice from './projects/projectSlice'

export default configureStore({
  reducer: {
    tasks: taskSlice,
    projects: projectSlice,
  },
});