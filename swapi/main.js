const residentBtn = document.querySelector('button')
let putNamesHere = document.querySelector('#char-cards')

const clickedBtn = (event) => {
    event.preventDefault()
    // console.log('resident button pressed.')

    axios.get('https://swapi.dev/api/planets/?search=alderaan')
    .then((res)=> {
        
        let residentsArr = res.data.results[0].residents
        
        for (let i = 0; i < residentsArr.length; i++) {
            axios.get(residentsArr[i])
            .then ((res)=> {
                let newH2 = document.createElement('h2')
                newH2.textContent = `${res.data.name}`
                putNamesHere.appendChild(newH2)
            })
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

residentBtn.addEventListener('click', clickedBtn)