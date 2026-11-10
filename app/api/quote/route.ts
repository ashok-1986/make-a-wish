export interface QuotePayload {
  name: string;
  email: string;
  phone: string;
  company?: string;
  purpose?: string;
  quantity?: string;
  location?: string;
  notes?: string;
  items?: Array<{ key: string; name: string; kind?: string; detail?: string }>;
  inquiryType?: string;
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuotePayload;

    // Validate required fields
    if (!body.name?.trim() || !body.email?.trim() || !body.phone?.trim()) {
      return Response.json(
        { error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    const leadRecord = {
      id: `LEAD-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
      receivedAt: new Date().toISOString(),
      name: body.name.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      company: body.company?.trim() || "Not specified",
      purpose: body.purpose?.trim() || "Corporate Gifting",
      quantity: body.quantity?.trim() || "25–49",
      location: body.location?.trim() || "Navi Mumbai / Greater Mumbai",
      notes: body.notes?.trim() || "",
      itemsCount: Array.isArray(body.items) ? body.items.length : 0,
      shortlistedItems: Array.isArray(body.items)
        ? body.items.map((i) => `${i.name}${i.detail ? ` (${i.detail})` : ""}`)
        : [],
      inquiryType: body.inquiryType || "RFQ Quote",
    };

    // Log structured lead record
    console.log("[SALES DESK LEAD CAPTURED]:", JSON.stringify(leadRecord));

    // Optional webhook integration (Formspree, Zapier, Make, Slack, or internal CRM)
    const webhookUrl = process.env.QUOTE_WEBHOOK_URL || process.env.FORMSPREE_ENDPOINT;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(leadRecord),
          signal: AbortSignal.timeout(4000),
        });
      } catch (err) {
        console.error("[WEBHOOK DISPATCH WARNING]: Failed to forward lead to webhook:", err);
        // Continue and return success so visitor flow is never blocked
      }
    }

    return Response.json(
      {
        success: true,
        message: "Quote request successfully recorded on corporate desk.",
        leadId: leadRecord.id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[QUOTE API ERROR]:", error);
    return Response.json(
      { error: "Invalid request payload." },
      { status: 400 }
    );
  }
}
