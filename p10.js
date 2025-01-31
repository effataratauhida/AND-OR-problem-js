//সমস্যা ১০: গেট পারমিশন
//একটি ফাংশন লেখ যা যাচাই করবে একজন ব্যক্তি গেট পাস করবে কিনা।
//ব্যক্তি গেট পার হবে যদি তার কাছে: পাস থাকে বা স্পেশাল কার্ড থাকে
//কিন্তু দুটো একসাথে থাকা যাবে না।

var gatePass = "true";
var specialCard = "false";

if ((gatePass === "true" || specialCard === "true") && !(gatePass === "true" && specialCard === "true")) {
    console.log("Get permission");
}
else {
    console.log("No permission!");
}