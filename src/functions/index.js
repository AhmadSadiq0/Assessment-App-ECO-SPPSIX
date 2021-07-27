export const moveToScreen = (navigation, screenName, payload) => {
    navigation.navigate(screenName, payload)
}

export const checkDate = (input) => {
    var reg = /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\d\d/;
    if (input.match(reg)) {
        return true
    }
    else {
        return false
    }
}