const ShowResult = (result, value)=> {
    const pagina = document.getElementsByTagName('body')[0]

    const scrollingResult = document.createElement('h4')
    const content = `-- d${value} = ${result} --`

    scrollingResult.innerHTML = content;

	pagina.appendChild(scrollingResult);
}

export default ShowResult