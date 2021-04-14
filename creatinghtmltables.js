window.onload = function()
{
    createTable();
}
function createTable()
{
    const elements = Elements.GetElements();
    const headings = Elements.GetHeadings();
    const properties = Elements.GetProperties();

    // start table and add caption
    let tablehtml = "<table><caption>States and Capitals</caption>";

    // insert row of headings
    tablehtml  += "<tr>";
    for(let heading of headings)
    {
        tablehtml  += `<th>${heading}</th>`;
    }
    tablehtml += "</tr>";

    // iterate data and add row of cells for each
    for(let element of elements)
    {
        tablehtml  += "<tr>";

        for(let property of properties)
        {
            if(element[property]=="Andhra Pradesh")
            {
                tablehtml  += `<td><a href="Andhra Pradesh.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Amravati")
            {
                tablehtml  += `<td><a href="Amravati.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Arunachal Pradesh")
            {
                tablehtml  += `<td><a href="Arunachal Pradesh.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Itanagar")
            {
                tablehtml  += `<td><a href="Itanagar.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Assam")
            {
                tablehtml  += `<td><a href="Assam.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Dispur")
            {
                tablehtml  += `<td><a href="Dispur.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Bihar")
            {
                tablehtml  += `<td><a href="Bihar.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Patna")
            {
                tablehtml  += `<td><a href="Patna.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Chhattisgarh")
            {
                tablehtml  += `<td><a href="Chhattisgarh.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Raipur")
            {
                tablehtml  += `<td><a href="Raipur.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Goa")
            {
                tablehtml  += `<td><a href="Goa.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Panaji")
            {
                tablehtml  += `<td><a href="Panaji.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Gujarat")
            {
                tablehtml  += `<td><a href="Gujarat.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Gandhinagar")
            {
                tablehtml  += `<td><a href="Gandhinagar.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Haryana")
            {
                tablehtml  += `<td><a href="Haryana.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Chandigarh")
            {
                tablehtml  += `<td><a href="Chandigarh.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Himachal Pradesh")
            {
                tablehtml  += `<td><a href="Himachal Pradesh.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Shimla")
            {
                tablehtml  += `<td><a href="Shimla.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Jammu and Kashmir")
            {
                tablehtml  += `<td><a href="Jammu and Kashmir.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Srinagar")
            {
                tablehtml  += `<td><a href="Srinagar.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Jharkhand")
            {
                tablehtml  += `<td><a href="Jharkhand.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Ranchi")
            {
                tablehtml  += `<td><a href="Ranchi.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Karnataka")
            {
                tablehtml  += `<td><a href="Karnataka.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Bengaluru")
            {
                tablehtml  += `<td><a href="Bengaluru.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Kerala")
            {
                tablehtml  += `<td><a href="Kerala.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Thiruvananthapuram")
            {
                tablehtml  += `<td><a href="Thiruvananthapuram.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Madhya Pradesh")
            {
                tablehtml  += `<td><a href="Madhya Pradesh.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Bhopal")
            {
                tablehtml  += `<td><a href="Bhopal.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Maharashtra")
            {
                tablehtml  += `<td><a href="Maharashtra.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Mumbai")
            {
                tablehtml  += `<td><a href="Mumbai.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Manipur")
            {
                tablehtml  += `<td><a href="Manipur.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Imphal")
            {
                tablehtml  += `<td><a href="Imphal.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Meghalaya")
            {
                tablehtml  += `<td><a href="Meghalaya.html">${element[property]}</a></td>`;
            }
            else if(element[property]=="Shillong")
            {
                tablehtml  += `<td><a href="Shillong.html">${element[property]}</a></td>`;
            }
        }

        tablehtml  += "</tr>";
    }

    // end of table
    tablehtml += "</table>";

    // add table to the empty div
    document.getElementById("tablediv").innerHTML = tablehtml;
}
