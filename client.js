//	@ghasemkiani/polygonscan-api/client

import {cutil} from "@ghasemkiani/base";
import {Client as ClientEth} from "@ghasemkiani/etherscan-api";

class Client extends ClientEth {
	//
}
cutil.extend(Client.prototype, {
	endpoint: "https://api.polygonscan.com/api",
	apiKeyTokenEnvName: "POLYGONSCAN_APIKEY_TOKEN",
	cacheName: "polygonscan",
});

export {Client};

// https://api.polygonscan.com/apis
