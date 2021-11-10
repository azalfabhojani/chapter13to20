// var name = ("azalfa");
// alert (name) 


// document.write ("<h1> JS Object Chapter all 14 to 20 </h1> ")


// document.write ("<h2> Chapter 13 to 16 </h2>");
// document.write ("<h2> ARRAYS </h2>");

// Q1
// var stu_names = { };

// // Q2
// var stu_arr = new array ( );

// // Q3
// var stri_arr =  ["name1" , "name2" , "name3" , "name4" , "name5" ];

// // Q4
// var num_arr = ( 1 , 2 , 3 , 4 , 5 );

// // Q5
// var boolean_arr = [ true , false];

// // Q6
// var mixed_arry = [ "animal" , 1 , true , undefined];

// Q7
// var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM" , "MS", "M.phil", "PhD"];
// for(var i = 0 ; i < qualifications.length; i++){
// document.write ( "<br>" +( i + 1 )+ ")" + qualifications [i] ); 
// }

// Q8
// var stud_name = ["Michael" , "John" , "Tony"];
// var score = [320 , 230 , 480];

// for (var i = 0 ; i < stud_name.length; i++ ){
// per = score[i] * 100/500;
// document.write ("<br> Score of " + stud_name [i] + " is " + score [i] + " .Percentage: " + per + "%");
// }

// Q10
// var stud_Score = [320,230,480,120];
// document.write( "Scores of Students :  " + " " + stud_Score + "<br>")
//  stud_Score.sort()
// document.write( "Ordered Scores of Student :  " + " " + stud_Score)

// Q11
// var cities = ["karachi" , "Lahore" , "Islamabad" , "Queeta" , "Peshawar"];
// var select_Cities = cities.slice(2,4)
// document.write(`<br> Cities list : <br> ${cities} <br> <br>  Selected Cities list <br> ${select_Cities}`)
                

// Q12
// var string = ["<br> This" , "is" , "my" , "cat"];
// document.write ("Array : <br>"  + string  + "<br> <br> ")

// var arr= string.join(" ")            
// document.write("String :<br>"+arr)


// // Q13
// var value = ["keyboard" , "mouse" , "printer" , "monitor"];
// document.write ("Devices: <br>" +value + "<br>");

// for(var i = 0 ; i<value.length;i++){
//     document.write(`<br> Out: <br> ${value[i]} <br>`)
// }

// // Q14
// var devices = ["keyboard" , "mouse" , "printer" , "monitor"];
// document.write ("devices: <br>" + devices + "<br> <br>" );
// document.write(`out : <br>${devices[3]} <br>out : <br>${devices[2]} <br>out : <br>${devices[1]} <br>out : <br>${devices[0]} <br>`)

// // Q15
// var mobiles = ["Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier"];
// document.write("<select>")
// for(var i=0;i<mobiles.length;i++){
//     document.write("<option>" + mobiles[i]  +"</option>")
// }            
// document.write("</select>")









// document.write ("<h1> chapter 17 to 20 </h1>");
// document.write ("<h2> ARRAYS AND LOOP </h2>");

// Q1
// var multiArry = [[]];

// Q2
// var multidiArry = new Array (3);

// multidiArry [0]=new Array (0 , 1 , 2 , 3)
// multidiArry [1]=new Array (1 , 0 , 1, 2)
// multidiArry [2]=new Array (2 , 1 , 0 , 1)

// document.write (multidiArry[0].join (" ") + "<br    />");
// document.write (multidiArry[1].join (" ") + "<br    />");
// document.write (multidiArry[2].join (" ") + "<br    />");
// document.write( " <hr> ")


// Q3
// for ( var i = 1; i <=10 ; i = i+ 1 ){
// document.write (i);
// document.write ("<br>");
// }

// Q4
// var tableNumber = +prompt ("Table Number");
// var tableLength = +prompt ("Table Length");

// document.write("Table Number: " + tableNumber + " " + "<br>" + "Table Length: " + tableLength + "<br>");

// for (var i = 1 ; i <= tableLength ; i++){
// document.write (tableNumber + " " + "x" + " " + i + " " + "=" + " " +tableNumber*i + "<br>");

// }

// Q5
// var fruits = ["apple" , "banana" , "mango" ,  "orange"  , "strawberry"];
// for (var i = 0 ; i < fruits.length; i++){
//  document.write (fruits[i] + "<br>")
// }
// for (var i = 0 ; i <fruits. length; i++){
//     document.write ("Element at index" + " " + i + " " + "is" + " " +fruits [i] + "<br>");
// }

// Q6
// document.write ("<h2> Counting: </h2>");
// for (var i = 1; i <= 15; i++) {
// document.write (  i + " , ");
// }

// document.write ("<h2> Reverse Counting: </h2>")
// for (var i = 10 ; i >= 1; i--){
//     document.write (i + " , ");
// }

// document.write ("<h2> Even: </h2>");
// for (var i = 0 ; i<= 20 ; i+=2){  
// document.write(i+ " , ");
// }

// document.write ("<h2> Odd:</h2>");
// for (var i = 1 ; i <= 19 ; i+=2){
// document.write (i + " , ");
// }

// document.write ("<h2> Series:</h2>");
// for (var i = 2 ; i <= 20 ; i+=2){
// document.write(i+ "k" + " , ");
// }

// Q7
// var menu = ["cake" , "apple pie" , "cookie" , "chips" , "patties"]
// var question = prompt ("Welcome to master Bakery : What do you want to order sir/ma'am?");
// var flag = true;
// for (var i = 0; i < menu.length; i++){
// if (question === menu [i]){
// document.write(question + " is <b> available </b> at index " + i +"in our bakery");
// flag = false;
// }
// }
// if (flag === true ){
//     document.write ("We are sorry:" + question + " is <b>not available </b> in our bakery");
// }

// Q8
// A =[24 , 53 , 78 , 91 ,12];
// var lar = 0;
// for (var i = 0; i < A.length; i++){ 
//     if (A[i] > lar){
//         lar =A[i];
//     }
// }
// document.write ("The largest number is:" + lar + "<br>");

// Q9
// A =[24 , 53 , 78 , 91 ,12];
// var smal = A [0];
// for (var i = 0 ; i < A.length ; i++){ 
//     if (smal > A[i])  {
//         smal = A[i];
//     }
// }
// document.write ("The Smallest number is:" + smal + "<br>");

// Q10
// for (var i = 5 ; i<=100 ; i = i+=5) {

//     document.write (i + " , ");


// }
















