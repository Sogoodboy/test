import { createStore } from 'redux'
export default createStore(reducer)

function reducer(state = {
    history: []
}, action) {

    switch (action.type) {
        case "addhistory":
            const { history } = state;
            const { item } = action;

            for (let i = 0; i < history.length; i++) {
                if (history[i].id === item.id) {

                    history.splice(i, 1)
                    break
                }
            };
            history.unshift(item)

            console.log(history);

            return {
                ...state,
                history: [...history]
            }

        default:
            return state
    }
}
export const addHistoryAC = (item) => ({
    type: 'addhistory',
    item
})
