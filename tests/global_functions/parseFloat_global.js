// Mandatory. Provide here a description of the test case.
function test_description() {
    return "Global function 'parseFloat' in global scope";
}

// Mandatory. Provide here the arguments the testsuite will use 
// to invoke the test() function.
function test_args() {
    return [];
}

// Mandatory. Provide here the expected test result. 
function test_ok() {
    return 15.6;
}

// Optional. Provide here any global code.
var a = parseFloat("15.6");

// Mandatory. The actual test. 
// Testsuite invokes this function with the arguments from test_args()
// and compares the return value with the expected result from test_result().
function test() {
    return a;
}