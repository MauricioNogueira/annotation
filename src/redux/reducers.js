const states = {
    authenticated: false,
    host_api: 'http://192.168.0.17/annotation_api/public'
}

export const actions = (state = states, action) => {

    switch (action.type) {
        case "IS_AUTH":
            return state;
        case "HOST":
            action.host = state.host_api;
            return state;
        default:
            return state;
    }
}