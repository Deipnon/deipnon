import { is, isEmpty } from 'ramda'


export const formatVariables = (request) => {
  return Object.keys(request).reduce((prev, curr) => {
    const keyValue = request[curr]
    
    if(curr === '__typename') return prev;
      
    if(is(Object, keyValue)){
      prev[curr] = formatVariables(keyValue)
      return prev;
    } else if(is(String, keyValue) && isEmpty(keyValue)) {
      prev[curr] = null
      return prev;
    }
    
    prev[curr] = keyValue;
    return prev
  }, {});
}