    import { createSlice } from '@reduxjs/toolkit'

    const taskSlice = createSlice({
        name: 'task',
        initialState: {
            list: []
        },
        reducers: {
            addTask: (state, action) => {
                const taskId = state.list.length + 1;
                const text = action.payload;
                const isDone = false;
                state.list.push({ id: taskId, text, isDone }); 
            },
            removeTask: (state, action) => {
                return{
                    ...state,
                    list: state.list.filter((e) => (e.id !== action.payload)),
                }
            },
            setDone: (state, action) => {
                return {
                    ...state,
                    list: state.list.map((e) => {
                
                        if (e.id === action.payload) {

                            return { ...e, isDone: true };
                        }
                        return e;
                    }),
                };
            },
            editTask: (state, action) => {
                return {
                    ...state,
                    list: state.list.map((e) => {
                        if (parseInt(e.id) === parseInt(action.payload.id)) {
                            return{ ...e, text: action.payload.text}
                        }
                        return e;
                    })
                }
            }
            
        }
    })

    export const { addTask, removeTask, setDone, editTask} = taskSlice.actions;

    export default taskSlice.reducer;