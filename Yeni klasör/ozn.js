ozzy={
    name:'ozan',
    surname:'varol',
    yas:21,
    adress:{
        sehir:'Samsun',
        mahalle:'Yenimahalle'
    },
    dateofbirth:'18.04.2001',
    job:'front end dev :D',
    events:['Code 101:Explore Software Development','BeCode Antwerpen-Workshop-Code initiation workshop phyton']
}

function showUser(value){
    document.querySelector('.user-infos').innerHTML +=`
    <span>AD: ${ozzy.name}</span> 
    <span>SOYAD :${ozzy.surname}</span>
    <span>YAŞ : ${ozzy.yas}</span>
    <span>İL:${ozzy.adress.sehir}<span><span>,${ozzy.adress.mahalle}<span>
    <br><span>MESLEK:${ozzy.job}</span>
    <br><span>DOĞUM TARİHİ:${ozzy.dateofbirth}</span>
    `

    let  events = document.querySelector('.events')
    for (a in ozzy.events) {
    events.innerHTML += `<div>${ozzy.events[a]}</div>
    `
    }
    document.getElementById("btn").disabled=true;
}
