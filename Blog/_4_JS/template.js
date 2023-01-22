// alert("Denememe");
// window.alert("window.alert");
// document.write("data yazdıldı");
// console.log("deneme")

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


// Sıklıkla göreceğimiz yapılar
// undefined: tanımsız
// var value1;
// console.log(value1)

// NaN: not a number (Sayı değildir)
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

// EV ÖDEVİ-1
// Math function kullanarak hesap makinesi yapalım.
// Kullanıcıdan alınan 2 tane veriye göre (+ - / * ) 4 işlem
// Kullanıcıdan alınan 2 veriye göre büyük olanın abs,sqrt,floor,ceil


// EV ÖDEVİ-2
// Math Ödev
// Kullanıcıda tarafından aldığımız 2 tane sayının
// s1-) Bu sayılardan en küçüğü nedir ?
// s2-) Bu sayılardan en büyüğü nedir ?
// s3-) Bu sayılardan en büyüğü karekökü nedir ?
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ?
// s5-) Bu sayılardan en küçüğü mutlak değeri nedir ?
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım

//////////////////////////////////////////////////////////////////////////
//SAYILAR
// let number1=14;
// console.log(number1);//sayıyı göster
// console.log(typeof number1); //türü
// number2=Number(number1); //cast

// //Math 
// console.log( Math.round(Math.sqrt(number2)));

// //random 
// console.log(Math.round( Math.random()*4+1)); // 1<=X<=4

// //bilimsel gösterim.
// let number3=140000;
// console.log(number3)

// let number4=14E+12;
// console.log(number4)

// //cast 1. Path
// let number5=Number("44");
// console.log(number5);

// //cast 2.path
// let number6=parseInt("44");
// console.log(number6);

// //sayı sistemleri
// let binaryData=0b11;
// console.log(binaryData);

// let octalData=0o11;
// console.log(octalData);

// let decimalData=1234565;
// console.log(decimalData);

// let hexadecimalData=0xA12CF;
// console.log(hexadecimalData);

// var k1=1422;
// console.log(k1);

// var k1=1515155;
// console.log(k1);

//w3school 
/////////////////////////////////////////////////////////////////
//KELIMELER
// let fullName=" Hamit Mızrak java Hamit";
// // boşluk bir karakter midir ?
// console.log(fullName);
// console.log(typeof fullName);

// console.log(fullName.toLowerCase());
// console.log(fullName.toUpperCase());

// console.log(fullName.length);
// console.log(fullName.trim().length);

// // bireysel ödev: Mehmet
// // indexOf ile search ikiside arama ancak ikisi arasındaki fark nedir ?
// console.log(fullName.indexOf("Hamit"));
// console.log(fullName.search("Hamit"));
// console.log(fullName.lastIndexOf("Hamit"));

// // bireysel ödev: Emine
// // charAt ile charCodeAt ikisi arasındaki fark nedir ?
// console.log(fullName.charAt(1));
// console.log(fullName.charCodeAt(1));

// console.log(fullName.startsWith(" "));
// console.log(fullName.endsWith("t"));

// console.log(fullName.substring(7));
// console.log(fullName.substring(1,13)); //1<=X<=13-1

// console.log(fullName.replace(fullName,"bütün data değişti"));

// fullName=fullName
//         .trim()
//         .substring(0,5)
//         .toUpperCase()
//         .charAt(0)
//         .concat(".INC")
// console.log(fullName);

// Örnek: Bir cümlede kendi isminiz geçiyorsa ilk geçen isminizi
// büyük karakterli olarak değiştirelim ?
// How are you today ? I am ok , and My name is Hamit and you? me too my name Hamit data.
// değişkene atama yaparak göstereceğiz. ?
// indexOf("Hamit") toUpperCase() ==>  replace()
let vocabulary="How are you today ? I am ok , and My name is Hamit and you? me too my name Hamit.";


//ÖDEV
// kullanıcı tarafından girilen bir kelimenin (prompt)
//S-1) Kaç karakterlidir ?
//S-2) boşluklar alınarak Kaç karakterlidir ?
//S-3) bütün kelimeyi küçük harfle göstermek ?
//S-4) bütün kelimeyi büyük harfle göstermek ?
//S-5) ilk harf nedir  ?
//S-6) girdiğiniz kelime java ile başlıyor mu  ?
//S-7) girdiğiniz kelimenin sonuna "-ben js öğreniyorum"   ?
//S-8) girdiğiniz 0 ile 4 arasındaki indexi ekranda gösterin   ?
//S-9) Kullanıcıdan alınan başka bir kelimeyle birinci olan kelimeyle yer değiştirmek ?

/////////////////////////////////////////////////////////////////parametresizReturnsuz
//Function
//1
function parametresizReturnsuz(){
    console.log("parametresiz Returnsuz");
}
parametresizReturnsuz()

//2
function parametreliReturnsuz(number){
    console.log("parametreli Returnsuz: "+Math.sqrt(number));
}
parametreliReturnsuz(16)

//3
function parametresizReturnlu(){
    return "parametresiz Returnlu"
}
let value3= parametresizReturnlu();
console.log(value3);



//4
function parametreliReturnlu(fullName){
    return "parametreli Returnlu "+fullName;
}
let value4= parametreliReturnlu("java");
console.log(value4)
