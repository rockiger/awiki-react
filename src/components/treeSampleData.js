// export const blueprintTree = [
//   {
//     id: 0,
//     hasCaret: true,
//     icon: 'folder-close',
//     label: 'Folder 0',
//   },
//   {
//     id: 1,
//     icon: 'folder-close',
//     isExpanded: true,
//     label: (
          
//                 Folder 1
           
//         ),
//     childNodes: [
//           {
//             id: 2,
//             icon: 'document',
//             label: 'Item 0',
//             secondaryLabel: (
                  
                     
                  
//                 ),
//           },
//           {
//             id: 3,
//             icon: 'tag',
//             label: 'Organic meditation gluten-free, sriracha VHS drinking vinegar beard man.',
//           },
//           {
//             id: 4,
//             hasCaret: true,
//             icon: 'folder-close',
//             label: (
                  
//                         Folder 2
                  
//                 ),
//             childNodes: [
//                     { id: 5, label: 'No-Icon Item' },
//                     { id: 6, icon: 'tag', label: 'Item 1' },
//                   {
//                     id: 7,
//                     hasCaret: true,
//                     icon: 'folder-close',
//                     label: 'Folder 3',
//                     childNodes: [
//                             { id: 8, icon: 'document', label: 'Item 0' },
//                             { id: 9, icon: 'tag', label: 'Item 1' },
//                         ],
//                   },
//                 ],
//           },
//         ],
//   },
// ];

//   export const smallTree = [
//     {
//       name: 'Home',
//       type: 'dir',
//       relativePath: './Home',
//       children: [],
//       // needed for blueprint tree
//       depth: 2,
//       id: './Home',
//       label: 'Home',
//       path: [0],
//       childNodes: [
//         {
//           name: 'Test',
//           type: 'dir',
//           relativePath: './Home/Test',
//           children: [],
//           // needed for blueprint tree
//           depth: 2,
//           id: './Home/Test',
//           label: 'Test',
//           path: [1],
//         },
//       ],
//     },

