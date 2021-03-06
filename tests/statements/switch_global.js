// Mandatory. Return here a description of the test case.
function test_description() {
    return "While statement in global scope";
}

// Mandatory. Return here an array of arguments the testsuite will use 
// to invoke the test() function. For no arguments return an empty array.
function test_args() {
    return [];
}

// Mandatory. Return here the expected test result. 
function test_ok() {
    return 3;
}

// Optional. Provide here any global code.
var a=0, b="Bananas";

switch (b) {
   case "Oranges":
      a = 1;
      break;
   case "Apples": 
      a = 2; 
      break;
   case "Papayas": 
   case "Bananas": 
      a = 2.5;
      a = 3;  
      break;
   default:
      a = 4;  
}

// Mandatory. The actual test. 
// Testsuite invokes this function with the arguments from test_args()
// and compares the return value with the expected result from test_ok().
function test() {    
    return a;
}