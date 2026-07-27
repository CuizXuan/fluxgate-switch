import { describe, expect, it } from "vitest";
import { codexProviderPresets } from "@/config/codexProviderPresets";
import {
  extractCodexBaseUrl,
  extractCodexModelName,
  extractCodexWireApi,
} from "@/utils/providerConfigUtils";

describe("FluxGateAI Codex provider preset", () => {
  it("uses the production Responses endpoint and default model", () => {
    const preset = codexProviderPresets.find(
      (candidate) => candidate.name === "FluxGateAI",
    );

    expect(preset).toBeDefined();
    expect(preset?.websiteUrl).toBe("https://api.fluxapi.cloud");
    expect(preset?.apiKeyUrl).toBe("https://api.fluxapi.cloud");
    expect(preset?.auth).toEqual({ OPENAI_API_KEY: "" });
    expect(preset?.endpointCandidates).toEqual([
      "https://api.fluxapi.cloud/v1",
    ]);
    expect(preset?.apiFormat).toBe("openai_responses");
    expect(extractCodexBaseUrl(preset?.config ?? "")).toBe(
      "https://api.fluxapi.cloud/v1",
    );
    expect(extractCodexWireApi(preset?.config ?? "")).toBe("responses");
    expect(extractCodexModelName(preset?.config ?? "")).toBe("gpt-5.4-mini");
  });
});
