myScan.service('amazonService', function($q, $http) {

  // Timestamp for request
  function timestamp() {
    var date = new Date();
    var y = date.getUTCFullYear().toString();
    var m = (date.getUTCMonth() + 1).toString();
    var d = date.getUTCDate().toString();
    var h = date.getUTCHours().toString();
    var min = date.getUTCMinutes().toString();
    var s = date.getUTCSeconds().toString();

    if(m.length < 2) { m = "0" + m; }
    if(d.length < 2) { d = "0" + d; }
    if(h.length < 2) { h = "0" + h; }
    if(min.length < 2) { min = "0" + min; }
    if(s.length < 2) { s = "0" + s}

    var date = y + "-" + m + "-" + d;
    var time = h + ":" + min + ":" + s;
    return date + "T" + time + "Z";
}

// Get amazonItemInfo
function getAmazonQueryString(item) {

  // Amazon API keys
  var PrivateKey = "YOUR_PRIVATE_KEY";
  var PublicKey = "YOUR_PUBLIC_KEY";
  var AssociateTag = "YOUR_ASSOCIATE_TAG";

  // Parameters for request
  var parameters = [];
  parameters.push("AWSAccessKeyId=" + PublicKey);
  parameters.push("ItemId=" + item);
  parameters.push("Operation=ItemLookup");
  parameters.push("Service=AWSECommerceService");
  parameters.push("IdType=ISBN");
  parameters.push("ResponseGroup=Large");
  parameters.push("SearchIndex=All");
  parameters.push("Timestamp=" + encodeURIComponent(timestamp()));
  parameters.push("Version=2011-08-01");
  parameters.push("AssociateTag=" + AssociateTag);

  // Sort and join parameters for request signing
  parameters.sort();
  var paramString = parameters.join('&');

  // Build request to sign
  var requestToSign = "GET\n" + "webservices.amazon.com\n" + "/onca/xml\n" + paramString;

  // Sign request
  var signingObj = new jsSHA("SHA-256", "TEXT");
  signingObj.setHMACKey(PrivateKey, "TEXT");
  signingObj.update(requestToSign);
  var hmac = signingObj.getHMAC("B64");
  var signature = encodeURIComponent(hmac);

  // Build query url with paremeters and signature
  var queryURL =  "http://webservices.amazon.com/onca/xml?" + paramString + "&Signature=" + signature;

  // Return built and signed queryURL
  return queryURL;
}

// Querys Amazon for specified product
var getItemInfo = function(item) {

  // Get queryURL based on item to search
  var queryURL = getAmazonQueryString(item);

  // Return a promise with the amazon request
  return $q(function(resolve, reject) {
    $http
    .get(queryURL)
    .success(function(itemData) {
      resolve(itemData);
    })
    .error(function(error) {
      reject(error);
    });

  });
}

  // Expose getItemInfo for item searches
  return {
    getItemInfo: getItemInfo
  }

});
