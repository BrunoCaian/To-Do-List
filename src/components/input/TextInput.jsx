export default function TextInput({ id, value, setValue }) {
    return (
        <div>
            <input
                type="text"
                placeholder="Digite o titulo"
                id={id}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />

        </div>
    )
}