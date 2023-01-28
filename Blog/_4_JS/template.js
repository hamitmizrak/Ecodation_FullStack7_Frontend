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
// function parametresizReturnsuz(){
//     console.log("parametresiz Returnsuz");
// }
// parametresizReturnsuz()

// //2
// function parametreliReturnsuz(number){
//     console.log("parametreli Returnsuz: "+Math.sqrt(number));
// }
// parametreliReturnsuz(16)

// //3
// function parametresizReturnlu(){
//     return "parametresiz Returnlu"
// }
// let value3= parametresizReturnlu();
// console.log(value3);


// //4
// function parametreliReturnlu(fullName){
//     return "parametreli Returnlu "+fullName;
// }
// let value4= parametreliReturnlu("java");
// console.log(value4)


// Function ==>  parametreli Returnlu
// Örnek: Bir cümlede kendi isminiz geçiyorsa ilk geçen isminizi
// büyük karakterli olarak değiştirelim ?
// How are you today ? I am ok , and My name is Hamit and you? me too my name Hamit data.
// değişkene atama yaparak göstereceğiz. ?
// indexOf("Hamit") toUpperCase() ==>  replace()
let vocabulary = "How are you today ? I am ok , and My name is Hamit and you? me too my name Hamit.";

///////////////////////////////////////////////////////////

// Immediate function ()();
// (
//     function immediaFunction(){
//         console.log("Immediate Function")
//     }
// )();

// // Normal function 
// function normalFunction(){
//     console.log("normal Function")
// }
// normalFunction()

// // Anonymous function (ES5)
// let anonymousFunction= function (){
//     console.log("anonymous Function")
// }
// anonymousFunction()

// // Arrow function  (ES6)
// let arrowFunction= ()=>{
//     console.log("arrow Function ")
// }
// arrowFunction()

///////////////////////////////////////////////////////////
// Conditional (Karar mekanizması)
let conditionalFunction = () => {
    // Eğer kullanıcı adı karakter sayıyı 10 büyükse ekrana büyük 
    // yoksa küçük yazsın
    let fullName = "Servlet JSP JSF";
    if (fullName.length > 10) {
        console.log("büyük");
    } else {
        console.log("küçük");
    }

    //Kısaltma Ternary Operator(if-else)
    let result2 = (fullName.length > 10) ? "büyük" : "küçük";
    console.log(result2);
}
//conditionalFunction()
let conditionalFunction2 = () => {
    // saat örneği: 8 tane seçenek
    let numberData = 5;
    if (numberData == 1) {
        console.log("sayı 1");
    } else if (numberData == 2) {
        console.log("sayı 2");
    } else if (numberData == 3) {
        console.log("sayı 3");
    } else if (numberData == 4) {
        console.log("sayı 4");
    } else if (numberData == 5) {
        console.log("sayı 5");
    } else {
        console.log("1<=sayı<=5 dışındır");
    }
}
//conditionalFunction2()

// 1000 ms=1sn
// switch case
let conditionalFunction3 = () => {
    // saat örneği: 8 tane seçenek
    let numberData = 5;
    switch (numberData) {
        case 1:
            console.log("sayı 1");
            break;
        case 2:
            console.log("sayı 2");
            break;
        case 3:
            console.log("sayı 3");
            break;
        case 4:
            console.log("sayı 4");
            break;
        case 5:
            console.log("sayı 5");
            break;
        default:
            console.log("1<=sayı<=5 dışındır");
            break;
    }
}
//conditionalFunction3()

// return   ==> fonksiyonun durmasını sağlar.
// break    ==> döngünün durmasını sağlar
// continue ==> sadece o şarta çalışmaz hemen sonrasında devam eder.

//////////////////////////////////////////////////////
let loopData = () => {
    console.log(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 + 11 + 12 + 13 + 14 + 15 + 16 + 17 + 18 + 19 + 20);

    //FOR 
    //artırmada
    // i++;
    // i=i+1;
    // i+=1;
    let sum = 0;
    for (let i = 1; i <= 20; i++) {
        sum = sum + i;
    }
    console.log(sum);

    //WHILE 
    let sum2 = 0;
    let k = 1;
    while (k <= 20) {
        sum2 += k;
        k++;
    }
    console.log(sum2);
    //Fira  google 
    //DO-WHILE 
    let sum3 = 0;
    let m = 1;
    do {
        sum3 += m;
        m++;
    } while (m <= 20);
    console.log(sum3);
}
//loopData()

