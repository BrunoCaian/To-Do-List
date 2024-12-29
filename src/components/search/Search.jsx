import styles from './Search.module.css'
export default function Search({search, setSearch}) {
    return (
        <div className={styles.search}>
            <h2 className={styles.title}>Pesquisar:</h2>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Digite para pesquisar' />
        </div>
    )
}