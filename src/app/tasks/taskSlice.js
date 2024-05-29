import { createSlice } from '@reduxjs/toolkit'

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    value: 0,
    tasks: [
        { id: 1, category: 'Bug', assignee: 'Jon', age: 35, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 2, category: 'Feature', assignee: 'Cersei', age: 42, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 3, category: 'Feature', assignee: 'Jaime', age: 45, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 4, category: 'Feature', assignee: 'Arya', age: 16, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 5, category: 'Feature', assignee: 'Daenerys', age: null, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 6, category: 'Bug', assignee: null, age: 150, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 7, category: 'Bug', assignee: 'Ferrara', age: 44, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 8, category: 'Feature', assignee: 'Rossini', age: 36, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 9, category: 'Bug', assignee: 'Harvey', age: 65, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 8, category: 'Feature', assignee: 'Rossini', age: 36, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 9, category: 'Bug', assignee: 'Harvey', age: 65, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 8, category: 'Feature', assignee: 'Rossini', age: 36, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 9, category: 'Bug', assignee: 'Harvey', age: 65, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 8, category: 'Feature', assignee: 'Rossini', age: 36, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 9, category: 'Bug', assignee: 'Harvey', age: 65, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 8, category: 'Feature', assignee: 'Rossini', age: 36, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 9, category: 'Bug', assignee: 'Harvey', age: 65, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 8, category: 'Feature', assignee: 'Rossini', age: 36, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 9, category: 'Bug', assignee: 'Harvey', age: 65, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 8, category: 'Feature', assignee: 'Rossini', age: 36, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
        { id: 9, category: 'Bug', assignee: 'Harvey', age: 65, task: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestias itaque molestiae deleniti quis fugit expedita tempore culpa rerum, voluptatem dicta vitae, necessitatibus aliquid unde, velit fugiat id dignissimos. Itaque." },
    ]
  },

  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    addNewTask: (state, action) => {
      console.log("Add New Task Reducer", state, action)
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addNewTask } = taskSlice.actions

export default taskSlice.reducer