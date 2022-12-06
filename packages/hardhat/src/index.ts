import { extendConfig } from "hardhat/config"
import { HardhatConfig, HardhatUserConfig } from "hardhat/types"

import "hardhat-dependency-compiler"
import "@nomiclabs/hardhat-ethers"
import "./tasks/deploy-semaphore"
import "./tasks/deploy-verifier"

extendConfig((config: HardhatConfig, userConfig: Readonly<HardhatUserConfig>) => {
    config.dependencyCompiler.paths = [
        "@mina-semaphore/contracts/verifiers/Verifier16.sol",
        "@mina-semaphore/contracts/verifiers/Verifier17.sol",
        "@mina-semaphore/contracts/verifiers/Verifier18.sol",
        "@mina-semaphore/contracts/verifiers/Verifier19.sol",
        "@mina-semaphore/contracts/verifiers/Verifier20.sol",
        "@mina-semaphore/contracts/verifiers/Verifier21.sol",
        "@mina-semaphore/contracts/verifiers/Verifier22.sol",
        "@mina-semaphore/contracts/verifiers/Verifier23.sol",
        "@mina-semaphore/contracts/verifiers/Verifier24.sol",
        "@mina-semaphore/contracts/verifiers/Verifier25.sol",
        "@mina-semaphore/contracts/verifiers/Verifier26.sol",
        "@mina-semaphore/contracts/verifiers/Verifier27.sol",
        "@mina-semaphore/contracts/verifiers/Verifier28.sol",
        "@mina-semaphore/contracts/verifiers/Verifier29.sol",
        "@mina-semaphore/contracts/verifiers/Verifier30.sol",
        "@mina-semaphore/contracts/verifiers/Verifier31.sol",
        "@mina-semaphore/contracts/verifiers/Verifier32.sol",
        "@mina-semaphore/contracts/Semaphore.sol"
    ]

    if (userConfig.dependencyCompiler?.paths) {
        config.dependencyCompiler.paths = [...config.dependencyCompiler.paths, ...userConfig.dependencyCompiler.paths]
    }
})
