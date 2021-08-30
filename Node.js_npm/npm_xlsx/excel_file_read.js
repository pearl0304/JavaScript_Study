/*
Date : Thursday August 26 2021
name : Kylie
Content : Using the npm xlsx, Read the excel file
*/

const xlsx = require('xlsx');

// bring the excel file
const excelFile = xlsx.readFile("excel_write_file.xlsx");

// 1st sheet's name
const sheetName = excelFile.SheetNames[0];

// 1st sheet's title
const firstSheet = excelFile.Sheets[sheetName];

// read the 1st sheet
const firstSheetData = xlsx.utils.sheet_to_json(firstSheet,{defval : ""})

console.log(firstSheetData);