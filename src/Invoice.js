// src/Invoice.js

import React from 'react';
import './Invoice.css';

const Invoice = () => {
  return (
    <div className="invoice-container">
      <h2>Tax Invoice</h2>
      <p>(Section 31 of CGST Act, 2017 read with Rule 46 of CGST Rule, 2017 state GST Act & Rule) Original For Recipient</p>

      <div className="invoice-header">
        <div className="company-details">
          <h3>Sai Cargo Freight Forwarders Pvt. Ltd</h3>
          <p>REGD. OFF: 8, HNO. WZ200A TF KHNO. 671/12/1, GALI NO. 3</p>
          <p>SADH NAGAR, PALAM COLONY, NEAR RAM CHOWK</p>
          <p>GSTIN/UIN: 07AAUCS1139F1Z6</p>
          <p>State Name: Delhi, Code: 07</p>
          <p>Email: saicargodelhi@gmail.com, accounts@scffpl.com</p>
        </div>
        <div className="invoice-details">
          <p>Invoice No.: 12627</p>
          <p>Invoice Date: 31-Aug-2020</p>
          <p>Consignor Invoice No.: HVJ/NDN/20-21/002</p>
          <p>Consignor Invoice Date: 31-Aug-2020</p>
          <p>Despatch Details: TRAIN</p>
          <p>Docket No.: 103184</p>
          <p>E-Way Bill No.: </p>
        </div>
      </div>

      <div className="bill-to">
        <h4>Bill To:</h4>
        <p>Aggressive Digital Systems Pvt. Ltd.</p>
        <p>PLOT NO-596,597,SECTOR-8,IMT MANESAR,GURGAON</p>
        <p>GST No.: 06AANCAT7751J1ZA</p>
        <p>State: Haryana, State Code: 06, PIN Code: 122050</p>
      </div>

      <div className="shipment-details">
        <h4>Shipment Details:</h4>
        <p>Place of Supply: HARYANA</p>
        <p>Origin: HYDERABAD</p>
        <p>Destination: MANESAR</p>
        <p>Total Pkt WT. (KG): 2250</p>
      </div>

      <div className="charges">
        <table>
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
              <td>2,250</td>
              <td>19</td>
              <td>0.00</td>
              <td>42,750.00</td>
            </tr>
            <tr>
              <td>T - Docket Charges</td>
              <td>996512</td>
              <td></td>
              <td></td>
              <td>0.00</td>
              <td>200.00</td>
            </tr>
            <tr>
              <td>T - Pickup Charges</td>
              <td>996512</td>
              <td></td>
              <td></td>
              <td>0.00</td>
              <td>3,000.00</td>
            </tr>
            <tr>
              <td>T - Delivery Charges</td>
              <td>996512</td>
              <td></td>
              <td></td>
              <td>0.00</td>
              <td>4,500.00</td>
            </tr>
            <tr>
              <td>T - Station Clearance Charges</td>
              <td>996512</td>
              <td></td>
              <td></td>
              <td>0.00</td>
              <td>300.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5">Total Value</td>
              <td>50,750.00</td>
            </tr>
            <tr>
              <td colSpan="5">IGST @ 5%</td>
              <td>2,537.50</td>
            </tr>
            <tr>
              <td colSpan="5">Net Amount after Tax</td>
              <td>53,287.50</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div className="total">
        <p>Tax Payable in words: Indian Rupees Two Thousand Five Hundred Thirty Seven and Fifty paise Only</p>
        <p>Net Amount after Tax: 53,287.50</p>
      </div>

      <div className="payment-details">
        <h4>Bank Details:</h4>
        <p>A/c Name: Sai Cargo Freight Forwarders Pvt. Ltd</p>
        <p>Bank Name: ICICI Bank</p>
        <p>A/c No.: 347405000083</p>
        <p>IFSC Code: ICIC0003474</p>
      </div>

      <div className="footer">
        <p>Total Payable in words inclusive tax: Indian Rupees Fifty Three Thousand Two Hundred Eighty Seven and Fifty paise Only</p>
        <p>Total: 53,287.50</p>
        <p>JURISDICTION: All disputes arising under this bill shall be subject to New Delhi jurisdiction.</p>
        <p>PAYMENT: Interest @ 22% per annum will be charged on total bill amount if payments is not made within 15 days of presentation of bill.</p>
        <p>Payments by Draft/Account payee cheque only.</p>
        <p>Any discrepancy in the bill must be reported back within 5 days.</p>
        <p>We will not accept any Debit against this bill later on.</p>
        <p>PAN NO.: AAUCS1139F, TAN NO.: DELS54477D, GSTIN NO.: 07AAUCS1139F1Z6</p>
      </div>
    </div>
  );
}

export default Invoice;
