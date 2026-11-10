import test from "node:test";
import assert from "node:assert/strict";
import { POST } from "../app/api/quote/route.ts";

test("POST /api/quote rejects payloads missing required fields", async () => {
  const req1 = new Request("http://localhost:3000/api/quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Priya" }),
  });
  const res1 = await POST(req1);
  assert.equal(res1.status, 400);
  const data1 = await res1.json();
  assert.ok(data1.error.includes("Name, email, and phone number are required"));

  const req2 = new Request("http://localhost:3000/api/quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: "Priya", email: "priya@acme.com" }),
  });
  const res2 = await POST(req2);
  assert.equal(res2.status, 400);
});

test("POST /api/quote captures valid lead and returns leadId", async () => {
  const req = new Request("http://localhost:3000/api/quote", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: "Rohit Verma",
      company: "Godrej Properties",
      email: "rohit.v@godrej.com",
      phone: "+91 98765 00000",
      purpose: "Employee Joining Kits & Onboarding",
      quantity: "100–249 (Bundle Perk)",
      location: "Vikhroli, Mumbai",
      notes: "Please include embossed company logo on diary and box.",
      items: [
        { key: "kit-1", name: "Premium Executive Joining Kit", detail: "SKU: H989" },
      ],
      inquiryType: "RFQ (WHATSAPP)",
    }),
  });

  const res = await POST(req);
  assert.equal(res.status, 200);
  const data = await res.json();
  assert.equal(data.success, true);
  assert.ok(data.leadId.startsWith("LEAD-"));
});
