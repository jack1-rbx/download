import { useEffect } from "react";

export default function DownloadPage() {
  useEffect(() => {
    window.location.href = "https://github.com/jack1-rbx/download/raw/refs/heads/main/api/RO-SCH%20STARTER%20PACK.rbxm";
  }, []);

  return (
    <div>
      <h1>Redirecting to your download...</h1>
    </div>
  );
}
