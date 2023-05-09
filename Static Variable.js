// "Using a static property in a JavaScript class to count instances".
class student{
    static count=0;
    constructor(name)
    {
        this._name=name
    }
    

        show()
        {
            console.log(student.count++)
            
        }

    
}
let ob1=new student("Aajinath")
let ob2=new student("kanhere")
let ob3=new student("a_k_patil93")
ob1.show()
ob2.show()
ob3.show()
