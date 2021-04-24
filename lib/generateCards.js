const man_card = (name, id, email, officeNumber) => {
  return `<div class="card" style="width: 18rem;">
      <div class="card-header p-4">
      <h2 style="color: rgb(196, 201, 136)";>${name}</h2>
      <h4 style="color: rgb(196, 201, 136)";><i class="fas fa-mug-hot"></i>  Manager<h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${id}</li>
        <li class="list-group-item">Email: <a href=mailto:${email}>${email}</a></li>
        <li class="list-group-item">office Number: ${officeNumber}</li>
      </ul>
    </div>`
}


const genEngineerCard = (name, id, email, github) => {
  return `<div class="card" style="width: 18rem;">
    <div class="card-header p-4">
    <h2 style="color: rgb(193, 206, 57)";>${name}</h2>
    <h4 style="color: rgb(193, 206, 57)";><i class="fas fa-glasses"></i>   Engineer<h4>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Id: ${id}</li>
      <li class="list-group-item">Email: <a href=mailto:${email}>${email}</a></li>
     <li class="list-group-item">Github:  <a href="https://github.com/${github}"> ${github} </a>
    </ul>
  </div>`
}

const genInternCard = (name, id, email, school) => {
  return `<div class="card" style="width: 18rem;">
      <div class="card-header p-4">
      <h2 style="color: rgb(12, 14, 0)";>${name}</h2>
      <h4 style="color: rgb(12, 14, 0)";><i class="fas fa-user-graduate"></i>   Intern<h4>
      </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">Id: ${id}</li>
        <li class="list-group-item">Email: <a href=mailto:"${email}>${email}</a></li>
        <li class="list-group-item">School: ${school}</li>
      </ul>
    </div>`
}

module.exports = {
  genEngineerCard: genEngineerCard,
  man_card: man_card,
  genInternCard: genInternCard
};