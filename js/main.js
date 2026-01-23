(function() {

  function createElement(element) {
    return document.createElement(element)
  }

  navLinks = [
    {
      link: '/ficdiary.html',
      linkName: 'Fics'
    },
    {
      link: '/lupusdiary.html',
      linkName: 'Lupus'
    },
    {
      link: '/linkdiary.html',
      linkName: 'Links'
    },
    // {
    //   link: '#',
    //   linkName: 'Movie and TV Diary'
    // },
    {
      link: '/shrinediary.html',
      linkName: 'Shrines'
    },
    // {
    //   link: '#',
    //   linkName: 'Fashion Diary'
    // },
    {
      link: '/scrapbook.html',
      linkName: 'Scrapbook'
    },
  ]

  // create header
  let header = document.getElementById('header-insert')

  let a = createElement('a')
  let h1 = createElement('h1')
  a.href = '/'
  h1.innerText = 'Jojo Website'
  h1.classList.add('starblues')
  a.appendChild(h1)

  let nav = createElement('nav')
  let ul = createElement('ul')
  navLinks.forEach(link => {
    let li = createElement('li')
    let a = createElement('a')
    a.href = link.link
    a.innerText = link.linkName

    li.appendChild(a)
    ul.appendChild(li)
    nav.appendChild(ul)
  })
  
  header.appendChild(a)
  header.appendChild(nav)

  // create footer
  let footer = document.getElementById('footer-insert')
  let div = createElement('div')
  div.classList.add('footer-content')
  div.innerText = 'hellow world'
  footer.appendChild(div)

  // let number = 1
  // while(true) {
  //   const picture = await fetch(`/images/brunettegirl/brunette%20girl%20${number}.jpg`)
  //   console.log(picture)
  //   break
  // }

})();
