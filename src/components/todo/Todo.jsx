import styles from './Todo.module.css'
export default function Todo({ todo, onRemove, onComplete }) {
    return (
        <div className={`${styles.todo} ${todo.completed ? styles.completed : ''}`}>
            <div className={styles.content}>
                <p className={styles.text}>{todo.text}</p>
                <p className={styles.category}>({todo.category})</p>
            </div>
            <div>
                <button onClick={onComplete}  className={styles.complete}>Completar</button>
                <button onClick={onRemove} className={styles.remove}>Excluir</button>
            </div>

        </div>
    )
}