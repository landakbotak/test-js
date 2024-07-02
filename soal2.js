let productBin = {
    "requestId": null,
    "data": [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ],
    "message": "success"
  };
  
  // Init
  let totalQty = 0;
  let productCodeFlo = "FBR00040101"; //FloBrand-DressBSPink

  let keys = Object.keys(productBin.data);
  let values = Object.values(productBin.data);

  for (i=0; i<values.length; i++){
    if (values[i].productCode === productCodeFlo){
        // console.log(values[i].quantity);
        totalQty += values[i].quantity;
    }
  }
  console.log("Total quantity dari Product Code FBR00040101: "+totalQty);