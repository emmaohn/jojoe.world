let fics = [
  {
    key: "welcome",
    title: "Welcome!",
    shortDesc: "Explanation of what this page is",
    rating: "?",
    rec: "Yes!",
    link: "#",
    date: ["January 16, 2026", "January 17, 2026"]
  },
  {
    key: "entry1",
    title: "Vibe Check",
    shortDesc: "Frat boys fall in love?",
    rating: 2,
    rec: "no",
    link: "https://archiveofourown.org/works/55801990?view_full_work=true",
    date: ["January 16, 2025"]
  },
]

let currentEntry = "welcome"

function toggleEntry(element) {
  console.log(currentEntry, element.value)
  if (currentEntry != element.value) {
    if (currentEntry != "") document.getElementById(currentEntry).classList.toggle('hidden')
    
    let entry = document.getElementById(element.value)
    entry.classList.toggle('hidden')
    
    currentEntry = element.value
  }
}

function createElement(element) {
  return document.createElement(element)
}

const sidebar = document.getElementById('sidebar')
const viewer = document.getElementById('viewer')

// radio buttons + entry header
fics.forEach(fic => {
  // get entry
  let entry = document.getElementById(fic.key)

  // create buttons
  let btnTitle = createElement('span')
  let btnDesc = createElement('span')
  let btnDate = createElement('span')
  let btn = createElement('button')
  btn.type = 'button'
  btn.name = 'entry'
  btn.value = fic.key
  btnTitle.innerText = fic.title
  btnDesc.innerText = `\n${fic.shortDesc}`
  btnDate.innerText = `\nDate: ${fic.date}`
  btn.appendChild(btnTitle)
  btn.appendChild(btnDesc)
  btn.appendChild(btnDate)
  btn.onclick = () => {toggleEntry(btn)}

  // add button to sidebar
  sidebar.appendChild(btn)

  // make header pieces
  let h2 = createElement('h2')
  let shortDesc = createElement('p')
  let rating = createElement('p')
  let rec = createElement('p')
  let link = createElement('a')
  let date = createElement('p')
  h2.innerText = fic.title
  shortDesc.innerText = fic.shortDesc
  date.innerText = `Date: ${fic.date[0]}`
  rating.innerText = `Rating: ⋆ ${fic.rating}/10`
  rec.innerText = `Reccomend? ${fic.rec}`
  link.innerText = `Where to read: ${fic.link}`
  link.href = fic.link
  
  // make entry header and review bar
  let entryHeader = createElement('div')
  let reviewBar = createElement('div')
  entryHeader.classList.add('entry-header')
  reviewBar.classList.add('review-bar')

  // add pieces to header
  reviewBar.appendChild(date)
  reviewBar.appendChild(rating)
  reviewBar.appendChild(rec)
  reviewBar.appendChild(link)
  entryHeader.appendChild(h2)
  entryHeader.appendChild(shortDesc)
  entryHeader.appendChild(reviewBar)

  // add the header to the entry
  entry.prepend(entryHeader)

  // create entry change log
  let changeLog = createElement('div')
  let changeLogTitle = createElement('h3')
  changeLog.classList.add('changes')
  let updates = ""
  console.log(fic.date)
  // if there is more than one date in dates, there is an update
  if (fic.date.length > 1) {
    // remove the first date to only display the update dates
    fic.date.slice(1).forEach(date => {
      updates += `<p>Updated: ${date}</p>`
    })
  } else {
    updates = "This entry has no changes"
  }
  changeLogTitle.innerText = "Changes"
  changeLog.innerHTML = updates
  changeLog.prepend(changeLogTitle)

  // add changelog to entry
  entry.appendChild(changeLog)
})