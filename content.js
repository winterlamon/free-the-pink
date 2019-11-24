function pinkify() {
  var links = Array.from(document.getElementsByTagName('a'))
  var buttons = Array.from(document.getElementsByTagName('button'))

  links.forEach(link => link.setAttribute('style', "color:#e70077;"))

  buttons.forEach(button => button.setAttribute('style', "background-color:#e70077;border-color:#e70077;color:#ffffff"))
}

pinkify()
