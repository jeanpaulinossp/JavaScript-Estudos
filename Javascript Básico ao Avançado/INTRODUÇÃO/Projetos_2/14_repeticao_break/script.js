let nome = "Jean";

for (let i = 0; i < 10; i = i + 1) {

    if (i == 3) {
        nome = "Jean Paulino";
    }

    if (i == 5 && nome == "Jean Paulino") {
        console.log ("O nome é Jean Paulino, pode parar");
        break;
    }

    console.log(i);
}