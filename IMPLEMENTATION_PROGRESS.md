# Implementation Progress

## Current Focus
- Make the FluxGateAI Codex preset match the current production model catalog.
- Route release and fallback actions to valid GitHub release pages.

## Latest Update - 2026-07-27 22:55
- Scope: Repair the v3.18.0 production preset and download links and prepare a patch release.
- Completed: Confirmed the repository is clean at `v3.18.0`; updater metadata and signature assets are valid.
- Validation: Pending focused tests and release build.
- Problems / Blockers: The preset uses unavailable model `gpt-5-codex`; FluxGateAI `/downloads` routes render a branded 404.
- Not Done: Source changes, build, release, and final updater verification.
- Next: Update constants, add regression coverage, and run frontend/Rust validation.

## Latest Update - 2026-07-28 00:13
- Scope: Complete and validate the v3.18.1 FluxGateAI production preset and release-link patch.
- Completed: Updated all application version sources, changed the FluxGateAI Codex preset to `gpt-5.4-mini`, routed release notes and updater fallback actions to GitHub Releases, added a focused preset regression test, and added release notes.
- Validation: TypeScript typecheck and frontend format check passed; all 80 Vitest files and 523 tests passed; the production renderer build passed; all Rust release tests passed, including the 2,181-test main suite and integration binaries; the NSIS installer built successfully with file/product version 3.18.1 and SHA-256 `EA7A6D27DB78CDD4B60FC5F78E5B959604D8E82BF5619FB60A7ADCB845945C5B`.
- Problems / Blockers: Repository-wide `cargo fmt --check` reports pre-existing formatting drift in unrelated Rust files; the changed Rust file passes standalone rustfmt.
- Not Done: Commit, push, tag, signed updater ZIP, `latest.json`, GitHub Release, and published updater verification.
- Next: Finish the companion APK patch, then publish and verify all repositories together.

## Open Issues
- [x] Default Codex model is `gpt-5.4-mini`.
- [x] Release notes and fallback updater links resolve to GitHub Releases.
- [x] Local v3.18.1 NSIS installer builds successfully.
- [ ] Publish and verify the signed updater ZIP, installer, and `latest.json`.
