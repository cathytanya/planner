$(document).ready(function(){
    // display the current day and time in the header of the website
    let todayDate = moment().format("ddd MMM Do, YYYY, hh:mm:ss")
    $("#currentDay").text(todayDate)
    console.log(todayDate)

    // variable based used for the time(hours)
    let check = parseInt(moment().format("HH"));
    console.log(check);

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
    $(".saveBtn").on("click",function(){
        let agenda = $(this).sibling(".description").val();
        let time = $(this).sibling(".hour").text();
        localStorage.getItem(time,agenda);
        $("this").sibling(".description").textConteent(localStorage.value);

    })
    let hour9 = localStorage.getItem("9AM")
    let hour10 = localStorage.getItem("10AM")
    let hour11 = localStorage.getItem("11AM")
    let hour12 = localStorage.getItem("12PM")
    let hour1 = localStorage.getItem("1PM")
    let hour2 = localStorage.getItem("2PM")
    let hour3 = localStorage.getItem("3PM")
    let hour4 = localStorage.getItem("4PM")
    let hour5 = localStorage.getItem("5PM")
    // present the local storage events entered into the text in box 
    $("#time9AM").text(hour9)
    $("#time10AM").text(hour10)
    $("#time10AM").text(hour11)
    $("#time12PM").text(hour12)
    $("#time1PM").text(hour1)
    $("#time2PM").text(hour2)
    $("#time3PM").text(hour3)
    $("#time4PM").text(hour4)
    $("#time5PM").text(hour5)
})

