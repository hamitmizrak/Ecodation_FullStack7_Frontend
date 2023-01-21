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
// dynamics variable
// var number1,number2,result;
// number1= Number(prompt("Lütfen 1.sayıyı giriniz"));
// number2= Number(prompt("Lütfen 2.sayıyı giriniz"));
// result=(number1+number2);
// console.log(result);

// database,  socket,string %90
//console.log(Number(prompt("Lütfen 1.sayıyı giriniz"))+Number(prompt("Lütfen 2.sayıyı giriniz")));


//Sıklıkla göreceğimiz yapılar
//undefined: tanımsız
// var value1;
// console.log(value1)

//NaN: not a number (Sayı değildir)
// var value2=44/"asd";
// console.log(value2);

//isNaN: it is not a number: bu bir sayı değildir. 
//eğer false ise bu bir number. 
//eğer true ise bu bir string. 
// var value3="asd";
// console.log(isNaN(value3));

//Infinity: sonsuzluklar
//bir sayıyı saıfıra bölemezsiniz.
// var value4=44/0;
// console.log(value4);

//Math
//case sensitive
//üslü sayılar,karakök,yuvarlama, sin.cos etc
// console.log(Math.PI);
// console.log(Math.E);

// console.log(Math.sqrt(16));
// console.log(Math.pow(2,5));
// console.log(Math.abs(-9));
// console.log(Math.min(99,4,5,2,5,-1000));
// console.log(Math.max(99,4,5,2,5,-1000));

// console.log(Math.floor(6.99));
// console.log(Math.ceil(6.01));

// console.log(Math.round(6.5));
// console.log(Math.round(6.4));

// console.log(Math.sin(45));
// console.log(Math.sin(45));
// console.log(Math.sIN(45));  ==> YAZILMAZ.

// EV ÖDEVİ
// Math function kullanarak hesap makinesi yapalım.
// Kullanıcıdan alınan 2 tane veriye göre (+ - / * ) 4 işlem
// Kullanıcıdan alınan 2 veriye göre büyük olanın abs,sqrt,floor,ceil

//////////////////////////////////////////////////////////////////////////
//SAYILAR
let number1=14;
console.log(number1);//sayıyı göster
console.log(typeof number1); //türü
number2=Number(number1); //cast

//Math 
console.log( Math.round(Math.sqrt(number2)));

//random 
console.log(Math.round( Math.random()*4+1));



//KELIMELER