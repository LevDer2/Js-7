// Task 1
const arr = [1, 4, 5];
arr [1] = 10;
console.log(arr);

// Task 2

const ar = ["lev", "vlad", "nazar"];
ar [3] = "company";
console.log(ar);

// Task 3

const glist = [6, 4, 3];
let sum = 0;

for (let num of glist){
    sum += num;
}

console.log(sum);

// Task 4

const arrr = [2, 5, 12, 4, 7];
for(let i of arrr) {
    console.log(i);
}

// Task 5

const st = ["Lev", "Nazar", "Antonion", "Ramanovuchi", "Vlad"];
for (let i = 0; i < st.length; i += 1) {
    if (st[i].length > 5) {
        console.log(st[i]);
        
    }
}

// Task 6

const list = [30, 22, 100, 33, 50, 11, 44, 29, 17];
let big = list[0];
for (let num of list) {
if (big < num)
big = num
}
console.log(big);

// Task 7

const listNumber = [2, 40, 5, 9, 20, 18, 8, 7, 3];
for (let i = 0; i < listNumber.length; i += 1) {
    if (listNumber[i] % 2 === 0) {
        console.log(listNumber[i])
    }
}