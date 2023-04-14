//кнопка
const button_1 = document.getElementById('button_1');
//всё для истории треков
let div_1 = document.createElement('div');
let div_2 = document.createElement('div');
div_2.className = 'click2';
let div_3 = document.createElement('div');
let i = 0;
let historyObj = {
    rProject: [], 
    rTrack: [],

};
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
function getRandomTrack() {
    x = Math.random(1);
    track =  Math.floor(x * albums[project].length);
    return x, track;
};

button_1.addEventListener('click', function () {
    
    
    
    
    if (i > 1) {
        div_3.className = 'HUILO';
        historyObj['rProject'][1] = historyObj['rProject'][0];
        historyObj['rTrack'][1] = historyObj['rTrack'][0];
        div_3.innerHTML = historyObj['rProject'][1] + " - " + historyObj['rTrack'][1];
        RandomId.append(div_3);
    };



    if (i > 0) {
        div_2.className = 'click2';
        historyObj['rProject'][0] = project;
        historyObj['rTrack'][0] = albums[project][track];
        div_2.innerHTML = historyObj['rProject'][0] + " - " + historyObj['rTrack'][0];
        RandomId.append(div_2);

    };



    getRandomProject();
    getRandomTrack();
    div_1.className = 'click';
    div_1.innerHTML = "You got: ";
    div_1.insertAdjacentText('beforeend', project + " - " + albums[project][track]);
    RandomId.append(div_1);

    console.log(historyObj);
    console.log(i); 
    i++;
});
