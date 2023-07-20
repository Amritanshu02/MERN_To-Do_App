import axios from "axios";

const baseUrl = "http://localhost:8000";

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log("data ---> ", data);
            setToDo(data)
        })
}

const addToDo = (text, setText, setToDo) => {
    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}

const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {
    axios
        .patch(`${baseUrl}/update`, { _id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}

const deleteToDo = async (_id, setToDo) => {

    try {
        const result = await axios.post(`${baseUrl}/delete`, { _id });
        getAllToDo(setToDo);
    } catch (error) {
        console.log(error);
    }
    // axios
    //     .post(`${baseUrl}/delete`, { _id })
    //     .then((data) => {
    //         getAllToDo(setToDo)
    //     })
    //     .catch((err) => console.log(err))
}

export { getAllToDo, addToDo, updateToDo, deleteToDo };