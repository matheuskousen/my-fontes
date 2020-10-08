import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
export default function Page() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/home");
    }, 100);
  }, [router]);

  return (
    <motion.div
      className="welcome"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="logo">
        <img
          src="/assets/android-chrome-192x192.png"
          alt="android-chrome-192x192"
        />
      </div>
      <h1>Welcome to the page</h1>
    </motion.div>
  );
}
