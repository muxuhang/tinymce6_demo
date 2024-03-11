



const profile = {
  username: 'hang',
  avatar: '',
  address: '济南',
  age: 30,
  skill: ['html', 'css', 'js', 'node', 'vue', 'react', 'react-native']
}
const userlist = [profile, profile]
const username = 'hang'

const changeProfile = <T extends object, K extends keyof T>(obj: T[] | T, name: K) => {
  console.log(obj, name)
}
changeProfile(userlist, 'address')
changeProfile(profile, 'address')