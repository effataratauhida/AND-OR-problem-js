//সমস্যা ৪: এলার্ম চালু
//তোমার কাছে একটি মোশন ডিটেক্টর এবং সিকিউরিটি সিস্টেম আছে। এলার্ম চালু হবে কেবল তখনই যদি:
//মোশন ডিটেক্টর বা সিকিউরিটি সিস্টেম চালু হয়, কিন্তু দুটোই একসাথে নয়।

var motionDetector = "on";
var securitySystem = "off";

if (motionDetector === "on" || securitySystem === "on") {
    console.log("Alarm is on");
}
else {
    console.log("Alarm is off!!!");
}