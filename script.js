$(document).ready(function(){
    // display the current day and time in the header of the website
    let todayDate = moment().format("ddd MMM Do, YYYY, hh:mm:ss")
    $("#currentDay").text(todayDate)
    console.log(todayDate)

    // variable based used for the time(hours)
    let check = parseInt(moment().format("HH"));
    console.log(check);

    // variable linked to the seperate time slots in the planner
    let $time9AM = $("#time9AM");
    let $time10AM = $("#tim10AM");
    let $time11AM = $("#time11AM");
    let $time12PM = $("#time12PM");
    let $time1PM = $("#time1PM");
    let $time2PM = $("#time2PM");
    let $time3PM = $("#time3PM");
    let $time4PM = $("#time4PM");
    let $time5PM = $("#time5PM");

    // if statement which determine the colour of the planner dependent on the time of day
    $("textarea").each(function(){
        let current = parseInt($(this).attr("name"));
        // if statement stating that if the time past the text box should turn grey
        if (current < check){
            $(this).addClass("past");
        }
        // if the time is now the time slot will turn red
        if (current === check){
            $(this).addClass("present");
        }
        // if statement used to change the text slot green since the time hasnt passed
        if (current > check){
            $(this).addClass("future");
        }
    })
    // this is where the local storage will be located and stored
    $("saveBtn").on("click",function(){
        localStorage.setItem("9AM",($time9AM.val()))
        localStorage.setItem("10AM",($time10AM.val()))
        localStorage.setItem("11AM",($time11AM.val()))
        localStorage.setItem("12PM",($time12PM.val()))
        localStorage.setItem("1PM",($time1PM.val()))
        localStorage.setItem("2PM",($time2PM.val()))
        localStorage.setItem("3PM",($time3PM.val()))
        localStorage.setItem("4PM",($time4PM.val()))
        localStorage.setItem("5PM",($time5PM.val()))
    })
    // present the local storage events entered into the text in box 
    $("#time9AM").append(localStorage.getItem("9AM"))
    $("#time10AM").append(localStorage.getItem("10AM"))
    $("#time10AM").append(localStorage.getItem("10AM"))
    $("#time12PM").append(localStorage.getItem("12PM"))
    $("#time1PM").append(localStorage.getItem("1PM"))
    $("#time2PM").append(localStorage.getItem("2PM"))
    $("#time3PM").append(localStorage.getItem("3PM"))
    $("#time4PM").append(localStorage.getItem("4PM"))
    $("#time5PM").append(localStorage.getItem("5PM"))
})

