//listing element
document.getElementById("resumeForm")?.addEventListener("submit", function(event){
  event.preventDefault();

  // Type assertion and fixing typos in variable names
  const nameElement = document.getElementById("name") as HTMLInputElement;
  const emailElement = document.getElementById("email") as HTMLInputElement;
  const phoneElement = document.getElementById("phone") as HTMLInputElement;
  const educationElement = document.getElementById("education") as HTMLInputElement;
  const experienceElement = document.getElementById("experience") as HTMLInputElement;
  const skillsElement = document.getElementById("skills") as HTMLInputElement;
  const addressElemnt = document.getElementById("address") as HTMLInputElement

  // Check if all elements are present
  if (nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && addressElemnt) {
      const name = nameElement.value;
      const email = emailElement.value;
       const phone = phoneElement.value;
       const address = addressElemnt.value;
      const education = educationElement.value;
      const experience = experienceElement.value;
      const skills = skillsElement.value;

      // Create Resume output
      const resumeOutput = `
        <h2>Resume</h2>
      <p>  <strong>Name:</strong>   ${name}</p>
      <p><strong>Email : </strong> ${email}</p>
      <p><strong> Phone:  Number:</strong> ${phone}</p>
      <p><strong> Address:</strong> ${address}</p>
      <h3>  Education</h3>
      <p> ${education}</p>
      <h3>Experience </h3>
       <p>${experience}</p>
     <h3>Skills</h3>
      <p>${skills}</p>
      `;

      const resumeOutputElement = document.getElementById("resumeOutput");
      if (resumeOutputElement) {
          resumeOutputElement.innerHTML = resumeOutput;
      } else {
          console.error('The resume output element is missing.');
      }
  } else {
         console.error("One or more input elements are missing.");
  }
});