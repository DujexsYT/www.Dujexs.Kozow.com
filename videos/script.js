const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');

let data = [
    {
        'id': 'a1',
        'title': 'Bomberos Dixel Roleplay',
        'name': 'Distribuidor.mp4',
        'duration': '4:07',
    },
    {
        'id': 'a2',
        'title': 'Analisis Semanal OmegaZone Roleplay N1',
        'name': 'video.html',
        'duration': '3:16',
    },
    {
        'id': 'a3',
        'title': 'Proximamente 1',
        'name': 'video3.html',
        'duration': '24:09',
    },

    {
        'id': 'a4',
        'title': 'Proximamente 2',
        'name': 'Proximamente.mp4',
        'duration': '3:59',
    },
    {
        'id': 'a5',
        'title': 'Proximamente 3',
        'name': 'Proximamente.mp4',
        'duration': '4:25',
    },
    {
        'id': 'a6',
        'title': 'Proximamente 4',
        'name': 'Proximamente.mp4',
        'duration': '5:33',
    },
    {
        'id': 'a7',
        'title': 'Proximamente 5',
        'name': 'Proximamente.mp4',
        'duration': '0:29',
    },

    {
        'id': 'a8',
        'title': 'Proximamente 6',
        'name': 'Proximamente.mp4',
        'duration': '1:12',
    },
    {
        'id': 'a9',
        'title': 'Proximamente 7',
        'name': 'Proximamente.mp4',
        'duration': '3:38',
    },

];

data.forEach((video, i) => {
    let video_element = `
                <div class="video" data-id="${video.id}">
                    <img src="images/play.svg" alt="">
                    <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
                    <h3 class="title">${video.title}</h3>
                    <p class="time">${video.duration}</p>
                </div>
    `;
    video_playlist.innerHTML += video_element;
})

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {

        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';

        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'https://dujexs.000webhostapp.com/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
    }
});
