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
        "progress": 60,
        "sub_tasks": [
          {
            "sub_task_id": 1,
            "sub_task": "a small descriprion about the subtask",
            "is_complete": false
          },
          {
            "sub_task_id": 2,
            "sub_task": "a small descriprion about the subtask",
            "is_complete": false
          },
          {
            "sub_task_id": 3,
            "sub_task": "a small descriprion about the subtask",
            "is_complete": false
          },
        ]
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
        "progress": 90,
        "sub_tasks": [
          {
            "sub_task_id": 1,
            "sub_task": "a small descriprion about the subtask",
            "is_complete": false
          },
          {
            "sub_task_id": 2,
            "sub_task": "a small descriprion about the subtask",
            "is_complete": false
          },
          {
            "sub_task_id": 3,
            "sub_task": "a small descriprion about the subtask",
            "is_complete": false
          },
        ]
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
        "progress": 90,
        "sub_tasks": [
          {
            "sub_task_id": 1,
            "sub_task": "a small descriprion about the subtask",
            "is_complete": false
          },
          {
            "sub_task_id": 2,
            "sub_task": "a small descriprion about the subtask",
            "is_complete": false
          },
          {
            "sub_task_id": 3,
            "sub_task": "a small descriprion about the subtask",
            "is_complete": false
          },
        ]
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
        "progress": 30,
        "sub_tasks": [
          {
            "sub_task_id": 1,
            "sub_task": "a small descriprion about the subtask",
            "is_complete": false
          },
          {
            "sub_task_id": 2,
            "sub_task": "a small descriprion about the subtask",
            "is_complete": false
          },
          {
            "sub_task_id": 3,
            "sub_task": "a small descriprion about the subtask",
            "is_complete": false
          },
        ]
      },
    ],
    selected_task_data: undefined, 
  },

  reducers: {
    addNewTask: (state, action) => {
      console.log('form values inside add new tasks reducer', action, state)
      return { ...state, tasks: [...state?.tasks, action.payload]}
    },

    getTaskDetailsById: (state, action) => {
      const selectedTask = state?.tasks?.filter((task) => task?.id === action?.payload?.id)
      console.log("printing action", selectedTask, action);
      return { ...state, 
        // tasks: [...state?.tasks],
        selected_task_data: state?.tasks?.filter((task) => task?.id === action?.payload?.id)[0]
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addNewTask, getTaskDetailsById } = taskSlice.actions

export default taskSlice.reducer