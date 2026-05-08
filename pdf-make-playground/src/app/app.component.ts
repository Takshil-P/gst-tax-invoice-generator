// import { Component } from '@angular/core';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';

// (pdfMake as any).vfs = pdfFonts.vfs;

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent {
//   title = 'pdf-make-playground';
//   testDeclaration() {
//     const MAX_ROWS = 10;
//     const ITEM_ROW_HEIGHT = 18; // tune this — matches your row with desc+sub
//     const HEADER_ROW_HEIGHT = 16;
//     const TAX_ROW_HEIGHT = 14;

//     const allItemRows = [];

//     const items = [
//       {
//         desc: 'Repairing of Chain Hoist',
//         sub: 'Replacement of Lock Pin 8 No.',
//         hsn: '9987',
//         qty: 1,
//         rate: 7966,
//         per: ' ',
//         amount: 7966,
//       },
//       {
//         desc: 'Repairing of Chain Hoist',
//         sub: 'Replacement of Lock Pin 8 No.',
//         hsn: '9987',
//         qty: 1,
//         rate: 7966,
//         per: ' ',
//         amount: 7966,
//       },
//       {
//         desc: 'Repairing of Chain Hoist',
//         sub: 'Replacement of Lock Pin 8 No.',
//         hsn: '9987',
//         qty: 1,
//         rate: 7966,
//         per: ' ',
//         amount: 7966,
//       },
//       {
//         desc: 'Repairing of Chain Hoist',
//         sub: 'Replacement of Lock Pin 8 No.',
//         hsn: '9987',
//         qty: 1,
//         rate: 7966,
//         per: ' ',
//         amount: 7966,
//       },
//       {
//         desc: 'Repairing of Chain Hoist',
//         sub: 'Replacement of Lock Pin 8 No.',
//         hsn: '9987',
//         qty: 1,
//         rate: 7966,
//         per: ' ',
//         amount: 7966,
//       },
//       {
//         desc: 'Repairing of Chain Hoist',
//         sub: 'Replacement of Lock Pin 8 No.',
//         hsn: '9987',
//         qty: 1,
//         rate: 7966,
//         per: ' ',
//         amount: 7966,
//       },
//       {
//         desc: 'Repairing of Chain Hoist',
//         sub: 'Replacement of Lock Pin 8 No.',
//         hsn: '9987',
//         qty: 1,
//         rate: 7966,
//         per: ' ',
//         amount: 7966,
//       },
//       {
//         desc: 'Repairing of Chain Hoist',
//         sub: 'Replacement of Lock Pin 8 No.',
//         hsn: '9987',
//         qty: 1,
//         rate: 7966,
//         per: ' ',
//         amount: 7966,
//       },
//       {
//         desc: 'Repairing of Chain Hoist',
//         sub: 'Replacement of Lock Pin 8 No.',
//         hsn: '9987',
//         qty: 1,
//         rate: 7966,
//         per: ' ',
//         amount: 7966,
//       },
//       {
//         desc: 'Repairing of Chain Hoist',
//         sub: 'Replacement of Lock Pin 8 No.',
//         hsn: '9987',
//         qty: 1,
//         rate: 7966,
//         per: ' ',
//         amount: 7966,
//       },
//       {
//         desc: 'Repairing of Chain Hoist',
//         sub: 'Replacement of Lock Pin 8 No.',
//         hsn: '9987',
//         qty: 1,
//         rate: 7966,
//         per: ' ',
//         amount: 7966,
//       },
//     ];

//     for (let i = 0; i < MAX_ROWS; i++) {
//       const item = items[i] || null;

//       allItemRows.push([
//         {
//           // Always use stack — real or empty
//           stack: [{ text: item ? String(i + 1) : '\u200B', fontSize: 8 }],
//           alignment: 'center',
//         },
//         {
//           // Always use stack with two lines — real or empty
//           stack: [
//             { text: item ? item.desc : '\u200B', fontSize: 10 },
//             { text: item?.sub ? item.sub : '\u200B', fontSize: 6 },
//           ],
//         },
//         {
//           stack: [{ text: item ? item.hsn : '\u200B', fontSize: 10 }],
//           alignment: 'center',
//         },
//         {
//           stack: [{ text: item ? String(item.qty) : '\u200B', fontSize: 10 }],
//           alignment: 'center',
//         },
//         {
//           stack: [{ text: item ? String(item.rate) : '\u200B', fontSize: 10 }],
//           alignment: 'right',
//         },
//         {
//           stack: [
//             { text: item ? item.per || '\u200B' : '\u200B', fontSize: 10 },
//           ],
//           alignment: 'center',
//         },
//         {
//           stack: [
//             { text: item ? String(item.amount) : '\u200B', fontSize: 10 },
//           ],
//           alignment: 'right',
//           bold: !!item,
//         },
//       ]);
//     }

//     const tableHeights = [
//       HEADER_ROW_HEIGHT,
//       ...Array(MAX_ROWS).fill(ITEM_ROW_HEIGHT),
//       TAX_ROW_HEIGHT,
//       TAX_ROW_HEIGHT,
//       TAX_ROW_HEIGHT,
//       TAX_ROW_HEIGHT,
//     ];

//     const itemRows = items.map((item, index) => [
//       {
//         text: index + 1,
//         alignment: 'center',
//         margin: [0, 3, 0, 3],
//         fontSize: 10,
//       },
//       {
//         stack: [
//           { text: item.desc, fontSize: 10 },
//           ...(item.sub ? [{ text: item.sub, fontSize: 6 }] : []),
//         ],
//         margin: [0, 3, 0, 3],
//       },
//       { text: item.hsn, alignment: 'center' },
//       { text: item.qty, alignment: 'center' },
//       { text: item.rate, alignment: 'right' },
//       { text: item.per, alignment: 'center' },
//       { text: item.amount.toString(), alignment: 'right', bold: true },
//     ]);

//     while (itemRows.length < MAX_ROWS) {
//       itemRows.push([
//         { text: '\u200B', alignment: 'center', bold: true },
//         { text: '\u200B', alignment: 'left' },
//         { text: '\u200B', alignment: 'center' },
//         { text: '\u200B', alignment: 'center' },
//         { text: '\u200B', alignment: 'right' },
//         { text: '\u200B', alignment: 'center' },
//         { text: '\u200B', alignment: 'right' },
//       ]);
//     }

//     const taxRows = [
//       [
//         {},
//         {
//           text: 'CGST',
//           alignment: 'right',
//           italics: true,
//           fontSize: 10,
//           margin: [0, 3, 0, 3],
//         },
//         {},
//         {},
//         {},
//         {},
//         {
//           text: '716.94',
//           alignment: 'right',
//           fontSize: 10,
//           margin: [0, 3, 0, 3],
//           border: [false, false, false, false],
//         },
//       ],
//       [
//         {},
//         {
//           text: 'SGST',
//           alignment: 'right',
//           italics: true,
//           fontSize: 10,
//           margin: [0, 3, 0, 3],
//         },
//         {},
//         {},
//         {},
//         {},
//         {
//           text: '716.94',
//           alignment: 'right',
//           fontSize: 10,
//           margin: [0, 3, 0, 3],
//         },
//       ],
//       [
//         {},
//         {
//           text: 'Round Off',
//           alignment: 'right',
//           italics: true,
//           fontSize: 10,
//           margin: [0, 3, 0, 3],
//           border: [false, false, false, false],
//         },
//         {},
//         {},
//         {},
//         {},
//         {
//           text: '0.12',
//           alignment: 'right',
//           fontSize: 10,
//           margin: [0, 3, 0, 3],
//         },
//       ],
//       [
//         {},
//         {
//           text: 'Total',
//           alignment: 'right',
//           italics: true,
//           fontSize: 11,
//           margin: [0, 3, 0, 3],
//         },
//         {},
//         {},
//         {},
//         {},
//         {
//           text: '12000',
//           alignment: 'right',
//           fontSize: 13,
//           bold: true,
//           margin: [0, 3, 0, 3],
//         },
//       ],
//     ];

//     const docDefinition = {
//       pageSize: 'A4',
//       pageMargins: [40, 40, 40, 40],

//       content: [
//         {
//           text: 'Tax Invoice',
//           alignment: 'center',
//           fontSize: 12,
//           bold: true,
//           margin: [0, 0, 0, 30],
//         },
//         {
//           table: {
//             widths: ['*', '*'],
//             heights: ['auto', 99, 290], // 👈 3 rows = 3 heights
//             body: [
//               [
//                 //FIRST ROW
//                 {
//                   //column 1 start
//                   stack: [
//                     { text: 'Aashapuri Industries', fontSize: 12, bold: true },
//                     { text: 'Plot No.1404 Phase IV', fontSize: 10 },
//                     { text: 'Vithal Udyognagar 388121', fontSize: 10 },
//                     { text: 'Vendore Code : - 145756', fontSize: 10 },
//                     { text: 'GSTIN/UIN: 24ALBPP3245Q1ZS', fontSize: 10 },
//                     { text: 'State Name : Gujarat, Code : 24', fontSize: 10 },
//                     { text: 'E-Mail : ajay.panchal75@gmail.com', fontSize: 10 },
//                   ],
//                   margin: [5, 3, 5, 3], // 👈 add this
//                 },
//                 {
//                   //column 2 start
//                   rowSpan: 2, // 👈 main magic
//                   table: {
//                     widths: ['*', '*'],
//                     body: [
//                       [
//                         {
//                           stack: [
//                             { text: 'Invoice No.', fontSize: 9 },
//                             {
//                               text: '06',
//                               fontSize: 10,
//                               bold: true,
//                               margin: [0, 0, 0, -4],
//                             },
//                           ],
//                           lineHeight: 1.3,
//                           margin: [3, 0, 3, 0],
//                         },
//                         {
//                           stack: [
//                             { text: 'Dated', fontSize: 9 },
//                             {
//                               text: '12-Dec-2022',
//                               fontSize: 10,
//                               bold: true,
//                               margin: [0, 0, 0, -4],
//                             },
//                           ],
//                           lineHeight: 1.3,
//                           margin: [3, 0, 3, 0],
//                         },
//                       ],
//                       [
//                         {
//                           stack: [
//                             { text: 'Delivery Note', fontSize: 9 },
//                             {
//                               text: ' ',
//                               fontSize: 10,
//                               bold: true,
//                               margin: [0, 0, 0, -4],
//                             },
//                           ],
//                           lineHeight: 1.3,
//                           margin: [3, 0, 3, 0],
//                         },
//                         {
//                           stack: [
//                             { text: 'Mode/Terms of Payment', fontSize: 9 },
//                             {
//                               text: ' ',
//                               fontSize: 10,
//                               bold: true,
//                               margin: [0, 0, 0, -4],
//                             },
//                           ],
//                           lineHeight: 1.3,
//                           margin: [3, 0, 3, 0],
//                         },
//                       ],
//                       [
//                         {
//                           stack: [
//                             { text: "Supplier's Ref.", fontSize: 9 },
//                             {
//                               text: ' ',
//                               fontSize: 10,
//                               bold: true,
//                               margin: [0, 0, 0, -4],
//                             },
//                           ],
//                           lineHeight: 1.3,
//                           margin: [3, 0, 3, 0],
//                         },
//                         {
//                           stack: [
//                             { text: 'Other Reference(s)', fontSize: 9 },
//                             {
//                               text: ' ',
//                               fontSize: 10,
//                               bold: true,
//                               margin: [0, 0, 0, -4],
//                             },
//                           ],
//                           lineHeight: 1.3,
//                           margin: [3, 0, 3, 0],
//                         },
//                       ],
//                       [
//                         {
//                           stack: [
//                             { text: "Buyer's Order No.", fontSize: 9 },
//                             {
//                               text: ' ',
//                               fontSize: 10,
//                               bold: true,
//                               margin: [0, 0, 0, -4],
//                             },
//                           ],
//                           lineHeight: 1.3,
//                           margin: [3, 0, 3, 0],
//                         },
//                         {
//                           stack: [
//                             { text: 'Dated', fontSize: 9 },
//                             {
//                               text: ' ',
//                               fontSize: 10,
//                               bold: true,
//                               margin: [0, 0, 0, -4],
//                             },
//                           ],
//                           lineHeight: 1.3,
//                           margin: [3, 0, 3, 0],
//                         },
//                       ],
//                       [
//                         {
//                           stack: [
//                             { text: 'Despatch Document No.', fontSize: 9 },
//                             {
//                               text: ' ',
//                               fontSize: 10,
//                               bold: true,
//                               margin: [0, 0, 0, -4],
//                             },
//                           ],
//                           lineHeight: 1.3,
//                           margin: [3, 0, 3, 0],
//                         },
//                         {
//                           stack: [
//                             { text: 'Delivery Note Date', fontSize: 9 },
//                             {
//                               text: ' ',
//                               fontSize: 10,
//                               bold: true,
//                               margin: [0, 0, 0, -4],
//                             },
//                           ],
//                           lineHeight: 1.3,
//                           margin: [3, 0, 3, 0],
//                         },
//                       ],
//                       [
//                         {
//                           stack: [
//                             { text: 'Despatched through', fontSize: 9 },
//                             {
//                               text: ' ',
//                               fontSize: 10,
//                               bold: true,
//                               margin: [0, 0, 0, -4],
//                             },
//                           ],
//                           lineHeight: 1.3,
//                           margin: [3, 0, 3, 0],
//                         },
//                         {
//                           stack: [
//                             { text: 'Destination', fontSize: 9 },
//                             {
//                               text: 'ROM#8',
//                               fontSize: 10,
//                               bold: true,
//                               margin: [0, 0, 0, -4],
//                             },
//                           ],
//                           lineHeight: 1.3,
//                           margin: [3, 0, 3, 0],
//                         },
//                       ],
//                       [
//                         {
//                           colSpan: 2,
//                           stack: [
//                             { text: 'Terms of Delivery.' },
//                             // { text: dynamicValue || '' }
//                             { text: 'hello' },
//                             { text: 'hello' },
//                           ],
//                           margin: [3, 3, 3, 3],
//                         },
//                         {},
//                       ],
//                     ],
//                   },
//                   margin: [0, 0, 0, 0],
//                   layout: {
//                     paddingLeft: () => 0,
//                     paddingRight: () => 0,
//                     paddingTop: () => 0,
//                     paddingBottom: () => 0,
//                     // hLineWidth: (i: number, node: any) => (i === 0 ? 0 : 0.5),
//                     // hLineWidth: (i: number, node: any) => {
//                     //   if (i === node.table.body.length) return 0; // ❌ hide bottom border
//                     //   return 0.5;
//                     // },
//                     // vLineWidth: (i: number, node: any) => (i === 0 ? 0 : 0.5),
//                     hLineWidth: (i: number, node: any) => {
//                       // ❌ remove top & bottom outer lines
//                       if (i === 0 || i === node.table.body.length) return 0;
//                       return 0.5;
//                     },

//                     vLineWidth: (i: number, node: any) => {
//                       // ❌ remove left & right outer lines
//                       if (i === 0 || i === node.table.widths.length) return 0;
//                       return 0.5;
//                     },
//                   },
//                 },
//               ],
//               [
//                 //SECOND ROW
//                 {
//                   stack: [
//                     { text: ' Buyer', fontSize: 9, bold: false },
//                     { text: 'O N G C ', fontSize: 12, bold: true },
//                     { text: 'ROM#8', fontSize: 10 },
//                     { text: 'Cambay Assest Po. Kansari', fontSize: 10 },
//                     { text: 'Cambay', fontSize: 10 },
//                     { text: 'mail : kumawat_tejpal@ongc.co.in', fontSize: 10 },
//                     { text: 'GSTIN/UIN: 24AAACO1598A4ZQ', fontSize: 10 },
//                     { text: 'State Name : Gujarat, Code : 24', fontSize: 10 },
//                   ],
//                   margin: [5, 3, 5, 3], // 👈 add this
//                 },
//                 {},
//               ],
//               [
//                 //third row
//                 {
//                   colSpan: 2,
//                   table: {
//                     widths: [17, 230, 45, 45, 45, 20, '*'],
//                     // heights: [
//                     //   HEADER_ROW_HEIGHT, // header row
//                     //   ...Array(MAX_ROWS).fill(ITEM_ROW_HEIGHT), // always 10 item rows
//                     //   TAX_ROW_HEIGHT, // CGST
//                     //   TAX_ROW_HEIGHT, // SGST
//                     //   TAX_ROW_HEIGHT, // Round Off
//                     //   TAX_ROW_HEIGHT, // Total
//                     // ],
//                     heights: tableHeights,
//                     body: [
//                       [
//                         //description vala table uska row 1
//                         {
//                           stack: [
//                             { text: 'SI', fontSize: 10, alignment: 'center' },
//                             {
//                               text: 'No',
//                               fontSize: 8,
//                               margin: [0, 0, 0, 0],
//                               alignment: 'center',
//                             },
//                           ],
//                           margin: [3, 3, 3, 3],
//                           alignment: 'center', // 👈 IMPORTANT (parent pe bhi)
//                         },
//                         {
//                           text: 'Description of Services',
//                           fontSize: 8,
//                           margin: [0, 3, 0, 3],
//                           alignment: 'center',
//                         },
//                         {
//                           text: 'HSN/SAC',
//                           fontSize: 8,
//                           margin: [0, 3, 0, 3],
//                           alignment: 'center',
//                         },
//                         {
//                           text: 'Quantity',
//                           fontSize: 8,
//                           margin: [0, 3, 0, 3],
//                           alignment: 'center',
//                         },
//                         {
//                           text: 'Rate',
//                           fontSize: 8,
//                           margin: [0, 3, 0, 3],
//                           alignment: 'center',
//                         },
//                         {
//                           text: 'per',
//                           fontSize: 8,
//                           margin: [0, 3, 0, 3],
//                           alignment: 'center',
//                         },
//                         {
//                           text: 'Amount',
//                           fontSize: 8,
//                           margin: [0, 3, 0, 3],
//                           alignment: 'center',
//                         },
//                       ],
//                       // [
//                       //   //row 2
//                       //   {
//                       //     text: '1',
//                       //     alignment: 'center',
//                       //     margin: [0, 3, 0, 3],
//                       //   },
//                       //   {
//                       //     stack: [
//                       //       { text: 'Repairing of Chain Hoist', fontSize: 10 },
//                       //       {
//                       //         text: 'Replacement of Lock Pin 8 No.',
//                       //         fontSize: 8,
//                       //       },
//                       //     ],
//                       //     margin: [3, 3, 3, 3],
//                       //   },
//                       //   {
//                       //     text: '9987',
//                       //     alignment: 'center',
//                       //   },
//                       //   {
//                       //     text: '1',
//                       //     alignment: 'center',
//                       //   },
//                       //   {
//                       //     text: '7966',
//                       //     alignment: 'right',
//                       //   },
//                       //   {
//                       //     text: ' ',
//                       //     alignment: 'center',
//                       //   },
//                       //   {
//                       //     text: '7966',
//                       //     alignment: 'right',
//                       //     bold: true,
//                       //   },
//                       // ],
//                       // [
//                       //   //row 3
//                       //   {
//                       //     text: '1',
//                       //     alignment: 'center',
//                       //     margin: [0, 3, 0, 3],
//                       //   },
//                       //   {
//                       //     stack: [
//                       //       { text: 'Repairing of Chain Hoist', fontSize: 10 },
//                       //       {
//                       //         text: 'Replacement of Lock Pin 8 No.',
//                       //         fontSize: 8,
//                       //       },
//                       //     ],
//                       //     margin: [3, 3, 3, 3],
//                       //   },
//                       //   {
//                       //     text: '9987',
//                       //     alignment: 'center',
//                       //   },
//                       //   {
//                       //     text: '1',
//                       //     alignment: 'center',
//                       //   },
//                       //   {
//                       //     text: '7966',
//                       //     alignment: 'right',
//                       //   },
//                       //   {
//                       //     text: ' ',
//                       //     alignment: 'center',
//                       //   },
//                       //   {
//                       //     text: '7966',
//                       //     alignment: 'right',
//                       //     bold: true,
//                       //   },
//                       // ],
//                       // [
//                       //   //row 4
//                       //   {
//                       //     text: '1',
//                       //     alignment: 'center',
//                       //     margin: [0, 3, 0, 3],
//                       //   },
//                       //   {
//                       //     stack: [
//                       //       { text: 'Repairing of Chain Hoist', fontSize: 10 },
//                       //       {
//                       //         text: 'Replacement of Lock Pin 8 No.',
//                       //         fontSize: 8,
//                       //       },
//                       //     ],
//                       //     margin: [3, 3, 3, 3],
//                       //   },
//                       //   {
//                       //     text: '9987',
//                       //     alignment: 'center',
//                       //   },
//                       //   {
//                       //     text: '1',
//                       //     alignment: 'center',
//                       //   },
//                       //   {
//                       //     text: '7966',
//                       //     alignment: 'right',
//                       //   },
//                       //   {
//                       //     text: ' ',
//                       //     alignment: 'center',
//                       //   },
//                       //   {
//                       //     text: '7966',
//                       //     alignment: 'right',
//                       //     bold: true,
//                       //   },
//                       // ],
//                       // [
//                       //   //row 5
//                       //   {
//                       //     text: '1',
//                       //     alignment: 'center',
//                       //     margin: [0, 3, 0, 3],
//                       //   },
//                       //   {
//                       //     stack: [
//                       //       { text: 'Repairing of Chain Hoist', fontSize: 10 },
//                       //       {
//                       //         text: 'Replacement of Lock Pin 8 No.',
//                       //         fontSize: 8,
//                       //       },
//                       //     ],
//                       //     margin: [3, 3, 3, 3],
//                       //   },
//                       //   {
//                       //     text: '9987',
//                       //     alignment: 'center',
//                       //   },
//                       //   {
//                       //     text: '1',
//                       //     alignment: 'center',
//                       //   },
//                       //   {
//                       //     text: '7966',
//                       //     alignment: 'right',
//                       //   },
//                       //   {
//                       //     text: ' ',
//                       //     alignment: 'center',
//                       //   },
//                       //   {
//                       //     text: '7966',
//                       //     alignment: 'right',
//                       //     bold: true,
//                       //   },
//                       // ],
//                       // [
//                       //   //row 6
//                       //   {
//                       //     text: '1',
//                       //     alignment: 'center',
//                       //     margin: [0, 3, 0, 3],
//                       //   },
//                       //   {
//                       //     stack: [
//                       //       { text: 'Repairing of Chain Hoist', fontSize: 10 },
//                       //       {
//                       //         text: 'Replacement of Lock Pin 8 No.',
//                       //         fontSize: 8,
//                       //       },
//                       //     ],
//                       //     margin: [3, 3, 3, 3],
//                       //   },
//                       //   {
//                       //     text: '9987',
//                       //     alignment: 'center',
//                       //   },
//                       //   {
//                       //     text: '1',
//                       //     alignment: 'center',
//                       //   },
//                       //   {
//                       //     text: '7966',
//                       //     alignment: 'right',
//                       //   },
//                       //   {
//                       //     text: ' ',
//                       //     alignment: 'center',
//                       //   },
//                       //   {
//                       //     text: '7966',
//                       //     alignment: 'right',
//                       //     bold: true,
//                       //   },
//                       // ],
//                       // ...itemRows, // dynamic
//                       ...allItemRows,
//                       ...taxRows, // CGST etc
//                     ],
//                   },
//                   margin: [0, 0, 0, 0],
//                   layout: {
//                     paddingLeft: () => 0,
//                     paddingRight: () => 0,
//                     paddingTop: () => 0,
//                     paddingBottom: () => 0,
//                     // hLineWidth: (i: number, node: any) => (i === 0 ? 0 : 0.5),
//                     // hLineWidth: (i: number, node: any) => {
//                     //   if (i === node.table.body.length) return 0; // ❌ hide bottom border
//                     //   return 0.5;
//                     // },
//                     // vLineWidth: (i: number, node: any) => (i === 0 ? 0 : 0.5),

//                     // hLineWidth: (i: number, node: any) => {
//                     //   // ❌ remove top & bottom outer lines
//                     //   if (i === 0) return 0;
//                     //   return 0.5;
//                     // },

//                     hLineWidth: (i: number, node: any) => {
//                       if (i === 0) return 0; // no top border
//                       if (i <= items.length + 1) return 0.5; // header + all 10 rows
//                       if (i === node.table.body.length - 1) return 0.5;
//                       // if (i === node.table.body.length) return 0.5; // bottom border of Total row
//                       return 0; // no lines between tax rows
//                     },

//                     // hLineWidth: (i: number, node: any) => {
//                     //   // i = line index (row boundary)

//                     //   // 1. top border remove
//                     //   if (i === 0) return 0;

//                     //   // 2. header + item rows tak lines dikhani hain
//                     //   if (i <= items.length + 1) return 0.5;

//                     //   // 3. baaki sab (empty + tax rows) → no lines
//                     //   return 0;
//                     // },
//                     // hLineWidth: (i: number, node: any) => {
//                     //   const totalRows = node.table.body.length;

//                     //   // top border remove
//                     //   if (i === 0) return 0;

//                     //   // header + item rows
//                     //   if (i <= items.length + 1) return 0.5;

//                     //   // ❗ ONLY last line draw karo
//                     //   if (i === totalRows) return 0.5;

//                     //   // baaki sab remove
//                     //   return 0;
//                     // },

//                     vLineWidth: (i: number, node: any) => {
//                       // ❌ remove left & right outer lines
//                       if (i === 0 || i === node.table.widths.length) return 0;
//                       return 0.5;
//                     },
//                   },
//                 },
//               ],
//               [
//                 //FOURTH ROW
//                 {
//                   colSpan: 2,
//                   columns: [
//                     {
//                       width: '*',
//                       stack: [
//                         { text: 'Amount Chargeable (in words)', fontSize: 8 },
//                         {
//                           text: 'INR Nine Thousand Four Hundred Only',
//                           fontSize: 10,
//                           bold: true,
//                         },
//                       ],
//                       margin: [3, 0, 3, 0],
//                     },
//                     {
//                       width: 'auto',
//                       text: 'E. & O.E',
//                       fontSize: 8,
//                       alignment: 'right',
//                       margin: [3, 0, 3, 0],
//                     },
//                   ],
//                   border: [true, true, true, true], // optional
//                 },
//                 {},
//               ],
//               [
//                 //fifth row

//                 {
//                   colSpan: 2,
//                   table: {
//                     widths: [150, 80, 40, 60, 40, 60, '*'],
//                     body: [
//                       // ── HEADER ROW 1 ──
//                       [
//                         {
//                           text: 'HSN/SAC',
//                           alignment: 'center',
//                           fontSize: 8,
//                           rowSpan: 2,
//                         },
//                         {
//                           text: 'Taxable\nValue',
//                           alignment: 'center',
//                           fontSize: 8,
//                           rowSpan: 2,
//                         },
//                         {
//                           text: 'Central Tax',
//                           alignment: 'center',
//                           fontSize: 8,
//                           colSpan: 2,
//                         },
//                         {}, // colSpan placeholder
//                         {
//                           text: 'State Tax',
//                           alignment: 'center',
//                           fontSize: 8,
//                           colSpan: 2,
//                         },
//                         {}, // colSpan placeholder
//                         {
//                           text: 'Total\nTax Amount',
//                           alignment: 'center',
//                           fontSize: 8,
//                           rowSpan: 2,
//                         },
//                       ],
//                       // ── HEADER ROW 2 (Rate/Amount sub-headers) ──
//                       [
//                         {}, // rowSpan placeholder for HSN/SAC
//                         {}, // rowSpan placeholder for Taxable Value
//                         { text: 'Rate', alignment: 'center', fontSize: 8 },
//                         { text: 'Amount', alignment: 'center', fontSize: 8 },
//                         { text: 'Rate', alignment: 'center', fontSize: 8 },
//                         { text: 'Amount', alignment: 'center', fontSize: 8 },
//                         {}, // rowSpan placeholder for Total Tax Amount
//                       ],
//                       // ── DATA ROW ──
//                       [
//                         { text: '9987', alignment: 'left', fontSize: 9 },
//                         { text: '7,966.00', alignment: 'right', fontSize: 9 },
//                         { text: '9%', alignment: 'center', fontSize: 9 },
//                         { text: '716.94', alignment: 'right', fontSize: 9 },
//                         { text: '9%', alignment: 'center', fontSize: 9 },
//                         { text: '716.94', alignment: 'right', fontSize: 9 },
//                         { text: '1,433.88', alignment: 'right', fontSize: 9 },
//                       ],
//                       // ── TOTAL ROW ──
//                       [
//                         {
//                           text: 'Total',
//                           alignment: 'right',
//                           fontSize: 9,
//                           bold: true,
//                         },
//                         {
//                           text: '7,966.00',
//                           alignment: 'right',
//                           fontSize: 9,
//                           bold: true,
//                         },
//                         { text: '', fontSize: 9 },
//                         {
//                           text: '716.94',
//                           alignment: 'right',
//                           fontSize: 9,
//                           bold: true,
//                         },
//                         { text: '', fontSize: 9 },
//                         {
//                           text: '716.94',
//                           alignment: 'right',
//                           fontSize: 9,
//                           bold: true,
//                         },
//                         {
//                           text: '1,433.88',
//                           alignment: 'right',
//                           fontSize: 9,
//                           bold: true,
//                         },
//                       ],
//                     ],
//                   },
//                   layout: {
//                     hLineWidth: (i: number, node: any) => {
//                       if (i === 0 || i === node.table.body.length) return 0; // remove top + bottom outer borders
//                       return 0.5;
//                     },
//                     vLineWidth: (i: number, node: any) => {
//                       if (i === 0 || i === node.table.widths.length) return 0; // remove left + right outer borders
//                       return 0.5;
//                     },
//                     paddingLeft: () => 3,
//                     paddingRight: () => 3,
//                     paddingTop: () => 2,
//                     paddingBottom: () => 2,
//                   },
//                 },
//                 {}, // colSpan placeholder for outer table
//               ],
//               // SIXTH ROW — Tax Amount in words
//               [
//                 {
//                   colSpan: 2,
//                   stack: [
//                     {
//                       text: [
//                         { text: 'Tax Amount (in words) : ', fontSize: 9 },
//                         {
//                           text: 'INR One Thousand Four Hundred Thirty Three and Eighty Eight paise Only',
//                           fontSize: 9,
//                           bold: true,
//                         },
//                       ],
//                     },
//                   ],
//                   margin: [5, 3, 5, 3],
//                 },
//                 {},
//               ],

//               // SEVENTH ROW — Company PAN
//               [
//                 {
//                   colSpan: 2,
//                   text: [
//                     { text: "Company's PAN  ", fontSize: 9 },
//                     { text: '          :  ', fontSize: 9 },
//                     { text: 'ALBPP3245Q', fontSize: 9, bold: true },
//                   ],
//                   margin: [5, 3, 5, 3],
//                 },
//                 {},
//               ],

//               // EIGHTH ROW — Declaration + Signatory
//               [
//                 {
//                   stack: [
//                     { text: 'Declaration', fontSize: 9, bold: true },
//                     {
//                       text: 'We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.',
//                       fontSize: 8,
//                     },
//                   ],
//                   margin: [5, 3, 5, 3],
//                 },
//                 {
//                   stack: [
//                     {
//                       text: 'for Aashapuri Industries',
//                       fontSize: 9,
//                       bold: true,
//                       alignment: 'right',
//                     },
//                     { text: '\n\n\n' },
//                     {
//                       text: 'Authorised Signatory',
//                       fontSize: 8,
//                       alignment: 'right',
//                     },
//                   ],
//                   margin: [5, 3, 5, 3],
//                 },
//               ],

//               // NINTH ROW — Computer Generated
//               [
//                 {
//                   colSpan: 2,
//                   text: 'This is a Computer Generated Invoice',
//                   fontSize: 8,
//                   alignment: 'center',
//                   margin: [0, 4, 0, 4],
//                 },
//                 {},
//               ],
//             ],
//           },
//           layout: {
//             hLineWidth: function () {
//               return 0.5;
//             }, // 👈 horizontal lines thin
//             vLineWidth: function () {
//               return 0.5;
//             }, // 👈 vertical lines thin

//             paddingLeft: () => 0,
//             paddingRight: () => 0,
//             paddingTop: () => 0,
//             paddingBottom: () => 0,
//           },
//         },
//       ],
//     };

//     pdfMake.createPdf(docDefinition).open();
//   }
// }






// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
// import pdfMake from 'pdfmake/build/pdfmake';
// import pdfFonts from 'pdfmake/build/vfs_fonts';

// (pdfMake as any).vfs = pdfFonts.vfs;

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss'],
// })
// export class AppComponent implements OnInit {
//   invoiceForm!: FormGroup;
//   readonly MAX_ROWS = 10;

//   constructor(private fb: FormBuilder) {}

//   ngOnInit() {
//     this.invoiceForm = this.fb.group({
//       // Seller
//       sellerName: ['Aashapuri Industries', Validators.required],
//       sellerAddress: ['Plot No.1404 Phase IV'],
//       sellerCity: ['Vithal Udyognagar 388121'],
//       sellerCode: ['145756'],
//       sellerGstin: ['24ALBPP3245Q1ZS'],
//       sellerState: ['Gujarat, Code : 24'],
//       sellerEmail: ['ajay.panchal75@gmail.com'],

//       // Invoice Meta
//       invoiceNo: ['06', Validators.required],
//       invoiceDate: ['12-Dec-2022', Validators.required],
//       deliveryNote: [''],
//       paymentTerms: [''],
//       supplierRef: [''],
//       otherRef: [''],
//       buyerOrderNo: [''],
//       buyerOrderDate: [''],
//       despatchDoc: [''],
//       deliveryNoteDate: [''],
//       despatchedThrough: [''],
//       destination: ['ROM#8'],
//       termsOfDelivery: [''],

//       // Buyer
//       buyerName: ['O N G C', Validators.required],
//       buyerAddress: ['ROM#8'],
//       buyerCity: ['Cambay Assest Po. Kansari'],
//       buyerArea: ['Cambay'],
//       buyerEmail: ['kumawat_tejpal@ongc.co.in'],
//       buyerGstin: ['24AAACO1598A4ZQ'],
//       buyerState: ['Gujarat, Code : 24'],

//       // Items
//       items: this.fb.array([this.createItem()]),

//       // Tax
//       cgstRate: [9],
//       sgstRate: [9],
//       pan: ['ALBPP3245Q'],
//     });
//   }

//   // ── FormArray helpers ──
//   get items(): FormArray {
//     return this.invoiceForm.get('items') as FormArray;
//   }

//   createItem(): FormGroup {
//     return this.fb.group({
//       desc: ['', Validators.required],
//       sub: [''],
//       hsn: [''],
//       qty: [1],
//       rate: [0],
//       per: [''],
//       amount: [0],
//     });
//   }

//   addItem() {
//     if (this.items.length < this.MAX_ROWS) {
//       this.items.push(this.createItem());
//     }
//   }

//   removeItem(index: number) {
//     if (this.items.length > 1) {
//       this.items.removeAt(index);
//     }
//   }

//   // ── Auto calculate amount when qty/rate changes ──
//   calculateAmount(index: number) {
//     const item = this.items.at(index);
//     const qty = item.get('qty')?.value || 0;
//     const rate = item.get('rate')?.value || 0;
//     item.get('amount')?.setValue((qty * rate).toFixed(2), { emitEvent: false });
//     this.calculateTaxes();
//   }

//   // ── Tax calculations ──
//   get taxableValue(): number {
//     return this.items.controls.reduce((sum, item) => {
//       return sum + parseFloat(item.get('amount')?.value || 0);
//     }, 0);
//   }

//   get cgstAmount(): number {
//     return parseFloat(
//       (
//         (this.taxableValue * this.invoiceForm.get('cgstRate')?.value) /
//         100
//       ).toFixed(2),
//     );
//   }

//   get sgstAmount(): number {
//     return parseFloat(
//       (
//         (this.taxableValue * this.invoiceForm.get('sgstRate')?.value) /
//         100
//       ).toFixed(2),
//     );
//   }

//   get grandTotal(): number {
//     const raw = this.taxableValue + this.cgstAmount + this.sgstAmount;
//     return Math.round(raw);
//   }

//   get roundOff(): number {
//     const raw = this.taxableValue + this.cgstAmount + this.sgstAmount;
//     return parseFloat((this.grandTotal - raw).toFixed(2));
//   }

//   calculateTaxes() {
//     // triggers Angular CD — values update in template automatically
//   }

//   formatAmount(val: number): string {
//     return val.toLocaleString('en-IN', { minimumFractionDigits: 2 });
//   }

//   // ── PDF Generation ──
//   generatePDF() {
//     const f = this.invoiceForm.value;
//     const itemsData = f.items;

//     const MAX_ROWS = this.MAX_ROWS;
//     const ITEM_ROW_HEIGHT = 18;
//     const HEADER_ROW_HEIGHT = 16;
//     const TAX_ROW_HEIGHT = 14;

//     // Build allItemRows
//     const allItemRows = [];
//     for (let i = 0; i < MAX_ROWS; i++) {
//       const item = itemsData[i] || null;
//       allItemRows.push([
//         {
//           stack: [{ text: item ? String(i + 1) : '\u200B', fontSize: 8 }],
//           alignment: 'center',
//         },
//         {
//           stack: [
//             { text: item ? item.desc : '\u200B', fontSize: 10 },
//             { text: item?.sub ? item.sub : '\u200B', fontSize: 6 },
//           ],
//         },
//         {
//           stack: [{ text: item ? item.hsn : '\u200B', fontSize: 10 }],
//           alignment: 'center',
//         },
//         {
//           stack: [{ text: item ? String(item.qty) : '\u200B', fontSize: 10 }],
//           alignment: 'center',
//         },
//         {
//           stack: [{ text: item ? String(item.rate) : '\u200B', fontSize: 10 }],
//           alignment: 'right',
//         },
//         {
//           stack: [
//             { text: item ? item.per || '\u200B' : '\u200B', fontSize: 10 },
//           ],
//           alignment: 'center',
//         },
//         {
//           stack: [
//             { text: item ? String(item.amount) : '\u200B', fontSize: 10 },
//           ],
//           alignment: 'right',
//           bold: !!item,
//         },
//       ]);
//     }

//     const tableHeights = [
//       HEADER_ROW_HEIGHT,
//       ...Array(MAX_ROWS).fill(ITEM_ROW_HEIGHT),
//       TAX_ROW_HEIGHT,
//       TAX_ROW_HEIGHT,
//       TAX_ROW_HEIGHT,
//       TAX_ROW_HEIGHT,
//     ];

//     const taxRows = [
//       [
//         {},
//         { text: 'CGST', alignment: 'right', italics: true, fontSize: 10 },
//         {},
//         {},
//         {},
//         {},
//         {
//           text: this.formatAmount(this.cgstAmount),
//           alignment: 'right',
//           fontSize: 10,
//         },
//       ],
//       [
//         {},
//         { text: 'SGST', alignment: 'right', italics: true, fontSize: 10 },
//         {},
//         {},
//         {},
//         {},
//         {
//           text: this.formatAmount(this.sgstAmount),
//           alignment: 'right',
//           fontSize: 10,
//         },
//       ],
//       [
//         {},
//         { text: 'Round Off', alignment: 'right', italics: true, fontSize: 10 },
//         {},
//         {},
//         {},
//         {},
//         {
//           text: this.formatAmount(this.roundOff),
//           alignment: 'right',
//           fontSize: 10,
//         },
//       ],
//       [
//         {},
//         { text: 'Total', alignment: 'right', italics: true, fontSize: 11 },
//         {},
//         {},
//         {},
//         {},
//         {
//           text: this.formatAmount(this.grandTotal),
//           alignment: 'right',
//           fontSize: 13,
//           bold: true,
//         },
//       ],
//     ];

//     const docDefinition: any = {
//       pageSize: 'A4',
//       pageMargins: [40, 40, 40, 40],
//       content: [
//         {
//           text: 'Tax Invoice',
//           alignment: 'center',
//           fontSize: 12,
//           bold: true,
//           margin: [0, 0, 0, 10],
//         },
//         {
//           table: {
//             widths: ['*', '*'],
//             heights: ['auto', 99, 290],
//             body: [
//               // ROW 1 - Seller
//               [
//                 {
//                   stack: [
//                     { text: f.sellerName, fontSize: 12, bold: true },
//                     { text: f.sellerAddress, fontSize: 10 },
//                     { text: f.sellerCity, fontSize: 10 },
//                     { text: `Vendore Code : - ${f.sellerCode}`, fontSize: 10 },
//                     { text: `GSTIN/UIN: ${f.sellerGstin}`, fontSize: 10 },
//                     { text: `State Name : ${f.sellerState}`, fontSize: 10 },
//                     { text: `E-Mail : ${f.sellerEmail}`, fontSize: 10 },
//                   ],
//                   margin: [5, 3, 5, 3],
//                 },
//                 {
//                   rowSpan: 2,
//                   table: {
//                     widths: ['*', '*'],
//                     body: [
//                       [
//                         {
//                           stack: [
//                             { text: 'Invoice No.', fontSize: 9 },
//                             { text: f.invoiceNo, fontSize: 10, bold: true },
//                           ],
//                           margin: [3, 0, 3, 0],
//                         },
//                         {
//                           stack: [
//                             { text: 'Dated', fontSize: 9 },
//                             { text: f.invoiceDate, fontSize: 10, bold: true },
//                           ],
//                           margin: [3, 0, 3, 0],
//                         },
//                       ],
//                       [
//                         {
//                           stack: [
//                             { text: 'Delivery Note', fontSize: 9 },
//                             {
//                               text: f.deliveryNote || ' ',
//                               fontSize: 10,
//                               bold: true,
//                             },
//                           ],
//                           margin: [3, 0, 3, 0],
//                         },
//                         {
//                           stack: [
//                             { text: 'Mode/Terms of Payment', fontSize: 9 },
//                             {
//                               text: f.paymentTerms || ' ',
//                               fontSize: 10,
//                               bold: true,
//                             },
//                           ],
//                           margin: [3, 0, 3, 0],
//                         },
//                       ],
//                       [
//                         {
//                           stack: [
//                             { text: "Supplier's Ref.", fontSize: 9 },
//                             {
//                               text: f.supplierRef || ' ',
//                               fontSize: 10,
//                               bold: true,
//                             },
//                           ],
//                           margin: [3, 0, 3, 0],
//                         },
//                         {
//                           stack: [
//                             { text: 'Other Reference(s)', fontSize: 9 },
//                             {
//                               text: f.otherRef || ' ',
//                               fontSize: 10,
//                               bold: true,
//                             },
//                           ],
//                           margin: [3, 0, 3, 0],
//                         },
//                       ],
//                       [
//                         {
//                           stack: [
//                             { text: "Buyer's Order No.", fontSize: 9 },
//                             {
//                               text: f.buyerOrderNo || ' ',
//                               fontSize: 10,
//                               bold: true,
//                             },
//                           ],
//                           margin: [3, 0, 3, 0],
//                         },
//                         {
//                           stack: [
//                             { text: 'Dated', fontSize: 9 },
//                             {
//                               text: f.buyerOrderDate || ' ',
//                               fontSize: 10,
//                               bold: true,
//                             },
//                           ],
//                           margin: [3, 0, 3, 0],
//                         },
//                       ],
//                       [
//                         {
//                           stack: [
//                             { text: 'Despatch Document No.', fontSize: 9 },
//                             {
//                               text: f.despatchDoc || ' ',
//                               fontSize: 10,
//                               bold: true,
//                             },
//                           ],
//                           margin: [3, 0, 3, 0],
//                         },
//                         {
//                           stack: [
//                             { text: 'Delivery Note Date', fontSize: 9 },
//                             {
//                               text: f.deliveryNoteDate || ' ',
//                               fontSize: 10,
//                               bold: true,
//                             },
//                           ],
//                           margin: [3, 0, 3, 0],
//                         },
//                       ],
//                       [
//                         {
//                           stack: [
//                             { text: 'Despatched through', fontSize: 9 },
//                             {
//                               text: f.despatchedThrough || ' ',
//                               fontSize: 10,
//                               bold: true,
//                             },
//                           ],
//                           margin: [3, 0, 3, 0],
//                         },
//                         {
//                           stack: [
//                             { text: 'Destination', fontSize: 9 },
//                             {
//                               text: f.destination || ' ',
//                               fontSize: 10,
//                               bold: true,
//                             },
//                           ],
//                           margin: [3, 0, 3, 0],
//                         },
//                       ],
//                       [
//                         {
//                           colSpan: 2,
//                           stack: [
//                             { text: 'Terms of Delivery.' },
//                             { text: f.termsOfDelivery || ' ' },
//                           ],
//                           margin: [3, 3, 3, 3],
//                         },
//                         {},
//                       ],
//                     ],
//                   },
//                   margin: [0, 0, 0, 0],
//                   layout: {
//                     paddingLeft: () => 0,
//                     paddingRight: () => 0,
//                     paddingTop: () => 0,
//                     paddingBottom: () => 0,
//                     hLineWidth: (i: number, node: any) =>
//                       i === 0 || i === node.table.body.length ? 0 : 0.5,
//                     vLineWidth: (i: number, node: any) =>
//                       i === 0 || i === node.table.widths.length ? 0 : 0.5,
//                   },
//                 },
//               ],
//               // ROW 2 - Buyer
//               [
//                 {
//                   stack: [
//                     { text: 'Buyer', fontSize: 9 },
//                     { text: f.buyerName, fontSize: 12, bold: true },
//                     { text: f.buyerAddress, fontSize: 10 },
//                     { text: f.buyerCity, fontSize: 10 },
//                     { text: f.buyerArea, fontSize: 10 },
//                     { text: `mail : ${f.buyerEmail}`, fontSize: 10 },
//                     { text: `GSTIN/UIN: ${f.buyerGstin}`, fontSize: 10 },
//                     { text: `State Name : ${f.buyerState}`, fontSize: 10 },
//                   ],
//                   margin: [5, 3, 5, 3],
//                 },
//                 {},
//               ],
//               // ROW 3 - Items
//               [
//                 {
//                   colSpan: 2,
//                   table: {
//                     widths: [17, 230, 45, 45, 45, 20, '*'],
//                     heights: tableHeights,
//                     body: [
//                       [
//                         {
//                           stack: [
//                             { text: 'SI', fontSize: 10, alignment: 'center' },
//                             { text: 'No', fontSize: 8, alignment: 'center' },
//                           ],
//                           margin: [3, 3, 3, 3],
//                           alignment: 'center',
//                         },
//                         {
//                           text: 'Description of Services',
//                           fontSize: 8,
//                           margin: [0, 3, 0, 3],
//                           alignment: 'center',
//                         },
//                         {
//                           text: 'HSN/SAC',
//                           fontSize: 8,
//                           margin: [0, 3, 0, 3],
//                           alignment: 'center',
//                         },
//                         {
//                           text: 'Quantity',
//                           fontSize: 8,
//                           margin: [0, 3, 0, 3],
//                           alignment: 'center',
//                         },
//                         {
//                           text: 'Rate',
//                           fontSize: 8,
//                           margin: [0, 3, 0, 3],
//                           alignment: 'center',
//                         },
//                         {
//                           text: 'per',
//                           fontSize: 8,
//                           margin: [0, 3, 0, 3],
//                           alignment: 'center',
//                         },
//                         {
//                           text: 'Amount',
//                           fontSize: 8,
//                           margin: [0, 3, 0, 3],
//                           alignment: 'center',
//                         },
//                       ],
//                       ...allItemRows,
//                       ...taxRows,
//                     ],
//                   },
//                   margin: [0, 0, 0, 0],
//                   layout: {
//                     paddingLeft: () => 0,
//                     paddingRight: () => 0,
//                     paddingTop: () => 0,
//                     paddingBottom: () => 0,
//                     hLineWidth: (i: number, node: any) => {
//                       if (i === 0) return 0;
//                       if (i <= itemsData.length + 1) return 0.5;
//                       if (i === node.table.body.length - 1) return 0.5;
//                       return 0;
//                     },
//                     vLineWidth: (i: number, node: any) =>
//                       i === 0 || i === node.table.widths.length ? 0 : 0.5,
//                   },
//                 },
//               ],
//               // ROW 4 - Amount in words
//               [
//                 {
//                   colSpan: 2,
//                   columns: [
//                     {
//                       width: '*',
//                       stack: [
//                         { text: 'Amount Chargeable (in words)', fontSize: 8 },
//                         {
//                           text: `INR ${this.grandTotal}`,
//                           fontSize: 10,
//                           bold: true,
//                         },
//                       ],
//                       margin: [3, 0, 3, 0],
//                     },
//                     {
//                       width: 'auto',
//                       text: 'E. & O.E',
//                       fontSize: 8,
//                       alignment: 'right',
//                       margin: [3, 0, 3, 0],
//                     },
//                   ],
//                 },
//                 {},
//               ],
//               // ROW 5 - HSN Summary
//               [
//                 {
//                   colSpan: 2,
//                   table: {
//                     widths: [150, 80, 40, 60, 40, 60, '*'],
//                     body: [
//                       [
//                         {
//                           text: 'HSN/SAC',
//                           alignment: 'center',
//                           fontSize: 8,
//                           rowSpan: 2,
//                         },
//                         {
//                           text: 'Taxable\nValue',
//                           alignment: 'center',
//                           fontSize: 8,
//                           rowSpan: 2,
//                         },
//                         {
//                           text: 'Central Tax',
//                           alignment: 'center',
//                           fontSize: 8,
//                           colSpan: 2,
//                         },
//                         {},
//                         {
//                           text: 'State Tax',
//                           alignment: 'center',
//                           fontSize: 8,
//                           colSpan: 2,
//                         },
//                         {},
//                         {
//                           text: 'Total\nTax Amount',
//                           alignment: 'center',
//                           fontSize: 8,
//                           rowSpan: 2,
//                         },
//                       ],
//                       [
//                         {},
//                         {},
//                         { text: 'Rate', alignment: 'center', fontSize: 8 },
//                         { text: 'Amount', alignment: 'center', fontSize: 8 },
//                         { text: 'Rate', alignment: 'center', fontSize: 8 },
//                         { text: 'Amount', alignment: 'center', fontSize: 8 },
//                         {},
//                       ],
//                       // Dynamic HSN rows grouped by HSN
//                       ...this.getHsnSummaryRows(itemsData, f),
//                       // Total row
//                       [
//                         {
//                           text: 'Total',
//                           alignment: 'right',
//                           fontSize: 9,
//                           bold: true,
//                         },
//                         {
//                           text: this.formatAmount(this.taxableValue),
//                           alignment: 'right',
//                           fontSize: 9,
//                           bold: true,
//                         },
//                         { text: '' },
//                         {
//                           text: this.formatAmount(this.cgstAmount),
//                           alignment: 'right',
//                           fontSize: 9,
//                           bold: true,
//                         },
//                         { text: '' },
//                         {
//                           text: this.formatAmount(this.sgstAmount),
//                           alignment: 'right',
//                           fontSize: 9,
//                           bold: true,
//                         },
//                         {
//                           text: this.formatAmount(
//                             this.cgstAmount + this.sgstAmount,
//                           ),
//                           alignment: 'right',
//                           fontSize: 9,
//                           bold: true,
//                         },
//                       ],
//                     ],
//                   },
//                   layout: {
//                     hLineWidth: (i: number, node: any) =>
//                       i === 0 || i === node.table.body.length ? 0 : 0.5,
//                     vLineWidth: (i: number, node: any) =>
//                       i === 0 || i === node.table.widths.length ? 0 : 0.5,
//                     paddingLeft: () => 3,
//                     paddingRight: () => 3,
//                     paddingTop: () => 2,
//                     paddingBottom: () => 2,
//                   },
//                 },
//                 {},
//               ],
//               // ROW 6 - Tax amount in words
//               [
//                 {
//                   colSpan: 2,
//                   stack: [
//                     {
//                       text: [
//                         { text: 'Tax Amount (in words) : ', fontSize: 9 },
//                         {
//                           text: `INR ${this.cgstAmount + this.sgstAmount}`,
//                           fontSize: 9,
//                           bold: true,
//                         },
//                       ],
//                     },
//                   ],
//                   margin: [5, 3, 5, 3],
//                 },
//                 {},
//               ],
//               // ROW 7 - PAN
//               [
//                 {
//                   colSpan: 2,
//                   text: [
//                     { text: "Company's PAN  :  ", fontSize: 9 },
//                     { text: f.pan, fontSize: 9, bold: true },
//                   ],
//                   margin: [5, 3, 5, 3],
//                 },
//                 {},
//               ],
//               // ROW 8 - Declaration
//               [
//                 {
//                   stack: [
//                     { text: 'Declaration', fontSize: 9, bold: true },
//                     {
//                       text: 'We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.',
//                       fontSize: 8,
//                     },
//                   ],
//                   margin: [5, 3, 5, 3],
//                 },
//                 {
//                   stack: [
//                     {
//                       text: `for ${f.sellerName}`,
//                       fontSize: 9,
//                       bold: true,
//                       alignment: 'right',
//                     },
//                     { text: '\n\n\n' },
//                     {
//                       text: 'Authorised Signatory',
//                       fontSize: 8,
//                       alignment: 'right',
//                     },
//                   ],
//                   margin: [5, 3, 5, 3],
//                 },
//               ],
//               // ROW 9 - Footer
//               [
//                 {
//                   colSpan: 2,
//                   text: 'This is a Computer Generated Invoice',
//                   fontSize: 8,
//                   alignment: 'center',
//                   margin: [0, 4, 0, 4],
//                 },
//                 {},
//               ],
//             ],
//           },
//           layout: {
//             hLineWidth: () => 0.5,
//             vLineWidth: () => 0.5,
//             paddingLeft: () => 0,
//             paddingRight: () => 0,
//             paddingTop: () => 0,
//             paddingBottom: () => 0,
//           },
//         },
//       ],
//     };

//     pdfMake.createPdf(docDefinition).open();
//   }

//   // Groups items by HSN for summary table
//   getHsnSummaryRows(itemsData: any[], f: any): any[] {
//     const hsnMap: { [key: string]: number } = {};
//     itemsData.forEach((item) => {
//       const hsn = item.hsn || 'N/A';
//       hsnMap[hsn] = (hsnMap[hsn] || 0) + parseFloat(item.amount || 0);
//     });

//     return Object.entries(hsnMap).map(([hsn, taxable]) => {
//       const cgst = parseFloat(((taxable * f.cgstRate) / 100).toFixed(2));
//       const sgst = parseFloat(((taxable * f.sgstRate) / 100).toFixed(2));
//       return [
//         { text: hsn, alignment: 'center', fontSize: 9 },
//         { text: this.formatAmount(taxable), alignment: 'right', fontSize: 9 },
//         { text: `${f.cgstRate}%`, alignment: 'center', fontSize: 9 },
//         { text: this.formatAmount(cgst), alignment: 'right', fontSize: 9 },
//         { text: `${f.sgstRate}%`, alignment: 'center', fontSize: 9 },
//         { text: this.formatAmount(sgst), alignment: 'right', fontSize: 9 },
//         {
//           text: this.formatAmount(cgst + sgst),
//           alignment: 'right',
//           fontSize: 9,
//         },
//       ];
//     });
//   }
// }




import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pdf-make-playground';

  invoiceForm!: FormGroup;
  readonly MAX_ROWS = 10;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.invoiceForm = this.fb.group({
      // Seller
      sellerName:    ['Aashapuri Industries'],
      sellerAddress: ['Plot No.1404 Phase IV'],
      sellerCity:    ['Vithal Udyognagar 388121'],
      sellerCode:    ['145756'],
      sellerGstin:   ['24ALBPP3245Q1ZS'],
      sellerState:   ['Gujarat, Code : 24'],
      sellerEmail:   ['ajay.panchal75@gmail.com'],
      // Invoice Meta
      invoiceNo:         ['06'],
      invoiceDate:       ['12-Dec-2022'],
      deliveryNote:      [''],
      paymentTerms:      [''],
      supplierRef:       [''],
      otherRef:          [''],
      buyerOrderNo:      [''],
      buyerOrderDate:    [''],
      despatchDoc:       [''],
      deliveryNoteDate:  [''],
      despatchedThrough: [''],
      destination:       ['ROM#8'],
      termsOfDelivery:   [''],
      // Buyer
      buyerName:    ['O N G C'],
      buyerAddress: ['ROM#8'],
      buyerCity:    ['Cambay Assest Po. Kansari'],
      buyerArea:    ['Cambay'],
      buyerEmail:   ['kumawat_tejpal@ongc.co.in'],
      buyerGstin:   ['24AAACO1598A4ZQ'],
      buyerState:   ['Gujarat, Code : 24'],
      // Items
      items: this.fb.array([this.createItem()]),
      // Tax
      cgstRate: [9],
      sgstRate: [9],
      pan:      ['ALBPP3245Q'],
    });
  }

  get itemsArray(): FormArray {
    return this.invoiceForm.get('items') as FormArray;
  }

  createItem(): FormGroup {
    return this.fb.group({
      desc:   [''],
      sub:    [''],
      hsn:    [''],
      qty:    [1],
      rate:   [0],
      per:    [''],
      amount: [0],
    });
  }

  addItem() {
    if (this.itemsArray.length < this.MAX_ROWS) {
      this.itemsArray.push(this.createItem());
    }
  }

  removeItem(index: number) {
    if (this.itemsArray.length > 1) {
      this.itemsArray.removeAt(index);
    }
  }

  calculateAmount(index: number) {
    const item = this.itemsArray.at(index);
    const qty  = parseFloat(item.get('qty')?.value) || 0;
    const rate = parseFloat(item.get('rate')?.value) || 0;
    item.get('amount')?.setValue((qty * rate).toFixed(2), { emitEvent: false });
  }

  get taxableValue(): number {
    return this.itemsArray.controls.reduce((sum, item) => {
      return sum + parseFloat(item.get('amount')?.value || 0);
    }, 0);
  }

  get cgstAmount(): number {
    return parseFloat(((this.taxableValue * this.invoiceForm.get('cgstRate')?.value) / 100).toFixed(2));
  }

  get sgstAmount(): number {
    return parseFloat(((this.taxableValue * this.invoiceForm.get('sgstRate')?.value) / 100).toFixed(2));
  }

  get grandTotal(): number {
    return Math.round(this.taxableValue + this.cgstAmount + this.sgstAmount);
  }

  get roundOff(): number {
    const raw = this.taxableValue + this.cgstAmount + this.sgstAmount;
    return parseFloat((this.grandTotal - raw).toFixed(2));
  }

  formatAmount(val: number): string {
    return val.toLocaleString('en-IN', { minimumFractionDigits: 2 });
  }


  convertToWords(num: number): string {
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
                'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen',
                'Seventeen', 'Eighteen', 'Nineteen'];
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

  if (num === 0) return 'Zero';

  const convert = (n: number): string => {
    if (n < 20) return ones[n];
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? ' ' + ones[n % 10] : '');
    if (n < 1000) return ones[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' ' + convert(n % 100) : '');
    if (n < 100000) return convert(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 ? ' ' + convert(n % 1000) : '');
    if (n < 10000000) return convert(Math.floor(n / 100000)) + ' Lakh' + (n % 100000 ? ' ' + convert(n % 100000) : '');
    return convert(Math.floor(n / 10000000)) + ' Crore' + (n % 10000000 ? ' ' + convert(n % 10000000) : '');
  };

  return 'INR ' + convert(Math.floor(num)) + ' Only';
}

  testDeclaration() {
    const f = this.invoiceForm.value;
    const items = f.items; // ← dynamic items from form

    const MAX_ROWS = 10;
    const ITEM_ROW_HEIGHT = 18;
    const HEADER_ROW_HEIGHT = 16;
    const TAX_ROW_HEIGHT = 14;

    const allItemRows = [];

    // ── YOUR EXACT LOOP — only item source changed to form data ──
    for (let i = 0; i < MAX_ROWS; i++) {
      const item = items[i] || null;

      allItemRows.push([
        {
          stack: [{ text: item ? String(i + 1) : '\u200B', fontSize: 8 }],
          alignment: 'center',
        },
        {
          stack: [
            { text: item ? item.desc : '\u200B', fontSize: 10 },
            { text: item?.sub ? item.sub : '\u200B', fontSize: 6 },
          ],
          margin:[4,0,0,0]
        },
        {
          stack: [{ text: item ? item.hsn : '\u200B', fontSize: 10 }],
          alignment: 'center',
        },
        {
          stack: [{ text: item ? String(item.qty) : '\u200B', fontSize: 10 }],
          alignment: 'center',
        },
        {
          stack: [{ text: item ? String(item.rate) : '\u200B', fontSize: 10 }],
          alignment: 'right',
          margin:[0,0,4,0]
        },
        {
          stack: [{ text: item ? item.per || '\u200B' : '\u200B', fontSize: 10 }],
          alignment: 'center',
        },
        {
          stack: [{ text: item ? String(item.amount) : '\u200B', fontSize: 10 }],
          alignment: 'right',
          bold: !!item,
          margin:[0,0,4,0],
        },
      ]);
    }

    const tableHeights = [
      HEADER_ROW_HEIGHT,
      ...Array(MAX_ROWS).fill(ITEM_ROW_HEIGHT),
      TAX_ROW_HEIGHT,
      TAX_ROW_HEIGHT,
      TAX_ROW_HEIGHT,
      TAX_ROW_HEIGHT,
    ];

    // ── YOUR EXACT taxRows — only values swapped to computed ──
    const taxRows = [
      [
        {},
        { text: 'CGST', alignment: 'right', italics: true, fontSize: 10, margin: [0, 3, 0, 3] },
        {}, {}, {}, {},
        { text: this.formatAmount(this.cgstAmount), alignment: 'right', fontSize: 10, margin: [0, 3, 0, 3] },
      ],
      [
        {},
        { text: 'SGST', alignment: 'right', italics: true, fontSize: 10, margin: [0, 3, 0, 3] },
        {}, {}, {}, {},
        { text: this.formatAmount(this.sgstAmount), alignment: 'right', fontSize: 10, margin: [0, 3, 0, 3] },
      ],
      [
        {},
        { text: 'Round Off', alignment: 'right', italics: true, fontSize: 10, margin: [0, 3, 0, 3] },
        {}, {}, {}, {},
        { text: this.formatAmount(this.roundOff), alignment: 'right', fontSize: 10, margin: [0, 3, 0, 3] },
      ],
      [
        {},
        { text: 'Total', alignment: 'right', italics: true, fontSize: 11, margin: [0, 3, 0, 3] },
        {}, {}, {}, {},
        { text: this.formatAmount(this.grandTotal), alignment: 'right', fontSize: 13, bold: true, margin: [0, 3, 0, 3] },
      ],
    ];

    // ── YOUR EXACT docDefinition — only hardcoded strings replaced with f.xxx ──
    const docDefinition = {
      pageSize: 'A4',
      pageMargins: [25, 40, 25, 40],
      content: [
        {
          text: 'Tax Invoice',
          alignment: 'center',
          fontSize: 12,
          bold: true,
          margin: [0, 0, 0, 30],
        },
        {
          table: {
            widths: ['*', '*'],
            heights: ['auto', 99, 290],
            body: [
              [
                // FIRST ROW — seller
                {
                  stack: [
                    { text: f.sellerName, fontSize: 12, bold: true },
                    { text: f.sellerAddress, fontSize: 10 },
                    { text: f.sellerCity, fontSize: 10 },
                    { text: `Vendore Code : - ${f.sellerCode}`, fontSize: 10 },
                    { text: `GSTIN/UIN: ${f.sellerGstin}`, fontSize: 10 },
                    { text: `State Name : ${f.sellerState}`, fontSize: 10 },
                    { text: `E-Mail : ${f.sellerEmail}`, fontSize: 10 },
                  ],
                  margin: [5, 3, 5, 3],
                },
                {
                  rowSpan: 2,
                  table: {
                    widths: ['*', '*'],
                    body: [
                      [
                        { stack: [{ text: 'Invoice No.', fontSize: 9 }, { text: f.invoiceNo, fontSize: 10, bold: true, margin: [0, 0, 0, -4] }], lineHeight: 1.3, margin: [3, 0, 3, 0] },
                        { stack: [{ text: 'Dated', fontSize: 9 }, { text: f.invoiceDate, fontSize: 10, bold: true, margin: [0, 0, 0, -4] }], lineHeight: 1.3, margin: [3, 0, 3, 0] },
                      ],
                      [
                        { stack: [{ text: 'Delivery Note', fontSize: 9 }, { text: f.deliveryNote || ' ', fontSize: 10, bold: true, margin: [0, 0, 0, -4] }], lineHeight: 1.3, margin: [3, 0, 3, 0] },
                        { stack: [{ text: 'Mode/Terms of Payment', fontSize: 9 }, { text: f.paymentTerms || ' ', fontSize: 10, bold: true, margin: [0, 0, 0, -4] }], lineHeight: 1.3, margin: [3, 0, 3, 0] },
                      ],
                      [
                        { stack: [{ text: "Supplier's Ref.", fontSize: 9 }, { text: f.supplierRef || ' ', fontSize: 10, bold: true, margin: [0, 0, 0, -4] }], lineHeight: 1.3, margin: [3, 0, 3, 0] },
                        { stack: [{ text: 'Other Reference(s)', fontSize: 9 }, { text: f.otherRef || ' ', fontSize: 10, bold: true, margin: [0, 0, 0, -4] }], lineHeight: 1.3, margin: [3, 0, 3, 0] },
                      ],
                      [
                        { stack: [{ text: "Buyer's Order No.", fontSize: 9 }, { text: f.buyerOrderNo || ' ', fontSize: 10, bold: true, margin: [0, 0, 0, -4] }], lineHeight: 1.3, margin: [3, 0, 3, 0] },
                        { stack: [{ text: 'Dated', fontSize: 9 }, { text: f.buyerOrderDate || ' ', fontSize: 10, bold: true, margin: [0, 0, 0, -4] }], lineHeight: 1.3, margin: [3, 0, 3, 0] },
                      ],
                      [
                        { stack: [{ text: 'Despatch Document No.', fontSize: 9 }, { text: f.despatchDoc || ' ', fontSize: 10, bold: true, margin: [0, 0, 0, -4] }], lineHeight: 1.3, margin: [3, 0, 3, 0] },
                        { stack: [{ text: 'Delivery Note Date', fontSize: 9 }, { text: f.deliveryNoteDate || ' ', fontSize: 10, bold: true, margin: [0, 0, 0, -4] }], lineHeight: 1.3, margin: [3, 0, 3, 0] },
                      ],
                      [
                        { stack: [{ text: 'Despatched through', fontSize: 9 }, { text: f.despatchedThrough || ' ', fontSize: 10, bold: true, margin: [0, 0, 0, -4] }], lineHeight: 1.3, margin: [3, 0, 3, 0] },
                        { stack: [{ text: 'Destination', fontSize: 9 }, { text: f.destination || ' ', fontSize: 10, bold: true, margin: [0, 0, 0, -4] }], lineHeight: 1.3, margin: [3, 0, 3, 0] },
                      ],
                      [
                        { colSpan: 2, stack: [{ text: 'Terms of Delivery.' }, { text: f.termsOfDelivery || ' ' }], margin: [3, 3, 3, 3] },
                        {},
                      ],
                    ],
                  },
                  margin: [0, 0, 0, 0],
                  layout: {
                    paddingLeft: () => 0,
                    paddingRight: () => 0,
                    paddingTop: () => 0,
                    paddingBottom: () => 0,
                    hLineWidth: (i: number, node: any) => {
                      if (i === 0 || i === node.table.body.length) return 0;
                      return 0.5;
                    },
                    vLineWidth: (i: number, node: any) => {
                      if (i === 0 || i === node.table.widths.length) return 0;
                      return 0.5;
                    },
                  },
                },
              ],
              [
                // SECOND ROW — buyer
                {
                  stack: [
                    { text: ' Buyer', fontSize: 9, bold: false },
                    { text: f.buyerName, fontSize: 12, bold: true },
                    { text: f.buyerAddress, fontSize: 10 },
                    { text: f.buyerCity, fontSize: 10 },
                    { text: f.buyerArea, fontSize: 10 },
                    { text: `mail : ${f.buyerEmail}`, fontSize: 10 },
                    { text: `GSTIN/UIN: ${f.buyerGstin}`, fontSize: 10 },
                    { text: `State Name : ${f.buyerState}`, fontSize: 10 },
                  ],
                  margin: [5, 3, 5, 3],
                },
                {},
              ],
              [
                // THIRD ROW — items (YOUR EXACT CODE, unchanged)
                {
                  colSpan: 2,
                  table: {
                    widths: [17, 255, 50, 50, 50, 25, '*'],
                    heights: tableHeights,
                    body: [
                      [
                        { stack: [{ text: 'SI', fontSize: 10, alignment: 'center' }, { text: 'No', fontSize: 8, margin: [0, 0, 0, 0], alignment: 'center' }], margin: [3, 3, 3, 3], alignment: 'center' },
                        { text: 'Description of Services', fontSize: 8, margin: [0, 3, 0, 3], alignment: 'center' },
                        { text: 'HSN/SAC', fontSize: 8, margin: [0, 3, 0, 3], alignment: 'center' },
                        { text: 'Quantity', fontSize: 8, margin: [0, 3, 0, 3], alignment: 'center' },
                        { text: 'Rate', fontSize: 8, margin: [0, 3, 0, 3], alignment: 'center' },
                        { text: 'per', fontSize: 8, margin: [0, 3, 0, 3], alignment: 'center' },
                        { text: 'Amount', fontSize: 8, margin: [0, 3, 0, 3], alignment: 'center' },
                      ],
                      ...allItemRows,
                      ...taxRows,
                    ],
                  },
                  margin: [0, 0, 0, 0],
                  layout: {
                    paddingLeft: () => 0,
                    paddingRight: () => 0,
                    paddingTop: () => 0,
                    paddingBottom: () => 0,
                    hLineWidth: (i: number, node: any) => {
                      if (i === 0) return 0;
                      if (i <= items.length + 1) return 0.5;
                      if (i === node.table.body.length - 1) return 0.5;
                      return 0;
                    },
                    vLineWidth: (i: number, node: any) => {
                      if (i === 0 || i === node.table.widths.length) return 0;
                      return 0.5;
                    },
                  },
                },
              ],
              [
                // FOURTH ROW — amount in words (YOUR EXACT CODE)
                {
                  colSpan: 2,
                  columns: [
                    {
                      width: '*',
                      stack: [
                        { text: 'Amount Chargeable (in words)', fontSize: 8 },
                        { text: this.convertToWords(this.grandTotal), fontSize: 10, bold: true }
                      ],
                      margin: [3, 0, 3, 0],
                    },
                    {
                      width: 'auto',
                      text: 'E. & O.E',
                      fontSize: 8,
                      alignment: 'right',
                      margin: [3, 0, 3, 0],
                    },
                  ],
                  border: [true, true, true, true],
                },
                {},
              ],
              [
                // FIFTH ROW — HSN table (YOUR EXACT CODE, only data row values dynamic)
                {
                  colSpan: 2,
                  table: {
                    widths: [150, 80, 40, 60, 40, 60, '*'],
                    body: [
                      [
                        { text: 'HSN/SAC', alignment: 'center', fontSize: 8, rowSpan: 2 },
                        { text: 'Taxable\nValue', alignment: 'center', fontSize: 8, rowSpan: 2 },
                        { text: 'Central Tax', alignment: 'center', fontSize: 8, colSpan: 2 }, {},
                        { text: 'State Tax', alignment: 'center', fontSize: 8, colSpan: 2 }, {},
                        { text: 'Total\nTax Amount', alignment: 'center', fontSize: 8, rowSpan: 2 },
                      ],
                      [
                        {}, {},
                        { text: 'Rate', alignment: 'center', fontSize: 8 },
                        { text: 'Amount', alignment: 'center', fontSize: 8 },
                        { text: 'Rate', alignment: 'center', fontSize: 8 },
                        { text: 'Amount', alignment: 'center', fontSize: 8 },
                        {},
                      ],
                      // DATA ROW — dynamic
                      [
                        { text: items[0]?.hsn || '', alignment: 'left', fontSize: 9 },
                        { text: this.formatAmount(this.taxableValue), alignment: 'right', fontSize: 9 },
                        { text: `${f.cgstRate}%`, alignment: 'center', fontSize: 9 },
                        { text: this.formatAmount(this.cgstAmount), alignment: 'right', fontSize: 9 },
                        { text: `${f.sgstRate}%`, alignment: 'center', fontSize: 9 },
                        { text: this.formatAmount(this.sgstAmount), alignment: 'right', fontSize: 9 },
                        { text: this.formatAmount(this.cgstAmount + this.sgstAmount), alignment: 'right', fontSize: 9 },
                      ],
                      // TOTAL ROW — dynamic
                      [
                        { text: 'Total', alignment: 'right', fontSize: 9, bold: true },
                        { text: this.formatAmount(this.taxableValue), alignment: 'right', fontSize: 9, bold: true },
                        { text: '', fontSize: 9 },
                        { text: this.formatAmount(this.cgstAmount), alignment: 'right', fontSize: 9, bold: true },
                        { text: '', fontSize: 9 },
                        { text: this.formatAmount(this.sgstAmount), alignment: 'right', fontSize: 9, bold: true },
                        { text: this.formatAmount(this.cgstAmount + this.sgstAmount), alignment: 'right', fontSize: 9, bold: true },
                      ],
                    ],
                  },
                  layout: {
                    hLineWidth: (i: number, node: any) => {
                      if (i === 0 || i === node.table.body.length) return 0;
                      return 0.5;
                    },
                    vLineWidth: (i: number, node: any) => {
                      if (i === 0 || i === node.table.widths.length) return 0;
                      return 0.5;
                    },
                    paddingLeft: () => 3,
                    paddingRight: () => 3,
                    paddingTop: () => 2,
                    paddingBottom: () => 2,
                  },
                },
                {},
              ],
              // SIXTH ROW — tax amount in words
              [
                {
                  colSpan: 2,
                  stack: [{
                    text: [
                      { text: 'Tax Amount (in words) : ', fontSize: 9 },
                      { text: this.convertToWords(this.cgstAmount + this.sgstAmount), fontSize: 9, bold: true }
                    ],
                  }],
                  margin: [5, 3, 5, 3],
                },
                {},
              ],
              // SEVENTH ROW — PAN (YOUR EXACT CODE)
              [
                {
                  colSpan: 2,
                  text: [
                    { text: "Company's PAN  ", fontSize: 9 },
                    { text: '          :  ', fontSize: 9 },
                    { text: f.pan, fontSize: 9, bold: true },
                  ],
                  margin: [5, 3, 5, 3],
                },
                {},
              ],
              // EIGHTH ROW — Declaration (YOUR EXACT CODE)
              [
                {
                  stack: [
                    { text: 'Declaration', fontSize: 9, bold: true },
                    { text: 'We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.', fontSize: 8 },
                  ],
                  margin: [5, 3, 5, 3],
                },
                {
                  stack: [
                    { text: `for ${f.sellerName}`, fontSize: 9, bold: true, alignment: 'right' },
                    { text: '\n\n\n' },
                    { text: 'Authorised Signatory', fontSize: 8, alignment: 'right' },
                  ],
                  margin: [5, 3, 5, 3],
                },
              ],
              // NINTH ROW — Computer Generated (YOUR EXACT CODE)
              [
                {
                  colSpan: 2,
                  text: 'This is a Computer Generated Invoice',
                  fontSize: 8,
                  alignment: 'center',
                  margin: [0, 4, 0, 4],
                },
                {},
              ],
            ],
          },
          margin:[0,0,0,0],
          layout: {
            hLineWidth: function () { return 0.5; },
            vLineWidth: function () { return 0.5; },
            paddingLeft: () => 0,
            paddingRight: () => 0,
            paddingTop: () => 0,
            paddingBottom: () => 0,
          },
        },
      ],
    };

    pdfMake.createPdf(docDefinition).open();
  }
}
