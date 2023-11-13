const latex_data = {
  'symbol': [
    {
      title: "常用", list: [
        '\\therefore{}',
        '\\because{}',
        '\\partial{}',
        '\\alpha{}',
        '\\beta{}',
        '\\gamma{}',
        // '\\epsilon{}',
        '\\pi{}',
        '\\dot{a}',
        '\\ddot{a}',
        '\\vec{a}',
        '\\overrightarrow{abc}',
        '\\times{}',
        '\\bigcap{}',
        '\\cap{}',
        '\\Delta{}',
        '\\geq{}',
        '\\leq{}',
        '\\pm{}',
        '\\Leftarrow{}',
        '\\Rightarrow{}',
        '\\exists{}',
        '\\triangle{}',
        '\\varnothing{}',
        '\\infty{}',
        '\\in{}',
        // '\\Theta{}',
        '\\div{}',
        '\\forall{}',
        '\\approx{}',
        '\\begin{pmatrix}\\end{pmatrix}',
        '\\theta{}',
        '\\Leftrightarrow{}',
        '\\lambda{}',
        '\\varphi{}',
        '\\perp{}',
        '\\notin{}',
        '\\subset{}',
        '\\parallel{}',
        '\\angle{}',
        '\\subseteq{}',
        '\\sigma{}',
        '\\wedge{}',
        '\\vee{}',
        '\\neq{}',
        '\\overline{ab}',
        '\\bar{x}',
        '\\{ \\}',
        '\\cdot{}'
      ]
    },
    {
      title: "函数", list: [
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
    }
  ],
  'formula': [
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
}

function renderLatex() {
  
}