//DEBUG nasıl atılır ?
// For -if -break-continue-return examples 
//ÖDEV (if-else for break continue)
//Fonksiyonlarla
//Örnek: 1 ile kullanıcının vereceği (prompt) bitiş sayısına göre
//kullancı: 5 verdi diyelim 1<=X<=5
//1.adım: kaç tane sayı var ?
//2.adım: sayı toplamları var ?
//3.adım: kaç tane tek  sayı var ?
//4.adım: tek sayılar toplamı ?
//5.adım: tek sayılar gösterelim ?
//6.adım: kaç tane çift  sayı var ?
//7.adım: çift sayılar toplamı ?
//8.adım: çift sayılar gösterelim ?
//Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
//Eğer bitiş sayısı 100 fazla ise 100'e kadar olanlar toplansın  (break)
//Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim
//Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmayı direk durdursun

let numberOddEven = () => {
    let finishedNumber = Number(prompt("lütfen bitiş sayısını giriniz"));
    let counter = 0, sum = 0;
    let oddCounter = 0, oddSum = 0, oddShow = "";
    let evenCounter = 0, evenSum = 0, evenShow = "";

    try {
        for (let i = 1; i <= finishedNumber; i++) {
            counter++;
            sum += i;
            if (i % 2 == 1) {
                oddCounter += 1;
                oddSum += i;
                oddShow += i + " ";
            } else {
                evenCounter += 1;
                evenSum += i;
                evenShow += i + " ";
            }
        }
    } catch (error) {
        console.log(error);
        console.log(error.name);
        console.log(error.message);
    }
    console.log("sayı adedi:" + counter);
    console.log("toplam:" + sum);

    console.log("Tek sayılar:" + oddShow);
    console.log("Tek sayı adeti:" + oddCounter);
    console.log("Tek sayı toplamı:" + oddSum);
}
//numberOddEven()

////////////////////////////////////////////conditionalFunction
let data4 = () => {
    let result = 5 / 5;
    console.log(result);
    //Exception handling : try-catch-finally throw
    try {
        let result2 = 5 / 0;
        console.log(result2);
    } catch (error) {
        console.log(error.name);
    } finally {
        console.log("database.close");
        console.log("port.close");
    }

    console.log("continue...");
}
//data4()

let data5 = () => {
    let result = 5 / 5;
    console.log(result);
    //Exception handling : try-catch-finally throw
    try {
        merhabalar
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    } finally {
        console.log("database.close");
    }
    console.log("continue...");
}
//data5()
///////////////////////////////////////////

//NOT: örneklerimizi function,anonymous ve arrow function ile yapalım.
//NOT: değişken olarak var,let,const kullanalım.
//NOT: örneklerimizi function,anonymous ve arrow function ile yapalım.
//NOT: değişken olarak var,let,const kullanalım.
//Örnek-1
//y=3x+4k ==>1.dereceden 2bilinmeyenli denklem algoritması
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?

let degreeNot = () => {
    let x, k, y;
    x = Number(prompt("lütfen x değerini giriniz"));
    k = Number(prompt("lütfen k değerini giriniz"));
    y = 3 * x + 4 * k;
    window.alert("sonuc: " + y);
}
//degreeNot()


//örnek-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül: (derece*9/5)+32

let degreeToFahrenhayt = () => {
    let degree, fahrenhayt;
    degree = Number(prompt("lütfen dereceyi giriniz"));
    fahrenhayt = (degree * 9 / 5) + 32;
    window.alert("sonuc: " + fahrenhayt);
}
//degreeToFahrenhayt()

//örnek-3 operatör işlemleri: aşağıdaki örneği javascript ile yapalım
//4+3*2(3:3-1*6+9:1+(3:3))
//Örnek-4: Aşağıdaki örnekleri math ile çözelim ?
// -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
// 1-mutlak değeri alsın 5.9
// 2-yuvarlama yapsın  6.0
// 3-karesini alsın 36.00
// 4-karekök alsın 6.0
// 5-yuvarlama yapsın 6.0
// 6-)çıkan sonucu 5 bölsün 6/5=1
// 7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
// 8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin
// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?
//NOT: cast kullalım ?
// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
//eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım

