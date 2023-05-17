
function writting(){
    function activeCharc(element){
        const arrText= element.innerHTML.split('');
        element.innerHTML = '';
        arrText.forEach((charc, i) => {
            setTimeout(()=>{
                element.innerHTML += charc;
            }, 45 * i);        
        });
    }
    const title = document.querySelector('.typing');
    activeCharc(title);
}

writting();

function menuMobile(){
const activeMenu = document.querySelector('.fa-bars');

const navMenu = document.querySelector('header .primary-nav');

activeMenu.addEventListener('click', ()=> {
    activeMenu.classList.toggle('fa-x');
    navMenu.classList.toggle('active');
});
}


menuMobile();

function resumeSlideShows(){
const divExperience = document.querySelectorAll('.experienceContent div');
const liExperience = document.querySelectorAll('.experienceContent ul li');
const divEducation = document.querySelectorAll('.educationContent div');
const liEducation = document.querySelectorAll('.educationContent ul li');

divExperience[0].classList.add('active');
divEducation[0].classList.add('active');
liExperience[0].classList.add('active');
liEducation[0].classList.add('active');


function slideShowEx(index){
    divExperience.forEach((div)=>{
        div.classList.remove('active');
    });
    liExperience.forEach((butn)=>{
        butn.classList.remove('active');
    });
    divExperience[index].classList.add('active');
    liExperience[index].classList.add('active');
}

function slideShowEd(index){
    divEducation.forEach((div)=>{
        div.classList.remove('active');
    });
    liEducation.forEach((butn)=>{
        butn.classList.remove('active');
    });
    divEducation[index].classList.add('active');
    liEducation[index].classList.add('active');
}

liExperience.forEach((event, index)=>{
    event.addEventListener('click', ()=>{
        slideShowEx(index);
    });
});

liEducation.forEach((event, index)=>{
    event.addEventListener('click', ()=>{
        slideShowEd(index);
    });
});
}

resumeSlideShows();

function showProjects(){
const listAll = document.querySelectorAll('.projectsBackup ul li');
const butnGeral = document.querySelectorAll('.projectModel ul li');
const butnAll = document.querySelector('.projectModel .all');



function removeClick(index){
    butnGeral.forEach((item)=>{
        item.classList.remove('active');
    });
    butnGeral[index].classList.add('active');
}

butnGeral.forEach((event, index)=>{
    event.addEventListener('click', ()=>{
        removeClick(index);
    });
});

function showList(list, butn = "all"){
    list.forEach((item)=>{
        item.classList.remove('active');
    });
    if(butn === 'design'){
        list[0].classList.add('active');
        list[4].classList.add('active');
        list[5].classList.add('active');
        list[7].classList.add('active');
    }
    if(butn === 'web'){
        list[1].classList.add('active');
        list[6].classList.add('active');
    }
    if(butn === 'other'){
        list[2].classList.add('active');
        list[3].classList.add('active');
    }
    if(butn === 'all'){
        list[0].classList.add('active');
        list[1].classList.add('active');
        list[2].classList.add('active');
        list[3].classList.add('active');
        list[4].classList.add('active');
        list[5].classList.add('active');
        list[6].classList.add('active');
        list[7].classList.add('active');
    }
}

butnGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currButn = e.target;
        if(currButn.classList.contains('all')){
            showList(listAll);
        }
        if(currButn.classList.contains('design')){
            showList(listAll, "design");
        }
        if(currButn.classList.contains('web')){
            showList(listAll, "web");
        }
        if(currButn.classList.contains('other')){
            showList(listAll, "other");
        }
    })
})
}
showProjects();

function openimg(imgpath) {
    let imageUrl = window.location.origin + '/' + imgpath;
    window.open(imageUrl, "_blank");
  }
  