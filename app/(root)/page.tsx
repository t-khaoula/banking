import HeaderBox from "@/components/HeaderBox";
import RightSideBar from "@/components/RightSideBar";
import TotalBalanceBox from "@/components/TotalBalanceBox";

function Home() {
  const loggedIn = {
    firstName: "Khaoula",
    lastName: "Tagorti",
    email: "ktagorti@gmail.com",
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT Transactions
      </div>
      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 150.6 }]}
      />
    </section>
  );
}

export default Home;
