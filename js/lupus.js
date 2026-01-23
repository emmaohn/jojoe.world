let diaryEntries = [
  {
    key: "welcome",
    title: "Lupie Grrl!!",
    date: ["January 16, 2026", "January 17, 2026"]
  },
  // {
  //   key: "entry1",
  //   title: "Exampple title",
  //   date: ["January 16, 2025"]
  // },
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
diaryEntries.forEach(diaryEntry => {
  // get entry
  let entry = document.getElementById(diaryEntry.key)

  // create buttons
  let btnTitle = createElement('span')
  let btnDate = createElement('span')
  let btn = createElement('button')
  btn.type = 'button'
  btn.value = diaryEntry.key
  btnTitle.innerText = diaryEntry.title
  btnDate.innerText = `\nDate: ${diaryEntry.date[0]}`
  btnDate.classList.add('btn-date')
  btn.appendChild(btnTitle)
  btn.appendChild(btnDate)
  btn.onclick = () => {toggleEntry(btn)}

  // add button to sidebar
  sidebar.appendChild(btn)

  // make header pieces
  let h2 = createElement('h2')
  let date = createElement('p')
  h2.innerText = diaryEntry.title
  date.innerText = `Date: ${diaryEntry.date[0]}`
  
  // make entry header and review bar
  let entryHeader = createElement('div')
  entryHeader.classList.add('entry-header')

  // add pieces to header
  entryHeader.appendChild(h2)
  entryHeader.appendChild(date)

  // add the header to the entry
  entry.prepend(entryHeader)

  // create entry change log
  let changeLog = createElement('div')
  let changeLogTitle = createElement('h3')
  changeLog.classList.add('changes')
  let updates = ""
  console.log(diaryEntry.date)
  // if there is more than one date in dates, there is an update
  if (diaryEntry.date.length > 1) {
    // remove the first date to only display the update dates
    diaryEntry.date.slice(1).forEach(date => {
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