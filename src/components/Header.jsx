import { ConnectButton } from "@web3uikit/web3";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const path = router.pathname;
  console.log(path);
  return (
    <header className="py-6 px-4 ">
      <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
        <h1 className="flex justify-center text-4xl font-bold">
          <span className="text-emerald-400">De</span>Split
        </h1>
        <ConnectButton className="flex justify-center" />
      </div>
      <nav className="flex justify-center gap-6">
        <Link
          className={`hover:text-emerald-200 ${
            path === "/" ? "text-emerald-200" : ""
          }`}
          href="/"
        >
          Expenses
        </Link>
        <Link
          className={`hover:text-emerald-200 ${
            path === "/SplitPay" ? "text-emerald-200" : ""
          }`}
          href="/SplitPay"
        >
          Pay & Split
        </Link>
      </nav>
    </header>
  );
}
