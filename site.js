// Create an object (myself)
var self = {
  fName: "Wanmin",
  lName: "Zhang",
  season: "Fall",
  year: "2019",
  fullOutput: function (){
    // Make use of the "this" keyword
    return this.fName + " " + this.lName + " " + this.season + " " + this.year;
  }
};

// Display data from object self in the header
document.getElementById("myHeader").innerHTML = self.fullOutput();

// Make function for my courses
function myCourses() {
  // Create an array for course categories
  let courseCat = ["COM", "COM", "COM", "ITMD", "ITMD"];
  // Create an array for course numbers
  let courseNum = ["372", "380", "428", "462", "463"];
  // Create an array for course titles
  let courseName = ["Mass Media Society", "Social Media & Society", "Verbal Visual Communications", "Website App Development", "Intermediate Web App Development"];

  // For loop to go through the arrays
  for (var i = 0; i < courseCat.length; i++) {
    document.write(courseCat[i].bold() + courseNum[i].bold() + "-" + courseName[i];
  }
}
