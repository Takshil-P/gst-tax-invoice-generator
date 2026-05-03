import { Component } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

(pdfMake as any).vfs = pdfFonts.vfs;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pdf-make-playground';
  testDeclaration() {
    const MAX_ROWS = 10;
    const ITEM_ROW_HEIGHT = 18; // tune this — matches your row with desc+sub
    const HEADER_ROW_HEIGHT = 16;
    const TAX_ROW_HEIGHT = 14;

    const allItemRows = [];

    const items = [
      {
        desc: 'Repairing of Chain Hoist',
        sub: 'Replacement of Lock Pin 8 No.',
        hsn: '9987',
        qty: 1,
        rate: 7966,
        per: ' ',
        amount: 7966,
      },
      {
        desc: 'Repairing of Chain Hoist',
        sub: 'Replacement of Lock Pin 8 No.',
        hsn: '9987',
        qty: 1,
        rate: 7966,
        per: ' ',
        amount: 7966,
      },
      {
        desc: 'Repairing of Chain Hoist',
        sub: 'Replacement of Lock Pin 8 No.',
        hsn: '9987',
        qty: 1,
        rate: 7966,
        per: ' ',
        amount: 7966,
      },
      {
        desc: 'Repairing of Chain Hoist',
        sub: 'Replacement of Lock Pin 8 No.',
        hsn: '9987',
        qty: 1,
        rate: 7966,
        per: ' ',
        amount: 7966,
      },
      {
        desc: 'Repairing of Chain Hoist',
        sub: 'Replacement of Lock Pin 8 No.',
        hsn: '9987',
        qty: 1,
        rate: 7966,
        per: ' ',
        amount: 7966,
      },
      {
        desc: 'Repairing of Chain Hoist',
        sub: 'Replacement of Lock Pin 8 No.',
        hsn: '9987',
        qty: 1,
        rate: 7966,
        per: ' ',
        amount: 7966,
      },
      {
        desc: 'Repairing of Chain Hoist',
        sub: 'Replacement of Lock Pin 8 No.',
        hsn: '9987',
        qty: 1,
        rate: 7966,
        per: ' ',
        amount: 7966,
      },
      {
        desc: 'Repairing of Chain Hoist',
        sub: 'Replacement of Lock Pin 8 No.',
        hsn: '9987',
        qty: 1,
        rate: 7966,
        per: ' ',
        amount: 7966,
      },
      {
        desc: 'Repairing of Chain Hoist',
        sub: 'Replacement of Lock Pin 8 No.',
        hsn: '9987',
        qty: 1,
        rate: 7966,
        per: ' ',
        amount: 7966,
      },
      {
        desc: 'Repairing of Chain Hoist',
        sub: 'Replacement of Lock Pin 8 No.',
        hsn: '9987',
        qty: 1,
        rate: 7966,
        per: ' ',
        amount: 7966,
      },
      {
        desc: 'Repairing of Chain Hoist',
        sub: 'Replacement of Lock Pin 8 No.',
        hsn: '9987',
        qty: 1,
        rate: 7966,
        per: ' ',
        amount: 7966,
      },
    ];

    for (let i = 0; i < MAX_ROWS; i++) {
      const item = items[i] || null;

      allItemRows.push([
        {
          // Always use stack — real or empty
          stack: [{ text: item ? String(i + 1) : '\u200B', fontSize: 8 }],
          alignment: 'center',
        },
        {
          // Always use stack with two lines — real or empty
          stack: [
            { text: item ? item.desc : '\u200B', fontSize: 10 },
            { text: item?.sub ? item.sub : '\u200B', fontSize: 6 },
          ],
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
        },
        {
          stack: [
            { text: item ? item.per || '\u200B' : '\u200B', fontSize: 10 },
          ],
          alignment: 'center',
        },
        {
          stack: [
            { text: item ? String(item.amount) : '\u200B', fontSize: 10 },
          ],
          alignment: 'right',
          bold: !!item,
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

    const itemRows = items.map((item, index) => [
      {
        text: index + 1,
        alignment: 'center',
        margin: [0, 3, 0, 3],
        fontSize: 10,
      },
      {
        stack: [
          { text: item.desc, fontSize: 10 },
          ...(item.sub ? [{ text: item.sub, fontSize: 6 }] : []),
        ],
        margin: [0, 3, 0, 3],
      },
      { text: item.hsn, alignment: 'center' },
      { text: item.qty, alignment: 'center' },
      { text: item.rate, alignment: 'right' },
      { text: item.per, alignment: 'center' },
      { text: item.amount.toString(), alignment: 'right', bold: true },
    ]);

    while (itemRows.length < MAX_ROWS) {
      itemRows.push([
        { text: '\u200B', alignment: 'center', bold: true },
        { text: '\u200B', alignment: 'left' },
        { text: '\u200B', alignment: 'center' },
        { text: '\u200B', alignment: 'center' },
        { text: '\u200B', alignment: 'right' },
        { text: '\u200B', alignment: 'center' },
        { text: '\u200B', alignment: 'right' },
      ]);
    }

    const taxRows = [
      [
        {},
        {
          text: 'CGST',
          alignment: 'right',
          italics: true,
          fontSize: 10,
          margin: [0, 3, 0, 3],
        },
        {},
        {},
        {},
        {},
        {
          text: '716.94',
          alignment: 'right',
          fontSize: 10,
          margin: [0, 3, 0, 3],
          border: [false, false, false, false],
        },
      ],
      [
        {},
        {
          text: 'SGST',
          alignment: 'right',
          italics: true,
          fontSize: 10,
          margin: [0, 3, 0, 3],
        },
        {},
        {},
        {},
        {},
        {
          text: '716.94',
          alignment: 'right',
          fontSize: 10,
          margin: [0, 3, 0, 3],
        },
      ],
      [
        {},
        {
          text: 'Round Off',
          alignment: 'right',
          italics: true,
          fontSize: 10,
          margin: [0, 3, 0, 3],
          border: [false, false, false, false],
        },
        {},
        {},
        {},
        {},
        {
          text: '0.12',
          alignment: 'right',
          fontSize: 10,
          margin: [0, 3, 0, 3],
        },
      ],
      [
        {},
        {
          text: 'Total',
          alignment: 'right',
          italics: true,
          fontSize: 11,
          margin: [0, 3, 0, 3],
        },
        {},
        {},
        {},
        {},
        {
          text: '12000',
          alignment: 'right',
          fontSize: 13,
          bold: true,
          margin: [0, 3, 0, 3],
        },
      ],
    ];

    const docDefinition = {
      pageSize: 'A4',
      pageMargins: [40, 40, 40, 40],

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
            heights: ['auto', 99, 290], // 👈 3 rows = 3 heights
            body: [
              [
                //FIRST ROW
                {
                  //column 1 start
                  stack: [
                    { text: 'Aashapuri Industries', fontSize: 12, bold: true },
                    { text: 'Plot No.1404 Phase IV', fontSize: 10 },
                    { text: 'Vithal Udyognagar 388121', fontSize: 10 },
                    { text: 'Vendore Code : - 145756', fontSize: 10 },
                    { text: 'GSTIN/UIN: 24ALBPP3245Q1ZS', fontSize: 10 },
                    { text: 'State Name : Gujarat, Code : 24', fontSize: 10 },
                    { text: 'E-Mail : ajay.panchal75@gmail.com', fontSize: 10 },
                  ],
                  margin: [5, 3, 5, 3], // 👈 add this
                },
                {
                  //column 2 start
                  rowSpan: 2, // 👈 main magic
                  table: {
                    widths: ['*', '*'],
                    body: [
                      [
                        {
                          stack: [
                            { text: 'Invoice No.', fontSize: 9 },
                            {
                              text: '06',
                              fontSize: 10,
                              bold: true,
                              margin: [0, 0, 0, -4],
                            },
                          ],
                          lineHeight: 1.3,
                          margin: [3, 0, 3, 0],
                        },
                        {
                          stack: [
                            { text: 'Dated', fontSize: 9 },
                            {
                              text: '12-Dec-2022',
                              fontSize: 10,
                              bold: true,
                              margin: [0, 0, 0, -4],
                            },
                          ],
                          lineHeight: 1.3,
                          margin: [3, 0, 3, 0],
                        },
                      ],
                      [
                        {
                          stack: [
                            { text: 'Delivery Note', fontSize: 9 },
                            {
                              text: ' ',
                              fontSize: 10,
                              bold: true,
                              margin: [0, 0, 0, -4],
                            },
                          ],
                          lineHeight: 1.3,
                          margin: [3, 0, 3, 0],
                        },
                        {
                          stack: [
                            { text: 'Mode/Terms of Payment', fontSize: 9 },
                            {
                              text: ' ',
                              fontSize: 10,
                              bold: true,
                              margin: [0, 0, 0, -4],
                            },
                          ],
                          lineHeight: 1.3,
                          margin: [3, 0, 3, 0],
                        },
                      ],
                      [
                        {
                          stack: [
                            { text: "Supplier's Ref.", fontSize: 9 },
                            {
                              text: ' ',
                              fontSize: 10,
                              bold: true,
                              margin: [0, 0, 0, -4],
                            },
                          ],
                          lineHeight: 1.3,
                          margin: [3, 0, 3, 0],
                        },
                        {
                          stack: [
                            { text: 'Other Reference(s)', fontSize: 9 },
                            {
                              text: ' ',
                              fontSize: 10,
                              bold: true,
                              margin: [0, 0, 0, -4],
                            },
                          ],
                          lineHeight: 1.3,
                          margin: [3, 0, 3, 0],
                        },
                      ],
                      [
                        {
                          stack: [
                            { text: "Buyer's Order No.", fontSize: 9 },
                            {
                              text: ' ',
                              fontSize: 10,
                              bold: true,
                              margin: [0, 0, 0, -4],
                            },
                          ],
                          lineHeight: 1.3,
                          margin: [3, 0, 3, 0],
                        },
                        {
                          stack: [
                            { text: 'Dated', fontSize: 9 },
                            {
                              text: ' ',
                              fontSize: 10,
                              bold: true,
                              margin: [0, 0, 0, -4],
                            },
                          ],
                          lineHeight: 1.3,
                          margin: [3, 0, 3, 0],
                        },
                      ],
                      [
                        {
                          stack: [
                            { text: 'Despatch Document No.', fontSize: 9 },
                            {
                              text: ' ',
                              fontSize: 10,
                              bold: true,
                              margin: [0, 0, 0, -4],
                            },
                          ],
                          lineHeight: 1.3,
                          margin: [3, 0, 3, 0],
                        },
                        {
                          stack: [
                            { text: 'Delivery Note Date', fontSize: 9 },
                            {
                              text: ' ',
                              fontSize: 10,
                              bold: true,
                              margin: [0, 0, 0, -4],
                            },
                          ],
                          lineHeight: 1.3,
                          margin: [3, 0, 3, 0],
                        },
                      ],
                      [
                        {
                          stack: [
                            { text: 'Despatched through', fontSize: 9 },
                            {
                              text: ' ',
                              fontSize: 10,
                              bold: true,
                              margin: [0, 0, 0, -4],
                            },
                          ],
                          lineHeight: 1.3,
                          margin: [3, 0, 3, 0],
                        },
                        {
                          stack: [
                            { text: 'Destination', fontSize: 9 },
                            {
                              text: 'ROM#8',
                              fontSize: 10,
                              bold: true,
                              margin: [0, 0, 0, -4],
                            },
                          ],
                          lineHeight: 1.3,
                          margin: [3, 0, 3, 0],
                        },
                      ],
                      [
                        {
                          colSpan: 2,
                          stack: [
                            { text: 'Terms of Delivery.' },
                            // { text: dynamicValue || '' }
                            { text: 'hello' },
                            { text: 'hello' },
                          ],
                          margin: [3, 3, 3, 3],
                        },
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
                    // hLineWidth: (i: number, node: any) => (i === 0 ? 0 : 0.5),
                    // hLineWidth: (i: number, node: any) => {
                    //   if (i === node.table.body.length) return 0; // ❌ hide bottom border
                    //   return 0.5;
                    // },
                    // vLineWidth: (i: number, node: any) => (i === 0 ? 0 : 0.5),
                    hLineWidth: (i: number, node: any) => {
                      // ❌ remove top & bottom outer lines
                      if (i === 0 || i === node.table.body.length) return 0;
                      return 0.5;
                    },

                    vLineWidth: (i: number, node: any) => {
                      // ❌ remove left & right outer lines
                      if (i === 0 || i === node.table.widths.length) return 0;
                      return 0.5;
                    },
                  },
                },
              ],
              [
                //SECOND ROW
                {
                  stack: [
                    { text: ' Buyer', fontSize: 9, bold: false },
                    { text: 'O N G C ', fontSize: 12, bold: true },
                    { text: 'ROM#8', fontSize: 10 },
                    { text: 'Cambay Assest Po. Kansari', fontSize: 10 },
                    { text: 'Cambay', fontSize: 10 },
                    { text: 'mail : kumawat_tejpal@ongc.co.in', fontSize: 10 },
                    { text: 'GSTIN/UIN: 24AAACO1598A4ZQ', fontSize: 10 },
                    { text: 'State Name : Gujarat, Code : 24', fontSize: 10 },
                  ],
                  margin: [5, 3, 5, 3], // 👈 add this
                },
                {},
              ],
              [
                //third row
                {
                  colSpan: 2,
                  table: {
                    widths: [17, 230, 45, 45, 45, 20, '*'],
                    // heights: [
                    //   HEADER_ROW_HEIGHT, // header row
                    //   ...Array(MAX_ROWS).fill(ITEM_ROW_HEIGHT), // always 10 item rows
                    //   TAX_ROW_HEIGHT, // CGST
                    //   TAX_ROW_HEIGHT, // SGST
                    //   TAX_ROW_HEIGHT, // Round Off
                    //   TAX_ROW_HEIGHT, // Total
                    // ],
                    heights: tableHeights,
                    body: [
                      [
                        //description vala table uska row 1
                        {
                          stack: [
                            { text: 'SI', fontSize: 10, alignment: 'center' },
                            {
                              text: 'No',
                              fontSize: 8,
                              margin: [0, 0, 0, 0],
                              alignment: 'center',
                            },
                          ],
                          margin: [3, 3, 3, 3],
                          alignment: 'center', // 👈 IMPORTANT (parent pe bhi)
                        },
                        {
                          text: 'Description of Services',
                          fontSize: 8,
                          margin: [0, 3, 0, 3],
                          alignment: 'center',
                        },
                        {
                          text: 'HSN/SAC',
                          fontSize: 8,
                          margin: [0, 3, 0, 3],
                          alignment: 'center',
                        },
                        {
                          text: 'Quantity',
                          fontSize: 8,
                          margin: [0, 3, 0, 3],
                          alignment: 'center',
                        },
                        {
                          text: 'Rate',
                          fontSize: 8,
                          margin: [0, 3, 0, 3],
                          alignment: 'center',
                        },
                        {
                          text: 'per',
                          fontSize: 8,
                          margin: [0, 3, 0, 3],
                          alignment: 'center',
                        },
                        {
                          text: 'Amount',
                          fontSize: 8,
                          margin: [0, 3, 0, 3],
                          alignment: 'center',
                        },
                      ],
                      // [
                      //   //row 2
                      //   {
                      //     text: '1',
                      //     alignment: 'center',
                      //     margin: [0, 3, 0, 3],
                      //   },
                      //   {
                      //     stack: [
                      //       { text: 'Repairing of Chain Hoist', fontSize: 10 },
                      //       {
                      //         text: 'Replacement of Lock Pin 8 No.',
                      //         fontSize: 8,
                      //       },
                      //     ],
                      //     margin: [3, 3, 3, 3],
                      //   },
                      //   {
                      //     text: '9987',
                      //     alignment: 'center',
                      //   },
                      //   {
                      //     text: '1',
                      //     alignment: 'center',
                      //   },
                      //   {
                      //     text: '7966',
                      //     alignment: 'right',
                      //   },
                      //   {
                      //     text: ' ',
                      //     alignment: 'center',
                      //   },
                      //   {
                      //     text: '7966',
                      //     alignment: 'right',
                      //     bold: true,
                      //   },
                      // ],
                      // [
                      //   //row 3
                      //   {
                      //     text: '1',
                      //     alignment: 'center',
                      //     margin: [0, 3, 0, 3],
                      //   },
                      //   {
                      //     stack: [
                      //       { text: 'Repairing of Chain Hoist', fontSize: 10 },
                      //       {
                      //         text: 'Replacement of Lock Pin 8 No.',
                      //         fontSize: 8,
                      //       },
                      //     ],
                      //     margin: [3, 3, 3, 3],
                      //   },
                      //   {
                      //     text: '9987',
                      //     alignment: 'center',
                      //   },
                      //   {
                      //     text: '1',
                      //     alignment: 'center',
                      //   },
                      //   {
                      //     text: '7966',
                      //     alignment: 'right',
                      //   },
                      //   {
                      //     text: ' ',
                      //     alignment: 'center',
                      //   },
                      //   {
                      //     text: '7966',
                      //     alignment: 'right',
                      //     bold: true,
                      //   },
                      // ],
                      // [
                      //   //row 4
                      //   {
                      //     text: '1',
                      //     alignment: 'center',
                      //     margin: [0, 3, 0, 3],
                      //   },
                      //   {
                      //     stack: [
                      //       { text: 'Repairing of Chain Hoist', fontSize: 10 },
                      //       {
                      //         text: 'Replacement of Lock Pin 8 No.',
                      //         fontSize: 8,
                      //       },
                      //     ],
                      //     margin: [3, 3, 3, 3],
                      //   },
                      //   {
                      //     text: '9987',
                      //     alignment: 'center',
                      //   },
                      //   {
                      //     text: '1',
                      //     alignment: 'center',
                      //   },
                      //   {
                      //     text: '7966',
                      //     alignment: 'right',
                      //   },
                      //   {
                      //     text: ' ',
                      //     alignment: 'center',
                      //   },
                      //   {
                      //     text: '7966',
                      //     alignment: 'right',
                      //     bold: true,
                      //   },
                      // ],
                      // [
                      //   //row 5
                      //   {
                      //     text: '1',
                      //     alignment: 'center',
                      //     margin: [0, 3, 0, 3],
                      //   },
                      //   {
                      //     stack: [
                      //       { text: 'Repairing of Chain Hoist', fontSize: 10 },
                      //       {
                      //         text: 'Replacement of Lock Pin 8 No.',
                      //         fontSize: 8,
                      //       },
                      //     ],
                      //     margin: [3, 3, 3, 3],
                      //   },
                      //   {
                      //     text: '9987',
                      //     alignment: 'center',
                      //   },
                      //   {
                      //     text: '1',
                      //     alignment: 'center',
                      //   },
                      //   {
                      //     text: '7966',
                      //     alignment: 'right',
                      //   },
                      //   {
                      //     text: ' ',
                      //     alignment: 'center',
                      //   },
                      //   {
                      //     text: '7966',
                      //     alignment: 'right',
                      //     bold: true,
                      //   },
                      // ],
                      // [
                      //   //row 6
                      //   {
                      //     text: '1',
                      //     alignment: 'center',
                      //     margin: [0, 3, 0, 3],
                      //   },
                      //   {
                      //     stack: [
                      //       { text: 'Repairing of Chain Hoist', fontSize: 10 },
                      //       {
                      //         text: 'Replacement of Lock Pin 8 No.',
                      //         fontSize: 8,
                      //       },
                      //     ],
                      //     margin: [3, 3, 3, 3],
                      //   },
                      //   {
                      //     text: '9987',
                      //     alignment: 'center',
                      //   },
                      //   {
                      //     text: '1',
                      //     alignment: 'center',
                      //   },
                      //   {
                      //     text: '7966',
                      //     alignment: 'right',
                      //   },
                      //   {
                      //     text: ' ',
                      //     alignment: 'center',
                      //   },
                      //   {
                      //     text: '7966',
                      //     alignment: 'right',
                      //     bold: true,
                      //   },
                      // ],
                      // ...itemRows, // dynamic
                      ...allItemRows,
                      ...taxRows, // CGST etc
                    ],
                  },
                  margin: [0, 0, 0, 0],
                  layout: {
                    paddingLeft: () => 0,
                    paddingRight: () => 0,
                    paddingTop: () => 0,
                    paddingBottom: () => 0,
                    // hLineWidth: (i: number, node: any) => (i === 0 ? 0 : 0.5),
                    // hLineWidth: (i: number, node: any) => {
                    //   if (i === node.table.body.length) return 0; // ❌ hide bottom border
                    //   return 0.5;
                    // },
                    // vLineWidth: (i: number, node: any) => (i === 0 ? 0 : 0.5),

                    // hLineWidth: (i: number, node: any) => {
                    //   // ❌ remove top & bottom outer lines
                    //   if (i === 0) return 0;
                    //   return 0.5;
                    // },

                    hLineWidth: (i: number, node: any) => {
                      if (i === 0) return 0; // no top border
                      if (i <= items.length + 1) return 0.5; // header + all 10 rows
                      if (i === node.table.body.length - 1) return 0.5;
                      // if (i === node.table.body.length) return 0.5; // bottom border of Total row
                      return 0; // no lines between tax rows
                    },

                    // hLineWidth: (i: number, node: any) => {
                    //   // i = line index (row boundary)

                    //   // 1. top border remove
                    //   if (i === 0) return 0;

                    //   // 2. header + item rows tak lines dikhani hain
                    //   if (i <= items.length + 1) return 0.5;

                    //   // 3. baaki sab (empty + tax rows) → no lines
                    //   return 0;
                    // },
                    // hLineWidth: (i: number, node: any) => {
                    //   const totalRows = node.table.body.length;

                    //   // top border remove
                    //   if (i === 0) return 0;

                    //   // header + item rows
                    //   if (i <= items.length + 1) return 0.5;

                    //   // ❗ ONLY last line draw karo
                    //   if (i === totalRows) return 0.5;

                    //   // baaki sab remove
                    //   return 0;
                    // },

                    vLineWidth: (i: number, node: any) => {
                      // ❌ remove left & right outer lines
                      if (i === 0 || i === node.table.widths.length) return 0;
                      return 0.5;
                    },
                  },
                },
              ],
              [
                //FOURTH ROW
                {
                  colSpan: 2,
                  columns: [
                    {
                      width: '*',
                      stack: [
                        { text: 'Amount Chargeable (in words)', fontSize: 8 },
                        {
                          text: 'INR Nine Thousand Four Hundred Only',
                          fontSize: 10,
                          bold: true,
                        },
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
                  border: [true, true, true, true], // optional
                },
                {},
              ],
              [
                //fifth row

                {
                  colSpan: 2,
                  table: {
                    widths: [150, 80, 40, 60, 40, 60, '*'],
                    body: [
                      // ── HEADER ROW 1 ──
                      [
                        {
                          text: 'HSN/SAC',
                          alignment: 'center',
                          fontSize: 8,
                          rowSpan: 2,
                        },
                        {
                          text: 'Taxable\nValue',
                          alignment: 'center',
                          fontSize: 8,
                          rowSpan: 2,
                        },
                        {
                          text: 'Central Tax',
                          alignment: 'center',
                          fontSize: 8,
                          colSpan: 2,
                        },
                        {}, // colSpan placeholder
                        {
                          text: 'State Tax',
                          alignment: 'center',
                          fontSize: 8,
                          colSpan: 2,
                        },
                        {}, // colSpan placeholder
                        {
                          text: 'Total\nTax Amount',
                          alignment: 'center',
                          fontSize: 8,
                          rowSpan: 2,
                        },
                      ],
                      // ── HEADER ROW 2 (Rate/Amount sub-headers) ──
                      [
                        {}, // rowSpan placeholder for HSN/SAC
                        {}, // rowSpan placeholder for Taxable Value
                        { text: 'Rate', alignment: 'center', fontSize: 8 },
                        { text: 'Amount', alignment: 'center', fontSize: 8 },
                        { text: 'Rate', alignment: 'center', fontSize: 8 },
                        { text: 'Amount', alignment: 'center', fontSize: 8 },
                        {}, // rowSpan placeholder for Total Tax Amount
                      ],
                      // ── DATA ROW ──
                      [
                        { text: '9987', alignment: 'left', fontSize: 9 },
                        { text: '7,966.00', alignment: 'right', fontSize: 9 },
                        { text: '9%', alignment: 'center', fontSize: 9 },
                        { text: '716.94', alignment: 'right', fontSize: 9 },
                        { text: '9%', alignment: 'center', fontSize: 9 },
                        { text: '716.94', alignment: 'right', fontSize: 9 },
                        { text: '1,433.88', alignment: 'right', fontSize: 9 },
                      ],
                      // ── TOTAL ROW ──
                      [
                        {
                          text: 'Total',
                          alignment: 'right',
                          fontSize: 9,
                          bold: true,
                        },
                        {
                          text: '7,966.00',
                          alignment: 'right',
                          fontSize: 9,
                          bold: true,
                        },
                        { text: '', fontSize: 9 },
                        {
                          text: '716.94',
                          alignment: 'right',
                          fontSize: 9,
                          bold: true,
                        },
                        { text: '', fontSize: 9 },
                        {
                          text: '716.94',
                          alignment: 'right',
                          fontSize: 9,
                          bold: true,
                        },
                        {
                          text: '1,433.88',
                          alignment: 'right',
                          fontSize: 9,
                          bold: true,
                        },
                      ],
                    ],
                  },
                  layout: {
                    hLineWidth: (i: number, node: any) => {
                      if (i === 0 || i === node.table.body.length) return 0; // remove top + bottom outer borders
                      return 0.5;
                    },
                    vLineWidth: (i: number, node: any) => {
                      if (i === 0 || i === node.table.widths.length) return 0; // remove left + right outer borders
                      return 0.5;
                    },
                    paddingLeft: () => 3,
                    paddingRight: () => 3,
                    paddingTop: () => 2,
                    paddingBottom: () => 2,
                  },
                },
                {}, // colSpan placeholder for outer table
              ],
              // SIXTH ROW — Tax Amount in words
              [
                {
                  colSpan: 2,
                  stack: [
                    {
                      text: [
                        { text: 'Tax Amount (in words) : ', fontSize: 9 },
                        {
                          text: 'INR One Thousand Four Hundred Thirty Three and Eighty Eight paise Only',
                          fontSize: 9,
                          bold: true,
                        },
                      ],
                    },
                  ],
                  margin: [5, 3, 5, 3],
                },
                {},
              ],

              // SEVENTH ROW — Company PAN
              [
                {
                  colSpan: 2,
                  text: [
                    { text: "Company's PAN  ", fontSize: 9 },
                    { text: '          :  ', fontSize: 9 },
                    { text: 'ALBPP3245Q', fontSize: 9, bold: true },
                  ],
                  margin: [5, 3, 5, 3],
                },
                {},
              ],

              // EIGHTH ROW — Declaration + Signatory
              [
                {
                  stack: [
                    { text: 'Declaration', fontSize: 9, bold: true },
                    {
                      text: 'We declare that this invoice shows the actual price of the goods described and that all particulars are true and correct.',
                      fontSize: 8,
                    },
                  ],
                  margin: [5, 3, 5, 3],
                },
                {
                  stack: [
                    {
                      text: 'for Aashapuri Industries',
                      fontSize: 9,
                      bold: true,
                      alignment: 'right',
                    },
                    { text: '\n\n\n' },
                    {
                      text: 'Authorised Signatory',
                      fontSize: 8,
                      alignment: 'right',
                    },
                  ],
                  margin: [5, 3, 5, 3],
                },
              ],

              // NINTH ROW — Computer Generated
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
          layout: {
            hLineWidth: function () {
              return 0.5;
            }, // 👈 horizontal lines thin
            vLineWidth: function () {
              return 0.5;
            }, // 👈 vertical lines thin

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
