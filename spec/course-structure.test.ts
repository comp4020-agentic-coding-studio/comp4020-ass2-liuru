import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, it } from "vitest";

interface ApiNode {
  id: string;
  type: string;
  related: string[];
  meta?: Record<string, unknown>;
}

interface CourseApi {
  nodes: ApiNode[];
}

const api = JSON.parse(readFileSync(resolve("dist/api/index.json"), "utf8")) as CourseApi;
const byType = (type: string) => api.nodes.filter((node) => node.type === type);
const weekOf = (node: ApiNode) => node.meta?.week as number;

describe("twelve dated teaching weeks", () => {
  it("has exactly one lecture and one seminar for each of weeks 1-12", () => {
    for (const type of ["lectures", "sessions"]) {
      const weeks = byType(type)
        .map(weekOf)
        .sort((a, b) => a - b);
      expect(weeks, `${type} weeks`).toEqual(Array.from({ length: 12 }, (_, i) => i + 1));
    }
  });

  it("cross-links each week's lecture and seminar", () => {
    const lectures = byType("lectures");
    const sessions = byType("sessions");
    for (let week = 1; week <= 12; week++) {
      const lecture = lectures.find((node) => weekOf(node) === week);
      const session = sessions.find((node) => weekOf(node) === week);
      expect(lecture, `week ${week} lecture`).toBeDefined();
      expect(session, `week ${week} seminar`).toBeDefined();
      expect(lecture!.related, `week ${week} lecture links to its seminar`).toContain(session!.id);
      expect(session!.related, `week ${week} seminar links to its lecture`).toContain(lecture!.id);
    }
  });
});

describe("assessments", () => {
  it("weights sum to exactly 100", () => {
    const total = byType("assessments").reduce(
      (sum, node) => sum + (node.meta?.weight as number),
      0,
    );
    expect(total).toBe(100);
  });
});

describe("the deck requirement", () => {
  it("has at least one lecture carrying a real slide deck that actually built", () => {
    const withSlides = byType("lectures").filter((node) => typeof node.meta?.slides === "string");
    expect(withSlides.length, "lectures with a slides field").toBeGreaterThanOrEqual(1);
    for (const lecture of withSlides) {
      const slidesPath = lecture.meta!.slides as string;
      const builtPath = resolve("dist", slidesPath.replace(/^\//, ""), "index.html");
      expect(existsSync(builtPath), `${slidesPath} built to ${builtPath}`).toBe(true);
    }
  });
});
