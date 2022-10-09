/**
 * groupByCustom diye bir metod yazılacak.
 * array prototipe eklenecek tüm arraylarde çalışsın diye.
 * parametre olarak bir fonksiyon alacak bu metod.
 * parametre olarak aldığı fonksiyonun parametre konteksinde array item olacak.
 * return ettiği değere göre gruplanacak
 * (örneğin :people.groupByCustom( (item)=>item.name[0] ) dediğimde name fieldinin baş harfine göre gruplama yapacak)
 * (örneğin :people.groupByCustom( (item)=>item.age ) dediğimde age fielde göre gruplama yapacak)
 * 
 */

//İpucu 1: Array.prototype.groupByCustom =  dedikten sonra metodunuzu yazabilirsiniz

//örnek array
/*
const array = [
    {
        "name": "Marge Simpson",
        "gender": "f"
    },
    {
        "name": "Bart Simpson",
        "gender": "m"
    },
    {
        "name": "Lisa Simpson",
        "gender": "f"
    },
    {
        "name": "Moe Szyslak",
        "gender": "m"
    },
    {
        "name": "Seymour Skinner",
        "gender": "m"
    },
    {
        "name": "Ned Flanders",
        "gender": "m"
    },
    {
        "name": "Grampa Simpson",
        "gender": "m"
    },
    {
        "name": "Chief Wiggum",
        "gender": "m"
    },
    {
        "name": "Milhouse Van Houten",
        "gender": "m"
    },
    {
        "name": "Waylon Smithers",
        "gender": "m"
    },
    {
        "name": "Nelson Muntz",
        "gender": "m"
    },
    {
        "name": "Edna Krabappel-Flanders",
        "gender": "f"
    },
    {
        "name": "Announcer",
        "gender": "m"
    },
    {
        "name": "Selma Bouvier",
        "gender": "f"
    },
    {
        "name": "Barney Gumble",
        "gender": "m"
    },
    {
        "name": "Patty Bouvier",
        "gender": "f"
    },
    {
        "name": "Martin Prince",
        "gender": "m"
    },
    {
        "name": "Otto Mann",
        "gender": "m"
    },
    {
        "name": "Lou",
        "gender": "m"
    },
    {
        "name": "Todd Flanders",
        "gender": "m"
    },
    {
        "name": "Dr. Marvin Monroe",
        "gender": "m"
    },
    {
        "name": "Dr. J. Loren Pyror",
        "gender": "m"
    },
    {
        "name": "Dewey Largo",
        "gender": "m"
    },
    {
        "name": "Eddie",
        "gender": "m"
    },
    {
        "name": "Teacher",
        "gender": "m"
    },
    {
        "name": "Clerk",
        "gender": "m"
    },
    {
        "name": "Father",
        "gender": "m"
    },
    {
        "name": "Sherri Mackleberry",
        "gender": "f"
    },
    {
        "name": "JANEY",
        "gender": "f"
    },
    {
        "name": "Ms. Melon",
        "gender": "f"
    },
    {
        "name": "Interviewer",
        "gender": "m"
    },
    {
        "name": "Ethan Foley",
        "gender": "m"
    },
    {
        "name": "Terri Mackleberry",
        "gender": "f"
    },
    {
        "name": "Voice",
        "gender": "m"
    },
    {
        "name": "Receptionist",
        "gender": "f"
    },
    {
        "name": "Kent Brockman",
        "gender": "m"
    },
    {
        "name": "Apu Nahasapeemapetilon",
        "gender": "m"
    },
    {
        "name": "Lenny Leonard",
        "gender": "m"
    },
    {
        "name": "Carl Carlson",
        "gender": "m"
    },
    {
        "name": "Sideshow Bob",
        "gender": "m"
    },
    {
        "name": "Ralph Wiggum",
        "gender": "m"
    },
    {
        "name": "Jimbo Jones",
        "gender": "m"
    },
    {
        "name": "Agnes Skinner",
        "gender": "f"
    },
    {
        "name": "Kearney Zzyzwicz",
        "gender": "m"
    },
    {
        "name": "DOLPH",
        "gender": "m"
    },
    {
        "name": "Judge Snyder",
        "gender": "m"
    },
    {
        "name": "Jacques",
        "gender": "m"
    },
    {
        "name": "Salesman",
        "gender": "m"
    },
    {
        "name": "Woman",
        "gender": "f"
    },
    {
        "name": "Rod Flanders",
        "gender": "m"
    },
    {
        "name": "Manager",
        "gender": "m"
    },
    {
        "name": "Bleeding Gums Murphy",
        "gender": "m"
    },
    {
        "name": "Cowboy Bob",
        "gender": "m"
    },
    {
        "name": "Jacqueline Bouvier",
        "gender": "f"
    },
    {
        "name": "Waiter",
        "gender": "m"
    },
    {
        "name": "Gulliver Dark",
        "gender": "m"
    },
]

//örnek çıktı array.groupByCustom(item=>item.gender) için
/*
    {
        "m": [... gender m olan içerik]
        "f": [... gender f olan içerik]
    }
 */

    //örnek çıktı array.groupByCustom(item=>item.name[0]) için
/*
    {
        "A": [... name baş harfi A olan içerik]
        "B": [... name baş harfi B olan içerik]
        "C": [... name baş harfi C olan içerik]
        ... devamı
    }
 */
/**/ 
const people = [
    { name: "hakan", age: 29, job: "instructor" },
    { name: "berfin", age: 21, job: "candidate" },
    { name: "berna", age: 22, job: "candidate" },
    { name: "betül", age: 21, job: "candidate" },
    { name: "beyza", age: 17, job: "candidate" },
    { name: "anıl", age: 19, job: "asistant" },
    { name: "buse", age: 25, job: "candidate" }
];

Array.prototype.groupByMethod = function (groupBy) {
    const groupValues = this.map(groupBy)
    const filtered = this.reduce((prev, curr, index) => {
        const key = groupValues[index]
        prev[key] = []
        if (!prev[key]) {
            prev[key] = []
        }
        prev[key].push(curr)

        return prev
    }, {})
    return filtered;
}
people.groupByMethod((user) => user.name[0])
console.log(people.groupByMethod((user) => user.name[0]))