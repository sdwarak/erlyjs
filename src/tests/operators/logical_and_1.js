function test_description() {
    return "Logical AND '&&' operator test";
}

function test_args() {
    return "";
}

function test_result() {
    return true;
}

function test() {
    var a=true, b=true, c;
    c = a && b;
    return c;
}