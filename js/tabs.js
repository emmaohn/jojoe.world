const tabs = document.getElementById('tabs')

function createElement(element) {
  return document.createElement(element)
}

let currentPage

function togglePage(element) {
  // console.log(currentPage, element.value)
  if (currentPage != element.value) {
    // hide the currently displayed page
    document.querySelector(`[value="${currentPage}"]`).classList.toggle('activeTab')
    document.querySelector(`[value="${element.value}"]`).classList.toggle('activeTab')
    document.querySelector(`[data-title="${currentPage}"]`).classList.toggle('hidden')
    
    // display the new page
    let entry = document.querySelector(`[data-title="${element.value}"]`)
    entry.classList.toggle('hidden')
    
    // set the new page as the current page
    currentPage = element.value
  }
}

export function makeTabs(tabTitles, defaultPageTitle) {
  tabTitles.forEach((title) => {
    // initially, if the tab is not the welcome page, hide it
    const page = document.querySelector(`[data-title="${title}"]`)
    title != defaultPageTitle && page.classList.add('hidden')
    currentPage = defaultPageTitle
    
    // create a button for the tab
    const tab = createElement('button')
    tab.value = title
    tab.innerText = title
    title == defaultPageTitle && tab.classList.add('activeTab')
    tab.onclick = () => {togglePage(tab)}
  
    // append tab to the tabs div
    tabs.appendChild(tab)
  })
}

