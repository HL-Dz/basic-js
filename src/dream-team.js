module.exports = function createDreamTeam(arr) {
  if(!Array.isArray(arr)) return false;
  let onlyStr = arr.filter(e=> {
    if(typeof e === 'string') return e;
  })
  let noSpaces = onlyStr.join(',').replace(/\s/g, '').split(',');
  let firstSymb = noSpaces.map(e=>e.slice(0,1).toUpperCase());
  let sortArr = firstSymb.sort();
  return result = sortArr.join('');
};