console.log("Start Here 😉");

const darkSwitch = document.getElementById('dark')
const lightSwitch = document.getElementById('light')
const crazySwitch = document.getElementById('crazy')

const box = document.getElementById('box')

darkSwitch.addEventListener("click", () => {
    box.classList.add("dark")
    box.classList.remove("light")
    box.classList.remove("crazy")
})

lightSwitch.addEventListener("click", () => {
    box.classList.add("light")
    box.classList.remove("dark")
    box.classList.remove("crazy")
})

crazySwitch.addEventListener("click", () => {
    box.classList.add("crazy")
})

