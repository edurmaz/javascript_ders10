/*=======OBJECTS (objeler)============*/

// objeler data typedir.
// objeler içerisine her türlü datayı alabilir. objectlerin içerisini değiştirebiliyoruz.
// objelerin içersinde sol kısmı variable(değişken) sağ kısmı ise değeridir.
// key value şeklinde adlandırılır.

// objeyi bu şekilde tanımlıyoruz.
// array'lerde köşeli parantez objlerde süslü parantez kullanıyoruz.
// dikkat edeceğimiz durum key ve value ler iki nokta(:) ile ayırıyoruz ve virgül kullanıyoruz.
// key de string olarak yazabiliyoruz.
const insan = {
    firstName: "ahmet",
    surName: "kara",
    age: 55,
    "family": "telli"
}
// tamamına bu şekilde ulaşıyoruz.
console.log(insan)

//  içeriğine bu şekilde ulaşabiliyoruz. sadece age 'e ulaştık.
console.log(insan.age)
console.log(insan.family)


// birde bu şekilde ulaşıyoruz.köşeli parantez ile mutlaka string olarak çağırıyoruz.
console.log(insan["firstName"])

let degisken = "age";
console.log(insan[degisken]) // insan["age"] şeklinde oluyor. dışarıdan harici bir değişkenle çağırma yoksa undefined yazar

const myCar = {
    brand: "Toyota",
    model: "2017",
    color: "red",         // standart bu şekilde object oluşturuyoruz.
    km: 86000,
    fuel: "benzin"
}
myCar.vites = "auto"  // obje nin içine bu şekilde ekleme yapabiliyoruz.
myCar.km = 87000; // objenin içini bu şekilde düzeltme/değiştirme yapabiliyoruz.
console.log(myCar)

// bu şekilde de obje oluşturabiliyoruz.

const myObj = new Object()
console.log(myObj)

const myObject = new Object()
myObject.name = "emre";
myObject.surname = "durmaz"
console.log(myObject)

// object constructer bu şekilde de object oluşturabiliyoruz. this. şekilde tanımlama yapıyoruz.

function carCreator(brand, model, color, km) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.km = km;
}
const honda = new carCreator("honda", "jazz", "blue", 60000);
console.log(honda)


/*===============    ============*/

const newBoot = {
    name: "fulstack",
    lessons: ["js", "react", "nodejs"],
    teachers: {
        teacher_1 :{
            name: "mustafa",
        },
        teacher_2: {
            name: "mehmet",
        }
    }
}

// object içinde object e bu şekilde ulaşıyoruz.
console.log(newBoot.teachers.teacher_1.name)

//object içindeki array'e bu şekilde ulaşıyoruz.
console.log(newBoot.lessons[0])

const user ={
    firstname : "mehmet",
    lastname : "akça",
    country : "turkey",
    upper : function () {
        return this.firstname.toUpperCase()     // this bu object e ait olan 
    } 
                            // methot kullanabiliyoruz . functionlar kastediliyor.
}
console.log(user.upper())


/* silme*/
// objenin içindeki key ve value yi tamamen silmek için bu şekilde yapıyoruz.
console.log(user)

delete user.country;
console.log(user)


/* looping */

// for...in objectlerde llopinlerde kullanılıyor

// bu for loop u ile object içerisinde her bir key e ve her bir değere ulaşabiliriz.
// bütün objectin öğelerine her türlü işlem yapabiliyoruz.

for (key in user) {          // bu bir döngüdür. user'ın içerisinde ne varsa onları bize gösterir (forin)
    console.log(key)          // key yerine başka bir tanımlamada yazabiliriz. Burada bize sol tarafı konsola yazdırıyor.
    console.log(user[key])   // bu şekilde
}

const person ={
    firstname : "ali",
    lastname : "kara",
    age : 25,
}
for (const key in person) {
    console.log(key)    // objectin keylerine bu şekilde ulaşabiliyoruz.
}


// bu methot içerisine bir object almak suretiyle objectlerin keylerini gösteriyor.

const keys = Object.keys(person)   // bir değişkene atayıp bu şekilde yazıyoruz. 
console.log(keys)                   // Object.keys() şeklinde yazıp objecti çağırırsak bize array olarak gösteriyor.

const values = Object.values(person)    // burda da bir değişkene atayıp objectlerin içindeki değerleri göstermek için yazıyoruz.
console.log(values)

const entries = Object.entries(person);  // entries de is hem key kısmını hemde value yi görebiliyoruz. array olarak gösteriyor.
console.log(entries)


/*======*/
//objectleri çokladığımız zaman kopyalarına da müdahale edebiliyoruz.

const newPerson = person; // objecti başka değişkene atayabiliyoruz.
console.log(newPerson)

// person.age = 34;
console.log(person) // objectlerde başka bir objeye atadığımız zaman yeni bir string kaydetmiş oluyoruz.Bir değeri değiştirdiğimiz zaman ikisinde değişir.
console.log(newPerson)



let newnew = "new";
const yeni =newnew;         // burdaki objeleri kopyaladığımız zaman içini değiştirdiğimizde hem yenisi hemde eskisi etkileniyor.
console.log(newnew , yeni)
newnew = "eski";
console.log(newnew , yeni)

let newArr = ["new", 5];
const yeniArr = newArr;
console.log(newArr, yeniArr)

const newPerson1 = person;
person.age = 34;

const copyPerson = Object.assign({}, person) // objelerin kopyasını almak için bu şekilde yapıyoruz. boş bir object ve objenin ismini yazıyoruz.
console.log(copyPerson)
person.age = 46;        // ilk atadığımız değerde yapılan değişiklik kopyaladığımzı etkilemez.
console.log(copyPerson)


console.log(copyPerson.hasOwnProperty("age")) // aradığımız eleman varmı diye kullanıyoruz. true yada false dönüyor.

/*==== tarih===*/

const today = new Date();   // bize bugünün tarihini verir.
console.log(today)

// özel bir tarih istiyorsak
const tarih = new Date ("12-02-2021")
console.log(tarih)
console.log(tarih.getDate())   // bu şekilde tarihleri konsola yazdırabiliyoruz.
console.log(tarih.getMonth())   // 1 ay az gösteriyor.
console.log(tarih.getFullYear()) 
console.log(tarih.toLocaleDateString())   // saati bulunduğumuz yerin lokaline göre çeviriyor. tarihi başka yerlerden çektiğimizde kullanıyoruz.



