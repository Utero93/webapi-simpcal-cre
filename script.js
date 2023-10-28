// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// step 2
const displayDateEl = $("#cur-date");
const displayTimeEl = $("#cur-time");

const currentHour = dayjs().format("H");

// step 1
const currentDate = dayjs().format("MMMM D, YYYY");  
const currentTime = dayjs().format("h:mm A");

// console.log(currentDate);
// console.log(currentTime);

// step 3
displayDateEl.append("Date: " + currentDate);
displayTimeEl.append("Time: " + currentTime); 


// Set color coding for time blocks


// Attach click event listener to save buttons
  var saveButtons = document.getElementsByClassName("save-btn");
  for (var j = 0; j < saveButtons.length; j++) {
    saveButtons[j].addEventListener("click", saveEvent);
  }

// Format hour in 12-hour format

function formatTime(hour) {
  if (hour < 12) {
    return hour + "am";
  } else if (hour === 12) {
    return "12pm";
  } else {
    return hour - 12 + "pm";
  }
}

// Save event to localStorage

$(".saveBtn").on("click", function(){
  let textArea = $(this).siblings(".description").val();
  console.log(textArea);

  let timeArea = $(this).parent().attr("id");
  console.log(timeArea);

  localStorage.setItem(timeArea, textArea);

})

for(let i = 9; i < 18; i++) {
  let localText = $("#hour-" + i + " .description");
  console.log(localText.val());

  localText.val(localStorage.getItem("hour-" + i));

}


// Update time block colors based on current time

 for(let i = 9; i < 18; i++) {
  let timeBlockEl = $("#hour-" + i + " .description");
  if (i < currentHour) {
    timeBlockEl.removeClass("present");
    timeBlockEl.removeClass("future");
    timeBlockEl.addClass("past");
  } else if (i == currentHour) {
    timeBlockEl.removeClass("past");
    timeBlockEl.removeClass("future");
    timeBlockEl.addClass("present");
  } else {
    timeBlockEl.removeClass("past");
    timeBlockEl.removeClass("present");
    timeBlockEl.addClass("future");
  }
 }



 // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.