
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



 