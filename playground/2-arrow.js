// const square = function (x) {
//     return x*x;
// }

// const square = (x) => {
//     return x*x;
// };

// const square = (x) => x*x;

// console.log(square(2));

const event = {
    name : "birthday party",
    list : ['guri','dhillon','jassi'],
    guestlist(){
        // const that = this;
        console.log("guest list for " + this.guestlist);
        this.list.forEach((guest)=>{
          console.log(guest + " is attending " + this.name);
        });
    }
};

event.guestlist();