//     {
//       name: 'Trash.markdown',
//       type: 'file',
//       size: 39,
//       relativePath: './Trash.markdown'
//       // needed for blueprint tree
//       depth: 2,
//       id: './Home',
//       label: 'Home',
//       path: [0],
//       childNodes: [
//         {
//           name: 'Test',
//           type: 'dir',
//           relativePath: './Home/Test',
//           children: [],
//           // needed for blueprint tree
//           depth: 2,
//           id: './Home/Test',
//           label: 'Test',
//           path: [1],
//         },
//       ],
//     }
//   ];
export const tree = [
    {
      name: 'Home',
      type: 'dir',
      relativePath: './Home',
      children: [
        {
          name: 'Bücher',
          type: 'dir',
          relativePath: './Home/Bücher',
          children: [
            {
              name: 'Bergauf_mit_Rückenwind',
              type: 'dir',
              relativePath: './Home/Bücher/Bergauf_mit_Rückenwind',
              children: [
                {
                  name: 'pasted_image.png',
                  type: 'file',
                  size: 3125,
                  relativePath:
                    './Home/Bücher/Bergauf_mit_Rückenwind/pasted_image.png',
                },
                {
                  name: 'pasted_image001.png',
                  type: 'file',
                  size: 3125,
                  relativePath:
                    './Home/Bücher/Bergauf_mit_Rückenwind/pasted_image001.png',
                },
                {
                  name: 'pasted_image002.png',
                  type: 'file',
                  size: 5865,
                  relativePath:
                    './Home/Bücher/Bergauf_mit_Rückenwind/pasted_image002.png',
                },
              ],
              size: 12115,
            },
            {
              name: 'Bergauf_mit_Rückenwind.markdown',
              type: 'file',
              size: 4099,
              relativePath: './Home/Bücher/Bergauf_mit_Rückenwind.markdown',
            },
            {
              name: 'FiveThingsWeNeedToKnowAboutTechnologicalChange.markdown',
              type: 'file',
              size: 823,
              relativePath:
                './Home/Bücher/FiveThingsWeNeedToKnowAboutTechnologicalChange.markdown',
            },
            {
              name: 'Im_Gefühlsdschungel.markdown',
              type: 'file',
              size: 4667,
              relativePath: './Home/Bücher/Im_Gefühlsdschungel.markdown',
            },
            {
              name: 'Originals.markdown',
              type: 'file',
              size: 6372,
              relativePath: './Home/Bücher/Originals.markdown',
            },
            {
              name: 'ParadigmsOfAIP.markdown',
              type: 'file',
              size: 5532,
              relativePath: './Home/Bücher/ParadigmsOfAIP.markdown',
            },
            {
              name: 'TexteSchreiben-EinfachKlarVerständlich.markdown',
              type: 'file',
              size: 10900,
              relativePath:
                './Home/Bücher/TexteSchreiben-EinfachKlarVerständlich.markdown',
            },
            {
              name: 'The_Bootstrapers_Bible.markdown',
              type: 'file',
              size: 4076,
              relativePath: './Home/Bücher/The_Bootstrapers_Bible.markdown',
            },
            {
              name: 'Traction.markdown',
              type: 'file',
              size: 4613,
              relativePath: './Home/Bücher/Traction.markdown',
            },
            {
              name: 'UNSCRIPTED.markdown',
              type: 'file',
              size: 5677,
              relativePath: './Home/Bücher/UNSCRIPTED.markdown',
            },
            {
              name: 'WhereStartupIdeasComeFrom.markdown',
              type: 'file',
              size: 1183,
              relativePath: './Home/Bücher/WhereStartupIdeasComeFrom.markdown',
            },
            {
              name: 'braveclojure.markdown',
              type: 'file',
              size: 13794,
              relativePath: './Home/Bücher/braveclojure.markdown',
            },
          ],
          size: 73851,
        },
        {
          name: 'Bücher.markdown',
          type: 'file',
          size: 1405,
          relativePath: './Home/Bücher.markdown',
        },
        {
          name: 'Design.markdown',
          type: 'file',
          size: 389,
          relativePath: './Home/Design.markdown',
        },
        {
          name: 'Entrepreneurship',
          type: 'dir',
          relativePath: './Home/Entrepreneurship',
          children: [
            {
              name: '7InnovationsquellenNachPeterDrucker.markdown',
              type: 'file',
              size: 5583,
              relativePath:
                './Home/Entrepreneurship/7InnovationsquellenNachPeterDrucker.markdown',
            },
            {
              name: 'Alibaba.markdown',
              type: 'file',
              size: 238,
              relativePath: './Home/Entrepreneurship/Alibaba.markdown',
            },
            {
              name: 'Cambiao.markdown',
              type: 'file',
              size: 2012,
              relativePath: './Home/Entrepreneurship/Cambiao.markdown',
            },
            {
              name: 'CoupleMe',
              type: 'dir',
              relativePath: './Home/Entrepreneurship/CoupleMe',
              children: [
                {
                  name: 'Couple-Modul.markdown',
                  type: 'file',
                  size: 369,
                  relativePath:
                    './Home/Entrepreneurship/CoupleMe/Couple-Modul.markdown',
                },
                {
                  name: 'CoupleMe.markdown',
                  type: 'file',
                  size: 1126,
                  relativePath:
                    './Home/Entrepreneurship/CoupleMe/CoupleMe.markdown',
                },
                {
                  name: 'Notizbuchvorlage_für_CoupleMe.markdown',
                  type: 'file',
                  size: 147,
                  relativePath:
                    './Home/Entrepreneurship/CoupleMe/Notizbuchvorlage_für_CoupleMe.markdown',
                },
                {
                  name: 'TreffenVom1506.markdown',
                  type: 'file',
                  size: 386,
                  relativePath:
                    './Home/Entrepreneurship/CoupleMe/TreffenVom1506.markdown',
                },
                {
                  name: 'WebForms.markdown',
                  type: 'file',
                  size: 817,
                  relativePath:
                    './Home/Entrepreneurship/CoupleMe/WebForms.markdown',
                },
              ],
              size: 2845,
            },
            {
              name: 'CoupleMe.markdown',
              type: 'file',
              size: 375,
              relativePath: './Home/Entrepreneurship/CoupleMe.markdown',
            },
            {
              name: 'Datenschutz.markdown',
              type: 'file',
              size: 131,
              relativePath: './Home/Entrepreneurship/Datenschutz.markdown',
            },
            {
              name: 'Dictandu',
              type: 'dir',
              relativePath: './Home/Entrepreneurship/Dictandu',
              children: [
                {
                  name: 'Keywords.markdown',
                  type: 'file',
                  size: 475,
                  relativePath:
                    './Home/Entrepreneurship/Dictandu/Keywords.markdown',
                },
                {
                  name: 'Names.markdown',
                  type: 'file',
                  size: 105,
                  relativePath: './Home/Entrepreneurship/Dictandu/Names.markdown',
                },
              ],
              size: 580,
            },
            {
              name: 'Dictandu.markdown',
              type: 'file',
              size: 517,
              relativePath: './Home/Entrepreneurship/Dictandu.markdown',
            },
            {
              name: 'Gründer_berichten.markdown',
              type: 'file',
              size: 204,
              relativePath: './Home/Entrepreneurship/Gründer_berichten.markdown',
            },
            {
              name: 'How_fo_find_a_name.markdown',
              type: 'file',
              size: 1870,
              relativePath: './Home/Entrepreneurship/How_fo_find_a_name.markdown',
            },
            {
              name: 'Ideen',
              type: 'dir',
              relativePath: './Home/Entrepreneurship/Ideen',
              children: [
                {
                  name: 'EtherCalc.markdown',
                  type: 'file',
                  size: 13,
                  relativePath: './Home/Entrepreneurship/Ideen/EtherCalc.markdown',
                },
                {
                  name: 'EtherCalcForConfluence.markdown',
                  type: 'file',
                  size: 599,
                  relativePath:
                    './Home/Entrepreneurship/Ideen/EtherCalcForConfluence.markdown',
                },
                {
                  name: 'GooglePlusDesktopClient',
                  type: 'dir',
                  relativePath:
                    './Home/Entrepreneurship/Ideen/GooglePlusDesktopClient',
                  children: [
                    {
                      name: 'screenshot_2017-03-14-100007.png',
                      type: 'file',
                      size: 628057,
                      relativePath:
                        './Home/Entrepreneurship/Ideen/GooglePlusDesktopClient/screenshot_2017-03-14-100007.png',
                    },
                  ],
                  size: 628057,
                },
                {
                  name: 'GooglePlusDesktopClient.markdown',
                  type: 'file',
                  size: 406,
                  relativePath:
                    './Home/Entrepreneurship/Ideen/GooglePlusDesktopClient.markdown',
                },
                {
                  name: 'TinderFürRezepte',
                  type: 'dir',
                  relativePath: './Home/Entrepreneurship/Ideen/TinderFürRezepte',
                  children: [
                    {
                      name: 'Tinder für Rezepte - Seite 1.jpg',
                      type: 'file',
                      size: 943972,
                      relativePath:
                        './Home/Entrepreneurship/Ideen/TinderFürRezepte/Tinder für Rezepte - Seite 1.jpg',
                    },
                    {
                      name: 'tfr_overview (1).svg',
                      type: 'file',
                      size: 1233153,
                      relativePath:
                        './Home/Entrepreneurship/Ideen/TinderFürRezepte/tfr_overview (1).svg',
                    },
                  ],
                  size: 2177125,
                },
                {
                  name: 'TinderFürRezepte.markdown',
                  type: 'file',
                  size: 458,
                  relativePath:
                    './Home/Entrepreneurship/Ideen/TinderFürRezepte.markdown',
                },
              ],
              size: 2806658,
            },
            {
              name: 'Ideen.markdown',
              type: 'file',
              size: 3127,
              relativePath: './Home/Entrepreneurship/Ideen.markdown',
            },
            {
              name: 'Landingpages.markdown',
              type: 'file',
              size: 288,
              relativePath: './Home/Entrepreneurship/Landingpages.markdown',
            },
            {
              name: 'RheinMainStartups.markdown',
              type: 'file',
              size: 179,
              relativePath: './Home/Entrepreneurship/RheinMainStartups.markdown',
            },
            {
              name: 'ToolsFromStartSchool.markdown',
              type: 'file',
              size: 30543,
              relativePath:
                './Home/Entrepreneurship/ToolsFromStartSchool.markdown',
            },
          ],
          size: 2855150,
        },
        {
          name: 'Entrepreneurship.markdown',
          type: 'file',
          size: 5260,
          relativePath: './Home/Entrepreneurship.markdown',
        },
        {
          name: 'FinanzproduktTest',
          type: 'dir',
          relativePath: './Home/FinanzproduktTest',
          children: [
            {
              name: 'hqdefault.jpg',
              type: 'file',
              size: 41919,
              relativePath: './Home/FinanzproduktTest/hqdefault.jpg',
            },
            {
              name: 'publicdomainq-0008644wbbefm.svg',
              type: 'file',
              size: 16946,
              relativePath:
                './Home/FinanzproduktTest/publicdomainq-0008644wbbefm.svg',
            },
          ],
          size: 58865,
        },
        {
          name: 'FinanzproduktTest.markdown',
          type: 'file',
          size: 177,
          relativePath: './Home/FinanzproduktTest.markdown',
        },
        {
          name: 'Fptest',
          type: 'dir',
          relativePath: './Home/Fptest',
          children: [
            {
              name: 'Degiro-Test.markdown',
              type: 'file',
              size: 167,
              relativePath: './Home/Fptest/Degiro-Test.markdown',
            },
            {
              name: 'sleeping_user.svg',
              type: 'file',
              size: 52621,
              relativePath: './Home/Fptest/sleeping_user.svg',
            },
          ],
          size: 52788,
        },
        {
          name: 'Fptest.markdown',
          type: 'file',
          size: 233,
          relativePath: './Home/Fptest.markdown',
        },
        {
          name: 'Home.markdown',
          type: 'file',
          size: 1831,
          relativePath: './Home/Home.markdown',
        },
        {
          name: 'Organischer_Linkaufbau.markdown',
          type: 'file',
          size: 626,
          relativePath: './Home/Organischer_Linkaufbau.markdown',
        },
        {
          name: 'Persönlich',
          type: 'dir',
          relativePath: './Home/Persönlich',
          children: [
            {
              name: 'Bolognese.markdown',
              type: 'file',
              size: 323,
              relativePath: './Home/Persönlich/Bolognese.markdown',
            },
            {
              name: 'Das_Pizza-Pasta-Problem.markdown',
              type: 'file',
              size: 209,
              relativePath: './Home/Persönlich/Das_Pizza-Pasta-Problem.markdown',
            },
            {
              name: 'Geburtstag_18.markdown',
              type: 'file',
              size: 252,
              relativePath: './Home/Persönlich/Geburtstag_18.markdown',
            },
            {
              name: 'Geile_Songs.markdown',
              type: 'file',
              size: 55,
              relativePath: './Home/Persönlich/Geile_Songs.markdown',
            },
            {
              name: 'Geschenke.markdown',
              type: 'file',
              size: 53,
              relativePath: './Home/Persönlich/Geschenke.markdown',
            },
            {
              name: 'Gespräche_mit_Mama.markdown',
              type: 'file',
              size: 1236,
              relativePath: './Home/Persönlich/Gespräche_mit_Mama.markdown',
            },
            {
              name: 'Humor.markdown',
              type: 'file',
              size: 9,
              relativePath: './Home/Persönlich/Humor.markdown',
            },
            {
              name: 'LinsenBolognese.markdown',
              type: 'file',
              size: 418,
              relativePath: './Home/Persönlich/LinsenBolognese.markdown',
            },
            {
              name: 'OSS_University_-_Computer_Science',
              type: 'dir',
              relativePath: './Home/Persönlich/OSS_University_-_Computer_Science',
              children: [
                {
                  name: 'AP_Physics_1',
                  type: 'dir',
                  relativePath:
                    './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1',
                  children: [
                    {
                      name: 'Formulas',
                      type: 'dir',
                      relativePath:
                        './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas',
                      children: [
                        {
                          name: 'equation.png',
                          type: 'file',
                          size: 1059,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation.png',
                        },
                        {
                          name: 'equation.tex',
                          type: 'file',
                          size: 46,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation.tex',
                        },
                        {
                          name: 'equation001.png',
                          type: 'file',
                          size: 1106,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation001.png',
                        },
                        {
                          name: 'equation001.tex',
                          type: 'file',
                          size: 46,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation001.tex',
                        },
                        {
                          name: 'equation002.png',
                          type: 'file',
                          size: 1025,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation002.png',
                        },
                        {
                          name: 'equation002.tex',
                          type: 'file',
                          size: 43,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation002.tex',
                        },
                        {
                          name: 'equation003.png',
                          type: 'file',
                          size: 498,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation003.png',
                        },
                        {
                          name: 'equation003.tex',
                          type: 'file',
                          size: 31,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation003.tex',
                        },
                        {
                          name: 'equation004.png',
                          type: 'file',
                          size: 512,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation004.png',
                        },
                        {
                          name: 'equation004.tex',
                          type: 'file',
                          size: 31,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation004.tex',
                        },
                        {
                          name: 'equation005.png',
                          type: 'file',
                          size: 651,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation005.png',
                        },
                        {
                          name: 'equation005.tex',
                          type: 'file',
                          size: 36,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation005.tex',
                        },
                        {
                          name: 'equation006.png',
                          type: 'file',
                          size: 599,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation006.png',
                        },
                        {
                          name: 'equation006.tex',
                          type: 'file',
                          size: 39,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation006.tex',
                        },
                        {
                          name: 'equation007.png',
                          type: 'file',
                          size: 481,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation007.png',
                        },
                        {
                          name: 'equation007.tex',
                          type: 'file',
                          size: 37,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation007.tex',
                        },
                        {
                          name: 'equation008.png',
                          type: 'file',
                          size: 410,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation008.png',
                        },
                        {
                          name: 'equation008.tex',
                          type: 'file',
                          size: 19,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation008.tex',
                        },
                        {
                          name: 'equation009.png',
                          type: 'file',
                          size: 448,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation009.png',
                        },
                        {
                          name: 'equation009.tex',
                          type: 'file',
                          size: 19,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/equation009.tex',
                        },
                        {
                          name: 'pasted_image.png',
                          type: 'file',
                          size: 4386,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/pasted_image.png',
                        },
                        {
                          name: 'pasted_image001.png',
                          type: 'file',
                          size: 13331,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/pasted_image001.png',
                        },
                        {
                          name: 'pasted_image002.png',
                          type: 'file',
                          size: 7120,
                          relativePath:
                            './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas/pasted_image002.png',
                        },
                      ],
                      size: 31973,
                    },
                    {
                      name: 'Formulas.markdown',
                      type: 'file',
                      size: 715,
                      relativePath:
                        './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/Formulas.markdown',
                    },
                    {
                      name: 'equation.tex',
                      type: 'file',
                      size: 22,
                      relativePath:
                        './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/equation.tex',
                    },
                    {
                      name: 'equation001.png',
                      type: 'file',
                      size: 377,
                      relativePath:
                        './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/equation001.png',
                    },
                    {
                      name: 'equation001.tex',
                      type: 'file',
                      size: 18,
                      relativePath:
                        './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/equation001.tex',
                    },
                    {
                      name: 'equation002.png',
                      type: 'file',
                      size: 493,
                      relativePath:
                        './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/equation002.png',
                    },
                    {
                      name: 'equation002.tex',
                      type: 'file',
                      size: 10,
                      relativePath:
                        './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1/equation002.tex',
                    },
                  ],
                  size: 33608,
                },
                {
                  name: 'AP_Physics_1.markdown',
                  type: 'file',
                  size: 3524,
                  relativePath:
                    './Home/Persönlich/OSS_University_-_Computer_Science/AP_Physics_1.markdown',
                },
                {
                  name:
                    'Coursera: Fundamentals of Graphic Design - California Institute of the Arts.png',
                  type: 'file',
                  size: 205253,
                  relativePath:
                    './Home/Persönlich/OSS_University_-_Computer_Science/Coursera: Fundamentals of Graphic Design - California Institute of the Arts.png',
                },
                {
                  name: 'Coursera: Programming Languages Part A.jpg',
                  type: 'file',
                  size: 471550,
                  relativePath:
                    './Home/Persönlich/OSS_University_-_Computer_Science/Coursera: Programming Languages Part A.jpg',
                },
                {
                  name: 'Coursera: Programming Languages Part B.png',
                  type: 'file',
                  size: 221210,
                  relativePath:
                    './Home/Persönlich/OSS_University_-_Computer_Science/Coursera: Programming Languages Part B.png',
                },
                {
                  name:
                    'MITx: 6.00.1x Introduction to Computer Science and Programming Using Python - certificate.png',
                  type: 'file',
                  size: 704723,
                  relativePath:
                    './Home/Persönlich/OSS_University_-_Computer_Science/MITx: 6.00.1x Introduction to Computer Science and Programming Using Python - certificate.png',
                },
                {
                  name: 'UBCx: HtC1x How to Code: Simple Data-certificate.png',
                  type: 'file',
                  size: 1922848,
                  relativePath:
                    './Home/Persönlich/OSS_University_-_Computer_Science/UBCx: HtC1x How to Code: Simple Data-certificate.png',
                },
                {
                  name: 'Udacity: ES6.png',
                  type: 'file',
                  size: 36972,
                  relativePath:
                    './Home/Persönlich/OSS_University_-_Computer_Science/Udacity: ES6.png',
                },
                {
                  name: 'Udacity: How to Build a Startup - Certificate.pdf',
                  type: 'file',
                  size: 112013,
                  relativePath:
                    './Home/Persönlich/OSS_University_-_Computer_Science/Udacity: How to Build a Startup - Certificate.pdf',
                },
                {
                  name:
                    'Udacity: Intro to the Design of Everyday Things - Certificate.pdf',
                  type: 'file',
                  size: 137290,
                  relativePath:
                    './Home/Persönlich/OSS_University_-_Computer_Science/Udacity: Intro to the Design of Everyday Things - Certificate.pdf',
                },
                {
                  name:
                    'Udacity: Introduction to Computer Science - Certificate.pdf',
                  type: 'file',
                  size: 568997,
                  relativePath:
                    './Home/Persönlich/OSS_University_-_Computer_Science/Udacity: Introduction to Computer Science - Certificate.pdf',
                },
                {
                  name: 'Udacity: Object Oriented Javascript.png',
                  type: 'file',
                  size: 57356,
                  relativePath:
                    './Home/Persönlich/OSS_University_-_Computer_Science/Udacity: Object Oriented Javascript.png',
                },
                {
                  name: 'cs50-certificate.png',
                  type: 'file',
                  size: 174926,
                  relativePath:
                    './Home/Persönlich/OSS_University_-_Computer_Science/cs50-certificate.png',
                },
              ],
              size: 4650270,
            },
            {
              name: 'OSS_University_-_Computer_Science.markdown',
              type: 'file',
              size: 2371,
              relativePath:
                './Home/Persönlich/OSS_University_-_Computer_Science.markdown',
            },
            {
              name: 'Oster_Essen_2018.markdown',
              type: 'file',
              size: 457,
              relativePath: './Home/Persönlich/Oster_Essen_2018.markdown',
            },
            {
              name:
                'SPIEGEL_ONLINE_-_Knips-Ratgeber__Bessere_Fotos_von_unterwegs.markdown',
              type: 'file',
              size: 336,
              relativePath:
                './Home/Persönlich/SPIEGEL_ONLINE_-_Knips-Ratgeber__Bessere_Fotos_von_unterwegs.markdown',
            },
            {
              name: 'Steuern',
              type: 'dir',
              relativePath: './Home/Persönlich/Steuern',
              children: [
                {
                  name: 'Steuer 2017.markdown',
                  type: 'file',
                  size: 72,
                  relativePath: './Home/Persönlich/Steuern/Steuer 2017.markdown',
                },
              ],
              size: 72,
            },
            {
              name: 'Steuern.markdown',
              type: 'file',
              size: 34,
              relativePath: './Home/Persönlich/Steuern.markdown',
            },
            {
              name: 'Untermauernde_Zitate.markdown',
              type: 'file',
              size: 701,
              relativePath: './Home/Persönlich/Untermauernde_Zitate.markdown',
            },
            {
              name: 'Weinzirkel.markdown',
              type: 'file',
              size: 1648,
              relativePath: './Home/Persönlich/Weinzirkel.markdown',
            },
            {
              name: 'Witze.markdown',
              type: 'file',
              size: 1196,
              relativePath: './Home/Persönlich/Witze.markdown',
            },
            {
              name: 'Zitate.markdown',
              type: 'file',
              size: 305,
              relativePath: './Home/Persönlich/Zitate.markdown',
            },
          ],
          size: 4659945,
        },
        {
          name: 'Persönlich.markdown',
          type: 'file',
          size: 5544,
          relativePath: './Home/Persönlich.markdown',
        },
        {
          name: 'Probao',
          type: 'dir',
          relativePath: './Home/Probao',
          children: [
            {
              name: 'Artikel-Anleitung.markdown',
              type: 'file',
              size: 1436,
              relativePath: './Home/Probao/Artikel-Anleitung.markdown',
            },
            {
              name: 'GrammarlyErfahrungen.markdown',
              type: 'file',
              size: 22,
              relativePath: './Home/Probao/GrammarlyErfahrungen.markdown',
            },
            {
              name: 'HelplingErfahrungen.markdown',
              type: 'file',
              size: 3454,
              relativePath: './Home/Probao/HelplingErfahrungen.markdown',
            },
            {
              name: 'LanguageToolErfahrungen.markdown',
              type: 'file',
              size: 27,
              relativePath: './Home/Probao/LanguageToolErfahrungen.markdown',
            },
            {
              name: 'RaidBoxesTest.markdown',
              type: 'file',
              size: 17,
              relativePath: './Home/Probao/RaidBoxesTest.markdown',
            },
            {
              name: 'SuchmaschinenTesten.markdown',
              type: 'file',
              size: 282,
              relativePath: './Home/Probao/SuchmaschinenTesten.markdown',
            },
            {
              name: 'Uplink.markdown',
              type: 'file',
              size: 313,
              relativePath: './Home/Probao/Uplink.markdown',
            },
            {
              name: 'screenshot.png',
              type: 'file',
              size: 76728,
              relativePath: './Home/Probao/screenshot.png',
            },
            {
              name: 'screenshot001.png',
              type: 'file',
              size: 327375,
              relativePath: './Home/Probao/screenshot001.png',
            },
          ],
          size: 409654,
        },
        {
          name: 'Probao.markdown',
          type: 'file',
          size: 620,
          relativePath: './Home/Probao.markdown',
        },
        {
          name: 'Programmierung',
          type: 'dir',
          relativePath: './Home/Programmierung',
          children: [
            {
              name: 'APracticalTourofClojureWebDevelopment.markdown',
              type: 'file',
              size: 367,
              relativePath:
                './Home/Programmierung/APracticalTourofClojureWebDevelopment.markdown',
            },
            {
              name: 'Akiee',
              type: 'dir',
              relativePath: './Home/Programmierung/Akiee',
              children: [
                {
                  name: 'Akiee-Mobi.markdown',
                  type: 'file',
                  size: 2054,
                  relativePath: './Home/Programmierung/Akiee/Akiee-Mobi.markdown',
                },
                {
                  name: 'Awiki.markdown',
                  type: 'file',
                  size: 84,
                  relativePath: './Home/Programmierung/Akiee/Awiki.markdown',
                },
                {
                  name: 'diagram.dot',
                  type: 'file',
                  size: 194,
                  relativePath: './Home/Programmierung/Akiee/diagram.dot',
                },
                {
                  name: 'diagram.png',
                  type: 'file',
                  size: 18949,
                  relativePath: './Home/Programmierung/Akiee/diagram.png',
                },
                {
                  name: 'equation.png',
                  type: 'file',
                  size: 625,
                  relativePath: './Home/Programmierung/Akiee/equation.png',
                },
                {
                  name: 'equation.tex',
                  type: 'file',
                  size: 41,
                  relativePath: './Home/Programmierung/Akiee/equation.tex',
                },
              ],
              size: 21947,
            },
            {
              name: 'Akiee.markdown',
              type: 'file',
              size: 2179,
              relativePath: './Home/Programmierung/Akiee.markdown',
            },
            {
              name: 'CSS.markdown',
              type: 'file',
              size: 157,
              relativePath: './Home/Programmierung/CSS.markdown',
            },
            {
              name: 'ClVsClojure.markdown',
              type: 'file',
              size: 5471,
              relativePath: './Home/Programmierung/ClVsClojure.markdown',
            },
            {
              name: 'ClojureProgramming.markdown',
              type: 'file',
              size: 439,
              relativePath: './Home/Programmierung/ClojureProgramming.markdown',
            },
            {
              name: 'ClojurePython.markdown',
              type: 'file',
              size: 174,
              relativePath: './Home/Programmierung/ClojurePython.markdown',
            },
            {
              name: 'Common_Lisp.markdown',
              type: 'file',
              size: 1885,
              relativePath: './Home/Programmierung/Common_Lisp.markdown',
            },
            {
              name: 'DesignRecipes.html',
              type: 'file',
              size: 90083,
              relativePath: './Home/Programmierung/DesignRecipes.html',
            },
            {
              name: 'Dictandu',
              type: 'dir',
              relativePath: './Home/Programmierung/Dictandu',
              children: [
                {
                  name: 'Accounts.markdown',
                  type: 'file',
                  size: 176,
                  relativePath: './Home/Programmierung/Dictandu/Accounts.markdown',
                },
                {
                  name: 'Blogger.markdown',
                  type: 'file',
                  size: 620,
                  relativePath: './Home/Programmierung/Dictandu/Blogger.markdown',
                },
                {
                  name: 'MobileVersion.markdown',
                  type: 'file',
                  size: 447,
                  relativePath:
                    './Home/Programmierung/Dictandu/MobileVersion.markdown',
                },
                {
                  name: 'ProseMirror.markdown',
                  type: 'file',
                  size: 1605,
                  relativePath:
                    './Home/Programmierung/Dictandu/ProseMirror.markdown',
                },
              ],
              size: 2848,
            },
            {
              name: 'Dictandu.markdown',
              type: 'file',
              size: 2782,
              relativePath: './Home/Programmierung/Dictandu.markdown',
            },
            {
              name: 'Electron.markdown',
              type: 'file',
              size: 1849,
              relativePath: './Home/Programmierung/Electron.markdown',
            },
            {
              name: 'ErgoEmacs.markdown',
              type: 'file',
              size: 315,
              relativePath: './Home/Programmierung/ErgoEmacs.markdown',
            },
            {
              name: 'JavaScript',
              type: 'dir',
              relativePath: './Home/Programmierung/JavaScript',
              children: [
                {
                  name: 'Next.js.markdown',
                  type: 'file',
                  size: 376,
                  relativePath:
                    './Home/Programmierung/JavaScript/Next.js.markdown',
                },
                {
                  name: 'SpeechRecognition.markdown',
                  type: 'file',
                  size: 862,
                  relativePath:
                    './Home/Programmierung/JavaScript/SpeechRecognition.markdown',
                },
                {
                  name: 'Starterkit.markdown',
                  type: 'file',
                  size: 615,
                  relativePath:
                    './Home/Programmierung/JavaScript/Starterkit.markdown',
                },
                {
                  name: 'Tools.markdown',
                  type: 'file',
                  size: 454,
                  relativePath: './Home/Programmierung/JavaScript/Tools.markdown',
                },
                {
                  name: 'Vue.js.markdown',
                  type: 'file',
                  size: 264,
                  relativePath: './Home/Programmierung/JavaScript/Vue.js.markdown',
                },
              ],
              size: 2571,
            },
            {
              name: 'JavaScript.markdown',
              type: 'file',
              size: 6468,
              relativePath: './Home/Programmierung/JavaScript.markdown',
            },
            {
              name: 'KillerWebDevelopment.markdown',
              type: 'file',
              size: 303,
              relativePath: './Home/Programmierung/KillerWebDevelopment.markdown',
            },
            {
              name: 'Lis.py.markdown',
              type: 'file',
              size: 2577,
              relativePath: './Home/Programmierung/Lis.py.markdown',
            },
            {
              name: 'PHP',
              type: 'dir',
              relativePath: './Home/Programmierung/PHP',
              children: [
                {
                  name: 'Wordpress_and_other_Vagrant_Instances',
                  type: 'dir',
                  relativePath:
                    './Home/Programmierung/PHP/Wordpress_and_other_Vagrant_Instances',
                  children: [
                    {
                      name: 'Docker_Containers.markdown',
                      type: 'file',
                      size: 1391,
                      relativePath:
                        './Home/Programmierung/PHP/Wordpress_and_other_Vagrant_Instances/Docker_Containers.markdown',
                    },
                    {
                      name: 'Test.app.markdown',
                      type: 'file',
                      size: 5843,
                      relativePath:
                        './Home/Programmierung/PHP/Wordpress_and_other_Vagrant_Instances/Test.app.markdown',
                    },
                    {
                      name: 'Trellis_for_Vagrant.markdown',
                      type: 'file',
                      size: 435,
                      relativePath:
                        './Home/Programmierung/PHP/Wordpress_and_other_Vagrant_Instances/Trellis_for_Vagrant.markdown',
                    },
                  ],
                  size: 7669,
                },
                {
                  name: 'Wordpress_and_other_Vagrant_Instances.markdown',
                  type: 'file',
                  size: 1067,
                  relativePath:
                    './Home/Programmierung/PHP/Wordpress_and_other_Vagrant_Instances.markdown',
                },
                {
                  name: 'hosts.markdown',
                  type: 'file',
                  size: 621,
                  relativePath: './Home/Programmierung/PHP/hosts.markdown',
                },
              ],
              size: 9357,
            },
            {
              name: 'PHP.markdown',
              type: 'file',
              size: 2057,
              relativePath: './Home/Programmierung/PHP.markdown',
            },
            {
              name: 'Python',
              type: 'dir',
              relativePath: './Home/Programmierung/Python',
              children: [
                {
                  name: 'Django.markdown',
                  type: 'file',
                  size: 4148,
                  relativePath: './Home/Programmierung/Python/Django.markdown',
                },
                {
                  name: 'Flask',
                  type: 'dir',
                  relativePath: './Home/Programmierung/Python/Flask',
                  children: [
                    {
                      name: 'App-Structure.markdown',
                      type: 'file',
                      size: 328,
                      relativePath:
                        './Home/Programmierung/Python/Flask/App-Structure.markdown',
                    },
                    {
                      name: 'Database Setup.markdown',
                      type: 'file',
                      size: 402,
                      relativePath:
                        './Home/Programmierung/Python/Flask/Database Setup.markdown',
                    },
                    {
                      name: 'Interessante Packages.markdown',
                      type: 'file',
                      size: 222,
                      relativePath:
                        './Home/Programmierung/Python/Flask/Interessante Packages.markdown',
                    },
                    {
                      name: 'pasted_image.png',
                      type: 'file',
                      size: 126916,
                      relativePath:
                        './Home/Programmierung/Python/Flask/pasted_image.png',
                    },
                    {
                      name: 'pasted_image001.png',
                      type: 'file',
                      size: 41576,
                      relativePath:
                        './Home/Programmierung/Python/Flask/pasted_image001.png',
                    },
                    {
                      name: 'pasted_image002.png',
                      type: 'file',
                      size: 41650,
                      relativePath:
                        './Home/Programmierung/Python/Flask/pasted_image002.png',
                    },
                    {
                      name: 'pasted_image003.png',
                      type: 'file',
                      size: 88492,
                      relativePath:
                        './Home/Programmierung/Python/Flask/pasted_image003.png',
                    },
                    {
                      name: 'pasted_image004.png',
                      type: 'file',
                      size: 74295,
                      relativePath:
                        './Home/Programmierung/Python/Flask/pasted_image004.png',
                    },
                  ],
                  size: 373881,
                },
                {
                  name: 'Flask.markdown',
                  type: 'file',
                  size: 5206,
                  relativePath: './Home/Programmierung/Python/Flask.markdown',
                },
              ],
              size: 383235,
            },
            {
              name: 'Python.markdown',
              type: 'file',
              size: 1792,
              relativePath: './Home/Programmierung/Python.markdown',
            },
            {
              name: 'Re-Natal.markdown',
              type: 'file',
              size: 1775,
              relativePath: './Home/Programmierung/Re-Natal.markdown',
            },
            {
              name: 'Tablao.markdown',
              type: 'file',
              size: 2058,
              relativePath: './Home/Programmierung/Tablao.markdown',
            },
            {
              name: 'TinyMce.markdown',
              type: 'file',
              size: 11,
              relativePath: './Home/Programmierung/TinyMce.markdown',
            },
            {
              name: 'enkimamba',
              type: 'dir',
              relativePath: './Home/Programmierung/enkimamba',
              children: [
                {
                  name: 'Command-Pallette__Hide_Menu_bar.markdown',
                  type: 'file',
                  size: 312,
                  relativePath:
                    './Home/Programmierung/enkimamba/Command-Pallette__Hide_Menu_bar.markdown',
                },
                {
                  name: 'Papercuts.markdown',
                  type: 'file',
                  size: 715,
                  relativePath:
                    './Home/Programmierung/enkimamba/Papercuts.markdown',
                },
                {
                  name: 'package-manager.markdown',
                  type: 'file',
                  size: 1654,
                  relativePath:
                    './Home/Programmierung/enkimamba/package-manager.markdown',
                },
                {
                  name: 'pasted_image.png',
                  type: 'file',
                  size: 95159,
                  relativePath: './Home/Programmierung/enkimamba/pasted_image.png',
                },
                {
                  name: 'welcome_guide',
                  type: 'dir',
                  relativePath: './Home/Programmierung/enkimamba/welcome_guide',
                  children: [
                    {
                      name: 'pasted_image.png',
                      type: 'file',
                      size: 95159,
                      relativePath:
                        './Home/Programmierung/enkimamba/welcome_guide/pasted_image.png',
                    },
                  ],
                  size: 95159,
                },
                {
                  name: 'welcome_guide.markdown',
                  type: 'file',
                  size: 385,
                  relativePath:
                    './Home/Programmierung/enkimamba/welcome_guide.markdown',
                },
              ],
              size: 193384,
            },
            {
              name: 'enkimamba.markdown',
              type: 'file',
              size: 2868,
              relativePath: './Home/Programmierung/enkimamba.markdown',
            },
            {
              name: 'imgPloadr.io.markdown',
              type: 'file',
              size: 437,
              relativePath: './Home/Programmierung/imgPloadr.io.markdown',
            },
            {
              name: 'wryte.markdown',
              type: 'file',
              size: 9,
              relativePath: './Home/Programmierung/wryte.markdown',
            },
          ],
          size: 739398,
        },
        {
          name: 'Programmierung.markdown',
          type: 'file',
          size: 1530,
          relativePath: './Home/Programmierung.markdown',
        },
        {
          name: 'Project.markdown',
          type: 'file',
          size: 9,
          relativePath: './Home/Project.markdown',
        },
        {
          name: 'Rockiger',
          type: 'dir',
          relativePath: './Home/Rockiger',
          children: [
            {
              name: 'BlogIdeen',
              type: 'dir',
              relativePath: './Home/Rockiger/BlogIdeen',
              children: [
                {
                  name: 'Manjaro-Stable-Updates_2017.markdown',
                  type: 'file',
                  size: 17204,
                  relativePath:
                    './Home/Rockiger/BlogIdeen/Manjaro-Stable-Updates_2017.markdown',
                },
              ],
              size: 17204,
            },
            {
              name: 'BlogIdeen.markdown',
              type: 'file',
              size: 401,
              relativePath: './Home/Rockiger/BlogIdeen.markdown',
            },
            {
              name: 'Manjaro_-_Notizen.markdown',
              type: 'file',
              size: 2515,
              relativePath: './Home/Rockiger/Manjaro_-_Notizen.markdown',
            },
            {
              name: 'Prepaid-ExpertenA.markdown',
              type: 'file',
              size: 71,
              relativePath: './Home/Rockiger/Prepaid-ExpertenA.markdown',
            },
            {
              name: 'PressemeldungThinkpad.markdown',
              type: 'file',
              size: 4651,
              relativePath: './Home/Rockiger/PressemeldungThinkpad.markdown',
            },
            {
              name: 'Rockiger-Wordpress.markdown',
              type: 'file',
              size: 763,
              relativePath: './Home/Rockiger/Rockiger-Wordpress.markdown',
            },
            {
              name: 'RockigerWörterPool.markdown',
              type: 'file',
              size: 177,
              relativePath: './Home/Rockiger/RockigerWörterPool.markdown',
            },
            {
              name: 'UbuntuTricks.markdown',
              type: 'file',
              size: 199,
              relativePath: './Home/Rockiger/UbuntuTricks.markdown',
            },
            {
              name: 'VorteileFürNotebookhändlerZusammentragen.markdown',
              type: 'file',
              size: 699,
              relativePath:
                './Home/Rockiger/VorteileFürNotebookhändlerZusammentragen.markdown',
            },
          ],
          size: 26680,
        },
        {
          name: 'Rockiger.markdown',
          type: 'file',
          size: 857,
          relativePath: './Home/Rockiger.markdown',
        },
        {
          name: 'SEO',
          type: 'dir',
          relativePath: './Home/SEO',
          children: [
            {
              name: '25kVisitorsPerMonth_Backlinko.pdf',
              type: 'file',
              size: 2631328,
              relativePath: './Home/SEO/25kVisitorsPerMonth_Backlinko.pdf',
            },
            {
              name: 'Interessante_Seiten.markdown',
              type: 'file',
              size: 382,
              relativePath: './Home/SEO/Interessante_Seiten.markdown',
            },
            {
              name: 'MySpace.markdown',
              type: 'file',
              size: 11,
              relativePath: './Home/SEO/MySpace.markdown',
            },
            {
              name: 'Rütteln_am_Netz',
              type: 'dir',
              relativePath: './Home/SEO/Rütteln_am_Netz',
              children: [
                {
                  name: 'Probao.markdown',
                  type: 'file',
                  size: 961,
                  relativePath: './Home/SEO/Rütteln_am_Netz/Probao.markdown',
                },
                {
                  name: 'Sbtest',
                  type: 'dir',
                  relativePath: './Home/SEO/Rütteln_am_Netz/Sbtest',
                  children: [
                    {
                      name: 'Secret.de_Erfahrungen.markdown',
                      type: 'file',
                      size: 852,
                      relativePath:
                        './Home/SEO/Rütteln_am_Netz/Sbtest/Secret.de_Erfahrungen.markdown',
                    },
                  ],
                  size: 852,
                },
                {
                  name: 'Sbtest.markdown',
                  type: 'file',
                  size: 961,
                  relativePath: './Home/SEO/Rütteln_am_Netz/Sbtest.markdown',
                },
              ],
              size: 2774,
            },
            {
              name: 'Rütteln_am_Netz.markdown',
              type: 'file',
              size: 1232,
              relativePath: './Home/SEO/Rütteln_am_Netz.markdown',
            },
            {
              name: 'StumbleUpon.markdown',
              type: 'file',
              size: 15,
              relativePath: './Home/SEO/StumbleUpon.markdown',
            },
          ],
          size: 2635742,
        },
        {
          name: 'SEO.markdown',
          type: 'file',
          size: 2591,
          relativePath: './Home/SEO.markdown',
        },
        {
          name: 'Sbtest.net',
          type: 'dir',
          relativePath: './Home/Sbtest.net',
          children: [
            {
              name: 'SeoTexte',
              type: 'dir',
              relativePath: './Home/Sbtest.net/SeoTexte',
              children: [
                {
                  name: 'secret-erfahrungen.yolasite.com.markdown',
                  type: 'file',
                  size: 8640,
                  relativePath:
                    './Home/Sbtest.net/SeoTexte/secret-erfahrungen.yolasite.com.markdown',
                },
              ],
              size: 8640,
            },
            {
              name: 'SeoTexte.markdown',
              type: 'file',
              size: 550,
              relativePath: './Home/Sbtest.net/SeoTexte.markdown',
            },
            {
              name: 'Tinder.markdown',
              type: 'file',
              size: 224,
              relativePath: './Home/Sbtest.net/Tinder.markdown',
            },
            {
              name: 'test.de.markdown',
              type: 'file',
              size: 1817,
              relativePath: './Home/Sbtest.net/test.de.markdown',
            },
          ],
          size: 11231,
        },
        {
          name: 'Sbtest.net.markdown',
          type: 'file',
          size: 325,
          relativePath: './Home/Sbtest.net.markdown',
        },
        {
          name: 'Tennis',
          type: 'dir',
          relativePath: './Home/Tennis',
          children: [
            {
              name: 'Aufwärmen.markdown',
              type: 'file',
              size: 215,
              relativePath: './Home/Tennis/Aufwärmen.markdown',
            },
            {
              name: 'Schläger2016.markdown',
              type: 'file',
              size: 1200,
              relativePath: './Home/Tennis/Schläger2016.markdown',
            },
            {
              name: 'Script.markdown',
              type: 'file',
              size: 1416,
              relativePath: './Home/Tennis/Script.markdown',
            },
            {
              name: 'Training_Julian.markdown',
              type: 'file',
              size: 438,
              relativePath: './Home/Tennis/Training_Julian.markdown',
            },
          ],
          size: 3269,
        },
        {
          name: 'Tennis.markdown',
          type: 'file',
          size: 2499,
          relativePath: './Home/Tennis.markdown',
        },
        {
          name: 'WTHC',
          type: 'dir',
          relativePath: './Home/WTHC',
          children: [
            {
              name: 'Bundesliga_Saison_2019.markdown',
              type: 'file',
              size: 1545,
              relativePath: './Home/WTHC/Bundesliga_Saison_2019.markdown',
            },
            {
              name: 'Gespräch_mit_Max.markdown',
              type: 'file',
              size: 735,
              relativePath: './Home/WTHC/Gespräch_mit_Max.markdown',
            },
          ],
          size: 2280,
        },
        {
          name: 'WTHC.markdown',
          type: 'file',
          size: 41,
          relativePath: './Home/WTHC.markdown',
        },
        {
          name: 'WebsitePlaydo',
          type: 'dir',
          relativePath: './Home/WebsitePlaydo',
          children: [
            {
              name: 'struktur.csv',
              type: 'file',
              size: 454,
              relativePath: './Home/WebsitePlaydo/struktur.csv',
            },
          ],
          size: 454,
        },
        {
          name: 'WebsitePlaydo.markdown',
          type: 'file',
          size: 561,
          relativePath: './Home/WebsitePlaydo.markdown',
        },
        {
          name: 'kaemtner.de.markdown',
          type: 'file',
          size: 1228,
          relativePath: './Home/kaemtner.de.markdown',
        },
      ],
      size: 11555033,
    },
    {
      name: 'Home.markdown',
      type: 'file',
      size: 2581,
      relativePath: './Home.markdown',
    },
    {
      name: 'Trash',
      type: 'dir',
      relativePath: './Trash',
      children: [
        {
          name: 'Mipio',
          type: 'dir',
          relativePath: './Trash/Mipio',
          children: [
            {
              name: 'Immobillien-Seite.markdown',
              type: 'file',
              size: 352,
              relativePath: './Trash/Mipio/Immobillien-Seite.markdown',
            },
            {
              name: 'founder-collaboration-agreement.doc',
              type: 'file',
              size: 30208,
              relativePath: './Trash/Mipio/founder-collaboration-agreement.doc',
            },
          ],
          size: 30560,
        },
        {
          name: 'Mipio.markdown',
          type: 'file',
          size: 2430,
          relativePath: './Trash/Mipio.markdown',
        },
      ],
      size: 32990,
    },
    {
      name: 'Trash.markdown',
      type: 'file',
      size: 39,
      relativePath: './Trash.markdown',
    },
  ];

