const {
  photoDescriptions,
  commentVariationsList,
  authorsNamesList,
  likesMaxValue,
  commentsMaxValue,
  avatarsMaxValue } = require("./data_constants.js");


const randomInt = function (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min)
}

const ID = function () {
  return crypto.randomUUID()
}

const creatBulkOfComments = function (amountOfComments) {
  const comments = []
  for (let counter = 1; counter < amountOfComments; counter++) {
    const comment = {
      "id": ID(),
      "avatar": `../img/avatar-${randomInt(1, avatarsMaxValue + 1)}.svg`, // todo change if we need more avatars
      "message": commentVariationsList[randomInt(0, commentVariationsList.length)],
      "name": authorsNamesList[randomInt(0, authorsNamesList.length)],
    }
    comments.push(comment)
  }
  return comments
}

const createPhotoObjects = function (photoAmount) {
  const photoObjects = []
  for (let counter = 0; counter < photoAmount; counter++) {
    const photoObject = {
      "id": counter,
      "url": `../photos/${counter + 1}.jpg`,
      "authorAvatar": `../img/avatar-${randomInt(1, avatarsMaxValue)}.svg`,
      "description": photoDescriptions[counter],
      "likes": randomInt(1, likesMaxValue),
      "comments": [...creatBulkOfComments(randomInt(1, commentsMaxValue))],
    }
    photoObjects.push(photoObject)
  }
  return photoObjects
}

module.exports = createPhotoObjects