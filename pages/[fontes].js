import Container from "../components/Container";
import Header from "../components/Header";
import Main from "../components/Main";
import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
export default function fontes() {
  const router = useRouter();
  const { fontes } = router.query;

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Header />
        <Main fontes={fontes} />
      </motion.div>
    </Container>
  );
}
