import { Network } from "./types"

/**
 * Returns the subgraph URL related to the network passed as a parameter.
 * @param network Semaphore supported network.
 * @returns Subgraph URL.
 */
export default function getURL(network: Network): string {
    switch (network) {
        case "goerli":
            return `https://api.thegraph.com/subgraphs/name/mina-semaphore/goerli-5259d3`
        case "arbitrum":
            return `https://api.thegraph.com/subgraphs/name/mina-semaphore/arbitrum-86337c`
        default:
            throw new TypeError(`Network '${network}' is not supported`)
    }
}
