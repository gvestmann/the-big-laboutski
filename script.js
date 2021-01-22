// The API is a bit slow, so I had to use ASYNC/AWAIT
async function getData() {
  const url = "https://thelewbowskiapi.herokuapp.com";
  const response = await fetch(url);
  const data = await response.json();
  
  const cardsContainer = document.getElementById('cards-container');
      for(let i = 0; i < data.length; i++) {

          var card = document.createElement('div')
          card.setAttribute("class", "card animated fadeInUp delay-1s")
          var imgContainer = document.createElement('div');
          imgContainer.setAttribute("class", "view overlay zoom embed-responsive embed-responsive-4by3")
          var img = document.createElement('img')
          img.setAttribute("class", "card-img-top embed-responsive-item")
          img.setAttribute("src", data[i].image)

          var cardBody = document.createElement('div');
          cardBody.setAttribute("class", "card-body");

          var title = document.createElement('h4');
          title.setAttribute("class", "card-title");
          title.innerHTML = data[i].name;

          var aka = document.createElement('p')
          aka.setAttribute("class", "aka");
          aka.innerHTML = `<span class="inner-bold">Also known as: </span>${data[i].also_known_as}`

          var occupation = document.createElement('p')
          occupation.setAttribute("class", "occupation");
          occupation.innerHTML = `<span class="inner-bold">Occupation: </span>${data[i].occupation}`

          var hobbies = document.createElement('p')
          hobbies.setAttribute("class", "hobbies");
          hobbies.innerHTML = `<span class="inner-bold">Hobbies: </span>${data[i].hobbies}`

          var info = document.createElement('p')
          info.setAttribute("class", "info");
          info.innerHTML = `<span class="inner-bold">Other info: </span>${data[i].other_info}`;

          imgContainer.appendChild(img)
          card.appendChild(imgContainer)
          card.appendChild(cardBody)
          cardBody.appendChild(title);
          cardBody.appendChild(aka)
          cardBody.appendChild(occupation);
          cardBody.appendChild(hobbies)
          cardBody.appendChild(info);
          cardsContainer.appendChild(card);
      }
}

getData();