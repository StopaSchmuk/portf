//массив прэктов и объект с треками
let projectsArr = ['Celldweller', 'Scandroid'];
let albums = {
    Celldweller: ['Too Many Tears', 'Own Little World', 'Shapeshifter','Great Divide', 'Good Luck', 'Jericho', 'Switchback', 'Uncrowned', 'One Good Reason'],
    Scandroid: ['Connection', 'Astor Place', 'Awakening With You', 'Eden', 'Shout', 'Destination Unknown', 'Empty Streets', 'Aphelion']
};
// выбирает рандомный проект
function getRandomProject() {
    let numb = Math.floor(Math.random(1) * 2);
    project = projectsArr[numb];
    return project; 
};

// выбирает рандомный трек
getRandomProject();
function getRandomTrack() {
    x = Math.random(1);
    track =  Math.floor(x * albums[project].length);
    return x, track;
};

getRandomTrack();
//выводит всё
    console.log( 'Трек: ' + albums[project][track]);
    console.log('Проект: ' + project);
    console.log('Номер трека: ' + track);
    console.log('Номер флоат: ' + x);
    console.log('Вам попалось: ' + project + " - " + albums[project][track]);
