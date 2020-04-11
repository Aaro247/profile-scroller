const data = [
  {
    name: 'John Doe',
    age: 32,
    gender: 'male',
    lookingFor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/75.jpg'
  },
  {
    name: 'Jane Smith',
    age: 26,
    gender: 'female',
    lookingFor: 'female',
    location: 'Miami FL',
    image: 'https://randomuser.me/api/portraits/women/75.jpg'
  },
  {
    name: 'William Smith',
    age: 22,
    gender: 'male',
    lookingFor: 'female',
    location: 'Boston MA',
    image: 'https://randomuser.me/api/portraits/men/63.jpg'
  },
  {
    name: 'Jessica Kumar',
    age: 38,
    gender: 'female',
    lookingFor: 'male',
    location: 'Lynn MA',
    image: 'https://randomuser.me/api/portraits/women/63.jpg'
  }
]

const profiles = profileIterator(data)
nextProfile()

document.getElementById('next').addEventListener('click', nextProfile)

function nextProfile() {
  const currentProfile = profiles.next().value 

  if(currentProfile !== undefined) {
    document.getElementById('profile-display').innerHTML = 
    `
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Gender: ${currentProfile.gender}</li>
        <li class="list-group-item">Preference: ${currentProfile.lookingFor}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
      </ul>
    `

    document.getElementById('image-display').innerHTML = 
    `
      <img src="${currentProfile.image}"> 
    `
  } else {
    window.location.reload()
  }
}

function profileIterator(profiles) {
  let nextIndex = 0

  return {
    next: function() {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], data: false }
        : { data: true }
    }
  }
}