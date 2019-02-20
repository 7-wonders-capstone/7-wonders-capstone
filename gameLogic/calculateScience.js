function calculateScience(player) {
  let sciencePoints = 0
  let compasses = 0
  let wheels = 0
  let tablets = 0
  player.science.forEach(entry => {
    if (entry === 'compass') {
      compasses++
    } else if (entry === 'wheel') {
      wheels++
    } else if (entry === 'tablet') {
      tablets++
    }
  })
  sciencePoints += compasses ** 2
  sciencePoints += tablets ** 2
  sciencePoints += wheels ** 2
  sciencePoints += 7 * Math.min(compasses, wheels, tablets)
  return sciencePoints
}

module.exports = calculateScience
