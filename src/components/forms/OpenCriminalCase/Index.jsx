const OpenCriminalCase = () => {
    return (
        <>
        <form action="">
            <label for="suspeito">Principal suspeito: </label>
            <input type="text"/>
            <br /><br />
            <label for="tipoCrime">Tipo de crime: </label>
            <input type="text"/>
            <br /><br />
            <label for="localCrime">Local do crime: </label>
            <input type="text"/>
            <br /><br />
            <label for="data">Data: </label>
            <input type="text"/>
            <br /><br />
            <input type="submit" value="Enviar" />
        </form>
        </>
    )
}

export default OpenCriminalCase;