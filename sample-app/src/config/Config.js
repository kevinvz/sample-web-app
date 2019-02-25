import React from 'react';
import * as Blockv from "@blockv/sdk";

const Config = () => {}

  const bv = new Blockv({
    appID : "e0809328-ff19-4197-b0d1-13a721599b1f",
    server : "https://api.blockv.io",
    websocketAddress : "wss://newws.blockv.io",
    
    // optional field for usage with multiple instances of the BLOCKv SDK on the
    // same client-side page:
    // prefix: "my-sdk-instance"
  });

};

export default Config


