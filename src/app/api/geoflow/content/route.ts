import { NextRequest, NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

const SECRET = process.env.GEOFLOW_API_SECRET || "change-me-to-a-random-string";

interface GeoFlowPayload {
  title: string;
  slug: string;
  markdown: string;
  meta_description: string;
  keywords: string[];
  author: string;
  published_at: string;
  featured_image?: string;
  category?: string;
}

async function verifySig(payload: string, header: string | null): Promise<boolean> {
  if (!header) return false;
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload));
  const hex = Array.from(new Uint8Array(signature))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  return header === `sha256=${hex}`;
}

function buildFrontmatter(data: GeoFlowPayload): string {
  const safe = (s: string) => s.replace(/"/g, '\\"');
  const kw = data.keywords.map((k) => `  - "${safe(k)}"`).join("\n");
  return `---
title: "${safe(data.title)}"
slug: "${safe(data.slug)}"
description: "${safe(data.meta_description)}"
author: "${safe(data.author)}"
publishedAt: "${data.published_at}"
category: "${safe(data.category || "uncategorized")}"
featuredImage: "${safe(data.featured_image || "")}"
keywords:
${kw}
---

${data.markdown}
`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    const sigHeader = req.headers.get("x-hub-signature");

    const valid = await verifySig(body, sigHeader);
    if (!valid) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    const data: GeoFlowPayload = JSON.parse(body);

    if (!data.title || !data.slug || !data.markdown) {
      return NextResponse.json(
        { error: "missing required fields: title, slug, markdown" },
        { status: 400 }
      );
    }

    // Save as MDX file in content/articles/
    const contentDir = path.join(process.cwd(), "content", "articles");
    await mkdir(contentDir, { recursive: true });

    const mdxContent = buildFrontmatter(data);
    const filePath = path.join(contentDir, `${data.slug}.mdx`);
    await writeFile(filePath, mdxContent, "utf-8");

    console.log(`[GEOFlow] Article saved: ${data.slug} (${data.title})`);

    return NextResponse.json({
      status: "ok",
      slug: data.slug,
      path: `content/articles/${data.slug}.mdx`,
    });
  } catch (err) {
    console.error("[GEOFlow] Error:", err);
    return NextResponse.json(
      { error: "internal server error", detail: String(err) },
      { status: 500 }
    );
  }
}

// Reject non-POST requests
export async function GET() {
  return NextResponse.json({ status: "GEOFlow endpoint ready", method: "POST" }, { status: 200 });
}
