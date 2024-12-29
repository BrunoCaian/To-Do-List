import styles from './Filter.module.css'
export default function Filter({filter, setFilter, sort, setSort}) {
    return (
        <div className={styles.filter}>
            <h2 className={styles.title}>Filtrar:</h2>
            <div className={styles.filterOptions}>
                <div>
                    <p>Status:</p>
                    <select className={styles.select} value={filter} onChange={(e) => setFilter(e.target.value)}>
                        <option value="All">Todas</option>
                        <option value="Completed">Completas</option>
                        <option value="Incomplete">Incompletas</option>
                    </select>
                </div>
                <div>
                    <p className={styles.p}>Ordem alfabética:</p>
                    <button className={styles.btn} onClick={() => setSort('Asc')}>Asc</button>
                    <button className={styles.btn} onClick={() => setSort('Desc')}>Desc</button>
                </div>
            </div>
        </div>
    )
}