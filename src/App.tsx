import { ChangeEvent, useState } from "react";
import "./App.css";
// import TextComponent from './components/TextComponent'
// import  Item  from './types/Item';
import { transferSolana } from "./backend/solana.ts";

function App() {
  //  const [items] = useState<Item[]>([
  //     {id: 1,
  //     name: "alpha"},
  //     {id: 2,
  //     name: "bravo"},
  //     {id: 3,
  //       name: "charlie"},
  //       {id: 4,
  //         name: "delta"},
  //  ]
  //  );

  const [pubKey, setPubKey] = useState("");
  const [amount, setAmount] = useState(0);
  const [privKey, setPrivKey] = useState("");

  const handlePubKeyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPubKey(e.target.value);
  };
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };
  const handlePrivKeyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPrivKey(e.target.value);
  };
  const handleTransfer = () => {
    transferSolana(pubKey, amount, privKey);
  };
  return (
    <>
    <h1>Simon's Netlify Deploy</h1>
    <h1>Transfer Solana</h1>
      <div>
        <input type="text" value={pubKey} onChange={handlePubKeyChange} placeholder="Public Key" />
      </div>
      <div>
        <input type="text" value={privKey} onChange={handlePrivKeyChange} placeholder="Private Key" />
      </div>
      <div>
        <input type="number" value={amount} onChange={handleAmountChange} placeholder="SOL Amount"/>
      </div>
      <button onClick={handleTransfer}>Transfer</button>
    </>
  );
}

export default App;
