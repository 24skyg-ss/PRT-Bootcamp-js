//  $(selector).acción()
//  elem_lista  ocultar
//$("li").hide()

//  title h1    ocultar
//$("li").hide()

//$(document).ready() => {
$(() => {
    //  Selectores:
    //  id="el-1" => "#el-1"
    //  class="el-1" => ".el-1"
    //  $("#el-1").hide()

    $(".hide-btn").click(() => {
        //$("h1").hide()
        $("h1").fadeOut()   //  Desvanecimiento
    })
    $(".show-btn").click(() => {
        //$("h1").show()
        $("h1").fadeIn()
    })

    //  dblclick : Doble click
    $("li").dblclick(() => {
        $("h1").css({ color: "red" })
    })

    $(".new-element").click(() => {
        $("ul").append("<li> New Element </li>")    //  Agregar abajo
        $("ul").prepend("<li> New Element </li>")   //  Agregar arriba
    })

    $("li").mouseenter((elem) => {
        elem.target.style.color = "blue"
    })

    $("li").mouseleave((elem) => {
        elem.target.style.color = "black"
    })
})
