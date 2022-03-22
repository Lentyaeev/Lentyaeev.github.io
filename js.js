"use sctrict";

const personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMoviesDB.count = prompt("How many films you watched?", "");
        while(personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN(personalMoviesDB.count)){
            personalMoviesDB.count = prompt("How many films you watched?", "");
        }
    },
    rememberMyFilms: function(){
        for(let i = 0; i < personalMoviesDB.count; i++){
        const a = prompt("One of the last films you watched?", ""),
              b = prompt("How'd you rate it?", "");
              if (a != null && b != null && a != '' && b != '' && a.length < 50){
              personalMoviesDB.movies[a] = b;
              console.log("done");
            }
            else{
                i--;
                console.log("omt");
            }
        }
        },
    detectLvl: function(){
            if(personalMoviesDB.count < 10){
                console.log("Too few");
            } else if(personalMoviesDB.count >= 10 && personalMoviesDB < 30){
                console.log("U r classic )(");
            } else if (personalMoviesDB.count >= 30){
                console.log("U r a cinelover!");
            } else {
                console.log("Oops, something went wrong //");
            }
        },
    writeYourGenres: function(){
            let i = 0;
            while(i < 3){
            personalMoviesDB.genres[i] = prompt(`Ваш любимый жанр #${i+1} ?`, "Введите его сюда");
            if(personalMoviesDB.genres[i] == null || personalMoviesDB.genres === ''){
            i--;
            } else { i++; }
            }
        personalMoviesDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
        },
    showMyDB: function(hidden) {
            if(!hidden){
                console.log(personalMoviesDB);}
        },
    toggleVisibleMyDB: function(){
        if(personalMoviesDB.privat) {
            personalMoviesDB.privat = true;
        } else { 
            personalMoviesDB.privat = false;
        }
    },
    newButton: function(){
        const box = document.getElementById("box");
        const select = confirm("Хоч прикольну кнопочку?");
        if(select){
        box.innerHTML = (`<button class="button" id = "divbutton">НЕ НЕЖИМАЙ ПАДЛА</button>`);
        const divbutton = document.getElementById("divbutton");
        divbutton.onclick = function() {
            const selector = confirm("Да ти геній!");
            if(selector){alert("Не окай мені тут");}
            else{alert("Ну то всьо пішов додому");}
            
        };
        } else {
        const button = document.createElement("button");
        box.style.width = button.style.width = (prompt("What will the width be?") + "px");
        box.style.height = button.style.height = (prompt("What will the height be?") + "px");
        button.style.backgroundColor = "white";
        button.textContent = prompt("What will the text be?");
        const select1 = confirm("Do you want to change the color of the button?");
        if(select1){
        let r, g, b;
        let i = 0;
            while(i < 1){
        r = prompt("What will the r be?");
        if(r == '' || r == null || r < 0 || r > 255 || r === "string"){i--;} else {i++;}
        g = prompt("What will the g be?");
        if(g == '' || g == null || g < 0 || g > 255 || g === "string"){i--;} else {i++;}
        b = prompt("What will the b be?");
        if(b == '' || b == null || b < 0 || b > 255 || b === "string"){i--;} else {i++;}
            }
        button.style.backgroundColor = `rgb(${+r}, ${+g}, ${+b})`; 
        document.querySelector(".box").append(button);
        }
    }
    }   
};

personalMoviesDB.newButton();





