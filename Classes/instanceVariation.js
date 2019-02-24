class CheckingAccount{
constructor(clientId, email, firstName, lastName){
    this.clientId = clientId;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
}

get clientId() {
    return this._clientId;
}

set clientId(clientId){
    let pattern=/^[1-9]{1}[0-9]{5}$/;
    if(!pattern.test(clientId)){
throw new TypeError("Client ID must be a 6-digit number");
    }
    this._clientId = clientId;
}

get email(){
    return this._email;
}

set email(email){
    let pattern = /^([a-zA-Z0-9])+@[a-zA-Z\.]+$/;
    if(!pattern.test(email)){
        throw TypeError('Invalid e-mail');
    }

    this._email = email;

}

get firstName(){
    return this._firstName;
}

set firstName(firstName){
    if(firstName.length < 3 || firstName.length > 20){
        throw TypeError("First name must be between 3 and 20 characters long"); 
    }
let pattern = /^[a-zA-Z]+$/;
    if(!pattern.test(firstName)){
        throw TypeError("First name must contain only Latin characters"); 
    }

    this._firstName = firstName;
}

get lastName(){
    return this._lastName;
}

set lastName(lastName){
    if(lastName.length < 3 || lastName.length > 20){
        throw TypeError("Last name must be between 3 and 20 characters long"); 
    }
let pattern = /^[a-zA-Z]+$/;
    if(!pattern.test(lastName)){
        throw TypeError("Last name must contain only Latin characters"); 
    }

    this._lastName = lastName;

}
}
let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');