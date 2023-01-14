
accordian = document.querySelectorAll(".accordian")
accordianTitle = document.querySelectorAll(".accordian-title")
accordianText = document.querySelectorAll(".accordian-text")
for (let i = 0; i < accordian.length; i++) {
    clicked = false
    accordianTitle[i].addEventListener("click", function() {
        if (clicked) {
            accordianText[i].style.height = "0"
            accordianText[i].style.backgroundColor = "rgba(50,50,50,0.0)"
        } else {
            accordianText[i].style.height = "95%"
            accordianText[i].style.backgroundColor = "rgba(50,50,50,0.3)"
        }
        clicked = !clicked
    })
}