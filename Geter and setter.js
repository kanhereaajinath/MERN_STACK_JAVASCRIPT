class student 
{
    constructor(name)
    {
        this._name=name

    }
    get name()
    {
        return this._name
    }
    set name(n)
    {
        this._name=n
    }

}
let obj=new student("Aajinath ")
console.log(obj.name)
obj.name="Kanhere"
let fname=obj.name
console.log(fname)