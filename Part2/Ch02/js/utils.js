/**
 * 랜덤한 값을 리턴
 * @param {Number} min 최소값
 * @param {Number} max 최대값
 * @returns {Number} 최소와 최대 사이의 랜덤한 값을 리턴
 */
export const randomNumBetween = (min, max) => {
  return Math.random() * (max - min) + min
}