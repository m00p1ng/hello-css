(() => {
  let header = document.getElementById("header");
  let navToggle = document.getElementById("nav-toggle")

  navToggle.addEventListener('click', () => {
    toggleClass(header, "open")
  });

  const addClass = (element, className) => {
    let classList = element.className.split(" ")
    classList.push(className)
    element.className = classList.join(" ")
  }

  const removeClass = (element, className) => {
    let classList = element.className.split(" ");
    classList = classList.filter(e => e !== className)
    element.classList = classList
  }

  const toggleClass = (element, className) => {
    let classList = element.className.split(" ")
    if ((classList.indexOf(className)) !== -1) {
      removeClass(element, className)
    } else {
      addClass(element, className)
    }
  }
})()