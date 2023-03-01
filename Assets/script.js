$(function () {
  const box9 = document.getElementById("hour-9");
  const box10 = document.getElementById("hour-10");
  const box11 = document.getElementById("hour-11");
  const box12 = document.getElementById("hour-12");
  const box1 = document.getElementById("hour-1");
  const box2 = document.getElementById("hour-2");
  const box3 = document.getElementById("hour-3");
  const box4 = document.getElementById("hour-4");
  const box5 = document.getElementById("hour-5");
  const officeHours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  const boxOffice = [box9, box10, box11, box12, box1, box2, box3, box4, box5];
  const textArea = document.querySelectorAll(".description");

  $("#currentDay").text(dayjs().format("MMM,D,YYYY h:mm:ss")); // set current time in the top on load

  setInterval(function () {
    $("#currentDay").text(dayjs().format("MMM,D,YYYY h:mm:ss")); // updates time
    let now = dayjs().format("H");
    checkTime(now);
  }, 10);

  function checkTime(now) {
    // updates the boxes to the correct class
    for (let i = 0; i < officeHours.length; i++) {
      if (now > officeHours[i]) {
        $(boxOffice[i]).removeClass("future");
        $(boxOffice[i]).removeClass("present");
        $(boxOffice[i]).addClass("past");
      } else if (now == officeHours[i]) {
        $(boxOffice[i]).removeClass("future");
        $(boxOffice[i]).addClass("present");
        $(boxOffice[i]).removeClass("past");
      } else {
        $(boxOffice[i]).addClass("future");
        $(boxOffice[i]).removeClass("present");
        $(boxOffice[i]).removeClass("past");
      }
    }
  }

  $(".saveBtn").click(function () { // function for the save button
    console.log("Save Clicked " + $(this).parent("div").attr("id"));
    let eventDescription = $(this).siblings(".description").val();
    let eventTime = $(this).siblings(".hour").text();
    localStorage.setItem(eventTime, eventDescription);
  });

  for (let i = 0; i < textArea.length; i++) {
    textArea[i].value = localStorage.getItem(textArea[i].id);
    console.log(textArea[i].id);
  }
});