import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    value: 0,
    tasks: [
      {
        "id": 12,
        "taskName": "Bug Sample",
        "department": "Backend",
        "description": "A sample bug description goes here..",
        "assignee": "Developer 1",
        "priority": "Critical",
        "taskCategroy": "Bug",
        "labels": [
          {
              "title": "modification",
              "value": "modification"
          },
          {
              "title": "hot fix",
              "value": "hot_fix"
          },
          {
              "title": "suggestion",
              "value": "suggestion"
          }
        ],
        "status": 'open',
        "progress": 60
      },
      {
        "id": 13,
        "taskName": "Bug Sample",
        "department": "Backend",
        "description": "A sample bug description goes here..",
        "assignee": "Developer 1",
        "priority": "Critical",
        "taskCategroy": "Bug",
        "labels": [
          {
            "title": "feature",
            "value": "feature"
          },
          {
            "title": "good first issue",
            "value": "good_first_issue"
          },
          {
            "title": "modification",
            "value": "modification"
          },
        ],
        "status": 'closed',
        "progress": 90
      },
      {
        "id": 14,
        "taskName": "Bug Sample",
        "department": "Backend",
        "description": "A sample bug description goes here..",
        "assignee": "Developer 1",
        "priority": "Critical",
        "taskCategroy": "Bug",
        "labels": [
          {
              "title": "modification",
              "value": "modification"
          },
          {
              "title": "feature",
              "value": "feature"
          }
        ],
        "status": 'in progress',
        "progress": 90
      },
      {
        "id": 15,
        "taskName": "Bug Sample",
        "department": "Backend",
        "description": "A sample bug description goes here..",
        "assignee": "Developer 1",
        "priority": "Critical",
        "taskCategroy": "Bug",
        "labels": [
          {
              "title": "good first issue",
              "value": "good_first_issue"
          },
          {
              "title": "hot fix",
              "value": "hot_fix"
          },
          {
              "title": "suggestion",
              "value": "suggestion"
          }
        ],
        "status": 'closed',
        "progress": 30
      },
    ]
  },

  reducers: {
    addNewTask: (state, action) => {
      console.log('form values inside add new tasks reducer', action, state)
      return { ...state, tasks: [...state?.tasks, action.payload]}
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addNewTask } = taskSlice.actions

export default taskSlice.reducer