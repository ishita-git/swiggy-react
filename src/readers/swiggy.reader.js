import { get } from "lodash";

// Restaurants Info
const costForTwoMessage = (restInfo) => get(restInfo,'data.cards[0].card.card.info.costForTwoMessage','costfortwo');
const name = (restInfo) =>  get( restInfo,'data.cards[0].card.card.info.name', 'name');
const cuisine1 = (restInfo) => get(restInfo,'data.cards[0].card.card.info.cuisines[0]','cuisine');
const cuisine2 = (restInfo) => get(restInfo,'data.cards[0].card.card.info.cuisines[1]', 'cuisine');
const areaName = (restInfo) => get(restInfo,'data.cards[0].card.card.info.areaName','areaName');
const avgRating = (restInfo) => get(restInfo,'data.cards[0].card.card.info.avgRating', 'avgRating');
const totalRatingsString = (restInfo) => get(restInfo,'data.cards[0].card.card.info.totalRatingsString', 'totalRating');

//Food Card
const foodName = (items) => get(items,'card.info.name', 'food');
const price = (items) => get(items,'card.info.price','price');
const description = (items) => get(items,'card.info.description', 'description');
const imageId = (items) => get(items,'card.info.imageId','No image')

//menu Card
const menuHeadings = (props) => get(props,'onPass.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards');

export default {
    costForTwoMessage, name , cuisine1 , cuisine2, areaName , avgRating , totalRatingsString,
    foodName, price,description, imageId,
    menuHeadings
}

/*
get,
set,
property,
map, reduce, filter,
head , last , index
*/