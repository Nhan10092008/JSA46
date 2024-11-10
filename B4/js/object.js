// khai bao (declare) ---------------------------
var myObj = {
  "full name": "Ngoc Nhan",
  age: 26,
};

// object constructor (xay dung doi tuong - ham tao) ------------------------
// dinh nghia doi tuong (ban ve)

// declaration function
var User_A = function () {};

// expression function
function User(firstName, lastName, ava) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.ava = ava;

  this.getName = function () {
    return this.firstName + " " + this.lastName;
  };
}

// tao doi tuong
var me = new User("Ngoc", "Nhan", "...");
console.table(me);
console.log(me.constructor === User);
console.log(me.__proto__);
// object thuong
const student = { name: "abc", age: 12 };
console.table(student);
console.log(student.constructor);
console.log(student.__proto__);

/**
 * Neu doi tuong tao tu object constructor # object thuong
 * khi in doi tuong se co them phan __proto__ => mo ra: constructor
 */

// them thuoc tinh ---------------------------
me.class = null;
console.table(me);
console.log(me.__proto__);

// object prototype ---------------------------
// them 1 thuoc tinh
// khong nhan duoc gia tri truyen vao tu constructor
User.prototype.email = "abc@gmail.com";
User.prototype.getmail = function () {
  return this.email;
};

const other = new User("abc", "abc", "...");
console.table(other);

// read, update ---------------------------
me.firstName = "ABC";
me["lastName"] = "XYZ";
console.table(me);

cosole.log(me["abc"]); // underfined
cosole.log(me.abc); // underfined

// delete  ---------------------------
delete me["class"];
delete me.ava;
console.table(me)
