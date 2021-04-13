
// object to take the main elements

let leftImage = document.getElementById('leftImage');
let middleImage = document.getElementById('middleImage');
let rightIMAGE = document.getElementById('rightImage');

let maxAttemts = 10;
let userAttemptsCounter = 0;

let leftImageIndex;
let middleImageIndex;
let rightIMAGEiNDEX;
// bus mall

function BusMall(name, image, timesShown) {

    this.name = name;
    this.image = image;
    this.timesShown = 0;
    this.votes = 0;
    BusMall.allProducts.push(this);
}
BusMall.timesShown = 0;
BusMall.allProducts = [];


let container = document.getElementById('container');
// declaring images
new BusMall('bag', 'images/bag.jpg');//1
new BusMall('banana', 'images/banana.jpg');//2
new BusMall('bathroom', 'images/bathroom.jpg');//3
new BusMall('boots', 'images/boots.jpg');//4
new BusMall('breakfast', 'images/breakfast.jpg');//5
new BusMall('bubblegum', 'images/bubblegum.jpg');//6
new BusMall('chair', 'images/chair.jpg');//7
new BusMall('cthulhu', 'images/cthulhu.jpg');//8
new BusMall('dog-duck', 'images/dog-duck.jpg');//9
new BusMall('dragon', 'images/dragon.jpg');//10
new BusMall('pen', 'images/pen.jpg');//11
new BusMall('pet-sweep', 'images/pet-sweep.jpg');//12
new BusMall('scissors', 'images/scissors.jpg');//13
new BusMall('shark', 'images/shark.jpg');//14
new BusMall('sweep', 'images/sweep.png');//15
new BusMall('tauntaun', 'images/tauntaun.jpg');//16
new BusMall('unicorn', 'images/unicorn.jpg');//17
new BusMall('water-can', 'images/water-can.jpg');//18
new BusMall('wine-glass', 'images/wine-glass.jpg');//19


// console.log(BusMall.allProducts);

function generateRandomIndex() {
    return Math.floor(Math.random() * BusMall.allProducts.length);
}
// console.log(generateRandomIndex());



// render 
function renderThreeImages() {


    leftImageIndex = generateRandomIndex();
    middleImageIndex = generateRandomIndex();
    rightIMAGEiNDEX = generateRandomIndex();

    // make sure there is no same pics
    while (leftImageIndex == middleImageIndex || leftImageIndex == rightIMAGEiNDEX) {
        middleImageIndex = generateRandomIndex();
        rightIMAGEiNDEX = generateRandomIndex();
    }
    while (middleImageIndex === rightIMAGEiNDEX) {
        rightIMAGEiNDEX = generateRandomIndex();
    }


    
    // for (let x = 0; x < BusMall.allProducts.length; x++){
    //     if (middleImageIndex == BusMall.allProducts[x].image);
    //     BusMall.allProducts[x].timesShown++;
    // }
    // for (let j = 0; j < BusMall.allProducts.length; j++){
    //     if (rightIMAGEiNDEX == BusMall.allProducts[j].image);
    //     BusMall.allProducts[j].timesShown++;
    // }

    console.log(BusMall.allProducts[leftImageIndex].image);

    leftImage.src = BusMall.allProducts[leftImageIndex].image;
    middleImage.src = BusMall.allProducts[middleImageIndex].image;
    rightIMAGE.src = BusMall.allProducts[rightIMAGEiNDEX].image;


    for (let i = 0; i < BusMall.allProducts.length; i++){
        if (leftImage === BusMall.allProducts[i].image) {
            BusMall.allProducts[i].timesShown++;
            console.log(BusMall.allProducts[i]);
        }
    }

    // for (let i = 0; i < 10; i++){
    //     if (leftImageIndex.src == BusMall.allProducts[i].image)
    //         console.log(BusMall.allProducts[leftImageIndex].image);

    //     // console.log(BusMall.allProducts[i]+"hhhhhhhhh");

    // }
    // while(leftImageIndex== BusMall.allProducts[0]){}
    








}
// if (leftImageIndex == BusMall.allProducts[0].image) {
//     console.log("yeha");


// }

renderThreeImages();

leftImage.addEventListener('click', handleclick);
middleImage.addEventListener('click', handleclick);
rightIMAGE.addEventListener('click', handleclick);
// container.addEventListener('click', handleclick);

function handleclick(event) {
    // console.log(event.target.id);

    userAttemptsCounter++;

    renderThreeImages();


    if (userAttemptsCounter < maxAttemts) {
        if (event.target.id === 'leftImage') {
            BusMall.allProducts[leftImageIndex].votes++;
        }
        else if (event.target.id === 'middleImage'); {
            BusMall.allProducts[middleImageIndex].votes++;

        }
    }
    else if (event.target.id === 'rightImage') {
        BusMall.allProducts[rightIMAGEiNDEX].votes++;

    }
    console.log(BusMall.allProducts);

}




// handleclick(Event);



