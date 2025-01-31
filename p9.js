//সমস্যা ৯: লগইন অনুমতি
//ব্যবহারকারী লগইন করতে পারবে যদি:
//সঠিক ইউজারনেম এবং পাসওয়ার্ড থাকে অথবা সে অ্যাডমিন হয়। এ শর্ত যাচাই করার ফাংশন লেখ।

var username = "effat";
var password = "123456";
var isAdmin = "";

if (username === "effat" && password === "123456" || isAdmin) {
    console.log("Login Successfully");
}
else {
    console.log("Invalid Info!");
}