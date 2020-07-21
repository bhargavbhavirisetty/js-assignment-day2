class user{
    constructor(name,age,email){
         this.name=name;
         this.age=age;
         this.email=email;
         this.courses=['course'];
    }
    login()
    {
        console.log(this.name+' has logged in');
    }
    logout()
    {
        console.log(this.name+' has logged out');
    }
}
class Moderator extends user{
    constructor(name,age,email,role)
    {
        super(name,age,email);
        this.role=role;
        this.lucoins=0;
    }
    addlucoins()
    {
        this.lucoins++;
        console.log(this.name +' has '+this.lucoins+' coins')
    }
    removecoins()
    {
        this.lucoins--;
        console.log('After removing coins '+this.name+' has '+this.lucoins+' coins')
    }
}
class Admin extends Moderator{
    addcourse(user,course)
    {
        user.courses.push(course);
        console.log('add');
        console.log(user);
    }
    deletecourse(user,course)
    {
         let index=user.courses.indexOf(course);
        if(index >-1)
        {
            user.courses.splice(index,1);
        }
    }
}
let user1=new user('bhargav',20,'bhargav@gmail.com');
let user2=new user('bha',20,'bhavirisetty@gmail.com');
let mod = new Moderator('sai',30,'hjs@gamil.com','modeartor');
let admin=new Admin('ravi',23,'hbh@gmail.com');
let users=[user1,user2,mod,admin];

users.forEach(el=>{
    console.log(el);
});

user1.login();
user1.logout();
mod.addlucoins();
mod.addlucoins();
mod.removecoins();

admin.addcourse(user1,'javascript');
admin.addcourse(user1,'python');
admin.addcourse(user2,'ai');
admin.addcourse(user2,'java');
console.log(users);

admin.deletecourse(user2,'java');
console.log("after deleting user course");
console.log(users);

