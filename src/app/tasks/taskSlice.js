import { createSlice, current } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    value: 0,
    tasks: [
      {
        "id": 1,
        "taskName": "Bug Sample 1",
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
        ],
        assigned_to: {
          avatar: 'https://img.freepik.com/free-vector/cute-monkey-with-baseball-bat-with-jacket-banana-cartoon-vector-icon-illustration-animal-nature_138676-5315.jpg?w=826&t=st=1702655648~exp=1702656248~hmac=152fbae129d172b152589001c718714c9e3ed3d2ecfee7eeab88a32a710bf486',
          name: 'Jame Drake',
          date: '12 Jan 2023'
        },
        assigned_by: {
          avatar: 'https://img.freepik.com/free-vector/cute-monkey-holding-banana-baseball-bat-stick-cartoon-vector-icon-illustration-animal-sport_138676-7050.jpg?w=826&t=st=1702657828~exp=1702658428~hmac=55d59be963a5fb55dbec392fd874bc6d503613796309e657990c4f675b42d398',
          name: 'Helen Jake',
          date: '12 Jan 2023'
        },
      },
      {
        "id": 2,
        "taskName": "Bug Sample 2",
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
        ],
        "assigned_to": {
          avatar: 'https://img.freepik.com/free-vector/cute-monkey-with-baseball-bat-with-jacket-banana-cartoon-vector-icon-illustration-animal-nature_138676-5315.jpg?w=826&t=st=1702655648~exp=1702656248~hmac=152fbae129d172b152589001c718714c9e3ed3d2ecfee7eeab88a32a710bf486',
          name: 'Jame Drake',
          date: '12 Jan 2023'
        },
        "assigned_by": {
          avatar: 'https://img.freepik.com/free-vector/cute-monkey-holding-banana-baseball-bat-stick-cartoon-vector-icon-illustration-animal-sport_138676-7050.jpg?w=826&t=st=1702657828~exp=1702658428~hmac=55d59be963a5fb55dbec392fd874bc6d503613796309e657990c4f675b42d398',
          name: 'Helen Jake',
          date: '12 Jan 2023'
        },
      },
      {
        "id": 3,
        "taskName": "Bug Sample 3",
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
        ],
        "assigned_to": {
          avatar: 'https://img.freepik.com/free-vector/cute-monkey-with-baseball-bat-with-jacket-banana-cartoon-vector-icon-illustration-animal-nature_138676-5315.jpg?w=826&t=st=1702655648~exp=1702656248~hmac=152fbae129d172b152589001c718714c9e3ed3d2ecfee7eeab88a32a710bf486',
          name: 'Jame Drake',
          date: '12 Jan 2023'
        },
        "assigned_by": {
          avatar: 'https://img.freepik.com/free-vector/cute-monkey-holding-banana-baseball-bat-stick-cartoon-vector-icon-illustration-animal-sport_138676-7050.jpg?w=826&t=st=1702657828~exp=1702658428~hmac=55d59be963a5fb55dbec392fd874bc6d503613796309e657990c4f675b42d398',
          name: 'Helen Jake',
          date: '12 Jan 2023'
        },
      },
      {
        "id": 4,
        "taskName": "Bug Sample 4",
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
        ],
        "assigned_to": {
          avatar: 'https://img.freepik.com/free-vector/cute-monkey-with-baseball-bat-with-jacket-banana-cartoon-vector-icon-illustration-animal-nature_138676-5315.jpg?w=826&t=st=1702655648~exp=1702656248~hmac=152fbae129d172b152589001c718714c9e3ed3d2ecfee7eeab88a32a710bf486',
          name: 'Jame Drake',
          date: '12 Jan 2023'
        },
        "assigned_by": {
          avatar: 'https://img.freepik.com/free-vector/cute-monkey-holding-banana-baseball-bat-stick-cartoon-vector-icon-illustration-animal-sport_138676-7050.jpg?w=826&t=st=1702657828~exp=1702658428~hmac=55d59be963a5fb55dbec392fd874bc6d503613796309e657990c4f675b42d398',
          name: 'Helen Jake',
          date: '12 Jan 2023'
        },
      },
      {
        "id": 5,
        "taskName": "Bug Sample 5",
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
        "status": 'halted',
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
        ],
        "assigned_to": {
          avatar: 'https://img.freepik.com/free-vector/cute-monkey-with-baseball-bat-with-jacket-banana-cartoon-vector-icon-illustration-animal-nature_138676-5315.jpg?w=826&t=st=1702655648~exp=1702656248~hmac=152fbae129d172b152589001c718714c9e3ed3d2ecfee7eeab88a32a710bf486',
          name: 'Jame Drake',
          date: '12 Jan 2023'
        },
        "assigned_by": {
          avatar: 'https://img.freepik.com/free-vector/cute-monkey-holding-banana-baseball-bat-stick-cartoon-vector-icon-illustration-animal-sport_138676-7050.jpg?w=826&t=st=1702657828~exp=1702658428~hmac=55d59be963a5fb55dbec392fd874bc6d503613796309e657990c4f675b42d398',
          name: 'Helen Jake',
          date: '12 Jan 2023'
        },
      },
    ],
    selected_task_data: undefined, 
    kanbanData: {}
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
    },

    updateTaskById: (state, action) => {
      console.log("printing payload", action?.payload);
      // return { ...state, 
      //   tasks: state?.tasks?.map((task) => {
      //     if( task?.id === action?.payload?.id){
      //       return { ...task, sub_tasks: [...task?.sub_tasks, action?.payload?.data]}
      //     }
      //     return task
      //   })
      // }
      const updatedTasks = state?.tasks?.map((task) => {
        if (task?.id === action?.payload?.id) {
            console.log("Updating task:", task);
            return { 
                ...task, 
                sub_tasks: [...task?.sub_tasks, action?.payload?.data] 
            };
        }
        return task;
      });

      const updatedSelectedTask = state.selected_task_data?.id === action.payload.id
        ? {
            ...state.selected_task_data,
            sub_tasks: [...state.selected_task_data?.sub_tasks, action.payload.data]
          }
        : state.selected_task_data;

      console.log("Updated Tasks:", updatedTasks);

      return { 
          ...state, 
          tasks: updatedTasks,
          selected_task_data: updatedSelectedTask
      };
    },

    getKanbanData: (state, action) => {
      let kanbanData = {
        'open': [],
        'closed': [],
        'in progress': [],
        'halted': []
      };

      state?.tasks?.map((task) => {
        console.log(task.status, state);
        if (!kanbanData[task.status]) {
          kanbanData[task.status] = [];
        }
        
        kanbanData?.[task?.status]?.push(task)
        return {...kanbanData, [task?.status]: task}
        // return {...state, kanbanData: {...state?.kanbanData, [task?.status]: [...state?.kanbanData?.[task?.status], task]}}
      })

      console.log("kanbanData inside reducer", kanbanData)

      return {...state, kanbanData: kanbanData}
    },

    updateTaskStatus: (state, action) => {
      // Find current Task from tasks using payload?.id
      const currentTask = state?.tasks?.filter((task) => task?.id === action?.payload?.id);
      // And find the current status of the task and remove it from the previous status key in 
      // kanabnData
      // Add the current task to the changed status in kanban
      if( currentTask[0]?.status !== action?.payload?.column){
        return {
          ...state, 
          kanbanData: {
            ...state?.kanbanData, 
            [currentTask[0]?.status]: state?.kanbanData?.[currentTask[0]?.status]?.filter((task) => {
              return task?.id !== action?.payload?.id;
            }),
            [action?.payload?.column]: [
              ...state?.kanbanData?.[action?.payload?.column], 
              {...currentTask[0], status: action?.payload?.column}
            ]
            // [action?.payload?.column]: state?.kanbanData?.[action?.payload?.column]?.filter((task) => action?.payload?.id !== task?.id) 
          },
          tasks: [
            ...state?.tasks?.filter((task) => task?.id !== action?.payload?.id),
            {...currentTask[0], status: action?.payload?.column}
          ]
        }
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addNewTask, getTaskDetailsById, updateTaskById, getKanbanData, updateTaskStatus } = taskSlice.actions

export default taskSlice.reducer