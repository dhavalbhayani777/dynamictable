import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { TableHeaderPopupComponent } from "./table-header-popup/table-header-popup.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'DynamicTable';

  TableHeader = {
     "key":[
        {
           "name":"action",
           "type":"string",
           "required":"true",
           "length":10
        },
        {
           "name":"id",
           "type":"string",
           "required":"true",
           "length":10
        },
        {
           "name":"type",
           "length":10,
           "values":[
              "test1",
              "test2"
           ]
        },
        {
           "name":"currency",
           "length":10,
           "values":[
              "cad",
              "inr",
              "usd"
           ]
        },
        {
           "name":"code",
           "length":10,
           "values":[
              "aa",
              "bc",
              "cd"
           ],
           "type":"string",
           "required":"true"
        }
     ]
  };
    type = ["test1", "test2"];
    currency = ["cad", "inr", "usd"];
    code = ["aa", "bc", "cd"];
    data = [
        {
            "id": "1000",
            "code": "f230fh0g3",
            "name": "Bamboo Watch",
            "description": "Product Description",
            "image": "bamboo-watch.jpg",
            "currency": 65,
            "type": "Accessories",
            "quantity": 24,
            "inventoryStatus": "INSTOCK",
            "rating": 5
        },
        {}
    ];

    selectedCars1 = [];
    displayedColumns = [];


  constructor(public dialog: MatDialog) {}

  ngOnInit() {
  }

  openPopup() {
    const dialogRef = this.dialog.open(TableHeaderPopupComponent, {
      width: '250px',
      data: {name: "bakul", animal: "Tiger"}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onPaste(event) {
    let clipboardData = event.clipboardData;
    let pastedText = clipboardData.getData("text");
    let row_data = pastedText.split("\n");
    this.displayedColumns = row_data[0].split("\t");
    this.displayedColumns = ["action", "id", "type", "currency", "code" ];
    row_data.forEach(row_data => {
      let row = {};
      this.displayedColumns.forEach((a, index) => {
        if (row_data.split("\t")[index] != 'add_circle_outline') {
          row[a] = row_data.split("\t")[index];
        }
      });
      this.data.splice(this.data.length - 1, 0, row);
    });
  }
}
