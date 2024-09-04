import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'projects',
  initialState: {
    projectList: [
        {
            project_name: 'Project Name 1',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
        {
            project_name: 'Project Name 2',
            desc: 'To be deliverd in 120 days',
            percentage_completion: 50,
            project_status: 'In Porgress'
        },
    ],
    projectNameList: [
        { title: 'Project Name 1', value: 'Project Name 1' },
        { title: 'Project Name 2', value: 'Project Name 2' },
    ]
  },

  reducers: {
    adddNewProject: (state, action) => {
        console.log('form values inside add new project reducer', action, state)
        return { 
            ...state, 
            projectList: [...state?.projectList, action.payload], 
            projectNameList: [
                ...state?.projectNameList, 
                {title: action.payload?.project_name, value: action.payload?.project_name }]}
    },
  },
})

// Action creators are generated for each case reducer function
export const { adddNewProject } = taskSlice.actions

export default taskSlice.reducer