// const APIcontroller = (function () {

//     const clientId = '847502a26de640479e5a54dfbf0b3468';
//     const clientSecret = 'ab3dbde9d042470d9cdecac6ba441813';

//     const _getToken = async () => {

//         const result = await fetch('https://accounts.spotify.com/api/token', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded', // standard header
//                 'Authorization': 'Basic ' + btoa(clientId + ':' + clientSecret)
//             },
//             body: 'grant_type=client_credentials'
//         });

//         const data = await result.json();
//         return data.access_token;
//     }

//     const _getGenres = async (token) => {

//         const result = await fetch(`https://api.spotify.com/v1/browse/categories?locale=sv_US`, {
//             method: 'GET',
//             headers: { 'Authorization': 'Bearer ' + token }
//         });

//         const data = await result.json();
//         return data.categories.items;
//     }

// const _getPlaylistByGenre = async (token, genreId) => {

//     const limit = 10;

//     const result = await fetch(`https://api.spotify.com/v1/browse/categories/${genreId}/playlists?limit=${limit}`, {
//         method: 'GET',
//         headers: { 'Authorization': 'Bearer ' + token }
//     });

//     const data = await result.json();
//     return data.playlists.items;
// }

// const _getTracks = async (token, tracksEndPoint) => {

//     const limit = 10;

//     const result = await fetch(`${tracksEndPoint}?limit=${limit}`, {
//         method: 'GET',
//         headers: { 'Authorization': 'Bearer ' + token }
//     });

//     const data = await result.json();
//     return data.items;
// }

// const _getTrack = async (token, trackEndPoint) => {

//     const result = await fetch(`${trackEndPoint}`, {
//         method: 'GET',
//         headers: { 'Authorization': 'Bearer ' + token }
//     });

//     const data = await result.json();
//     return data;
// }

// return {
//     getToken() {
//         return _getToken();
//     },
//     getGenres(token) {
//         return _getGenres(token);
//     },
//     getPlaylistByGenre(token, genreId) {
//         return _getPlaylistByGenre(token, genreId);
//     },
//     getTracks(token, tracksEndPoint) {
//         return _getTracks(token, tracksEndPoint);
//     },
//     getTrack(token, trackEndPoint) {
//         return _getTrack(token, trackEndPoint);
//     }
// }
// }
// )();

// const UIController = (function () {

//     const DOMEElements = {
//         selectGenre: '#select_genre',
//         selectPlaylist: '#select_playlist',
//         buttonSubmit: '#btn_submit',
//         divSongDetail: '#song-detail',
//         hfTokenb: '#hidden_token',
//         divSonglist: '.song-list'
//     }

//     return {

//         inputField() {
//             return {
//                 selectGenre: document.querySelector(DOMEElements.selectGenre),
//                 selectPlaylist: document.querySelector(DOMEElements.selectPlaylist),
//                 buttonSubmit: document.querySelector(DOMEElements.buttonSubmit),
//                 divSongDetail: document.querySelector(DOMEElements.divSongDetail),
//                 divSonglist: document.querySelector(DOMEElements.divSonglist)
//             }
//         }

//         createGenre(text, value) {
//             const html = `<option value="${value}">${text}</option>`;
//             document.querySelector(DOMEElements.selectGenre).insertAdjacentHTML('beforeend', html);
//         },

//         createPlaylist(text, value) {
//             const html = `<option value="${value}">${text}</option>`;
//             document.querySelector(DOMEElements.selectPlaylist).insertAdjacentHTML('beforeend', html);
//         },

//         createTrack(id, name) {
//             const html = `<a href="#" class="list-group-item list-group-item-action list-group-item-light" id="${id}">${name}</a>`;
//             document.querySelector(DOMEElements.divSonglist).insertAdjacentHTML('beforeend', html);
//         },

//         creatTrackDetail(img, title, artist) {
//             const detailDiv = document.querySelector(DOMEElements.divSongDetail);
//             detailDiv.innerHTML = '';

//             const html = `
//             <div class="row col-sm-12 mx-auto">
//                 <img src="${img}" alt="">
//             </div>
//             <div class="row col-sm-12 mx-auto">
//                 <label><strong>Title:</strong></label> ${title}
//             </div>
//             <div class="row col-sm-12 mx-auto">
//                 <label><strong>Artist:</strong></label> ${artist}
//             </div>
//             `;

//             detailDiv.insertAdjacentHTML('beforeend', html);
//         },

//         resetTrackDetail() {
//             this.inputField().divSongDetail.innerHTML = '';
//         },

//         resetTracks() {
//             this.inputField().divSonglist.innerHTML = '';
//             this.resetTrackDetail();
//         },

//         resetPlaylist() {
//             this.inputField().selectPlaylist.innerHTML = '';
//             this.resetTracks();
//         },

//         storeToken(value) {
//             document.querySelector(DOMEElements.hfTokenb).value = value;
//         },

//         getStoredToken() {
//             return {
//                 token: document.querySelector(DOMEElements.hfTokenb).value
//             }
//         }
//     }
        