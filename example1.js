const myObject = {
    firstName:'Krishna',
    lastName:'Deshpande',
    fullName: function(){
        return this.firstName + '' + this.lastName
    }
}
myObject.fullName()