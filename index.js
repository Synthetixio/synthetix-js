
function HavvenJs(provider, signer, fromAddressIndex, networkId) {
  this.provider = provider || providers.getDefaultProvider();
  this.signer = signer;
  this.networkId = networkId || 1;
  const addressList = addresses[this.networkId];

  this.contract = new Contract(
    addressList["Havven"],
    abi,
    this.signer || this.provider
  );
}