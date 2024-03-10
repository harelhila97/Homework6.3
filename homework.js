//*קלוט שני ערכים והצג קודם את הערך הקטן ואת הערך הגדול אחריו )בשוויון הצג את
//שניהם(.

//var num = Number(prompt("enter number 1"));
//var num2 = Number(prompt("enter number 2"));

//if (num > num2) {
//   console.log("small num:" + num2);
//   console.log("big num:" + num);
//} else {
//console.log("small num:" + num);
//console.log("big num:" + num2);
//}

console.log("-------------------------------------------");
//בתור הקלט שלם בין 1 לבין .9,999 הצג את מספר ספרותיו.

//var num3 = Number(prompt("enter number with at most 4 digits"));
//if (parseInt(num3 / 10) == 0) {
//    console.log("the number is 1 digit");
//} else {
//    num3 = num3 / 10;
//    if (parseInt(num3 / 10) == 0) {
//       console.log("the number is 2 digit");
//    } else {
//       num3 = num3 / 10;
//        if (parseInt(num3 / 10) != 0) {
//            console.log("the number is 4 digit");
//        } else {
//            console.log("the number is 3 digit");
//       }
//   }
//}

console.log("-------------------------------------------");
//2 קלוט שני שלמים והצג את כל השלמים ביניהם )כולל( בסדר עולה.
//לא מובטח שהנתון השני גדול מהראשון.

//var num4 = Number(prompt("enter number 1"));
//var num5 = Number(prompt("enter number 2"));
//if (num4 > num5) {
//    while (num5 <= num4) {
//        console.log(num5);
//        num5 += 1;
//    }
//}else{
//    while (num5 >= num4) {
//       console.log(num5);
//        num5 = num5 - 1;
//    }
//}

console.log("-------------------------------------------");
//.3 קלוט מספר טבעי n.
//הצג את כל המספרים הזוגיים מ- 0 עד n( כולל אם הוא זוגי(. לא מובטח ש- n זוגי

//var num6 =Number(prompt("enter number 1"));
//var index1 = 0;
//if (num6%2 == 0) {
//    while (index1<=num6) {
//       console.log(index1);
//       index1 = index1 + 2;
//    }
//}else{
//    num6 = num6 - 1;
//    while (index1<=num6) {
//       console.log(index1);
//        index1 = index1 + 2;
//   }
//}

console.log("-------------------------------------------");
//קלוט מספרים אי-שליליים עד הזקיף )ערך סיום קלט( -99 והצג את סכומם.
var num7 = Number(prompt("enter number"));
var sum = 0;
while (num7 != -99) {
    sum = sum + num7;
    num7 = Number(prompt("enter number"));
}

console.log(sum);