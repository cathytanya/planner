$(document).ready(function(){
    // display the current day and time in the header of the website
    let todayDate = moment().format("ddd MMM Do, YYYY, hh:mm:ss")
    $("#currentDay").text(todayDate)
    console.log(todayDate)

    // variable based used for the time(hours)
    let check = parseInt(moment().format("HH"));
    console.log(check);

    // variable linked to the seperate time slots in the planner
    let t9 = localStorage.getItem("9am");
    $("#time9am").text(t9);
    console.log(t9);
    let t10 = localStorage.getItem("10am");
    $("#tim10am").text(t10);
    let t11 = localStorage.getItem("11am");
    $("#time11am").text(t11);
    let t12 = localStorage.getItem("12pm");
    $("#time12pm").text(t12);
    let t1 = localStorage.getItem("1pm");
    $("#time1pm").text(t1);
    let t2 = localStorage.getItem("2pm");
    $("#time2pm").text(t2);
    let t3 = localStorage.getItem("3pm");
    $("#time3pm").text(t3);
    let t4 = localStorage.getItem("4pm");
    $("#time4pm").text(t4);
    let t5 = localStorage.getItem("5pm");
    $("#time5pm").text(t5);

    // if statement which determine the colour of the planner dependent on the time of day
    $("textarea").each(function(){
        let current = parseInt($(this).attr("nameHour"));
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
        let info = $(this).siblings(".description").val();
        let time = $(this).siblings(".hour").text();
        localStorage.setItem(time,info);
        $("this").siblings(".description").textContent(localStorage.value);
    })
    
    // present the local storage events entered into the text in box 
    $("#time9am").append(localStorage.getItem("9am"))
    $("#time10am").append(localStorage.getItem("10am"))
    $("#time10am").append(localStorage.getItem("10am"))
    $("#time12pm").append(localStorage.getItem("12pm"))
    $("#time1pm").append(localStorage.getItem("1pm"))
    $("#time2pm").append(localStorage.getItem("2pm"))
    $("#time3pm").append(localStorage.getItem("3pm"))
    $("#time4pm").append(localStorage.getItem("4pm"))
    $("#time5pm").append(localStorage.getItem("5pm"))
})

