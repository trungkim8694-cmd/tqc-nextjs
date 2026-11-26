interface Env {
  NEXT_PUBLIC_GOOGLE_SCRIPT_URL?: string;
  NEXT_PUBLIC_SITE_URL?: string;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  // Handle CORS preflight
  if (request.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (request.method === "GET") {
    return new Response(
      JSON.stringify({ status: "ok", endpoint: "/api/contact" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }

  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const body = await request.json();
    const scriptUrl =
      env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL ||
      "https://script.google.com/macros/s/AKfycbx4uGLe-M9I9u8bjjTivCqn_vVVJ9oa4rtAlHKBaCm4DBVutRmd5DpdvqfqCSiNNfEO/exec";

    const googleRes = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Cloudflare-Pages-Edge-Worker/1.0",
      },
      redirect: "follow",
      body: JSON.stringify(body),
    });

    const resText = await googleRes.text();
    let resJson: Record<string, unknown> | null = null;
    try {
      resJson = JSON.parse(resText) as Record<string, unknown>;
    } catch {
      resJson = null;
    }

    if (googleRes.ok && resJson && resJson.result === "success") {
      return new Response(
        JSON.stringify({ message: "Success", details: resJson }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        message: "Forwarded to Google Script",
        upstream_status: googleRes.status,
        upstream_response: resJson || resText.slice(0, 300),
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return new Response(
      JSON.stringify({ message: "Internal Error", error: errorMsg }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
};
