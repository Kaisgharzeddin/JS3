// oppageve 1

for (let i = 1; i < 11; i++){
    document.write('<br>Hello World</br>'); 
}

// oppgave 2

for (let i = 1; i = 50; i++){
    document.write(`<br>${i}</br>`);
}

// oppgave 3

let sum = 0
for (let i = 1; i <11; i++) {
    sum += i;
    document.writeln(sum)
}

// oppagve 4

str = ""

for (let i = 1; i < 5; i++) {
    str += "#";
    console.log(str)
}

// oppagve 5

for (let i = 0; i < 51; i++) {
    if (i % 2 == 0)
        document.writeln(i)
}

// oppgave 6

for (let i = 1; i < 101; i++) {
    if (i % 15 == 0)
        document.writeln(i)
}

// oppgave 7 

const numbers = [12, 45, 7, 34, 19];

let largest = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
document.write(largest)

// oppgave 8 

for (let i = 6; i > 0; i--) {
    document.write(`<br><h${i}>Røyken VGS er best</h${i}></br>`)
}

