class Person{
    // if we want the value to change -- then we need to make it static
    static count = 0
    // constructor is a placeholder / default value
    constructor(){
        this.firstName = 'Provide your first name'
        this.lastName = 'Provide your last name'
        this.age = 0
        // has to have access via the class name 
        Person.count += 1
    }
    // must have a getter and  a setter for all your properties
    // first is the setter or getter(PascalCse) then the second is your property (camelCase)
    // set -- updates the value
    set FirstName(value){
        this.firstName = value
    }
    // get - gets the value / retrieves the value 
    get FirstName(){
        return this.firstName
    }
    set LastName(value){
        this.lastName = value
    }
    get LastName(){
        return this.lastName
    }
    set Age(value){
        this.age = value
    }
    get Age(){
        return this.age
    }

    //displaying the method
    // a method is a function inside of a class 
    // basically displays the information

    display(){
        console.log(`
       ==========Person ID:${Person.count}======
            First name: ${this.FirstName}
            Last name: ${this.LastName}
            Age: ${this.age}
       =======================================
        `);
    }
}

export{
    Person
}