import { useState } from 'react'
import { useAuth } from '../../AuthProvider'
import styles from '../todoForm/TodoForm.module.css'
import TextInput from '../input/TextInput'

export default function TodoForm({ addTodo }) {
    const [value, setValue] = useState('')
    const [category, setCategory] = useState('')
    const [newCategory, setNewCategory] = useState('')
    const [categories, setCategories] = useState(['Trabalho', 'Pessoal', 'Estudos'])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value || !category) return
        addTodo({
            text: value,
            category
        })
        setValue('')
        setCategory('')
    }

    const handleAddCategory = (e) => {
        e.preventDefault()
        if (newCategory && !categories.includes(newCategory)) {
            setCategories([...categories, newCategory])
            setNewCategory('')
        }
    }

    return (
        <div id='todo-form' className={styles.TodoForm}>
            <h1 className={styles.h1}>Criar Tarefa:</h1>
            <form onSubmit={handleSubmit}>
                <TextInput id='todo' value={value} setValue={setValue} />
                <select
                    name="selectCategory"
                    id="selectCategory"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}

                >
                    <option value="">Selecione uma categoria</option>
                    {categories.map((cat, index) => (
                        <option key={index} value={cat}>{cat}</option>
                    ))}
                </select>
                <button className={styles.create} type="submit">Criar tarefa</button>
            </form>
            <form onSubmit={handleAddCategory}>
                <input
                    type='text'
                    placeholder='Nova Categoria'
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                />
                <button type='submit'>Adicionar Categoria</button>
            </form>
        </div>
    )
}