import React from "react";
import { useParams } from "react-router-dom";

export default function ContractDetails() {
  const { contractId } = useParams<string>();
  return <div>ContractDetails</div>;
}
