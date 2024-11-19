import React from "react";
import { auth } from "@/auth";

import LogoutButton from "@/components/auth/LogoutButton";

const DashboardPage = async () => {
  const session = await auth();

  if (!session) {
    return <div>Not authenticated</div>;
  }
  return (
    <div>
      DashboardPage <pre>{JSON.stringify(session, null, 2)}</pre>
      <LogoutButton />
    </div>
  );
};

export default DashboardPage;
