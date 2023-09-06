Api_url = "https://api.github.com/users/";
const search = document.getElementById("search");
const form = document.getElementById("form");
const main = document.getElementById("main");

// getUser("Aswin261");
async function getUser(username) {
  try {
    const { data } = await axios(Api_url + username);
    console.log(data);
    createUserCard(data);
    getRepos(username);
  } catch (err) {
    // console.log(err);
    if (err.response.status == 404) {
      createErrCard("No profile with this username");
    }
  }
}

async function getRepos(username) {
  try {
    const { data } = await axios(Api_url + username + "/repos?sort=created");
    console.log(data);
    addReposToCard(data);
  } catch (err) {
    createErrCard("Problem Fetching Repos");
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});

function createUserCard(user) {
  const userID = user.name || user.login;
  const userBio = user.bio ? `<p>${user.bio}</p>` : "";
  const cardHtml = `<div class="card">
  <div>
      <img src="${user.avatar_url}" alt="${user.name}" class="avatar">
  </div>
  <div class="user-info">
      <h2>${userID}</h2>
      <p>${userBio}</p>
      <ul>
          <li><strong>${user.followers} Followers</strong></li>
          <li><strong>${user.following} Following</strong></li>
          <li><strong>${user.public_repos} Repos</strong></li>
      </ul>
      <div id="repos">
      </div>
  </div>
</div>`;
  main.innerHTML = cardHtml;
}
function createErrCard(msg) {
  const cardHtml = `<div class='card'>
  ${msg}</div>`;
  main.innerHTML = cardHtml;
}

function addReposToCard(repoData) {
  const repos = document.getElementById("repos");
  repoData.slice(0, 5).forEach((repo) => {
    const repoLink = document.createElement("a");
    repoLink.classList.add("repo");
    repoLink.innerText = repo.name;
    repoLink.href = repo.html_url;
    repoLink.target = "_blank";
    repos.appendChild(repoLink);
  });
}
