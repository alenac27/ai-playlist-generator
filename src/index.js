function generatePlaylist(event) {
  event.preventDefault();
  new Typewriter("#playlist", {
    strings: "Here is a playlist",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let playlistFormElement = document.querySelector("#playlist-generator-form");
playlistFormElement.addEventListener("submit", generatePlaylist);
