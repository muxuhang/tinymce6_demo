// 1、符号
// 2、公式
const latex_data = {
  'symbol': [
    {
      title: "符号", list: [
        '\\therefore',
        '\\because',
        '\\partial',
        '\\alpha',
        '\\beta',
        '\\gamma',
        // '\\epsilon{}',
        '\\pi',
        '\\times',
        '\\bigcap',
        '\\cap',
        '\\Delta',
        '\\geq',
        '\\leq',
        '\\pm',
        '\\Leftarrow',
        '\\Rightarrow',
        '\\exists',
        '\\triangle',
        '\\varnothing',
        '\\infty',
        '\\in',
        // '\\Theta{}',
        '\\div',
        '\\forall',
        '\\approx',
        // '\\begin{pmatrix}\\end{pmatrix}',
        '\\theta',
        '\\Leftrightarrow',
        '\\lambda',
        '\\varphi',
        '\\perp',
        '\\notin',
        '\\subset',
        '\\parallel',
        '\\angle',
        '\\subseteq',
        '\\sigma',
        '\\wedge',
        '\\vee',
        '\\neq',
        '\\cdot'
      ]
    }
  ],
  'formula': [
    {
      title: '常用',
      list: [
        {
          title: "函数", list: [
            '\\overline{ab}',
            '\\bar{x}',
            '\\dot{a}',
            '\\ddot{a}',
            '\\vec{a}',
            '\\overrightarrow{abc}',
            'x^{a}',
            'x_{a}',
            'x_{a}^{b}',
            '{x_{a}}^{b}',
            '\\frac{a}{b}',
            '\\sqrt{x}',
            '\\sqrt[n]{x}',
            '\\sum_{b}^{a}',
            '\\int_{b}^{a}',
            '\\left(\\begin{array}{c}a\\ b\\end{array}\\right)',
            '\\left(\\begin{array}{c}a \\\\ b \\end{array}\\right)',
            '\\begin{cases}a & \\\\b & \\\\c & \\end{cases}',
            '\\begin{bmatrix}a & b \\\\c & d \\end{bmatrix}'
          ]
        },
        {
          title: '数学', list: [
            {
              "value": "a^{2}+b^{2}=c^{2}",
              "label": "勾股定理"
            },
            {
              "value": "A=\\pi r^{2}",
              "label": "圆的面积"
            },
            {
              "value": "\\frac{{{x^2}}}{{{a^2}}} + \\frac{{{y^2}}}{{{b^2}}} - \\frac{{{z^2}}}{{{c^2}}} = 1",
              "label": "二次曲面"
            },
            {
              "value": "f(x) = {{{a_0}} \\over 2} + \\sum\\limits_{n = 1}^\\infty {({a_n}\\cos {nx} + {b_n}\\sin {nx})}",
              "label": "傅立叶级数"
            },
            {
              "value": "e ^ { x } = 1 + \\frac { x } { 1 ! } + \\frac { x ^ { 2 } } { 2 ! } + \\frac { x ^ { 3 } } { 3 ! } + \\cdots , \\quad - \\infty < x < \\infty",
              "label": "泰勒展开式"
            }
          ]
        },
        {
          title: '化学', list: [
            {
              "value": "2Al + 3{H_2}S{O_4} = A{l_2}{(S{O_4})_3} + 3{H_2} \\uparrow",
              "label": "铝和稀硫酸"
            },
            {
              "value": "2Al + 6HCl = 2AlC{l_3} + 3{H_2} \\uparrow",
              "label": "铝和稀盐酸"
            },
            {
              "value": "Mg + {H_2}S{O_4} = MgS{O_4} + {H_2} \\uparrow",
              "label": "镁和稀硫酸"
            },
            {
              "value": "Fe + {H_2}S{O_4} = FeS{O_4} + {H_2} \\uparrow",
              "label": "铁和稀硫酸"
            },
            {
              "value": "Zn + 2HCl = ZnC{l_2} + {H_2} \\uparrow",
              "label": "锌和稀盐酸"
            }
          ]
        }
      ]
    },
    {
      title: '集合',
      list: [{
        list: [
          '\\forall',
          '\\exists',
          '\\emptyset',
          '\\varnothing',
          '\\in',
          '\\ni',
          '\\not\in',
          '\\notin',
          '\\subset',
          '\\subseteq',
          '\\supset',
          '\\supseteq',
          '\\cap',
          '\\bigcap',
          '\\cup',
          '\\bigcup',
          '\\biguplus',
          '\\sqsubset',
          '\\sqsubseteq',
          '\\sqsupset',
          '\\sqsupseteq',
          '\\sqcap',
          '\\sqcup',
          '\\bigsqcup',
        ]
      }]
    },
    {
      title: '函数',
      list: [{
        list: [
          '\\sin\\theta',
          '\\cos\\theta',
          '\\tan\\theta',
          '\\arcsin\\frac{L}{r}',
          '\\arccos\\frac{T}{r}',
          '\\arctan\\frac{L}{T}',
          '\\sinh g',
          '\\cosh h',
          '\\tanh i',
          '\\operatorname{sh}j',
          '\\operatorname{argsh}k',
          '\\operatorname{ch}h',
          '\\operatorname{argch}l',
          '\\operatorname{th}i',
          '\\operatorname{argth}m',
          '\\liminf I',
          '\\limsup S',
          '\\max H',
          '\\min L',
          '\\inf s',
          '\\sup t',
          '\\exp\\!t',
          '\\ln X',
          '\\lg X',
          '\log X',
          '\\log_\\alpha X',
          '\\ker x',
          '\\deg x',
          '\\gcd(T,U,V,W,X)',
          '\\Pr x',
          '\\det x',
          '\\hom x',
          '\\arg x',
          '\\dim x',
          '\\lim_{t\\to n}T',
        ]
      }]
    },
    {
      title: '箭头',
      list: [{
        list: [
          '\\leftarrow',
          '\\gets',
          '\\rightarrow',
          '\\to',
          '\\leftrightarrow',
          '\\longleftarrow',
          '\\longrightarrow',
          '\\mapsto',
          '\\longmapsto',
          '\\hookrightarrow',
          '\\hookleftarrow',
          '\\nearrow',
          '\\searrow',
          '\\swarrow',
          '\\nwarrow',
          '\\uparrow',
          '\\downarrow',
          '\\updownarrow',
          '\\rightharpoonup',
          '\\rightharpoondown',
          '\\leftharpoondown',
          '\\upharpoonleft',
          '\\upharpoonright',
          '\\downharpoonleft',
          '\\downharpoonright',
          '\\Leftarrow',
          '\\Rightarrow',
          '\\Leftrightarrow',
          '\\Longleftarrow',
          '\\Longrightarrow',
          '\\Longleftrightarrow',
          '\\Uparrow',
          '\\Downarrow',
          '\\Updownarrow'
        ]
      }]
    },
    {
      title: '矩阵',
      list: [{
        list: [
          '\\begin{matrix}x & y \\\\z & v\\end{matrix}',
          '\\begin{vmatrix}x & y \\\\z & v\\end{vmatrix}',
          '\\begin{Vmatrix}x & y \\\\z & v\\end{Vmatrix}',
          `\\begin{bmatrix} 0 & \\cdots & 0 \\\\\\vdots & \\ddots & \\vdots \\\\0 & \\cdots & 0\\end{bmatrix}`,
          `\\begin{Bmatrix} x & y \\\\ z & v \\end{Bmatrix}`,
          `\\begin{pmatrix} x & y \\\\ z & v \\end{pmatrix}`,
          `\\bigl( \\begin{smallmatrix} a&b\\\\ c&d \\end{smallmatrix} \\bigr)`,
        ]
      }]
    },
  ]
}

function renderLatex() {

}
