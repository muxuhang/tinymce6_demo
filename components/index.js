const prefix = 'md-'

async function renderComponents(name) {
  const k = document.getElementsByTagName(prefix + name)
  if (!k.length) return
  const div = document.createElement('template')
  div.id = prefix + name
  const resp = await fetch(`./components/${name}.html`);
  const html = await resp.text();
  div.innerHTML = html
  document.body.appendChild(div)
}

async function _renderCustomElements(name) {
  await renderComponents(name)
  customElements.define(
    `${prefix}${name}`,
    class extends HTMLElement {
      static get observedAttributes() {
        return ['name','value']
      }
      constructor() {
        super();
        let template = document.getElementById(prefix + name);
        let templateContent = template.content;
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(templateContent.cloneNode(true));
      }
      connectedCallback() {
        console.log("自定义元素添加至页面。");
      }

      disconnectedCallback() {
        console.log("自定义元素从页面中移除。");
      }

      adoptedCallback() {
        console.log("自定义元素移动至新页面。");
      }

      attributeChangedCallback(pname, oldValue, newValue) {
        if(pname){
          let el = this.shadowRoot.querySelector(`.${name}`)
          el.setAttribute(pname,newValue)
          if(pname==='name'){
            this.shadowRoot.querySelector(`.${name}_box`).setAttribute('for',newValue)
          }
        }
      }
    }
  );
}
window.onload = function (params) {
  _renderCustomElements('input')
}