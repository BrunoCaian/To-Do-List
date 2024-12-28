import { useState, useEffect } from "react"
import {db} from '../firebase.Config'
import {useAuth} from '../AuthProvider'
import {collection, query, where, getDocs, addDoc, deleteDoc, doc, updateDoc} from 'firebase/firestore'

export default function useTarefaList() {
    const [todos, setTodos] = useState([])
    const {currentUser} = useAuth()

    useEffect(() => {
        if(currentUser) {
            const fetchTodos = async () => {
                const q = query(collection(db, 'todos'), where('userId', '==', currentUser.uid))
                const querySnapshot = await getDocs(q)
                setTodos(querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id })))
            }
            fetchTodos()
        }
    }, [currentUser])

    const addTodo = async (todo) => {
        if(!currentUser) return
        const newTodo = {...todo, userId:currentUser.uid, isComplete: false}
        const docRef = await addDoc(collection(db, 'todos'), newTodo)
        setTodos((prevTodos) => [...prevTodos, {...newTodo, id:docRef.id}])
    }

    const removeTodo = async (id) => {
        await deleteDoc(doc(db, 'todos', id))
        setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id))
    }

    const completeTodo = async (id) => {
        const todoDocRef = doc(db, 'todos', id)
        await updateDoc(todoDocRef, {completed: true})
        setTodos((prevTodos) => prevTodos.map(todo => todo.id === id ? {...todo, completed: true} : todo))
    }
    return {todos, addTodo, removeTodo, completeTodo}
}