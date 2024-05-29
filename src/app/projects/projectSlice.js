import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'projects',
  initialState: {
    projectList: [
        {
            project_name: 'Project Name',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
        {
            project_name: 'Project Name',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
        {
            project_name: 'Project Name',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
        {
            project_name: 'Project Name',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
        {
            project_name: 'Project Name',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
        {
            project_name: 'Project Name',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
        {
            project_name: 'Project Name',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
        {
            project_name: 'Project Name',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
        {
            project_name: 'Project Name',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
        {
            project_name: 'Project Name',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
        {
            project_name: 'Project Name',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
        {
            project_name: 'Project Name',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
        {
            project_name: 'Project Name',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
        {
            project_name: 'Project Name',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
    ],

  },

  reducers: {
    adddNewProject: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
    //   state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { adddNewProject } = taskSlice.actions

export default taskSlice.reducer