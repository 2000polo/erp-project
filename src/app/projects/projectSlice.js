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
    adddNewProject: (state, action) => {
        console.log('form values inside add new project reducer', action, state)
        return { ...state, projectList: [...state?.projectList, action.payload]}
    },
  },
})

// Action creators are generated for each case reducer function
export const { adddNewProject } = taskSlice.actions

export default taskSlice.reducer