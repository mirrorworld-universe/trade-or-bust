import { Test } from "forge-std/Test.sol";
import { GasReporter } from "@latticexyz/gas-report/src/GasReporter.sol";

contract ExampleTest is Test,GasReporter {
  function testGas() public {
    startGasReport("Describe what is being gas-reported on");
    // do something here
    endGasReport();
  }
}