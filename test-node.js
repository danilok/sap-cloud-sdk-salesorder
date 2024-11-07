/**
 * Teste com javascript puro (node v18 pelo menos)
 */
async function fetchData() {
  try {
    const response = await fetch(
      'https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder?%24inlinecount=allpages&%24top=50',
      {
        headers: {
          APIKey: 'dGjEb9legQ0MBA235zDncUbbOeX1HCKY',
          DataServiceVersion: '2.0',
          Accept: 'application/json',
        },
      },
    );
    const data = await response.json();
    console.log(JSON.stringify(data, null, 4));
  } catch (error) {
    console.error('Erro na requisição:', error);
  }
}

fetchData();

/**
 * Código abaixo retirado no try-out mas que funciona no browser
 */
// var data = null;

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = false;

// xhr.addEventListener("readystatechange", function () {
//   if (this.readyState === this.DONE) {
//     console.log(this.responseText);
//   }
// });

// //setting request method
// //API endpoint for API sandbox
// xhr.open("GET", "https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata/sap/API_SALES_ORDER_SRV/A_SalesOrder?%24inlinecount=allpages&%24top=50");

// //adding request headers
// //API Key for API Sandbox
// xhr.setRequestHeader("APIKey", "dGjEb9legQ0MBA235zDncUbbOeX1HCKY");
// xhr.setRequestHeader("DataServiceVersion", "2.0");
// xhr.setRequestHeader("Accept", "application/json");

// //sending request
// xhr.send(data);
