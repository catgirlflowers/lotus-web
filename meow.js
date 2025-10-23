/* made by lilac / yuiyamu 
* https://github.com/yuiyamu */
/* <3 - anne  */

var songImage = document.getElementById('albumcover');
var songTitle = document.getElementById('title');
var songArtist = document.getElementById('artist');
var playingStatus = document.getElementById('lastfm-status');

(async () => {
    let lastfmInfo = await fetch('https://api.yuru.ca/lastfm?isKanojo=true');
    lastfmInfo = await lastfmInfo.json();

    songTitle.textContent = lastfmInfo.recenttracks.track[0].name;
    songArtist.textContent = lastfmInfo.recenttracks.track[0].artist['#text'];
    songImage.src = lastfmInfo.recenttracks.track[0].image[3]['#text'];
    songImage.alt = lastfmInfo.recenttracks.track[0].name;

    if (lastfmInfo.recenttracks.track[0]['@attr'].nowplaying) {
        playingStatus.textContent = 'nowplaying.ogg';
    }
})();


var catgirlflowers = document.getElementById('discorduser');
var tooltip = document.getElementById('tooltip');

catgirlflowers.addEventListener('click', async () => {
    await navigator.clipboard.writeText(catgirlflowers.textContent);
    tooltip.textContent = 'copied~!!';
    tooltip.classList = 'fadeOut';
    setTimeout(() => {
        tooltip.textContent = 'click to copy >_<;;';
    }, 3000);
});

catgirlflowers.addEventListener('mouseover', async () => {
  tooltip.classList = '';
});