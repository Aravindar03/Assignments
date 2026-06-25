//Testcase1 
console.log("Test Case 1 Execution Starts")
loginToApplication("Chrome","Aravind","12345")

//Testcase2
console.log("Test Case 2 Execution Starts")
loginToApplication("Edge","Sarath","99999")



function loginToApplication(browserName,userName,passsword){
    console.log(`Open the browser ${browserName}`);
    console.log(`Login with username ${userName} and password ${passsword}`);
}