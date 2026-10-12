import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const PORT = Number(process.env.PORT || 4179);
const HOST = process.env.HOST || "127.0.0.1";

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".ico": "image/x-icon",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".mp3": "audio/mpeg",
  ".txt": "text/plain; charset=utf-8"
};

function respond(res, status, message) {
  res.writeHead(status, {
    "Content-Type": "text/plain; charset=utf-8",
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": "no-store"
  });
  res.end(message);
}

const server = http.createServer(async (req, res) => {
  if (!["GET", "HEAD"].includes(req.method || "")) {
    res.setHeader("Allow", "GET, HEAD");
    respond(res, 405, "Method not allowed");
    return;
  }

  const url = new URL(req.url || "/", "http://" + HOST + ":" + PORT);
  let pathname;
  try {
    pathname = decodeURIComponent(url.pathname);
  } catch {
    respond(res, 400, "Bad URL encoding");
    return;
  }
  const relativePath = pathname === "/"
    ? "index.html"
    : pathname === "/preview" || pathname === "/preview/"
      ? "preview.html"
      : pathname.replace(/^\/+/, "");
  const filePath = path.resolve(DIST, relativePath);
  if (filePath !== DIST && !filePath.startsWith(DIST + path.sep)) {
    respond(res, 403, "Forbidden");
    return;
  }

  let info;
  try {
    info = await stat(filePath);
    if (!info.isFile()) throw new Error("not a file");
  } catch {
    respond(res, 404, "Not found");
    return;
  }

  const headers = {
    "Content-Type": mimeTypes[path.extname(filePath).toLowerCase()] || "application/octet-stream",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Accept-Ranges": "bytes",
    "Cache-Control": filePath.includes(path.sep + "_next" + path.sep)
      ? "public, max-age=31536000, immutable"
      : "public, max-age=0, must-revalidate"
  };
  const range = req.headers.range;
  let start = 0;
  let end = info.size - 1;
  let status = 200;
  if (range) {
    const match = /^bytes=(\d*)-(\d*)$/.exec(range);
    if (!match) {
      res.writeHead(416, { "Content-Range": "bytes */" + info.size });
      res.end();
      return;
    }
    if (!match[1] && !match[2]) {
      res.writeHead(416, { "Content-Range": "bytes */" + info.size });
      res.end();
      return;
    }

    if (!match[1]) {
      const suffixLength = Number(match[2]);
      if (!Number.isSafeInteger(suffixLength) || suffixLength <= 0) {
        res.writeHead(416, { "Content-Range": "bytes */" + info.size });
        res.end();
        return;
      }
      start = Math.max(0, info.size - suffixLength);
    } else {
      start = Number(match[1]);
      end = match[2] ? Number(match[2]) : info.size - 1;
    }

    if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start < 0 || end < start || start >= info.size) {
      res.writeHead(416, { "Content-Range": "bytes */" + info.size });
      res.end();
      return;
    }
    end = Math.min(end, info.size - 1);
    if (start > end) {
      res.writeHead(416, { "Content-Range": "bytes */" + info.size });
      res.end();
      return;
    }
    status = 206;
    headers["Content-Range"] = "bytes " + start + "-" + end + "/" + info.size;
  }
  headers["Content-Length"] = String(end - start + 1);
  res.writeHead(status, headers);
  if (req.method === "HEAD") {
    res.end();
    return;
  }
  const stream = createReadStream(filePath, { start, end });
  stream.on("error", () => {
    if (!res.headersSent) respond(res, 500, "Read error");
    else res.destroy();
  });
  stream.pipe(res);
});

server.listen(PORT, HOST, () => {
  console.log("Countdown homepage available at http://" + HOST + ":" + PORT + "/");
  console.log("Birthday experience available at http://" + HOST + ":" + PORT + "/preview");
  console.log("Press Ctrl+C to stop the local server.");
});
