import os from "os";
import { NextResponse } from "next/server";

export async function GET() {
  const uptime = os.uptime(); // segundos
  const totalMem = os.totalmem();
  const freeMem = os.freemem();

  const data = {
    uptimeSeconds: uptime,
    loadAverage: os.loadavg(), // [1min, 5min, 15min]
    memory: {
      total: totalMem,
      free: freeMem,
      used: totalMem - freeMem,
      usedPercent: ((totalMem - freeMem) / totalMem) * 100,
    },
    timestamp: Date.now(),
  };

  return NextResponse.json(data);
}
