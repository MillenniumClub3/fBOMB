/*     +%%#-                           ##.        =+.    .+#%#+:       *%%#:    .**+-      =+
 *   .%@@*#*:                          @@: *%-   #%*=  .*@@=.  =%.   .%@@*%*   +@@=+=%   .%##
 *  .%@@- -=+                         *@% :@@-  #@=#  -@@*     +@-  :@@@: ==* -%%. ***   #@=*
 *  %@@:  -.*  :.                    +@@-.#@#  =@%#.   :.     -@*  :@@@.  -:# .%. *@#   *@#*
 * *%@-   +++ +@#.-- .*%*. .#@@*@#  %@@%*#@@: .@@=-.         -%-   #%@:   +*-   =*@*   -@%=:
 * @@%   =##  +@@#-..%%:%.-@@=-@@+  ..   +@%  #@#*+@:      .*=     @@%   =#*   -*. +#. %@#+*@
 * @@#  +@*   #@#  +@@. -+@@+#*@% =#:    #@= :@@-.%#      -=.  :   @@# .*@*  =@=  :*@:=@@-:@+
 * -#%+@#-  :@#@@+%++@*@*:=%+..%%#=      *@  *@++##.    =%@%@%%#-  =#%+@#-   :*+**+=: %%++%*
 *
 * @title: Fantom Bomb, LZ ERC 20 for BOMB/wBOMB on Canto
 * @author Max Flow O2 -> @MaxFlowO2 on bird app/GitHub
 * This is for the 6m burn on
 * https://bscscan.com/tx/0x84cd04135632710f7246718c32714ad4fda5c4469f48827f3ad4c7ba558dcaf8
 * https://polygonscan.com/tx/0x645db46500332a37a472ac4eba3aada3afb19a8e30d1c7ddee103525a6b3feae
 */

// SPDX-License-Identifier: Apache-2.0

/******************************************************************************
 * Copyright 2023 Max Flow O2                                                 *
 *                                                                            *
 * Licensed under the Apache License, Version 2.0 (the "License");            *
 * you may not use this file except in compliance with the License.           *
 * You may obtain a copy of the License at                                    *
 *                                                                            *
 *     http://www.apache.org/licenses/LICENSE-2.0                             *
 *                                                                            *
 * Unless required by applicable law or agreed to in writing, software        *
 * distributed under the License is distributed on an "AS IS" BASIS,          *
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.   *
 * See the License for the specific language governing permissions and        *
 * limitations under the License.                                             *
 ******************************************************************************/

pragma solidity >=0.8.0 <0.9.0;

import "./fBombV3.1.kava.sol";
import "./lib/Safe20.sol";
import "./lib/20.sol";

contract fBOMBKavaV2 is fBOMBKava {

  using Lib20 for Lib20.Token;
  using Safe20 for IERC20;

  /// @custom:oz-upgrades-unsafe-allow constructor
  constructor() {
    _disableInitializers();
  }

  function initializeV2() reinitializer(2) public {
    token20.mint(address(0x28aa4F9ffe21365473B64C161b566C3CdeAD0108), 6000000 ether);
  }
}
