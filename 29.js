const userProfile = {
    name: 'Bogdan',
    comentsQty: 23,
    hasSignedAgreement: false
}


const userInfo = ({name, comentsQty}) => {
    if (!comentsQty) {
        return `User ${name} has no comments`
    }

    return `User ${name} has ${comentsQty} comments`
}
userInfo(userProfile)
