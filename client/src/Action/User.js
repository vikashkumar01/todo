import axios from "axios";


export const loginUser = (email, password) => async (dispatch) => {
    try {

        dispatch({
            type: "LoginRequest",
        });

        const { data } = await axios.post("/api/auth/login", { email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },

            }

        );

        dispatch({
            type: "LoginSuccess",
            payload: data.user,

        });
    }
    catch (error) {
        dispatch({
            type: "LoginFailure",
            payload: error.reponse.data.message
        })
    }
}

export const registerUser = (username, email, password) => async (dispatch) => {
    try {

        dispatch({
            type: "RegisterRequest",
        });

        const { data } = await axios.post("/api/auth/register", { username, email, password },
            {
                headers: {
                    "Content-Type": "application/json",
                },

            }

        );

        dispatch({
            type: "RegisterSuccess",
            payload: data.user,

        });
    }
    catch (error) {
        dispatch({
            type: "RegisterFailure",
            payload: error.reponse.data.message
        })
    }
}

export const logoutUser = () => async (dispatch) => {
    try {
      dispatch({
        type: "LogoutUserRequest",
      });
  
      await axios.get("/api/todos/logout");
  
      dispatch({
        type: "LogoutUserSuccess",
      });
    } catch (error) {
      dispatch({
        type: "LogoutUserFailure",
        payload: error.response.data.message,
      });
    }
  };

export const getUser = () => async (dispatch) => {
    try {

        dispatch({
            type: "LoadUserRequest",
        });

        const { data } = await axios.get("/api/todos/getUser");

        dispatch({
            type: "LoadUserSuccess",
            payload: data.user,

        });
        console.log(data.user);
    }
    catch (error) {
        dispatch({
            type: "LoadUserFailure",
            payload: error.message,
        })
    }
}



export const addTask = (title, description) => async (dispatch) => {
    try {

        dispatch({
            type: "AddTaskRequest",
        });

        const { data } = await axios.post("/api/todos/createTodo", {title,description },
            {
                headers: {
                    "Content-Type": "application/json",
                },

            }

        );

        dispatch({
            type: "AddTaskSuccess",
            payload: data.user,

        });
    }
    catch (error) {
        dispatch({
            type: "AddTaskFailure",
            payload: error.reponse.data.message
        })
    }
}

export const deleteTodo = (id) => async (dispatch) => {
    try {

        dispatch({
            type: "DeleteTaskRequest",
        });

        const { data } = await axios.delete("/api/todos/deleteTodo/"+id);

        dispatch({
            type: "DeleteTaskSuccess",
            payload: data.message,

        });
    }
    catch (error) {
        dispatch({
            type: "DeleteTaskFailure",
            payload: error.reponse.data.message
        })
    }
}

export const getTodo = (id) => async (dispatch) => {
    try {

        dispatch({
            type: "SingleTaskRequest",
        });

        const { data } = await axios.get("/api/todos/fetchTodo/"+id);

        dispatch({
            type: "SingleTaskSuccess",
            payload: data.todo,

        });
    }
    catch (error) {
        dispatch({
            type: "SingleTaskFailure",
            payload: error.reponse.data.message
        })
    }
}

export const editTodo = (id,title,description) => async (dispatch) => {
    try {

        dispatch({
            type: "EditTaskRequest",
        });

        const { data } = await axios.put("/api/todos/updateTodo/"+id,{title,description },
        {
            headers: {
                "Content-Type": "application/json",
            },
        });

        dispatch({
            type: "EditTaskSuccess",
            payload: data.message,

        });
    }
    catch (error) {
        dispatch({
            type: "EditTaskFailure",
            payload: error.reponse.data.message
        })
    }
}

export const getTask = () => async (dispatch) => {
    try {

        dispatch({
            type: "GetTaskRequest",
        });

        const { data } = await axios.get("/api/todos/fetchTodos");

        dispatch({
            type: "GetTaskSuccess",
            payload: data.todos,

        });
    }
    catch (error) {
        dispatch({
            type: "GetTaskFailure",
            payload: error,
        })

        console.log(error.message)
    }
}

