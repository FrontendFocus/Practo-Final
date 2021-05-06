import types from "../types";

const initialState = {
    cartList: [],
    price: 0,
    user: [],
}

export default function (state = initialState, action) {
    let total = 0
    let money = 0;

    switch (action.type) {

        case types.ADD_LIST:
            let newList = [...state.cartList, action.payload]
            for (let i = 0; i < newList.length; i++) {
                total = total + newList[i].reducedPrice
            }
            return {
                ...state,
                cartList: newList,
                price: total
            }



        case types.DELETE_LIST:
            let newPrice = 0
            let newObject = [...state.cartList];
            let items = newObject.filter(item => item.id !== action.payload);
            for (let i = 0; i < items.length; i++) {
                newPrice = newPrice + items[i].reducedPrice
            }
            return {
                ...state,
                cartList: items,
                price: newPrice
            }



        case types.INCREMENT:
            let newArray = [...state.cartList];



            const index = newArray.findIndex((item) => item.id == action.payload);
            let obj = newArray[index];

            obj.quantity = obj.quantity + 1


            for (let i = 0; i < newArray.length; i++) {
                money += newArray[i].reducedPrice * newArray[i].quantity
            }
            return {
                ...state,
                cartList: newArray,
                price: money
            };

        case types.DECREMENT:
            let newDecrementArray = [...state.cartList];
            const decrementIndex = newDecrementArray.findIndex((item) => item.id == action.payload);
            let obj1 = newDecrementArray[decrementIndex];

            if (obj1.quantity == 1) {
                newDecrementArray = newDecrementArray.filter(item => item.id !== action.payload);

            } else {
                obj1.quantity -= 1
            }

            for (let i = 0; i < newDecrementArray.length; i++) {
                money += newDecrementArray[i].reducedPrice * newDecrementArray[i].quantity
            }
            return {
                ...state,
                cartList: newDecrementArray,
                price: money
            };

        case types.INFINITE_LIST: {
            return {
                ...state,
                user: [...state.user, ...action.payload]
            }
        }
        default: {
            return { ...state }
        }

    }

}



