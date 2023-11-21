
// 前置js   katex.min.js, katex.css, content.css, latex_data.js
// 加载tinymce编辑器
function renderTinymce(className) {
  tinymce.init({
    selector: className,
    height: 240,
    menubar: false,
    noneditable_class: 'katex',
    custom_ui_selector: '.tinymce_container,.katex_toolbar',
    content_css: '/css/katex.css,/css/content.css',
    valid_elements: '*[.*]',
    toolbar: 'undo redo | bold italic underline | aligncenter indent outdent',
    content_style:
      'p,div{margin:0;padding:0;border:0;};.katex:{font-size:24px}',
    setup: (edit) => {
      edit.on('focus', (e) => {
        hiddenKatexToolbar()
        setKatexPosition(edit.container.parentElement)
      })
    }
  });
}
// 加载katex工具栏
function renderKatexToolbar(className) {
  const toolbars = document.querySelectorAll('.tinymce_container .katex_toolbar')
  toolbars.forEach((toolbar) => {
    const container = document.createElement('div')
    container.className = 'toolbar_container'
    const toolbar_list = document.createElement('div')
    toolbar_list.className = 'toolbar_list'
    toolbar.appendChild(container);
    container.appendChild(toolbar_list)
    toolbar_data.map((item) => {
      var divEl = document.createElement('div');
      divEl.className = 'katex_box toolbar_item';
      divEl.dataset.value = item;
      _renderKatex(item, divEl);
      toolbar_list.appendChild(divEl);
    })
    renderMoreFormula(toolbar)
  })
}
// 加载插入公式按钮
function renderMoreFormula(toolbar) {
  const formula = document.createElement('div')
  formula.className = 'more_formula'
  formula.innerText = '插入公式'
  toolbar.appendChild(formula)
}
//将latex语法转换为公式展示
function _renderKatex(latex, element) {
  katex.render(latex, element, {
    throwOnError: false,
  });
}
// 直接插入公式
function insert_button() {
  const buttons = document.querySelectorAll('.katex_toolbar .toolbar_item');
  buttons.forEach((button) => {
    button.addEventListener('click', async (ele) => {
      let msg = ele.currentTarget.innerHTML
      const selId = button.parentElement.parentElement.parentElement.parentElement.querySelector('textarea').getAttribute('id')
      const activeEditor = tinymce.get(selId)
      activeEditor.insertContent(msg)
    });
  })
}

// -------------------弹窗---------------------- //
// 编辑器弹窗显示隐藏
async function _renderEdit() {
  const modal = document.getElementById('edit_modal');
  const roots = document.querySelectorAll('.more_formula')
  roots.forEach((ele) => {
    ele.addEventListener('click', () => {
      const selId = ele.parentElement.parentElement.querySelector('textarea').getAttribute('id')
      const activeEditor = tinymce.get(selId)
      saveMathType(activeEditor)
      modal.style.display = 'block';
    });
  })
  const closeBtn = document.querySelectorAll('.modal_close');
  closeBtn && closeBtn.forEach((el) => {
    el.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });
}
// 加载预置公式
function renderKatexFormulaList() {
  const tabBox = document.getElementById('tab');
  latex_data['formula'].map((item, index) => {
    // 创建tab列表
    const childItem = document.createElement('div');
    if (index === 0) childItem.classList.add('active');
    childItem.dataset.key = index;
    childItem.style.fontSize = '12px';
    childItem.innerText = item.title;
    _renderKatex(item.title, childItem);
    tabBox.appendChild(childItem);
    // 创建公式容器
    const containerBox = document.getElementById('formula_box');
    const containerItem = document.createElement('div');
    containerItem.style.width = '100%';
    containerItem.style.flexWrap = 'wrap';
    containerItem.style.display = 'none';
    containerItem.classList.add('formula_item');
    if (index === 0) {
      containerItem.classList.add('active');
      containerItem.style.display = 'flex';
    }
    containerBox.appendChild(containerItem);

    item.list.map((row, key) => {
      if (row.title) {
        var titleEl = document.createElement('div');
        titleEl.className = 'title';
        titleEl.innerHTML = row.title;
        containerItem.appendChild(titleEl);
      }
      row.list.map((row2) => {
        var divEl = document.createElement('div');
        if (!row2.label) {
          divEl.className = 'katex_box';
          divEl.dataset.value = row2;
          _renderKatex(row2, divEl);
        } else {
          divEl.style.width = '100%';
          divEl.innerHTML = `<div style="color:#666;padding:10px;font-size:14px;">${row2.label}</div>`;
          var divEl2 = document.createElement('span');
          divEl2.className = 'katex_box';
          divEl2.dataset.value = row2.value;
          _renderKatex(row2.value, divEl2);
          divEl.appendChild(divEl2);
        }
        containerItem.appendChild(divEl);
      });
    });
  });
  _tabChange();
}

