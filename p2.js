//সমস্যা ২: বয়স যাচাই
//একটি ফাংশন তৈরি কর যা দুটি ইনপুট নেবে: বয়স এবং নাগরিকত্ব স্ট্যাটাস।
//ফাংশনটি true রিটার্ন করবে যদি ব্যক্তির বয়স ১৮ এর বেশি অথবা সে নাগরিক হয়।

var age = 15;
var nationality = "Bangladeshi";

if ( age > 18 || nationality === "Bangladeshi") {
    console.log("True");
} 
else {
    console.log("False");
}