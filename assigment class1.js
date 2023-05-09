// School-Catalogue_JS
// General info

// Digital school catalog that holds quick reference material for each school in New York City for the city's Department of Education.

// A parent School class and three child classes (PrimarySchool, MiddleSchool, HighSchool).
// Features

// Classes have the following properties, getters, setters, and methods:
// School
// Properties:

//     name (string),
//     level (one of three strings: 'primary', 'middle', or 'high')
//     numberOfStudents (number)

// Getters:

//     all properties have getters

// Setters:

//     for the numberOfStudents property

// Methods:

//     .show() : display information

class School {
    constructor (name ,level,numberOfStudent)
    {
this._name=name
this._level=level
this._numberOfStudent=numberOfStudent
    }
    get name()
    {
        return this._name

    }
    get level()
    {
        return this._level
    }
    get numberOfStudent()
    {
        return this._numberOfStudent
    }
    set numberOfStudent(n)
    {
        if(n.isNan)
        {
            console.log("plese enter valied input ")
        }
        else
       {
        this._numberOfStudent =n

       }        
    }
    show()
    {
        console.log(`${this._name} educates ${this._numberOfStudent} students at the ${this._level} school level.`)
    }
}
let ob=new School("Aajinath",30,"primary")
ob.show()
