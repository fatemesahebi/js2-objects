// ----------------constructor method---------------------------------------
function Food(name, type, price, deliveryTime) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.deliveryTime = deliveryTime;
    this.totalFoodRate =[];
    this.comments = [];
    this.isReady = false;
    this.order=function isPremiumUser(boolean){
        if(boolean) console.log(0.8*this.price,this.totalFoodRate)
        else console.log(this.price,this.totalFoodRate)
    }
    this.rateFood=function SetRate(rateNum){
        this.totalFoodRate.push(rateNum)
            let sumRate=this.totalFoodRate.reduce((preVal,curVla)=>{
                return preVal+curVla
            })
        return sumRate/(this.totalFoodRate.length)
        }
}
//----------------------------test constructor method---------------------------------
let pizza=new Food('pizza','fastfood',120,30)
// console.log(pizza)

//-----------------------------add rate to food----------------------------------------
let rate1=pizza.rateFood(5)
// console.log(pizza.totalFoodRate)

let rate2=pizza.rateFood(4)
// console.log(pizza.totalFoodRate)
// console.log(pizza)
// console.log(pizza.rateFood(5))

// -------------------------------- test order ----------------------------
// console.log(pizza.order(true))
// console.log(pizza.order(false))


// -------------------------- factory method----------------------------------------------------------
function food(name, type, price, deliveryTime,order) {
    return {
        name,
        type,
        price,
        deliveryTime,
        totalFoodRate:[],
        comments: [],
        isReady: false,
        order:function isPremiumUser(True){
            if(True) console.log(0.8*this.price,this.totalFoodRate)
            else console.log(this.price,this.totalFoodRate)
    },
        rateFood:function addRate(rateNum){
            this.totalFoodRate.push(rateNum)
            let sumRate=this.totalFoodRate.reduce((preVal,curVla)=>{
                return preVal+curVla
            })
            return sumRate/(this.totalFoodRate.length)
        }
        }
}
//-------------------------test factory method-------------------------
let berger=food('berger','fast-food',45,15)
// console.log(berger)

//------------------------------add rate th berger------------------------
// console.log(berger.rateFood(4))
// console.log(berger.totalFoodRate)

// console.log(berger.rateFood(3))
// console.log(berger.totalFoodRate)

// console.log(berger.rateFood(5))
// console.log(berger.totalFoodRate)


//----------------------------test order part ----------------------
// console.log(berger.order(true))
// console.log(berger.order(false))

//-------------add comment-----------------------//
function addComment(author, text) {
    return{
        author,
        date:new Date(),
        totalRate:[],
        text,
        rate:function SetRate(rateNum) {
          this.totalRate.push(rateNum)
            let sum=this.totalRate.reduce((preVal,curVal)=>
            {
                return preVal+curVal
            })
            return sum/this.totalRate.length
        }
    }


}
//-----------------------------------add comment pizza and berger------------------
let comment1=addComment('ali','very goooood!')
// console.log(comment1)
pizza.comments.push(comment1)
// console.log(pizza)

let comment2=addComment('fateme','it was very delicious!')
berger.comments.push(comment2)
// console.log(berger)

//-------------------------------------------add rate to comment------------------------
// console.log(comment1.rate(5))
// console.log(comment1.rate(3))
// console.log(comment1.rate(2))
// console.log(comment1.totalRate)
// console.log(comment1)
// console.log(pizza)



//--------------------------------------------------------part 2----------------------------------------

//---------------------------------------------------------way 1----------------------------------------
function isEqual(object1,object2){

    if((Object.keys(object1).length) !== (Object.keys(object2).length)) {
        return false
    }
    for (let key in object1) {
        if (typeof(object1[key])=="object"){
             if (JSON.stringify(object1[key]) !== JSON.stringify(object1[key])) return false
        }
        else
        {
            if((object1[key]!==object2[key])) return false
        }
    }
    return true

}
//------------------------------------------test function-------------------------------

// const obj1 = {
//     key0: false,
//     key1: 'val1',
//     key2: 20,
//     key3: [0, 1, 2],
//     key4: {name: 'mohammad'},
// }
// const obj2 = {
//     key0: false,
//     key1: 'val1',
//     key2: 20,
//     key3: [0, 1],
//     key4: {name: 'mohammad'},
// }
const obj1 = {
    key0: false,
    key1: 'val1',
    key2: 20,
    key3: [0, 1, 2],
    key4: {name: 'mohammad'},
}
const obj2 = {
    key0: false,
    key1: 'val1',
    key2: 20,
    key3: [0, 1, 2],
    key4: {name: 'mohammad'},
}

// console.log(isEqual(obj1,obj2))

// ------------------------------------------------way 2--------------------------------

// -------------------Define a function to compare two simple object---------------
function isEqualSimple(object1,object2) {
    if((Object.keys(object1).length) !== (Object.keys(object2).length)) {
        return false
    }
    for (let key in object1)
    {if (object1[key]!==object2[key]) return false
    }
    return true

}
//------------------Define main function to compare two complicated objects----------------------
function IsEqual(object1,object2){

    if((Object.keys(object1).length) !== (Object.keys(object2).length)) {
        return false
    }

    for (let key in object1) {
        if (typeof(object1[key])=="object"){
            let para1=object1[key]
            let para2=object2[key]
            if (isEqualSimple(para1,para2)===false) return false
        }
        else
        {
            if((object1[key]!==object2[key])) return false
        }

    }
        return true
}
//----------------test-------------------------------
const obj3 = {
    key0: false,
    key1: 'val1',
    key2: 20,
    key3: [0, 1, 2],
    key4: {name: 'mohammad'},
}
const obj4 = {
    key0: false,
    key1: 'val1',
    key2: 20,
    key3: [0, 1,2],
    key4: {name: 'mohammad'},
}
// console.log(IsEqual(obj3,obj4))

//------------------------------------------define isSame objects function----------------------------
function isSame(object1,object2){
    if(object1===object2) return true
    else return false
}
//-------------------------------test isSame Function------------------------------
let obj5={name: 'mohammad'}
let obj6={name: 'mohammad'}
// console.log(isSame(obj5,obj6))

let obj7=obj5
// console.log(isSame(obj7,obj5))