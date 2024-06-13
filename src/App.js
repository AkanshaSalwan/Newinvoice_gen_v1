import React from 'react';
import './App.css';

function App() {
  return (
    <div className="invoice">
      <table className="header-table">
        <tbody>
          <tr>
            <td colSpan="2" className="header">
              <h2>Sai Cargo Freight Forwarders Pvt. Ltd.</h2>
              <p>REGD. OFF.: HNO. WZ200A TF KHNO. 67/1 12/1, GALI NO. 3</p>
              <p>SADH NAGAR, PALAM COLONY, NEAR RAM CHOWK</p>
              <p>GSTIN/UIN: 07AAUCS1139F1Z6</p>
              <p>State Name : Delhi, Code : 07</p>
              <p>CIN No.: U63020DL2014PTC263449</p>
              <p>E-Mail: saicargodelhi@gmail.com, accounts@scfpl.com</p>
            </td>
          </tr>
          <tr>
            <td className="left">
              <p>Invoice No.: 12627</p>
              <p>Invoice Date: 31-Aug-2020</p>
              <p>Consignor Invoice No.: HVJ/DN/20/21/002</p>
              <p>Consignor Invoice Date: 31-Aug-2020</p>
              <p>Despatch Details (if Applicable):</p>
              <p>E-Way Bill No.: </p>
              <p>Docket No.: 103184</p>
              <p>Place of Supply: HARYANA</p>
              <p>Date of Supply: 31-Aug-2020</p>
            </td>
            <td className="right">
              <p>Bill To: AGGRESSIVE DIGITAL SYSTEMS PVT. LTD.</p>
              <p>PLOT NO-596,597, SECTOR-8, IMT MANESAR, GURGAON</p>
              <p>State: Haryana State Code: 06</p>
              <p>PIN Code: 122050</p>
              <p>GST No.: 06AANCA7751J1ZA</p>
            </td>
          </tr>
        </tbody>
      </table>
      <table className="transport-details">
        <tbody>
          <tr>
            <td>Origin: HYDERABAD</td>
            <td>Destination: MANESAR</td>
            <td>Total Pkt: 131</td>
            <td>WT. (KG.): 2250</td>
          </tr>
        </tbody>
      </table>
      <table className="goods-table">
        <thead>
          <tr>
            <th>Description of Goods</th>
            <th>SAC/HSD</th>
            <th>WT.</th>
            <th>Rate</th>
            <th>Non Taxable</th>
            <th>Taxable</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>T - Freight</td>
            <td>996512</td>
            <td>2250</td>
            <td>19</td>
            <td></td>
            <td>42,750.00</td>
          </tr>
          <tr>
            <td>T - Docket Charges</td>
            <td>996512</td>
            <td></td>
            <td></td>
            <td></td>
            <td>200.00</td>
          </tr>
          <tr>
            <td>T - Pickup Charges</td>
            <td>996512</td>
            <td></td>
            <td></td>
            <td></td>
            <td>3,000.00</td>
          </tr>
          <tr>
            <td>T - Delivery Charges</td>
            <td>996512</td>
            <td></td>
            <td></td>
            <td></td>
            <td>4,500.00</td>
          </tr>
          <tr>
            <td>T - Station Clearance Charges</td>
            <td>996512</td>
            <td></td>
            <td></td>
            <td></td>
            <td>300.00</td>
          </tr>
        </tbody>
      </table>
      <table className="total-table">
        <tbody>
          <tr>
            <td>Tax Payable in words: Indian Rupees Two Thousand Five Hundred Thirty Seven and Fifty paise Only</td>
            <td>IGST: 2,537.50</td>
          </tr>
          <tr>
            <td>Net Amount after Tax: 53,287.50</td>
          </tr>
        </tbody>
      </table>
      <div className="footer">
        <p>Total Payable in words inclusive tax: Indian Rupees Fifty Three Thousand Two Hundred Eighty Seven and Fifty paise Only ( ₹ 53,287.50 )</p>
        <p>1. JURISDICTION: All disputes arising under this bill shall be subject to New Delhi jurisdiction.</p>
        <p>2. PAYMENT: Interest @ 22% per annum will be charged on total bill amount if payments is not made within 15 days of presentation of bill.</p>
        <p>3. Payments by Draft/Account payee cheque only.</p>
        <p>4. Any discrepancy in the bill must be reported back within 5 days. We will not accept any Debit against this bill later on.</p>
        <p>5. PAN NO.: AAUCS1139F; TAN NO.: DELS54477D; GST NO.: 07AAUCS1139F1Z6</p>
        <p>For Sai Cargo Freight Forwarders Pvt. Ltd</p>
        <p className="signature">Authorised Signatory</p>
      </div>
    </div>
  );
}

export default App;
