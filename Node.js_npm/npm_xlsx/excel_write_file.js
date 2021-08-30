/*
Date : Thursday August 26 2021
name: Kylie
Content : Using the npm xlsx, Write the excel file
*/

// xlsx 모듈 추출
const xlsx = require('xlsx');

// 가상의 엑셀 파일 생성
const workBook = xlsx.utils.book_new();

// aoa_to_sheet 방식으로 데이터 생성
const workSheet = xlsx.utils.aoa_to_sheet([

    ["MEMBER","NAME","POSITION","BIRTHDAY"],
    ["RM","KIM NAM JUN","RAP","940912"],
    ["JIN","KIM SEOK JIN","RAP","921204"],
    ["SUGA","MIN YOON GI","RAP","930309"],
    ["J-HOPE","JUNG HO SEOK","RAP","940218"],
    ["JIMIN","PARK JI MIN","RAP","951013"],
    ["V","KIM TAE HYOUNG","RAP","951230"],
    ["JK","JEON JUNG KOOK","RAP","970901"]

]);
const workSheetName = 'BTS'

// 첫번째 시트에 작성한 데이터 넣기
xlsx.utils.book_append_sheet(workBook,workSheet,workSheetName);

// 엑셀 파일을 생성하고 저장하기
xlsx.writeFile(workBook,"excel_write_file.xlsx")