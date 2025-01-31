//সমস্যা ৮: পড়াশোনার সময়
//তিনটি বুলিয়ান ভ্যারিয়েবল আছে:
//isWeekday: আজ সপ্তাহের দিন কিনা।
//isHomeworkDone: হোমওয়ার্ক শেষ হয়েছে কিনা।
//isDaytime: দিনের সময় কিনা।
//ফাংশনটি true রিটার্ন করবে যদি আজ সপ্তাহের দিন হয়, হোমওয়ার্ক শেষ থাকে, এবং দিনের সময় হয়।
 var isWeekday = "Thursday";
 var isHomeworkDone = "Done";
 var isDaytime = "Day";

if (isWeekday === "Sunday" || 
   isWeekday === "Monday" ||
   isWeekday === "Tuesday" ||
   isWeekday === "Wednesday" ||
   isWeekday === "Thursday" && isHomeworkDone === "Done" && isDaytime === "Day") {
   console.log("True");
}
else {
   console.log("False");
}
