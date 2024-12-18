const getType = async () => {
  const response = await fetch('/data/quizeType.json')
  return await response.json()
}

export { getType }
