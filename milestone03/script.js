// const form= document.getElementById('resumeForm') as HTMLFormElement
// const resumeDisplayElement =document.getElementById('resume-display')as HTMLDivElement
// // HANDLE FORM SUBMISSION
// form.addEventListener('submit', (event:Event)=>{
//     event.preventDefault();
//     // prevent page load
//     // collect input values
//     const name= document.getElementById('name') as HTMLElement ;
//     const email= document.getElementById('name') as HTMLElement;
//      const phone= document.getElementById('name') as HTMLElement
//       const education= document.getElementById('name') as HTMLElement
//       const experience= document.getElementById('name') as HTMLElement
//       const skills= document.getElementById('name') as HTMLElement
//     //   generate resume dynamically
//     const resumeHTML = `
//     <h2><b>Resume </b></h2>
//     `
// })
// Select the form and display elements
var resumeForm = document.getElementById('resumeForm');
var resumeDisplay = document.getElementById('resume-display');
// Function to generate and display the resume
var generateResume = function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    // Get values from the input fields
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create a resume string
    var resume = "\n        <h2>Resume</h2>\n        <p><strong>Name:</strong> ".concat(name, "</p>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    ");
    // Display the resume
    resumeDisplay.innerHTML = resume;
};
// Add event listener to the form
resumeForm.addEventListener('submit', generateResume);