/////////////////////////////////////////////////////////////////conditionalFunction
//Diziler
let arrayData = () => {
    let data1 = true;
    //console.log(typeof data1);


    let data2 = [1, 2, 3, 4, 5, 6];
    //console.log(typeof data2);
    // console.log(data2[0]);//diziler sıfırdan başlar
    // console.log(data2[5]);//diziler sıfırdan başlar
    // console.log("eleman sayısı:"+data2.length);


    // data2[7]=7;
    // console.log("son eleman: "+data2[data2.length-1]);

    //donguler: iterative loop 
    // 0        1 2 3 4 5
    let arrayData = ["Malatya", 2, 3, 4, 5, true];
    for (let i = 0; i < arrayData.length; i++) {
        console.log(arrayData[i]);
    }

}
//arrayData()


//Döngüler
let functionData2 = () => {

    let arrayData = ["Malatya", 2, 3, 4, 5, true];

    //1-) iterative loop
    // 0        1 2 3 4 5
    for (let i = 0; i < arrayData.length; i++) {
        console.log(arrayData[i]);
    }
    console.log("+++++++++++++++++++++++++\n*forIn*");


    //2-) for in:eleman sırasına erişmek 
    for (let temp in arrayData) {
        console.log(temp + " ==> " + arrayData[temp])
    }

    console.log("+++++++++++++++++++++++++\n*forOf*");

    //3-) for of: elemanlara erişmek
    for (let temp of arrayData) {
        console.log(temp)
    }

    console.log("+++++++++++++++++++++++++\n*forEach*");
    //4-) ForEach 
    arrayData.forEach(function (temp) {
        console.log(temp)
    });

    console.log("+++++++++++++++++++++++++\n*forEach*");
    //5-) ForEach 
    arrayData.forEach((temp) => {
        console.log(temp)
    });
}
//functionData2()

let functionData3 = () => {
    let arrayData = ["Malatya", "Ankara", "Konya", "Sivas"];

    arrayData.forEach((temp) => {
        console.log(temp)
    });

    //EKLEME
    console.log("+++++++++++++++++++++++++\n**");
    arrayData.push("Bitlis"); //sondan 1 eleman ekler
    arrayData.forEach((temp) => {
        console.log(temp)
    });

    console.log("+++++++++++++++++++++++++\n**");
    arrayData.unshift("İzmir");//baştan 1 eleman ekler
    arrayData.forEach((temp) => {
        console.log(temp)
    });

    //ÇIKARMA
    console.log("+++++++++++++++++++++++++\n**");
    arrayData.pop(); //sondan 1 eleman çıkartır
    arrayData.forEach((temp) => {
        console.log(temp)
    });

    console.log("+++++++++++++++++++++++++\n**");
    arrayData.shift();//baştan 1 eleman çıkartır
    arrayData.forEach((temp) => {
        console.log(temp)
    });
}
//functionData3()

let cityName = () => {
    return ["Malatya", "Ankara", "Konya", "Sivas"];
}

let functionData4 = () => {
    let copyArray = cityName();
    //sort :Küçükten büyüğe sıralamak
    copyArray.sort();
    copyArray.forEach((temp) => {
        console.log(temp)
    });

    console.log("*******************")
    //sort : büyükten küçüğe sıralamak
    copyArray.sort().reverse();
    copyArray.forEach((temp) => {
        console.log(temp)
    });
}
//functionData4() 

//toString() , join()
let functionData5 = () => {
    let copyArray = cityName();

    //toString() ==> String'e çevirir
    let str = copyArray.toString();
    console.log(str.toUpperCase().concat(" .INC"))

    //join() ==> String'e çevirir ancak bizim belirlediğimiz simgeyi ekler
    let str2 = copyArray.join(" , ");
    console.log(str2.toUpperCase().concat(" .XYZ"))
}
//functionData5()


//slice() : belirtilen yerden itibaren gösterir.
let functionData6 = () => {
    let copyArray = cityName();

    copyArray.forEach((temp) => {
        console.log(temp)
    });

    console.log("**************")

    cityName().slice(1).forEach((temp) => {
        console.log(temp.toUpperCase().substring(0,2))
    });
}
functionData6()

console.log("**************")

//splice() : belirlediğimiz yerden itibaren gösterilmesi
let functionData7= () => {
    let copyArray = cityName();

    copyArray.forEach((temp) => {
        console.log(temp)
    });

    console.log("**************")

    copyArray.splice(1).forEach((temp) => {
        console.log(temp.toUpperCase().substring(0,2))
    });

    console.log("**************")

     // copyArray.splice(2,1).forEach((temp) => {
    //     console.log(temp.toUpperCase().substring(0,2))
    // });
    //splice 2,1
    //2:başlama indisi
    //1:silinecek eleman sayısı
   
    console.log("**************")
}
functionData7()
