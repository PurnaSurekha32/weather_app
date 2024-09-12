
let form = document.getElementById("parent-form")
let CityName = document.getElementById("City-name")
let CityTemp = document.getElementById("City-temp")
let apiKey = "e4d64f6c341cec286d8d66099ad70863"
form.addEventListener("submit", (event) => {
    event.preventDefault()
    CityTemp.innerHTML = ""
    //console.log("city name is: ",CityName.value)
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${CityName.value}&appId=${apiKey}&units=metric`
    fetch(url)
        .then((res) => {
            console.log(res)
            return res.json()
        })
        .then((res) => {
            console.log(res)
            if (res.cod === "404") {
                alert("City name not found")
            }
            else {
                let { main, name, sys } = res
                let div = document.createElement("div")
                div.classList.add("city")
                const result = `
                    <h1>${name}</h1>
                    <p>
                        Temp:${main.temp}<sup>0</sup>C <br>
                        country:${sys.country}
                    </p>`
                div.innerHTML = result
                CityTemp.appendChild(div)
            }
        })
})
