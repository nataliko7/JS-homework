//lesson 03
/*
03.js
 Autor: Natalia
Date: 21.05
*/
//N 1 დავალება


let car = {
    make: "Audi",
    color: "White",
    model: "A4",
    year: 2019,
    power: 190,
    prise: 20000,
  };
  let car1 = {
    make: "Audi",
    color: "White",
    model: "A4",
    year: 2019,
    power: 190,
    prise: 23000
  };
  let car2 = {
    make: "Ford",
    color: "Red",
    model: "F6",
    year: 2000,
    power: 190,
    prise: 18000
  };
 let car3 = {
    make: "Toyota",
    color: "green",
    model: "T3",
    year: 2012,
    power: 200,
    prise: 14000
 }

 let prises = [20000, 23000, 18000, 14000];
 
   function average(){
    for ( let i = 0; i < prises.length; i ++){
        var avg = (prise[i] / prise.length) * prise.length )
   }
   return avg
}
console.log(“Ჩვენს მარაგში არსებული მანქანების საშუალო ფასი არის”)


   
   function maxPriseInArray(prises){
       let max  =  array [0];
       for(let i = 1; i<array.length; i++){
      
        if (arr[i] > max){
            max = array[i];
        }
       }
   }
      return max;
    function maxPriseInArray(prises)


 

//დავალება 2 თითქმის გადმოვიწერე თქვენგან, მაგრამ მაინც  არ გამომდის :-(((
/*
let username = "Natalia";
let password = "777";

let user1 = {
    username: "Giorgi",
    password: "123",
};
let user2 = {
    username: "Mariami",
    password: "345",
};
let user3 = {
    username: "Demetre",
    password: "197",
};
let user4 = {
    username: "Tamari",
    password: "335",
};

 function getFoundUser(users, possibleUsserName) {
     for(let i = 0; i < users.length; i++){
         if(users [i].username === username){
             return users[i];
         }
     }
 }

 function checkPassword (user, possiblePassword){
     let isSame = user.password ===possiblePassword; {
         return isSame
     }
 }
  function login (username, password){
      let passibleUser = getFoundUser(users, usename);{
          if(possibleUser) {
              console.log ("მომხმარებელი ამ სახელით ვერ მოიძებნა");
          }
          else{
              let isPasswordValid = checkPassword(possibleUser,password);
              if(isPasswordValid){
                  console.log("წარმატებით შეხვედით სისტემაში");
                  else {
                      console.log("პაროლი არასწორია");
                  }
              }
          }
      }
  }
  login("Natalia". "777");
  */