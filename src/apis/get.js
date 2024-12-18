const getType = async () => {
  const response = await fetch('/data/quizeType.json')
  return await response.json()
}

const getQuestionByTypeId = async (typeId) => {
  const response = await fetch('/data/data.json')
  const body = await response.json()
  const id = parseInt(typeId, 10)
  return body.quizzes.filter((item) => item.typeId === id)[0].questions
}

export { getType, getQuestionByTypeId }
