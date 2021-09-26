$(document).ready(function(){
    // display the current day and time in the header of the website
    let todayDate = moment().format("ddd MMM Do, YYYY, hh:mm:ss")
    $("#currentDay").text(todayDate)
    console.log(todayDate)

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


})

