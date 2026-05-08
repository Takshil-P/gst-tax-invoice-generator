# GST Tax Invoice Generator

Experimental prototype for fixed-layout GST invoice generation using Angular + pdfmake.

## Features
- GST-compliant invoice generation
- Dynamic line items
- CGST/SGST calculation
- HSN summary table
- Amount to words conversion
- Angular Material UI
- Print-ready A4 invoice layout

## Tech Stack
- Angular 15
- pdfmake
- Angular Material

## Known Limitations
This project explores the limitations of pdfmake for highly controlled fixed-layout invoice rendering.

Issues encountered:
- Row height drift
- Column overflow with large numbers
- Fixed 10-row layout constraint
- Nested table height instability

## Conclusion
pdfmake works well for general PDF generation but becomes difficult for pixel-perfect invoice rendering.

Potential future alternatives:
- Puppeteer (HTML/CSS rendering)
- iText 7

## Status
Experimental prototype / learning project.

## Screenshots

<img width="1905" height="869" alt="image-3" src="https://github.com/user-attachments/assets/f727e658-8997-4ad2-9d6e-78087140cf2e" />
<img width="1894" height="833" alt="image-2" src="https://github.com/user-attachments/assets/117d5faf-23c6-4288-a292-957b154ec020" />
<img width="1897" height="804" alt="image 1" src="https://github.com/user-attachments/assets/616074b5-ec9b-42f5-a4b9-044c90a91557" />
