const { text } = require('body-parser');
const fs = require('fs');
const { jsPDF } = require("jspdf");

module.exports = {
    makeHTMLForm: function (order) {

      var doc = new jsPDF();
      JSON.stringify(order);

      var i = 0;
      doc.text("Dining Hall Order", 40, 10);
      for(var key in order){
        var value = order[key];
        doc.text(key + ":\t" + value, 20, 20 + (i * 10));
        i++;
      }
      doc.save('./orders/test'+order.ID+'.pdf');
    }
  }