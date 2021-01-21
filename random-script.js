// Initial content (called startUpStuff) is stored here, with 6 properties: id, title, text, image, category and isLove/notLoved
let startUpStuff = [ { id: 1, title: "Albatross", text: "Badass motherfucker riding the storm", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/albatross.jpg", category: "nature", love: false, }, { id: 2, title: "Stoned dogs", text: "So human, I categorized them as people", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/dogs.jpg", category: "people", love: false, }, { id: 3, title: "Dolores", text: "Do you ever question the nature of your reality?", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/dolores.jpg", category: "people", love: false, }, { id: 4, title: "Uncle Bobby", text: "Hey there, mister nobel price winning tambourine man", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/dylan.jpg", category: "people", love: false, }, { id: 5, title: "Ford Bronco 1980", text: "They just don't make'em the same these days", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/bronco.jpg", category: "things", love: false, }, { id: 6, title: "Calvin", text: "... being miserable builds character", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/calvin.jpg", category: "things", love: false, }, { id: 7, title: "Dyrfjöll", text: "No words needed", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/dyrfjoll.jpg", category: "nature", love: false, }, { id: 8, title: "Eames Lounge Chair", text: "A seat worth 800.000 isk", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/eames.jpg", category: "things", love: false, }, { id: 9, title: "Stuff of nightmare", text: "Still hangs on my wall", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/elias.jpg", category: "things", love: false, }, { id: 10, title: "Another badass", text: "Doesn't start shaking until it's -60°c", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/fox.jpg", category: "nature", love: false, }, { id: 11, title: "My happy place", text: "No jokes about Icelandic forests, please", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/hallormsstadaskogur.jpg", category: "nature", love: false, }, { id: 12, title: "Heather", text: "She makes me feel things", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/heather.jpeg", category: "people", love: false, }, { id: 13, title: "os1, featuring Samantha", text: "If you haven't seen 'Her', please do", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/her.png", category: "things", love: false, }, { id: 14, title: "Héraðssandur", text: "Another happy place, but pretty cool", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/heradssandur.jpg", category: "nature", love: false, }, { id: 15, title: "Dr. Hunter", text: "Too weird to live, too rare to die", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/hunter.jpg", category: "people", love: false, }, { id: 16, title: "Bllöuurgh", text: "Happy friends in a happy place", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/immortal.jpg", category: "people", love: false, }, { id: 17, title: "Jesus in Heaven", text: "Beware of skull monkeys", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/jesus.jpg", category: "things", love: false, }, { id: 18, title: "Millenium Falcon", text: "I don't care if I'm a grownup", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/lego.png", category: "things", love: false, }, { id: 19, title: "Merlin", text: "Just something magical about it", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/merlin.jpg", category: "nature", love: false, }, { id: 20, title: "Around midnight", text: "My kind of party", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/party.jpg", category: "people", love: false, }, { id: 21, title: "70's racer", text: "When people travelled with style", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/racer.jpg", category: "things", love: false, }, { id: 22, title: "This guy", text: "When I grow old", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/ragnar.jpg", category: "people", love: false, }, { id: 23, title: "Fucking tigers", text: "Yeah, sure, I'd fight you guys", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/tigers.jpg", category: "nature", love: false, }, { id: 24, title: "Howl", text: "Like Allen Ginsberg", image: "https://raw.githubusercontent.com/gvestmann/random-stuff-appreciation/main/img/wolf.jpg", category: "nature", love: false, }, ]

// This function is to determine if the user has visited the site before. If not, the startUpStuff is pushed into localStorage. From that point on, startUpStuff is never touched again and all content data is updated and fetched from the localStorage.
function firstBuild() {
    // First a conditional checks if the user has any data in the localstorage
    if(Object.keys(localStorage).length === 0) {
        // If not, the startUpStuff is written into a localStorage array called "localStuff" using JSON.stringify
        localStorage.setItem("localStuff", JSON.stringify(startUpStuff))
        // Local scope variable is created for handling the data within this function. The data from localstorge (localStuff) is stored in the new variable via getItem
        let localStuff = JSON.parse(localStorage.getItem('localStuff'));
        // Variable create for the cards-container in the DOM
        const cardsContainer = document.getElementById('cards-container');
        // Loop through new localStuff object
        for(let i = 0; i < localStuff.length; i++) {
            // All cards created for the DOM
            var card = document.createElement('div')
            card.setAttribute("class", "card animated fadeInUp delay-1s")
            // Create image container
            var imgContainer = document.createElement('div');
            imgContainer.setAttribute("class", "view overlay zoom embed-responsive embed-responsive-4by3")
            // Create image
            var img = document.createElement('img')
            img.setAttribute("class", "card-img-top embed-responsive-item")
            img.setAttribute("src", localStuff[i].image)
            // Create card body
            var cardBody = document.createElement('div');
            cardBody.setAttribute("class", "card-body");
            // Create title
            var title = document.createElement('h4');
            title.setAttribute("class", "card-title");
            title.innerHTML = localStuff[i].title;
            // Create icon + button
            var button = document.createElement('button');
            button.setAttribute("id", localStuff[i].id);
            button.setAttribute("onClick", "love(this);")
            button.innerHTML = `<i id="icon-${localStuff[i].id}" class="far fa-heart heart-icon-right"></i>`
            // Create card's text
            var cardText = document.createElement('p')
            cardText.setAttribute("class", "card-text");
            cardText.innerHTML = localStuff[i].text;
            
            // ... and put it all together in DOM!
            imgContainer.appendChild(img)
            card.appendChild(imgContainer)
            card.appendChild(cardBody)
            cardBody.appendChild(title);;
            cardBody.appendChild(button);
            cardBody.appendChild(cardText);
            cardsContainer.appendChild(card);
        }
    }
}


// This function is pretty much the same as the one above, but only excecuting if the user has some data in localStorge. From second visit/reload and from there on, this function will build the cards. I'll only comment on the differences.
function rebuildAll() {
    // History/location API used to update URL to "frontpage"
    history.pushState(null, "", "/random-stuff-appreciation");
    // This function keeps the cards in "their place" on each reload. You'll see the function later on.
    sortStuff();
    let localStuff = JSON.parse(localStorage.getItem('localStuff'));
    // Function to clear the DOM before new cards are built. See somewhere below.
    clearDom();
    const cardsContainer = document.getElementById('cards-container');
    for(let i = 0; i < localStuff.length; i++) {
        // Create the cards
        var card = document.createElement('div')
        card.setAttribute("class", "card animated fadeInUp delay-1s")
        var imgContainer = document.createElement('div');
        imgContainer.setAttribute("class", "view overlay zoom embed-responsive embed-responsive-4by3")
        var img = document.createElement('img')
        img.setAttribute("class", "card-img-top embed-responsive-item")
        img.setAttribute("src", localStuff[i].image)
        var cardBody = document.createElement('div');
        cardBody.setAttribute("class", "card-body");
        var title = document.createElement('h4');
        title.setAttribute("class", "card-title");
        title.innerHTML = localStuff[i].title;
        var button = document.createElement('button');
        button.setAttribute("id", localStuff[i].id);

        // This conditional is for checking if the user has "loved" any cards. If so, it sets the appropriate classes so that the heart is color:red and it's possible to un-love cards
        if(localStuff[i].love === true) {
        button.setAttribute("onClick", "hate(this)")
        button.setAttribute("class", "love-this")
        button.innerHTML = `<i id="icon-${localStuff[i].id}" class="fa fa-heart heart-icon-right"></i>`            
        } else if(localStuff[i].love === false) {
        button.setAttribute("onClick", "love(this)")
        button.innerHTML = `<i id="icon-${localStuff[i].id}" class="far fa-heart heart-icon-right"></i>`
        }

        // Create card's text
        var cardText = document.createElement('p')
        cardText.setAttribute("class", "card-text");
        cardText.innerHTML = localStuff[i].text;
        
        // ... and put it all together!
        imgContainer.appendChild(img)
        card.appendChild(imgContainer)
        card.appendChild(cardBody)
        cardBody.appendChild(title);;
        cardBody.appendChild(button);
        cardBody.appendChild(cardText);
        cardsContainer.appendChild(card);
    } 
}


// Simple function which empties the cardsContiner
function clearDom() {
    const cardsContainer = document.getElementById('cards-container');
    cardsContainer.innerHTML = '';
}


// Since I'm using splice() & pop() to work with the love/un-love function, I'll have to re-sort the stuff be number ID if I want to keep the cards in the same location on each rebuild  
function sortStuff() {
    // I fetch the stuff from localStorage to store it in a new varible
    let localStuff = JSON.parse(localStorage.getItem('localStuff'));
    // Another new varible stores the previous one where the object's arrays have been sorted by number ID
    var ascending = localStuff.sort((a, b) => Number(a.id) - Number(b.id));
    // The ascending array overwrites localStorage current stuff
    localStorage.setItem('localStuff', JSON.stringify(ascending));
} 


// This function builds the list of loved items. Loops through the localStorage and has a conditonal the outputs only objects that have "love" = true in it's properties. Otherwise pretty much the same as buildAll() ;
function loveList() {
    history.pushState(null, "Love", "love")
    let localStuff = JSON.parse(localStorage.getItem('localStuff'));
    const cardsContainer = document.getElementById('cards-container');
    clearDom();
    for(let i = 0; i < localStuff.length; i++) {
        if(localStuff[i].love === true) {
        // Create the cards
        var card = document.createElement('div')
        card.setAttribute("class", "card animated fadeInUp delay-1s")
        // Create image container
        var imgContainer = document.createElement('div');
        imgContainer.setAttribute("class", "view overlay zoom embed-responsive embed-responsive-4by3")
        // Create image
        var img = document.createElement('img')
        img.setAttribute("class", "card-img-top embed-responsive-item")
        img.setAttribute("src", localStuff[i].image)
        // Create card body
        var cardBody = document.createElement('div');
        cardBody.setAttribute("class", "card-body");
        // Create title
        var title = document.createElement('h4');
        title.setAttribute("class", "card-title");
        title.innerHTML = localStuff[i].title;
        // Create icon + button
        var button = document.createElement('button');
        button.setAttribute("id", localStuff[i].id);

        if(localStuff[i].love === true) {
        button.setAttribute("onClick", "hate(this)")
        button.setAttribute("class", "love-this")
        button.innerHTML = `<i id="icon-${localStuff[i].id}" class="fa fa-heart heart-icon-right"></i>`            
        } else if(localStuff[i].love === false) {
        button.setAttribute("onClick", "love(this)")
        button.innerHTML = `<i id="icon-${localStuff[i].id}" class="far fa-heart heart-icon-right"></i>`
        }

        // Create card's text
        var cardText = document.createElement('p')
        cardText.setAttribute("class", "card-text");
        cardText.innerHTML = localStuff[i].text;
        
        // ... and put it all together!
        imgContainer.appendChild(img)
        card.appendChild(imgContainer)
        card.appendChild(cardBody)
        cardBody.appendChild(title);;
        cardBody.appendChild(button);
        cardBody.appendChild(cardText);
        cardsContainer.appendChild(card);
    } 
    }
};


// This function is for building the category pages. The function is called in the HTML, using each category's ID as a parameter.
function build(obj) {
    // Sort stuff
    sortStuff();
    // Catch HTML container
    const cardsContainer = document.getElementById('cards-container');
    // Move localStorage stuff to variable
    let localStuff = JSON.parse(localStorage.getItem('localStuff'));
    // Clear the dom
    clearDom();
    // Update URL with the catergory's ID name
    history.pushState(null, obj.id, obj.id)
    // Transform the category into a string
    var obj = obj.id
    // Loop all stuff
    for(let i = 0; i < localStuff.length; i++) {
        // Pick out stuff in matching category
        // ... the rest you should know by now
        if(localStuff[i].category === obj) {
            var card = document.createElement('div')
            card.setAttribute("class", "card animated fadeInUp delay-1s")
            // Create image container
            var imgContainer = document.createElement('div');
            imgContainer.setAttribute("class", "view overlay zoom embed-responsive embed-responsive-4by3")
            // Create image
            var img = document.createElement('img')
            img.setAttribute("class", "card-img-top embed-responsive-item")
            img.setAttribute("src", localStuff[i].image)
            // Create card body
            var cardBody = document.createElement('div');
            cardBody.setAttribute("class", "card-body");
            // Create title
            var title = document.createElement('h4');
            title.setAttribute("class", "card-title");
            title.innerHTML = localStuff[i].title;
            // Create icon + button
            var button = document.createElement('button');
            button.setAttribute("id", localStuff[i].id);
    
            if(localStuff[i].love === true) {
            button.setAttribute("onClick", "hate(this)")
            button.setAttribute("class", "love-this")
            button.innerHTML = `<i id="icon-${localStuff[i].id}" class="fa fa-heart heart-icon-right"></i>`            
            } else if(localStuff[i].love === false) {
            button.setAttribute("onClick", "love(this)")
            button.innerHTML = `<i id="icon-${localStuff[i].id}" class="far fa-heart heart-icon-right"></i>`
            }
    
            // Create card's text
            var cardText = document.createElement('p')
            cardText.setAttribute("class", "card-text");
            cardText.innerHTML = localStuff[i].text;
            
            // ... and put it all together!
            imgContainer.appendChild(img)
            card.appendChild(imgContainer)
            card.appendChild(cardBody)
            cardBody.appendChild(title);;
            cardBody.appendChild(button);
            cardBody.appendChild(cardText);
            cardsContainer.appendChild(card);
        }
    }
}


// Function for loving stuff when heart icon on card is clicked. It uses the button's ID as a parameter
function love(obj) {
    // Grab the localStorage stuff
    let localStuff = JSON.parse(localStorage.getItem('localStuff'));
    // Move the button's ID to a variable
    var obj = obj.id
    // Loop through the object to find the matching ID
    for(let i = 0; i < localStuff.length; i++) {
    // If the ID matches ...
    if(localStuff[i].id == obj) {
        // New object is created, using all the properties of localStuff item, except changing the LOVE to TRUE
        var newStuff = {
            id: localStuff[i].id,
            title: localStuff[i].title,
            text: localStuff[i].text,
            image: localStuff[i].image,
            category: localStuff[i].category,
            love: true,
            };
        // The original item is removed from the object
        localStuff.splice(i, 1);
        // A new item is pushed to the object, using the data from the created object above
        localStuff.push(newStuff);
        // And finally the whole updated obejcts is stringified into the localStorage
        localStorage.setItem('localStuff', JSON.stringify(localStuff));
        };
    }
    // Now we have to update some classes in the DOM so that the user can un-love this particular item
    // It again uses the button's ID to apply new classes
    document.getElementById(`${obj}`).className = "love-this";
    document.getElementById(`${obj}`).setAttribute("onClick", "hate(this);")
    document.getElementById(`icon-${obj}`).className = "fa fa-heart heart-icon-right";
}


// The hate function is pretty much the same as the love function above, except is sets the love properties to false and adds classes for the user so that the item can be loved again
function hate(obj) {
    let localStuff = JSON.parse(localStorage.getItem('localStuff'));
    var obj = obj.id
    for(let i = 0; i < localStuff.length; i++) {
    if(localStuff[i].id == obj) {
        var newStuff = {
            id: localStuff[i].id,
            title: localStuff[i].title,
            text: localStuff[i].text,
            image: localStuff[i].image,
            category: localStuff[i].category,
            love: false,
            };
        localStuff.splice(i, 1);
        localStuff.push(newStuff);
        localStorage.setItem('localStuff', JSON.stringify(localStuff));
        };
    }
    document.getElementById(`${obj}`).className = "";
    document.getElementById(`${obj}`).setAttribute("onClick", "love(this);")
    document.getElementById(`icon-${obj}`).className = "far fa-heart heart-icon-right";   
}


// A now we kick off! 
firstBuild();
sortStuff();
rebuildAll();