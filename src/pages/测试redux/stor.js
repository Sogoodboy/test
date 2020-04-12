import { createStore } from 'redux'
export default createStore(reducer)
function reducer(state = {
    name: '知识',
    goodlist: [
        { name: "香蕉", price: 10, num: 1 },
        { name: "香蕉", price: 10, num: 1 },
        { name: "香蕉", price: 10, num: 1 },

    ]
}, action) {

    switch (action.type) {

        case "修改name":
            return {
                ...state,
                name: action.name
            }
        case "changenum":
            const { goodlist } = state

            const { index, n } = action
            goodlist[index].num += n
            console.log(goodlist);

            return {
                ...state,
                goodlist: [...goodlist]
            }
        case 'deletgood':


            state.goodlist.splice(action.index, 1)
            return {
                ...state,
                goodlist: [...state.goodlist]
            }
        default:
            return state
    }




}
const myaction = {
    type: '修改name',
    name: '最大'

}
// store.dispatch(myaction)
// console.log('store', store.getState());
export const changeNameAC = (name) => ({
    type: '修改name',
    name
})
export const changeNumAc = (index, n) => ({
    type: 'changenum',
    index, n
})
export const deletGoodAC = (index) => ({
    type: 'deletgood',
    index
})