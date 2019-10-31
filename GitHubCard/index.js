/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/jasynmarais')
    .then(response => {
      githubCardComponent(response);
    })
    .catch(err => {
      console.log(err);
    })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

// Add Github handles to array
const followersArray = [ 'AbdelIdir', 'Ofega', 'alisonludick', 'nedssoft', 'Godnoken'];

// Iterate over array and add data for each user to DOM
followersArray.forEach(user => {
  axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      githubCardComponent(response)
    })
    .catch(err => {
      console.log(err);
    })
})

function githubCardComponent(response) {
  // Create elements for component
  const profileCard = document.createElement('div');
  const profileImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const cardH3 = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');

  // Add classes to elements
  profileCard.classList.add('card');
  cardInfo.classList.add('card-info');
  cardH3.classList.add('name');
  username.classList.add('username');

  // Add paths to profileImg and profileLink
  profileImg.src = response.data.avatar_url;
  profileLink.href = response.data.html_url;

  // Add textContent to elements
  cardH3.textContent = response.data.name;
  username.textContent = response.data.login;
  location.textContent = `Location: ${response.data.location}`;
  profile.textContent = 'Profile: ';
  profileLink.textContent = response.data.html_url;
  followers.textContent = response.data.followers;
  following.textContent = response.data.following;
  bio.textContent = `Bio: ${response.data.bio}`;

  // Append elements to the DOM
  const cardsContainer = document.querySelector('.cards');
  cardsContainer.appendChild(profileCard);
  profileCard.appendChild(profileImg);
  profileCard.appendChild(cardInfo);
  cardInfo.appendChild(cardH3);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(profileLink);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  // Return component
  return profileCard;
}
/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
