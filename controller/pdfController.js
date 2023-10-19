const { pdfModal } = require("../modal/signupModal");

const pdfController = async (req, res) => {
    try {
      const data = await pdfModal(); // Assuming LoginUserData() is an async function that processes login data.
      return data;
    } catch (error) {
     return { status:400,message:error.message};
    }
  };
  
  module.exports = {pdfController}