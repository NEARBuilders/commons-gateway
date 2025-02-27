import { setupKeypom } from "@keypom/selector";
import { setupWalletSelector } from "@near-wallet-selector/core";
import { setupHereWallet } from "@near-wallet-selector/here-wallet";
import { setupMeteorWallet } from "@near-wallet-selector/meteor-wallet";
import { setupModal } from "@near-wallet-selector/modal-ui";
import { setupMintbaseWallet } from "@near-wallet-selector/mintbase-wallet";
import "@near-wallet-selector/modal-ui/styles.css";
import { setupMyNearWallet } from "@near-wallet-selector/my-near-wallet";
import { setupNeth } from "@near-wallet-selector/neth";
import { setupNightly } from "@near-wallet-selector/nightly";
import { setupSender } from "@near-wallet-selector/sender";
import "App.scss";
import Big from "big.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { isValidAttribute } from "dompurify";
import "error-polyfill";
import {
  EthersProviderContext,
  useAccount,
  useInitNear,
  useNear,
  utils,
} from "near-social-vm";
import React, { useCallback, useEffect, useState } from "react";
import "react-bootstrap-typeahead/css/Typeahead.bs5.css";
import "react-bootstrap-typeahead/css/Typeahead.css";
import {
  Link,
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import { BosLoaderBanner } from "./components/BosLoaderBanner";
import { useEthersProviderContext } from "./data/web3";
import { NetworkId, Widgets } from "./data/widgets";
import { useBosLoaderInitializer } from "./hooks/useBosLoaderInitializer";
import EditorPage from "./pages/EditorPage";
import Flags from "./pages/Flags";
import JoinPage from "./pages/JoinPage";
import Viewer from "./pages/Viewer";
import { KEYPOM_OPTIONS } from "./utils/keypom-options";
import { TrialAccountGenerator } from "./components/TrialAccountGenerator";
import { Analytics } from "@vercel/analytics/react";
import LogoutPage from "./pages/LogoutPage";

export const refreshAllowanceObj = {};
const documentationHref = "https://docs.near.org/bos/overview";
const currentGateway = "nearbuilders";

function App() {
  const [connected, setConnected] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  const [signedAccountId, setSignedAccountId] = useState(null);
  const [availableStorage, setAvailableStorage] = useState(null);
  const [walletModal, setWalletModal] = useState(null);
  const [widgetSrc, setWidgetSrc] = useState(null);

  const ethersProviderContext = useEthersProviderContext();

  useBosLoaderInitializer();

  const { initNear } = useInitNear();
  const near = useNear();
  const account = useAccount();

  const accountId = account.accountId;

  useEffect(() => {
    initNear &&
      initNear({
        networkId: NetworkId,
        selector: setupWalletSelector({
          network: NetworkId,
          modules: [
            setupMyNearWallet(),
            setupSender(),
            setupHereWallet(),
            setupMintbaseWallet({
              networkId: NetworkId,
              walletUrl: "https://wallet.mintbase.xyz",
              callbackUrl: "https://www.nearbuilders.org",
              deprecated: false,
            }),
            setupMeteorWallet(),
            setupNeth({
              gas: "300000000000000",
              bundle: false,
            }),
            setupNightly(),
            setupKeypom({
              networkId: NetworkId,
              signInContractId:
                NetworkId == "testnet" ? "v1.social08.testnet" : "social.near",
              trialAccountSpecs: {
                url:
                  NetworkId == "testnet"
                    ? "https://test.nearbuilders.org/#trial-url/ACCOUNT_ID/SECRET_KEY"
                    : "https://www.nearbuilders.org/join?from=trial/#trial-url/ACCOUNT_ID/SECRET_KEY",
                modalOptions: KEYPOM_OPTIONS(NetworkId),
              },
              instantSignInSpecs: {
                url:
                  NetworkId == "testnet"
                    ? "https://test.nearbuilders.org/#instant-url/ACCOUNT_ID/SECRET_KEY/MODULE_ID"
                    : "https://nearbuilders.org/#instant-url/ACCOUNT_ID/SECRET_KEY/MODULE_ID",
              },
            }),
          ],
        }),
        customElements: {
          Link: (props) => {
            if (!props.to && props.href) {
              props.to = props.href;
              delete props.href;
            }
            if (props.to) {
              props.to =
                typeof props.to === "string" &&
                isValidAttribute("a", "href", props.to)
                  ? props.to
                  : "about:blank";
            }
            return <Link {...props} />;
          },
          TrialAccountGenerator: (props) => {
            return <TrialAccountGenerator {...props} />;
          },
        },
        config: {
          defaultFinality: undefined,
        },
      });
  }, [initNear]);

  useEffect(() => {
    if (!near) {
      return;
    }
    near.selector.then((selector) => {
      setWalletModal(
        setupModal(selector, { contractId: near.config.contractName }),
      );
    });
  }, [near]);

  const requestSignIn = useCallback(
    (e) => {
      e && e.preventDefault();
      walletModal.show();
      return false;
    },
    [walletModal],
  );

  const logOut = useCallback(async () => {
    if (!near) {
      return;
    }
    const wallet = await (await near.selector).wallet();
    wallet.signOut();
    near.accountId = null;
    setSignedIn(false);
    setSignedAccountId(null);
  }, [near]);

  const refreshAllowance = useCallback(async () => {
    alert(
      "You're out of access key allowance. Need sign in again to refresh it",
    );
    await logOut();
    requestSignIn();
  }, [logOut, requestSignIn]);
  refreshAllowanceObj.refreshAllowance = refreshAllowance;

  useEffect(() => {
    if (!near) {
      return;
    }
    setSignedIn(!!accountId);
    setSignedAccountId(accountId);
    setConnected(true);
  }, [near, accountId]);

  useEffect(() => {
    setAvailableStorage(
      account.storageBalance
        ? Big(account.storageBalance.available).div(utils.StorageCostPerByte)
        : Big(0),
    );
  }, [account]);

  const passProps = {
    refreshAllowance: () => refreshAllowance(),
    setWidgetSrc,
    signedAccountId,
    signedIn,
    connected,
    availableStorage,
    widgetSrc,
    logOut,
    requestSignIn,
    widgets: Widgets,
    documentationHref,
    currentGateway,
  };

  const index = Widgets.default;

  return (
    <div className="App" style={{ height: "100vh" }}>
      <EthersProviderContext.Provider value={ethersProviderContext}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route path={"/flags"}>
              <BosLoaderBanner />
              <Flags {...passProps} />
            </Route>
            <Route path={"/join"}>
              <BosLoaderBanner />
              <JoinPage {...passProps} />
            </Route>
            <Route path={"/logout"}>
              <BosLoaderBanner />
              <LogoutPage {...passProps} />
            </Route>
            <Route path={"/library"}>
              <Redirect to={`${index}?page=library`} />
            </Route>
            <Route path={"/propose"}>
              <Redirect to={`${index}?page=proposal&tab=proposals`} />
            </Route>
            <Route path={"/projects"}>
              <Redirect to={`${index}?page=projects`} />
            </Route>
            <Route path={"/feed"}>
              <Redirect to={`${index}?page=feed`} />
            </Route>
            <Route path={"/resources"}>
              <Redirect to={`${index}?page=resources`} />
            </Route>
            <Route path={"/edit/:widgetSrc*"}>
              <EditorPage {...passProps} />
            </Route>
            <Route path={"/:path*"}>
              <BosLoaderBanner />
              <Viewer {...passProps} />
            </Route>
          </Switch>
        </Router>
      </EthersProviderContext.Provider>
      <Analytics />
    </div>
  );
}

export default App;
