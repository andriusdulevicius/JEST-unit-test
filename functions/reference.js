const createUser = () => {
  const user = {name: 'Bob'}
  user.email = 'bob@bob.com'
  return user

}

console.log(createUser());


const copyArr = (arr) => {
 return [...arr]
}


const includesValue = (arr,val) => {
  return arr.includes(val);
}

module.exports= {createUser, copyArr, includesValue};
