//lighting exercise breakfast

//array for what i could eat
const breakfast = [ {
    name: "burrito",
    ingredients: ["tortilla", "rice", "egg", "salsa"],
    hot: true,
    burned_mouth: true,
    approx_calories: 300,

}]

//function to make changes to DOM
const createBfastComp = (item) => {
    return     `
        <div>
            <h2>${item.name}</h2>
            <p> Made from: ${item.ingredients}</p>
            <p>With calories: ${item.approx_calories}</p>
            <p>Was it hot? ${item.hot}, did it burn my mouth? also ${item.burned_mouth}.</p>
        </div> `
};

//where to put it on the DOM
const bfastContainer = document.querySelector(".breakfastClass");

//function to actually run it
breakfast.forEach(item => {
    bfastContainer.innerHTML += createBfastComp(item);
});

//James Example js//
// const breakfast = {
//     food: {
//         name: "Nature Valley",
//         type: "Granola Bar"
//     },
//     drink: {
//         name: "McCafe",
//         type: "Coffee"
//     } 

// }

// const breakfastArticle = document.querySelector(".breakfast");

// const consume = (meal) =>{
//     return `
//     <h1>James McClarty ate:</h1>
//     <ul>
//         <li>${meal.food.name} ${meal.food.type}</li>
//         <li>${meal.drink.name} ${meal.drink.type}</li>
//     </ul>`
// }

// breakfastArticle.innerHTML = consume(breakfast)

//james example end//

//alex's example that randomly generates food

// Alex Momotyuk 10:23 AM
// const breakfast = {
//    date: "2019.08.28",
//    time: "07:20",
//    food: [ "pork sausages", "bacon", "fried potatoes", "eggs", "toast", "cereals", "pancakes", "French toast","maple syrup", "hot oatmeal" ],
//    drink: [ "hot tee", "hot coffe", "hot chocolate" ],
//    mood: [ "good", "ok", "not ok" ]
// }
// const randomItem = ( itemArray ) => {
//    let randomIndex = Math.floor( itemArray.length * Math.random() );
//    return itemArray[ randomIndex ];
// }
// const makeBreakfast = ( breakfast ) => {
//    return (`
//        <div>
//            <span>Breakfast time: </span>${breakfast.date} ${breakfast.time}
//        </div>
//        <div>
//            <span>Breakfast food: </span>${ randomItem( breakfast.food ) }
//        </div>
//        <div>
//            <span>Breakfast drink: </span>${ randomItem( breakfast.drink ) }
//        </div>
//        <div>
//            <span>Breakfast mood: </span>${ randomItem( breakfast.mood ) }
//        </div>
//    `)
// }
// const breakfastElement = document.querySelector( '.breakfast-main' );
// breakfastElement.innerHTML = makeBreakfast( breakfast );


