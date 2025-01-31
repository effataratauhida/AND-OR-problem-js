//সমস্যা ৫: গ্রেড যোগ্যতা
//একটি ফাংশন তৈরি কর যা স্টুডেন্টের রেজাল্ট দেখাবে।
//স্টুডেন্ট পাশ করবে যদি তার স্কোর: কমপক্ষে ৪০ হয় এবং ফেল না করে (৪০ থেকে ৫০ হলে লো পাস)।

var score = 25;

if (score >= 40 && score <= 50 ) {
    console.log("Low pass!!!");
}
else if ( score > 50){
    console.log("Pass");
}
else {
    console.log('Fail');
}