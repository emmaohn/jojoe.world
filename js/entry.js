let currentEntry

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

// radio buttons + entry header
export function makeEntries(entryJson, defaultEntry, useReviewBar = false) {
  currentEntry = defaultEntry ?? "welcome"

  entryJson.forEach(entry => {
    // get entry
    let entryNode = document.getElementById(entry.key)
  
    // create button
    let btn = createElement('button')
    btn.type = 'button'
    btn.name = 'entry'
    btn.value = entry.key

    // create button title and date
    let btnTitle = createElement('span')
    btnTitle.innerText = entry.title
    btn.appendChild(btnTitle)
    
    // if the entry is using a review bar, there will be a short description, add  that here
    if (useReviewBar) {
      let btnDesc = createElement('span')
      btnDesc.innerText = `\n${entry.shortDesc}`
      btn.appendChild(btnDesc)
    }
    
    let btnDate = createElement('span')
    btnDate.innerText = `\nDate: ${entry.date[0]}`
    btnDate.classList.add('btn-date')
    btn.appendChild(btnDate)

    // when the button is clicked toggle the current entry
    btn.onclick = () => {toggleEntry(btn)}
  
    // add entry button to sidebar
    sidebar.appendChild(btn)
  
    // make the entry header
    let entryHeader = createElement('div')
    entryHeader.classList.add('entry-header')

    // and add a title and date
    let h2 = createElement('h2')
    h2.innerText = entry.title
    entryHeader.appendChild(h2)
    
    // (if using a review bar create a short description)
    if (useReviewBar) {
      let shortDesc = createElement('p')
      shortDesc.innerText = entry.shortDesc
      entryHeader.appendChild(shortDesc)
    }
    
    let date = createElement('p')
    date.innerText = `Date: ${entry.date[0]}`
    !useReviewBar && entryHeader.appendChild(date)
    
    // if using the review bar, create the review bar!
    if (useReviewBar) {
      let reviewBar = createElement('div')
      reviewBar.classList.add('review-bar')
      
      // (the date was already made, so append it here instead)
      reviewBar.appendChild(date)
      
      let rating = createElement('p')
      rating.innerText = `Rating: ⋆ ${entry.rating}/10`
      reviewBar.appendChild(rating)
      
      let rec = createElement('p')
      reviewBar.appendChild(rec)
      rec.innerText = `Reccomend? ${entry.rec}`
      
      let link = createElement('a')
      link.href = entry.link
      link.innerText = `Where to read: ${entry.link}`
      reviewBar.appendChild(link)
      
      // add the review bar to the entry header
      entryHeader.appendChild(reviewBar)
    }

    // add the header to the beginning of the entry
    entryNode.prepend(entryHeader)
  
    // create entry change log
    let changeLog = createElement('div')
    let changeLogTitle = createElement('h3')
    changeLog.classList.add('changes')
    let updates = ""
    console.log(entry.date)
    // if there is more than one date in dates, there is an update
    if (entry.date.length > 1) {
      // remove the first date to only display the update dates
      entry.date.slice(1).forEach(date => {
        updates += `<p>Updated: ${date}</p>`
      })
    } else {
      updates = "<p>This entry has no changes</p>"
    }
    changeLogTitle.innerText = "Changes"
    changeLog.innerHTML = updates
    changeLog.prepend(changeLogTitle)
  
    // add changelog to entry
    entryNode.appendChild(changeLog)
  })
}