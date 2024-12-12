// let reg = /(\d\d\d)(\d\d)(\d\d\d)(\d\d)(\d\d)/gm
// let  bum =  "+998996299999"
// console.log(bum.replace(reg ,"$1-$2-$3-$4$5"))

// let reg = /\A{1}\w?\Z{1}/g
// let str = "AZ"
// console.log(reg.test(str))
// shuni ishlomadim

// let mail = ["https://google.com"]
// let mailtest = /\https+\:\/\//
// let mailtest2 = /\http+\:\/\//
// for (let i = 0; i < mail.length; i++) {
//    if (mailtest.test(mail[i])||mailtest2.test(mail[i])) {
//      console.log(mail[i]+" "+"to'g'ri link")
//    }else{
//     console.log("link hato")
//    }
// }


// let nums = "4393298"
// let numstest = /\D/
// let num = !numstest.test(nums) ? "faqat raqam dan iborat" : "faqat raqam kiriting";
//   console.log(num)


// let tag = "<div>"
// let tagtest = /\<+\w+\>+/ 
// console.log(tagtest.test(tag));


// let pasport = "AA123456"
// let pasporttest = /[A-Z]{2}\d{6,6}/g
// console.log(pasporttest.test(pasport))