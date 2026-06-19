import { useState } from "react";

export default function Dashboard() {
  const [users] = useState(1420);

  return (
    <div>
      <h1>Total Users: {users}</h1>
    </div>
  );
}
