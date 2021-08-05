function Template(name, description) {
  const template = document.createElement('div')
  template.innerHTML = `
  <div>
    <div class="title">${name}</div>
    <div class="description">${description}</div>
  </div>
  `

  return template
}

class Button {
  constructor(name, description) {
    this.name = name
    this.description = description
    this.template = Template(this.name, this.description)
    this._addEventListener()
  }

  _addEventListener () {
    this.template.onclick = () => {
      this.update('zzzz')
    }
  }
  
  render() {
    const el = this.template
    const container = document.body
    container.append(el)
  }

  update(value) {
    const text = this.template.querySelector('.title')
    text.textContent = value
  }
}

const createBtn = document.querySelector('#create')
createBtn.addEventListener('click', () => {
    const btn = new Button('123','')
    btn.render()
})








