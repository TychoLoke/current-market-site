import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Current Market";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(123,74,226,0.4), rgba(11,10,18,0.9)), radial-gradient(circle at 80% 30%, rgba(239,77,91,0.45), rgba(11,10,18,0.95))",
          backgroundColor: "#0B0A12",
          color: "#F6F6F9",
          fontFamily: "Inter"
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: "0.32em", textTransform: "uppercase", color: "rgba(246,246,249,0.65)" }}>
          Current Market — The Brand Intelligence Lab
        </div>
        <div
          style={{
            fontSize: 92,
            lineHeight: 1.02,
            fontWeight: 700,
            display: "flex",
            flexDirection: "column",
            gap: "24px"
          }}
        >
          <span>Where creativity meets intelligence.</span>
          <span
            style={{
              display: "inline-flex",
              background: "linear-gradient(90deg, #7B4AE2, #EF4D5B)",
              WebkitBackgroundClip: "text",
              color: "transparent"
            }}
          >
            {title}
          </span>
        </div>
        <div style={{ fontSize: 28, opacity: 0.7 }}>Deurne, NL · currentmarketlab.com</div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
