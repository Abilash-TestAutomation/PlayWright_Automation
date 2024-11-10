function profile(userName, isValid, dob, profileStatus) {
    if (profileStatus === void 0) { profileStatus = "Available"; }
    console.log("Profile Details: ".concat(userName, ", ").concat(isValid, ", ").concat(profileStatus, ", ").concat(dob));
}
profile("Nithya", true, "Aug 4");
