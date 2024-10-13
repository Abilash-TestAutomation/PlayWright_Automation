function profile(userName:string, isValid:boolean, dob?:string, profileStatus:string = "Available"){
    console.log(`Profile Details: ${userName}, ${isValid}, ${profileStatus}, ${dob}`);    
}

profile("Nithya", true, "Aug 4");