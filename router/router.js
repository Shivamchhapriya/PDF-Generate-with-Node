const express =  require('express');
const { postSignupcontroller, postAdderssController, postNumberController } = require('../controller/signupController');
const { pdfController } = require('../controller/pdfController');
const route = express.Router()
const PDFDocument = require('pdfkit');

route.post('/signup',postSignupcontroller)
route.post('/address',postAdderssController)
route.post('/number',postNumberController)


route.get('/pdf', async (req, res) => {
// call get data api........
  var data = await pdfController(); 
  const jsonData = data.data;

    const doc = new PDFDocument();
  
    // Set response headers for PDF download.
    res.setHeader('Content-Disposition', 'attachment; filename=data-table.pdf');
    res.setHeader('Content-Type', 'application/pdf');
  
    doc.pipe(res);
  
    // Define the headers for the table.
    const headers = ["S no.","firstName","lastName","addrss","number"];
  
    // Set initial position for the table.
    let x = 40;
    let y = 40;
  
    // Define column widths and row height.
    const colWidth = 114;
    const rowHeight = 20;
  
    doc.font('Helvetica-Bold');
    // doc.border("1px solid red")
    headers.forEach((header, index) => {
      doc.text(header, x + index * colWidth, y);
    });
  
    doc.font('Helvetica');
  
    // Iterate through the JSON data and add rows to the table.
    jsonData.forEach((item, rowIndex) => {
      y = 50 + (rowIndex + 1) * rowHeight;
  
      // Access specific properties of the object and convert them to strings.
      doc.text(rowIndex+1, x+10 , y);
      doc.text(item.lastName, x + colWidth, y);
      doc.text(item.lastName, x + 2 *colWidth, y);
      doc.text(item.address[0]?.address, x + 3 * colWidth, y);
      doc.text(item.number[0]?.number, x +4 * colWidth, y);
    });
    doc.end();
    // res.status(200).send('PDF generated successfully');ß
  });

module.exports=route
