//  EJERCICIO NIVEL 1

const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
  firstName: "Asabeneh",
  lastName: "Yetayehe",
  age: 250,
  isMarried: true,
  skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}
`;

/*
    1.  Cambiar el array de habilidades a JSON usando JSON.stringify()
*/
const formatJSON = JSON.stringify(skills);
console.log(formatJSON);

/*
    2.  Stringify la variable de la edad
*/
const ageJSON = JSON.stringify(age);
console.log(ageJSON);

/*
    3.  Stringify la variable isMarried
*/
const isMarriedJSON = JSON.stringify(isMarried);
console.log(isMarried);

/*
    4.  Stringify el objeto estudiante
*/
const studentJSON = JSON.stringify(student);
console.log(studentJSON);

//  EJERCICIO NIVEL 2
/*
    1.  Stringify el objeto estudiantes con sólo las propiedades firstName, 
    lastName y skills
*/
const studentJSON_2 = JSON.stringify(student, ["firstName","lastName","skills"], 4);
console.log(studentJSON_2);

//  EJERCICIO NIVEL 3
/*
    1.  Parsear el txt JSON a objeto.
*/
const obj = JSON.parse(txt);
console.log(obj);

/*
    2.  Encuentra el usuario que tiene muchas habilidades de la variable almacenada
    en txt.
*/

function UserSkillsNums(users) {
    let names = Object.entries(users);
    let user = '';
    let cont = 0;

    names.forEach((element) => {
        if (element[1].skills.length > cont) {
            cont = element[1].skills.length;
            user = element[0];
        }
    })

    return `${user}: ${cont} Skills.`;
}

console.log(UserSkillsNums(obj));

