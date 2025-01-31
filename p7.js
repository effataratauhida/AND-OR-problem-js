//সমস্যা ৭: ভোট দেওয়ার যোগ্যতা
//একটি ফাংশন তৈরি কর যা যাচাই করবে একজন ব্যক্তি ভোট দিতে পারে কিনা।
//ব্যক্তি ভোট দিতে পারবে যদি তার বয়স কমপক্ষে ১৮ এবং সে একজন নাগরিক হয়।

var age = 18;
var nationality = "Bangladeshi";

if ( age >= 18 && nationality === "Bangladeshi") {
    console.log("Eligible for vote");
} 
else {
    console.log("Not eligible for vote!");
}