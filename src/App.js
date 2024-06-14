import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="invoice">
        <table className="header-table">
          <tbody>
            <tr>
              <td colSpan="3" className="header">
                <h2><strong>Tax Invoice</strong></h2>
                <p><b>(Section 31 of CGST Act,2017 read with Rule 46 of CGST Rule,2017 state GST Act & Rule)</b> Original For Recipient</p>
              </td>
            </tr>
            <tr>
              <td className="left">
                <h1><strong>Sai Cargo Freight Forwarders Pvt. Ltd.</strong></h1>
                <p>REGD. OFF.: HNO. WZ200A TF KHNO. 67/1 12/1, GALI NO. 3</p>
                <p>SADH NAGAR, PALAM COLONY, NEAR RAM CHOWK</p>
                <p>GSTIN/UIN: 07AAUCS1139F1Z6</p>
                <p>State Name : Delhi, Code : 07</p>
                <p>CIN No.: U63020DL2014PTC263449</p>
                <p>E-Mail: saicargodelhi@gmail.com, accounts@scfpl.com</p>
              </td>
              <td className="middle">
                <p>Invoice No.: <b>12627</b></p> <hr />
                <p>Consignor Invoice No.: <b>HVJ/DN/20/21/002</b></p> <hr />
                <p>Despatch Details (if Applicable):</p> 
                 <p>E-Way Bill No.: </p>
                <p>Docket No.: <b>103184</b></p> 
               
                
              </td>
              <td className="right">
               <p>Invoice Date: <b>31-Aug-2020</b></p><hr />
               <p>Consignor Invoice Date: <b>31-Aug-2020</b></p> <hr />
               <p>Mode  <br></br><b>TRAIN</b></p>
              
              </td>
            </tr>
            <tr>
              <td className="left">
              <p>Bill To: <br></br> <b>AGGRESSIVE DIGITAL SYSTEMS PVT. LTD.
                  PLOT NO-596,597, SECTOR-8, IMT MANESAR, GURGAON</b></p>
                <p><b>State:</b> Haryana  <b>State Code:</b> 06</p>
                <p><b>PIN Code:</b> 122050</p>
                <p><b>M.No. :</b></p>
                <p><b>GST No.:</b> 06AANCA7751J1ZA</p>
          
              </td>
              <td className="middle">
              <p>Place of Supply: <b>HARYANA</b></p> <hr />
              <p>Origin: <b>HYDERABAD</b></p> <hr />
              <p>Total pkt: <b>131</b></p>
              </td>
              <td className="right">
              <p>Date of Supply: <b>31-Aug-2020</b></p> <hr />
              <p>Destination: <b>MANESAR</b></p> <hr />
              <p>WT.(KG): <b>2250</b></p>
              </td>
            </tr>
          </tbody>
        </table>
        <table className="transport-details">
          <tbody>
            <tr>
              <td>
                Consignor Name: <br></br>
               <b> HOME VU DIGITAL CABLE AND BROADBAAND RRNATE UMITED GNR ARCADE 6-2-982,KHAIRATABAD MAIN ROAD,HYDERABAD</b>

              <br />
              <p><b>State : </b>Telangana</p>
              <p><b>GST NO : </b>36AAECH7383N1ZX</p> 
              </td>
              <td>
              Consignor Name: <br></br>
              <p><b>AGGRESSIVE DIGITAL SYSTEMS PVT.LTD. PLOT NO-596.597,SECTOR-3,IMT MANESAR,GURGAON</b></p>

              <br />
              <p><b>State : </b>Telangana</p>
              <p><b>GST NO : </b>36AAECH7383N1ZX</p> 
              </td>
              <td>
                Bank Details <hr />
                A/C Name : Sai Cargo Freight Forwader Pvt.ltd <br />
                Bank Name : ICICI Bank <br />
                A/C Number : 347405000083
                Address : Mahipaipur,New Delhi <br />
                IFSC CODE : ICICI0003474

                
              </td>
              
            </tr>
          </tbody>
        </table>
        <table className="goods-table">
          <thead>
            <tr>
              <td>Description of Goods</td>
              <td>SAC/HSD</td>
              <td>WT.</td>
              <td>Rate</td>
              <td>Non Taxable</td>
              <td>Taxable</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>T - Freight</th>
              <th>996512</th>
              <th>2250</th>
              <th>19</th>
              <th></th>
              <th>42,750.00</th>
            </tr>
            <tr>
              <th>T - Docket Charges</th>
              <th>996512</th>
              <th></th>
              <hd></hd>
              <th></th>
              <th>200.00</th>
            </tr>
            <tr>
              <th>T - Pickup Charges</th>
              <th>996512</th>
              <th></th>
              <th></th>
              <th></th>
              <th>3,000.00</th>
            </tr>
            <tr>
              <th>T - Delivery Charges</th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th>4,500.00</th>
            </tr>
            <tr>
              <th>T - Station Clearance Charges</th>
              <th>996512</th>
              <th></th>
              <th></th>
              <th></th>
              <th>300.00</th>
            </tr>
          </tbody>
        </table>
        <table className="total-table">
          <tbody>
            <tr>
              <td>Tax Payable in words: <b>Indian Rupees Two Thousand Five Hundred Thirty Seven and Fifty paise Only</b></td>
              <td>
                IGST:  <b> 2,537.50</b>
                <br></br>
                <p>Net Amount after Tax: <b>53,287.50</b></p>
              </td>
            </tr>
            <tr>
            </tr>
          </tbody>
        </table>
       
        <table className="goods-table">
          <thead>
            <tr>
              <th>HSN/SAC</th>
              <th>Taxable value</th>
              <th colspan="2">Integrated Tax</th>
              <th>Total Tax Amount</th>
             
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td><b>Rate</b></td>
              <td><b>Amount</b></td>
              <td></td>
             
            </tr>
            <tr>
              <td>996512</td>
              <td>50,750.50</td>
              <td>5%</td>
              <td>2,537.50</td>
              <td>2,537.50</td>
             
            </tr>
            <tr>
              <td><b>Total</b></td>
              <td><b>50,750.50</b></td>
              <td></td>
              <td><b>2,537.50</b></td>
              <td><b>2,537.50</b></td>
             
            </tr>
            
            
          </tbody>
        </table>
        
        <div className="footer">
          <div className="footer-info">
            <p>Total Payable in words inclusive tax: <b>Indian Rupees Fifty Three Thousand Two Hundred Eighty Seven and Fifty paise Only ( ₹ 53,287.50 )</b></p> <hr></hr>
            <p>1. JURISDICTION: All disputes arising under this bill shall be subject to New Delhi jurisdiction.</p>
            <p>2. PAYMENT: Interest @ 22% per annum will be charged on total bill amount if payments is not made within 15 days of presentation of bill.</p>
            <p>3. Payments by Draft/Account payee cheque only.</p>
            <p>4. Any discrepancy in the bill must be reported back within 5 days. We will not accept any Debit against this bill later on.</p>
            <p>5. PAN NO.: AAUCS1139F; TAN NO.: DELS54477D; GST NO.: 07AAUCS1139F1Z6</p>
          </div>
          <div className="footer-signature">
            <p>For Sai Cargo Freight Forwarders Pvt. Ltd</p>
            <p className="signature">Authorized Signatory</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