// 切换符号列表
function _tabChange() {
  document.querySelectorAll('.tab div').forEach((ele) => {
    ele.addEventListener('click', (e) => {
      const key = e.currentTarget.dataset.key;
      document.querySelector('.tab .active').classList.remove('active');
      ele.classList.add('active');
      document
        .querySelectorAll('#formula_box .formula_item')
        .forEach((e, k) => {
          if (k == key) {
            e.style.display = 'flex';
          } else {
            e.style.display = 'none';
          }
        });
    });
  });
}
// 点击预置公式或符号
function _addEditKatex() {
  const values = document.querySelectorAll('.tab_value .katex_box');
  values.forEach((ele) => {
    ele.addEventListener('click', (e) => {
      // 如果是公式，放入latex编辑器,如果是符号，直接插入主编辑器
      if (ele.parentElement.getAttribute('id') === 'symbol_box') {
        const inputDom = tinymce.get('edit_input');
        const katex_preview = ele.innerHTML;
        inputDom.insertContent(katex_preview);
      } else {
        const katex_input = document.getElementById('katex_input');
        const before_text = katex_input.value.substring(
          0,
          katex_input.selectionStart
        );
        const after_text = katex_input.value.substring(
          katex_input.selectionEnd
        );
        katex_input.value =
          before_text + e.currentTarget.dataset.value + after_text;
        _previewChange(katex_input.value);
      }
    });
  });
}
// 公式编辑器
function _editKatex() {
  const katex_input = document.getElementById('katex_input');
  const katex_preview = document.querySelector('#katex_preview');
  katex_input.addEventListener('input', (e) => {
    if (!e.target.value) {
      katex_preview.innerHTML = '<div>公式预览</div>';
    } else {
      _previewChange(e.target.value);
    }
  });
}

// 公式预览 latex转换
function _previewChange(value) {
  const katex_preview = document.getElementById('katex_preview');
  _renderKatex(value, katex_preview);
}

// 保存公式
function saveMathType(activeEditor) {
  const save_button = document.getElementById('save_button');
  save_button.addEventListener('click', () => {
    const msg = document.getElementById('katex_preview').innerHTML
    if (document.getElementById('katex_preview').innerText == '公式预览') {
      return
    }
    const input = document.getElementById('katex_input')
    activeEditor.insertContent(msg)
    document.getElementById('edit_modal').style.display = 'none';
    input.value = ''
    document.getElementById('katex_preview').innerHTML = '<div>公式预览</div>'
  }, { once: true });
}

// 根据输入框位置调整公式栏位置
function fixedToolBar() {
  window.addEventListener('click', e => {
    // console.log('window click');
    // const edit = tinymce
    // console.log(edit.selection.getRng());

  })
  // document.querySelectorAll('.tinymce_container').forEach((ele) => {
  //   ele.addEventListener('mouseover', () => {
  //     setKatexPosition(ele)
  //   })
  // })
}

function setKatexPosition(ele, show = true) {
  ele.classList.add('tinymce_container_active')
  const katex_toolbar = ele.querySelector('.katex_toolbar')
  katex_toolbar.style.display = show ? 'flex' : 'none'
  if (ele.getBoundingClientRect().y < 20) {
    katex_toolbar.style.top = 'auto'
    katex_toolbar.style.bottom = '-30px'
  }
}

document.documentElement.addEventListener("mouseup", (e) => {
  if (!e.target.closest(".tinymce_container_active") && !e.target.closest('#edit_modal')) {
    hiddenKatexToolbar()
  }
});

function hiddenKatexToolbar() {
  document.querySelectorAll(".tinymce_container_active .katex_toolbar").forEach(ele => {
    ele.style.display = "none";
  })
  document.querySelectorAll(".tinymce_container_active").forEach(ele => {
    ele.classList.remove('tinymce_container_active')
  })
}


// 创建编辑器
function createKatexEdit(props = {}) {
  const {
    useToolbar = true
  } = props
  const className = '.tinymce_textarea'
  renderTinymce(className)
  useToolbar && renderKatexToolbar(className)
  useToolbar && insert_button()
  useToolbar && renderKatexFormulaList()
  useToolbar && _editKatex()
  useToolbar && _addEditKatex()
  useToolbar && _renderEdit()
  useToolbar && fixedToolBar()
}