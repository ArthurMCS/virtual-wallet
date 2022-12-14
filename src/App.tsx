import Dashboard from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { useState } from "react";
import { TransactionsProvider } from "./hooks/useTransactions";

Modal.setAppElement('#root')

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false)

  const handleOpenModal = () => setIsNewTransactionModal(true)

  const handleCloseModal = () => setIsNewTransactionModal(false)

  return (
    <TransactionsProvider>
      <Header  onOpenNewTransactionModal={handleOpenModal}/>
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}
