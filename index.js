const colorPicker = document.getElementById('color-picker')
const submitBtn = document.getElementById('submit-btn')
const modeList = document.getElementById('mode-list')

colorPicker.addEventListener('input', () => {
  colorPicker.style.setProperty('--color', colorPicker.value)
})

submitBtn.addEventListener('click', (event) => {
  event.preventDefault()
  const colorPickerValue = colorPicker.value.substring(1).toUpperCase()
  const modeListValue = modeList.value.toLowerCase()
  const link = `https://www.thecolorapi.com/scheme?hex=${colorPickerValue}&mode=${modeListValue}`
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${colorPickerValue}&mode=${modeListValue}`
  )
    .then((response) => response.json())
    .then((data) => {
      let id = 1
      for (const color of data.colors) {
        renderColors(id, color.hex.value)
        id++
      }
    })
})

function renderColors(id, hexValue) {
  document.getElementById(`color-box-${id}`).style.background = hexValue
  document.getElementById(`color-label-${id}`).textContent = hexValue
}
