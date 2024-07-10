import React from 'react';
import { useParams } from 'react-router-dom';

function TransactionShow() {
  const { id, transactionId } = useParams();

  return <div>Transactionlist</div>;
}

export default TransactionShow;
