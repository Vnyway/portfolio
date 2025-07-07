import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

export default function CopiedToast({ show, message }) {
  return createPortal(
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-6 right-6 text-neutral-300 border-white/10 border-[1px] px-4 py-2 rounded-xl shadow-lg z-[9999]">
          📋 {message}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
