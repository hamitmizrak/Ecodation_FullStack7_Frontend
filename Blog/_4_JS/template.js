// alert("Denememe");
// window.alert("window.alert");
// document.write("data yazdıldı");

// interpreter nedir ?
// JS senkron yapı sistemi nedir ?
// JS asenkron yapabilmemiz için neler yapmamız gerekiyor. 

// JS: ister tek tırnak ister çift tırnak kullanabilirsiniz
// JS: case sensitive değildir.

// JS: client side ( Browser olmadan çalıştırmak ): Frontend
// JS: server side ( Node js ) : Backend

// single quote (Tek tırnak)   ==> ''
// double quote (Çift tırnak)  ==> ""
// backtick                    ==> ``

// Hyphen       -
// camelCaseValue   
// PascalCaseValue

// console.log("Loglama");
// console.warn("Warning");
// console.error("error");
//console.info("info");

//Variable 
// isim sıfat kullanabilirsiniz.
//Global değişkendir.
// var _$degiskenAdi44="Kastamonu";
// console.log(_$degiskenAdi44);
//değişkenlerde
//sayı ile başlanmaz
//$ ve  _ haricinde özel karakter veremeyiz.
//üğşçöİ  vermeyelim.

// var data1=14525;
// console.log(data1);
// console.log(typeof data1);

// var data5=1452.52;
// console.log(data5);
// console.log(typeof data5);

// var data2= "Merhabalar";
// console.log(data2);
// console.log(typeof data2);

// var data3=[];
// console.log(data3);
// console.log(typeof data3);

// var data4={};
// console.log(data4);
// console.log(typeof data4);

// //whoisting
// value8=15155;
// var value8;
// console.log(value8)

//let      //ES6
//const   //ES6

//operator
// var number1=20;
// var number2=2;
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);

//increment postfix
// number2++;
// number2=number2+1;
// number2+=1;

//kullancııdan veri almak
// var userData=prompt("Lütfen adınız yazınız");
// console.log(userData)
// cast

// Kullanıcıdan aldığımız 2 veriyi toplama yapan JS algoritmasını yazınız ?
var number1,number2,result;
number1= Number(prompt("Lütfen 1.sayıyı giriniz"));
number2= Number(prompt("Lütfen 2.sayıyı giriniz"));
result=(number1+number2);
console.log(result)
