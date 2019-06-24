const states = {
    authenticated: false
}

export const actions = (state = states, action) => {
    
    switch (action.type) {
        case "IS_AUTH":
            console.log(state, "Entrou");
            return state;
        default:
            return state;
    }
}