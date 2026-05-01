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
            heights: ['auto', 160], // 👈 2 rows = 2 heights
            body: [
              [
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
