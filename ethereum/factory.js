import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  // "0xd36F76eFB3Ca9F896B2d9eC8e80de810B63c67C6"
  "0xE44a5E477828ff97ac66117521068BC6bfe70607"
);

export default instance;
