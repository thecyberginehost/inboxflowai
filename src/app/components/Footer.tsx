import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>© {new Date().getFullYear()} InboxFlowAI. All rights reserved.</p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/faq" className="hover:text-white">FAQ</Link>
          <Link href="/privacy" className="hover:text-white">Privacy Notice</Link>
          <Link href="/terms" className="hover:text-white">Terms of Service</Link>
          <Link href="/refund" className="hover:text-white">Refund Policy</Link>
        </div>
      </div>
    </footer>
  );
}
