function displayPlaylist(response) {
  new Typewriter("#playlist", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePlaylist(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "d2b000c63899bdd9d62748ft3o63f2a2";
  let prompt = `User instructions: Generate a playlist in genre ${instructionsInput.value}`;
  let context =
    "You are a music expert with a deep knowledge of all music genres worldwide. Your mission is to generate a playlist of 10 songs as a list element in basic HTML without a title. Do not display list-style-type: disc, please display an emoji which fits to the name of the singer or the title of the song. Please follow the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let playlistElement = document.querySelector("#playlist");
  playlistElement.classList.remove("hidden");
  playlistElement.innerHTML = "Generating your playlist  🎵  🎼 ❤️ ";

  axios.get(apiUrl).then(displayPlaylist);
}

let playlistFormElement = document.querySelector("#playlist-generator-form");
playlistFormElement.addEventListener("submit", generatePlaylist);
