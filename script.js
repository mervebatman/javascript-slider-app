var cats = [
    {
        name: "cats1",
        image: "img/s1.jpg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam, sequi?",
        link: "https://i.pinimg.com/originals/f8/03/cf/f803cf0b65623e8edfcb433cd119dfe2.jpg"     
    },
    {
        name: "cats2",
        image: "img/s2.jpg",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        link: "https://timelinecovers.pro/facebook-cover/download/cool-cat-facebook-cover.jpg"      
    },
    {
        name: "cats3",
        image: "img/s3.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus.",
        link: "https://i.pinimg.com/originals/e3/f4/ed/e3f4edf7dc47359b20bd4176f88735cb.jpg"    
    },
    {
        name: "cats4",
        image: "img/s4.jpg",
        text: "Non nostrum sequi laudantium expedita eaque enim quam hic maxime doloremque cupiditate.",
        link: "https://i.pinimg.com/originals/61/82/0c/61820c847df4e02b95b6175eaca60b23.jpg"      
    },
    {
        name: "cats5",
        image: "img/s5.jpg",
        text: "Excepturi minima dolore, architecto numquam explicabo deleniti!",
        link: "https://bestcoverpix.com/wp-content/uploads/2013/09/Cute-Cat-Facebook-Timeline-Covers.jpg"      
    }
];

var index = 0;
var slideCount = cats.length;
var interval;

var settings = {
    duration: '2000',
    random: false
}

init(settings);

document.querySelector(".buton1").addEventListener("click", function() {
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector(".buton2").addEventListener("click", function() {
    index++;
    showSlide(index);
    console.log(index);
});

document.querySelectorAll(".arrow").forEach(function(item) {
    item.addEventListener("mouseenter", function() {
        clearInterval(interval);
    })
})

document.querySelectorAll(".arrow").forEach(function(item) {
    item.addEventListener("mouseleave",function() {
        init(settings);
    })
})

function init(settings) {

    var previous;

    interval = setInterval(function() {
        if(settings.random) {
            //random index
            do{
                index = Math.floor(Math.random() * slideCount);
            }while(index == previous)
            previous = index;
        } else {
            //artan index
            if(slideCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);
    },settings.duration)
}

function showSlide(i) {

    index = i;

    if(i<0) {
        index = slideCount -1;
    }

    if(i>=slideCount) {
        index = 0;
    }

    document.querySelector(".title").textContent = cats[index].name;
    document.querySelector(".img").setAttribute("src", cats[index].image);
    document.querySelector(".text").textContent = cats[index].text;
    document.querySelector(".btn").setAttribute("href", cats[index].link);
}